import type { Metadata } from "next";
import { Check, ClipboardCheck } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: "Request a free consultation with Prasidha Chhetri for a personalized business review and practical digital marketing action plan.",
};

const reviewPoints = [
  "Your business goals and current marketing activity",
  "Potential gaps and realistic growth opportunities",
  "Suitable digital marketing and AI opportunities",
  "Practical next steps tailored to your business",
];

export default function Consultation() {
  return (
    <main id="main-content">
      <section className="section">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow">Free consultation</p>
            <h1 className="page-title mt-4 max-w-5xl">Turn your marketing questions into a practical next step.</h1>
            <p className="lead mt-7 max-w-4xl">Get a personalized review of your business and a customized digital marketing action plan you can start implementing immediately.</p>
          </div>
          <div className="rounded-2xl border border-[#bfd0ea] bg-[#e8f0ff] p-7">
            <ClipboardCheck className="text-primary" size={32} />
            <p className="mt-5 font-serif text-2xl leading-tight">Clear recommendations shaped around your goals, customers, and current setup.</p>
          </div>
        </div>
      </section>

      <section className="section-sm soft-section">
        <div className="site-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">What we will cover</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight">A focused review of the whole picture.</h2>
            <ul className="mt-7 grid gap-5">{reviewPoints.map((point) => <li className="flex gap-3" key={point}><Check className="mt-1 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>
            <div className="mt-8 rounded-xl border border-[#c7d5e9] bg-white p-5 text-sm leading-6 text-[#43536b]"><strong>This is a request, not a confirmed booking.</strong> After you submit, I will review the information and follow up to confirm the appointment. Any paid implementation is discussed and agreed separately.</div>
          </div>
          <div>
            {siteConfig.bookingUrl ? <a className="button-primary" href={siteConfig.bookingUrl}>Book a FREE CONSULTATION Call</a> : <InquiryForm kind="consultation" />}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">Prepare for the conversation</p><h2 className="section-title mt-3">A little context makes the review more useful.</h2></div>
          <div className="rich-text !text-base !leading-7"><p>Before requesting the consultation, think about the business outcome you want, the marketing you currently use, and the part of the customer journey that feels most difficult.</p><p>If you have a website, social page, campaign, or follow-up process, share the relevant link or describe it in the form. Please do not include passwords, payment details, or sensitive customer information.</p></div>
        </div>
      </section>
    </main>
  );
}
