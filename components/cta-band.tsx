import { Link } from "@/components/site-link";

export function CtaBand({ heading = "Turn your marketing questions into a clear next step.", compact = false }: { heading?: string; compact?: boolean }) {
  return <section className={`cta-section ${compact ? "section-sm" : "section"}`}>
    <div className="site-shell">
      <div className="consultation-banner overflow-hidden rounded-[1.5rem] p-6 sm:p-8 lg:p-12">
        <div className="relative z-10 grid items-end gap-7 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow consultation-banner__eyebrow">Free consultation</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">{heading}</h2>
            <p className="lead consultation-banner__lead mt-5 max-w-2xl">Get a personalized review of your business and a free customized digital marketing plan with practical steps you can start using immediately.</p>
          </div>
          <Link className="button-primary !bg-[#1765f3] !text-white hover:!bg-[#2f7bff]" href="/consultation#consultation-form">Book a FREE CONSULTATION Call</Link>
        </div>
      </div>
    </div>
  </section>;
}
