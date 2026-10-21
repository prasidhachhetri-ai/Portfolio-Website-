import type { Metadata } from "next";
import { services } from "@/data/site";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = { title: "Services", description: "Explore practical AI-powered digital marketing services that connect strategy, lead generation, content, websites, and follow-up." };

export default function Services() {
  return <main id="main-content">
    <section className="services-list-section soft-section" aria-labelledby="services-heading">
      <div className="site-shell">
          <h1 id="services-heading" className="page-label-heading mb-7">SERVICES I OFFER</h1>
        <div className="card-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
      </div>
    </section>
    <section className="section services-guide-section"><div className="site-shell grid gap-5 md:grid-cols-3">
      <div className="services-guide-card services-guide-card-1"><span className="eyebrow">Not sure where to start?</span><h2 className="mt-3 text-2xl font-extrabold">Create a clear strategy</h2><p className="mt-3 text-muted-foreground">Choose the priorities, channels, messages, and AI tools that fit your business.</p></div>
      <div className="services-guide-card services-guide-card-2"><span className="eyebrow">Getting leads but few customers?</span><h2 className="mt-3 text-2xl font-extrabold">Fix the customer journey</h2><p className="mt-3 text-muted-foreground">Connect your offer, ads, landing pages, forms, and follow-up around one clear next step.</p></div>
      <div className="services-guide-card services-guide-card-3"><span className="eyebrow">Marketing takes too much time?</span><h2 className="mt-3 text-2xl font-extrabold">Build a better system</h2><p className="mt-3 text-muted-foreground">Use practical content, email, and AI-assisted workflows to work more consistently.</p></div>
    </div></section>
    <CtaBand heading="Choose the right marketing priorities before spending more time or money." />
  </main>;
}
