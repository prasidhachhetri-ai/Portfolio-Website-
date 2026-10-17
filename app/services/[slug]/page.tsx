import type { Metadata } from "next";
import { Link } from "@/components/site-link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/data/site";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.summary } : { title: "Service not found" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related.map(getService).filter(Boolean);

  return (
    <main id="main-content">
      <section className="section">
        <div className="site-shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.shortTitle}</span></nav>
          <p className="eyebrow mt-10">{service.title}</p>
          <h1 className="page-title mt-4 max-w-5xl">{service.headline}</h1>
          <p className="lead mt-7 max-w-3xl">{service.summary}</p>
          <Link className="button-primary mt-8" href="/consultation">Book a FREE CONSULTATION Call</Link>
        </div>
      </section>

      <section className="section-sm soft-section">
        <div className="site-shell grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">The challenge</p><h2 className="section-title mt-3">What this service addresses</h2><p className="lead mt-5">{service.problem}</p></div>
          <div className="rounded-2xl bg-white p-7"><h2 className="text-xl font-extrabold">Who it is suitable for</h2><ul className="mt-5 grid gap-4">{service.suitable.map((item) => <li className="flex gap-3" key={item}><Check className="mt-1 shrink-0 text-primary" size={19} /><span>{item}</span></li>)}</ul></div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="eyebrow">Potential scope</p><h2 className="section-title mt-3">What the work may include</h2><p className="mt-5 text-muted-foreground">The final scope is shaped after understanding your business, existing setup, and priorities. No fixed package is assumed.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{service.includes.map((item) => <div className="rounded-xl border border-border bg-white p-5 font-bold" key={item}>{item}</div>)}</div>
          </div>
          <div className="mt-12 border-t border-border pt-10">
            <p className="eyebrow">Concrete deliverables</p>
            <h2 className="mt-3 font-serif text-3xl">What you can expect to receive</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{service.deliverables.map((item) => <div className="rounded-xl border border-[#c7d5e9] bg-[#edf3ff] p-5 font-bold" key={item}>{item}</div>)}</div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="site-shell">
          <p className="eyebrow !text-[#8bb7ff]">How the engagement works</p>
          <h2 className="section-title mt-3 max-w-3xl">A practical path from diagnosis to improvement.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">{service.process.map((step, index) => <div className="rounded-xl border border-[#234b7e] bg-[#102f55] p-5" key={step.title}><span className="text-sm font-extrabold text-[#86b3ff]">0{index + 1}</span><h3 className="mt-5 text-lg font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#c9d8ee]">{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell grid gap-12 lg:grid-cols-2">
          <div><p className="eyebrow">Expected benefits</p><h2 className="section-title mt-3">What this work can support</h2><ul className="mt-7 grid gap-4">{service.benefits.map((item) => <li className="flex gap-3 text-lg" key={item}><Check className="mt-1 shrink-0 text-primary" /><span>{item}</span></li>)}</ul><p className="mt-6 text-sm leading-6 text-muted-foreground">These are potential benefits, not guaranteed results. Outcomes depend on your market, offer, resources, execution, and wider business context.</p></div>
          <div><p className="eyebrow">Questions</p><div className="faq mt-3">{service.faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div>
        </div>
      </section>

      <section className="section-sm soft-section">
        <div className="site-shell"><h2 className="font-serif text-3xl">Related services</h2><div className="mt-6 grid gap-3 md:grid-cols-3">{related.map((item) => item && <Link className="card flex items-center justify-between font-extrabold" href={`/services/${item.slug}`} key={item.slug}>{item.shortTitle}<ArrowRight size={18} /></Link>)}</div></div>
      </section>
      <CtaBand heading={`Let’s see whether ${service.shortTitle.toLowerCase()} is the right next step.`} />
    </main>
  );
}
