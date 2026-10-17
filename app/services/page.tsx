import type { Metadata } from "next";
import { services } from "@/data/site";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = { title: "Services", description: "Explore practical AI-powered digital marketing services that connect strategy, lead generation, content, websites, and follow-up." };

export default function Services() {
  return <main id="main-content">
    <section className="section"><div className="site-shell"><p className="eyebrow">Services</p><h1 className="page-title mt-4 max-w-4xl">Build one clear system from first click to customer.</h1><p className="lead mt-7 max-w-3xl">If your marketing feels disconnected, the answer is not always more activity. I help you fix the right gaps across strategy, visibility, lead generation, follow-up, and conversion—using AI where it can make the work faster and more consistent.</p></div></section>
    <section className="section-sm soft-section"><div className="site-shell card-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></section>
    <section className="section"><div className="site-shell grid gap-8 md:grid-cols-3">
      <div><span className="eyebrow">Not sure where to start?</span><h2 className="mt-3 text-2xl font-extrabold">Create a clear strategy</h2><p className="mt-3 text-muted-foreground">Choose the priorities, channels, messages, and AI tools that fit your business.</p></div>
      <div><span className="eyebrow">Getting leads but few customers?</span><h2 className="mt-3 text-2xl font-extrabold">Fix the customer journey</h2><p className="mt-3 text-muted-foreground">Connect your offer, ads, landing pages, forms, and follow-up around one clear next step.</p></div>
      <div><span className="eyebrow">Marketing takes too much time?</span><h2 className="mt-3 text-2xl font-extrabold">Build a better system</h2><p className="mt-3 text-muted-foreground">Use practical content, email, and AI-assisted workflows to work more consistently.</p></div>
    </div></section>
    <CtaBand heading="Choose the right marketing priorities before spending more time or money." />
  </main>;
}
