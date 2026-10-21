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
      <section id="consultation-form" className="consultation-intake-section">
        <div className="site-shell consultation-intake-grid">
          <div className="consultation-intro">
            <p className="eyebrow">Free consultation</p>
            <h1 className="consultation-intro__title mt-3">Turn your marketing questions into a practical next step.</h1>
            <p className="consultation-intro__lead mt-5">Get a personalized review of your business and a customized digital marketing action plan you can start implementing immediately.</p>
            <div className="consultation-intro__note mt-6">
              <ClipboardCheck className="shrink-0 text-primary" size={26} aria-hidden="true" />
              <p>Clear recommendations shaped around your goals, customers, and current setup.</p>
            </div>

            <div className="consultation-cover mt-7">
              <p className="eyebrow">What we will cover</p>
              <ul className="mt-4 grid gap-3">{reviewPoints.map((point) => <li className="flex gap-3" key={point}><Check className="mt-0.5 shrink-0 text-primary" size={19} aria-hidden="true" /><span>{point}</span></li>)}</ul>
            </div>
          </div>
          <div className="consultation-form-column">
            {siteConfig.bookingUrl ? <a className="button-primary" href={siteConfig.bookingUrl}>Book a FREE CONSULTATION Call</a> : <InquiryForm kind="consultation" />}
            <div className="consultation-request-note mt-4"><strong>This is a request, not a confirmed booking.</strong> After you submit, I will review the information and follow up to confirm the appointment. Any paid implementation is discussed and agreed separately.</div>
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
