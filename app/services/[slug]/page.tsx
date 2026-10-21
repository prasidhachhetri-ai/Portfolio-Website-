import type { Metadata } from "next";
import { Link } from "@/components/site-link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Check,
  FileText,
  LayoutTemplate,
  Mail,
  Megaphone,
  MessageSquare,
  Route,
  Search,
  SearchCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { getService, services } from "@/data/site";
import { CtaBand } from "@/components/cta-band";
import { ServicePageVisual } from "@/components/service-page-visual";

const scopeIcons = [Target, SearchCheck, FileText, Sparkles, Workflow];
const processIcons = [SearchCheck, Route, Sparkles, TrendingUp];
const benefitIcons = [TrendingUp, Users, BarChart3];
const serviceIcons = {
  "ai-marketing-strategy": BrainCircuit,
  "meta-ads": Megaphone,
  "lead-generation": Users,
  "content-strategy": FileText,
  "websites-landing-pages": LayoutTemplate,
  "offer-messaging": MessageSquare,
  "email-marketing": Mail,
  "seo-aeo-geo": Search,
};

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
  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const related = service.related.map(getService).filter(Boolean);
  const ScopeIcon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Target;

  return (
    <main id="main-content" className={`service-detail-page service-card-${serviceIndex + 1}`}>
      <section className="section">
        <div className="site-shell">
          <div className="service-detail-hero">
            <div>
              <p className="eyebrow">{service.title}</p>
              <h1 className="page-title mt-4">{service.headline}</h1>
              <p className="service-detail-intro mt-7">{service.intro}</p>
              <Link className="button-primary mt-8" href="/consultation#consultation-form">Book a FREE CONSULTATION Call</Link>
            </div>
            <ServicePageVisual index={serviceIndex} src={service.image} alt={service.imageAlt} />
          </div>
        </div>
      </section>

      <section className="section-sm service-challenge-section">
        <div className="site-shell service-challenge-grid">
          <article className="service-problem-panel">
            <span className="service-section-icon" aria-hidden="true"><SearchCheck /></span>
            <p className="eyebrow">What gets in the way</p>
            <h2 className="section-title mt-3">Where this service helps</h2>
            <p className="service-problem-copy mt-5">{service.problem}</p>
          </article>
          <aside className="service-fit-panel">
            <div className="service-fit-heading"><span aria-hidden="true"><Users /></span><h2>This could be a good fit if…</h2></div>
            <ul>{service.suitable.map((item) => <li key={item}><span className="service-fit-check" aria-hidden="true"><Check size={17} /></span><span>{item}</span></li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section service-scope-section" id="service-scope">
        <div className="site-shell">
          <div className="service-scope-layout">
            <div className="service-scope-intro">
              <span className="service-section-icon service-section-icon--warm" aria-hidden="true"><ScopeIcon /></span>
              <p className="eyebrow">{service.scopeEyebrow}</p>
              <h2 className="section-title mt-3">{service.scopeHeadline}</h2>
              <p className="mt-5">{service.scopeIntro}</p>
              <span className="service-scope-graphic" aria-hidden="true"><i /><i /><i /><TrendingUp /></span>
            </div>
            <div className="service-scope-grid">{service.includes.map((item, index) => {
              const Icon = scopeIcons[index % scopeIcons.length];
              return <article className="service-scope-card" key={item}><span className="service-scope-icon" aria-hidden="true"><Icon /></span><p>{item}</p></article>;
            })}</div>
          </div>
          <div className="service-deliverables-panel">
            <div className="service-deliverables-heading"><span aria-hidden="true"><BadgeCheck /></span><div><p className="eyebrow">What you’ll leave with</p><h2>Useful work you can put into practice</h2></div></div>
            <div className="service-deliverables-grid">{service.deliverables.map((item) => <div className="service-deliverable" key={item}><span aria-hidden="true"><Check size={17} /></span><p>{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section service-process-section" id="service-process">
        <div className="site-shell">
          <p className="eyebrow">How we’ll work together</p>
          <h2 className="section-title mt-3 max-w-3xl">A straightforward process, with clear decisions at each step.</h2>
          <div className="service-process-grid">{service.process.map((step, index) => {
            const Icon = processIcons[index % processIcons.length];
            return <article className="service-process-card" key={step.title}><div className="service-process-top"><span className="service-process-icon" aria-hidden="true"><Icon /></span></div><h3>{step.title}</h3><p>{step.text}</p></article>;
          })}</div>
        </div>
      </section>

      <section className="section service-outcomes-section">
        <div className="site-shell service-outcomes-grid">
          <div className="service-benefits-panel"><p className="eyebrow">What this can improve</p><h2 className="section-title mt-3">The practical benefits</h2><div className="service-benefits-grid">{service.benefits.map((item, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return <article className="service-benefit-card" key={item}><span aria-hidden="true"><Icon /></span><p>{item}</p></article>;
          })}</div><p className="service-results-note">These are realistic aims, not promises. Results still depend on your market, offer, resources, and how the work is used.</p></div>
          <div className="service-faq-panel"><div className="service-faq-heading"><span aria-hidden="true"><Sparkles /></span><div><p className="eyebrow">Common questions</p><h2>Useful answers before you decide</h2></div></div><div className="faq service-faq-list">{service.faqs.map((item) => <details key={item.q} suppressHydrationWarning><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div>
        </div>
      </section>

      <section className="section-sm service-related-section">
        <div className="site-shell"><p className="eyebrow">Keep exploring</p><h2 className="font-serif text-3xl">Related services</h2><div className="service-related-grid">{related.map((item) => {
          if (!item) return null;
          const Icon = serviceIcons[item.slug as keyof typeof serviceIcons] ?? Sparkles;
          return <Link className="service-related-card" href={`/services/${item.slug}`} key={item.slug}><span className="service-related-index" aria-hidden="true"><Icon /></span><span>{item.shortTitle}</span><ArrowRight className="shrink-0" size={18} /></Link>;
        })}</div></div>
      </section>
      <CtaBand heading="Let’s talk about the right next step for your business." />
    </main>
  );
}
