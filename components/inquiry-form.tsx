"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";

type Kind = "contact" | "consultation";

type ValidationResult = {
  message?: string;
  delivery?: {
    endpoint?: string;
    fields?: Record<string, string>;
  };
};

type FormSubmitResult = {
  success?: boolean | string;
  message?: string;
};

export function InquiryForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);
  const submissionId = useRef("");
  const consultation = kind === "consultation";

  useEffect(() => {
    startedAt.current = Date.now();
    submissionId.current = crypto.randomUUID();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState("loading");
    setMessage("");
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, startedAt: startedAt.current, submissionId: submissionId.current }),
      });
      const result = (await response.json().catch(() => ({ message: "The server returned an unexpected response." }))) as ValidationResult;
      if (!response.ok) throw new Error(result.message || "Your message could not be sent.");
      if (!result.delivery?.endpoint || !result.delivery.fields) throw new Error("The email service is not configured correctly.");

      const deliveryResponse = await fetch(result.delivery.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(result.delivery.fields),
      });
      const deliveryResult = (await deliveryResponse.json().catch(() => null)) as FormSubmitResult | null;
      const deliveryAccepted = deliveryResponse.ok && (deliveryResult?.success === true || deliveryResult?.success === "true");
      if (!deliveryAccepted) {
        const detail = deliveryResult?.message?.toLowerCase() || "";
        if (detail.includes("activation")) {
          throw new Error("Email delivery is awaiting one-time activation by the site owner. Please try again shortly or email me directly at prasidhachhetri@gmail.com.");
        }
        throw new Error("Your message could not be delivered right now. Please try again or email me directly at prasidhachhetri@gmail.com.");
      }

      setState("success");
      setMessage(result.message || "Your submission was accepted.");
      form.reset();
      startedAt.current = Date.now();
      submissionId.current = crypto.randomUUID();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_rgba(20,35,33,.07)] md:p-8" aria-describedby={`${kind}-privacy-note`}>
      <div className="form-grid">
        <div className="field"><label htmlFor={`${kind}-name`}>Full name <span aria-hidden="true">*</span></label><input id={`${kind}-name`} name="name" autoComplete="name" required minLength={2} maxLength={100} /></div>
        <div className="field"><label htmlFor={`${kind}-email`}>Email address <span aria-hidden="true">*</span></label><input id={`${kind}-email`} name="email" type="email" autoComplete="email" required maxLength={160} /></div>
        <div className="field"><label htmlFor={`${kind}-business`}>Business name <span aria-hidden="true">*</span></label><input id={`${kind}-business`} name="businessName" autoComplete="organization" required minLength={2} maxLength={120} /></div>
        <div className="field"><label htmlFor={`${kind}-phone`}>Phone or WhatsApp <span className="field-hint">(optional)</span></label><input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>

        {consultation && <div className="field md:col-span-2"><label htmlFor="consultation-website">Business website <span className="field-hint">(optional)</span></label><input id="consultation-website" name="websiteUrl" type="url" inputMode="url" placeholder="https://" maxLength={300} /><span className="field-hint">Include the full address beginning with http:// or https://.</span></div>}

        <div className="field md:col-span-2">
          <label htmlFor={`${kind}-message`}>{consultation ? "Main marketing challenge" : "Message"} <span aria-hidden="true">*</span></label>
          <textarea id={`${kind}-message`} name="message" required minLength={20} maxLength={3000} placeholder={consultation ? "What are you trying to improve, and what is getting in the way?" : "Share a little about your business, question, or project."} />
          <span className="field-hint">Please include at least 20 characters.</span>
        </div>

        {consultation && <div className="field md:col-span-2"><label htmlFor="consultation-outcome">Desired business outcome <span aria-hidden="true">*</span></label><textarea id="consultation-outcome" name="desiredOutcome" required minLength={20} maxLength={2000} placeholder="What would meaningful progress look like for your business?" /><span className="field-hint">Please include at least 20 characters.</span></div>}
      </div>

      <div className="honeypot" aria-hidden="true"><label htmlFor={`${kind}-company-site`}>Leave this field empty</label><input id={`${kind}-company-site`} name="companyWebsite" tabIndex={-1} autoComplete="off" /></div>
      <p id={`${kind}-privacy-note`} className="mt-5 text-xs leading-6 text-muted-foreground">Your details are used only to respond to this enquiry and, when relevant, arrange your consultation. See the <a className="underline" href="/privacy">privacy page</a>.</p>

      {state !== "idle" && message && <div className={`form-status ${state === "success" ? "success" : "error"} mt-4`} role={state === "error" ? "alert" : "status"} aria-live="polite">{message}</div>}
      <button type="submit" className="button-primary mt-6 w-full sm:w-auto" disabled={state === "loading"}>{state === "loading" ? <><LoaderCircle className="animate-spin" size={18} />Sending…</> : consultation ? "Request my free consultation" : "Send enquiry"}</button>
    </form>
  );
}
