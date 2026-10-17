import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
type Payload = Record<string, unknown>;

const cleanText = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const formSubmitEndpoint = `https://formsubmit.co/ajax/${siteConfig.email}`;
const urlIsValid = (value: string) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return NextResponse.json({ message: "This submission is too large." }, { status: 413 });

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please send a valid form submission." }, { status: 400 });
  }

  const kind = body.kind === "consultation" ? "consultation" : body.kind === "contact" ? "contact" : "";
  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 160).toLowerCase();
  const businessName = cleanText(body.businessName, 120);
  const phone = cleanText(body.phone, 40);
  const websiteUrl = cleanText(body.websiteUrl, 300);
  const message = cleanText(body.message, 3000);
  const desiredOutcome = cleanText(body.desiredOutcome, 2000);
  const submissionId = cleanText(body.submissionId, 80);
  const honeypot = cleanText(body.companyWebsite, 200);
  const startedAt = Number(body.startedAt);

  if (honeypot) return NextResponse.json({ message: "Submission rejected." }, { status: 400 });
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 800) return NextResponse.json({ message: "Please take a moment to review your details and submit again." }, { status: 429 });
  if (!kind || name.length < 2 || !emailIsValid(email) || businessName.length < 2 || message.length < 20 || !submissionId) return NextResponse.json({ message: "Please complete your name, email, business name, and message with valid information." }, { status: 400 });
  if (kind === "consultation" && desiredOutcome.length < 20) return NextResponse.json({ message: "Please describe the business outcome you would like to achieve." }, { status: 400 });
  if (!urlIsValid(websiteUrl)) return NextResponse.json({ message: "Please enter a complete website URL beginning with http:// or https://." }, { status: 400 });

  try {
    const sourceOrigin = new URL(request.url).origin;
    const sourceUrl = new URL(kind === "consultation" ? "/consultation" : "/contact", sourceOrigin).toString();
    const deliveryResponse = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: sourceOrigin,
        Referer: sourceUrl,
      },
      body: JSON.stringify({
        _subject: kind === "consultation" ? `New free consultation request from ${name}` : `New website enquiry from ${name}`,
        _template: "table",
        _replyto: email,
        _url: sourceUrl,
        "Form type": kind === "consultation" ? "Free consultation request" : "Contact enquiry",
        Name: name,
        Email: email,
        "Business name": businessName,
        "Phone or WhatsApp": phone || "Not provided",
        "Business website": websiteUrl || "Not provided",
        "Main message or challenge": message,
        "Desired business outcome": desiredOutcome || "Not provided",
      }),
    });
    const deliveryResult = await deliveryResponse.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
    const deliveryAccepted = deliveryResponse.ok && deliveryResult?.success !== false && deliveryResult?.success !== "false";
    if (!deliveryAccepted) throw new Error(deliveryResult?.message || `FormSubmit returned ${deliveryResponse.status}.`);

    return NextResponse.json({
      message: kind === "consultation"
        ? "Your consultation request was sent successfully. This does not confirm an appointment; I will follow up to arrange scheduling."
        : "Your enquiry was sent successfully. Thank you—I’ll use these details to respond.",
    }, { status: 201 });
  } catch (error) {
    console.error("FormSubmit delivery failed", error);
    const detail = error instanceof Error ? error.message.toLowerCase() : "";
    if (detail.includes("needs activation")) {
      return NextResponse.json({ message: `Email delivery is awaiting one-time activation by the site owner. Please email me directly at ${siteConfig.email} until activation is complete.` }, { status: 503 });
    }
    return NextResponse.json({ message: `Your message could not be delivered right now. Please try again or email me directly at ${siteConfig.email}.` }, { status: 502 });
  }
}
