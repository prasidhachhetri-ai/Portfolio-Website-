import type { Metadata } from "next";
import Image from "next/image";
import { Lightbulb, Route, SearchCheck, Sparkles } from "lucide-react";
import { Link } from "@/components/site-link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Prasidha Chhetri and learn how he helps small and medium businesses make sense of digital marketing, use AI wisely, and build a practical path to growth.",
};

export default function About() {
  return <main id="main-content">
    <section className="section about-hero-section"><div className="site-shell about-hero-grid grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div className="about-hero-copy"><h1 className="page-label-heading">ABOUT ME</h1><h2 className="page-title about-hero-title mt-4">I help business owners make sense of digital marketing—and turn it into practical growth.</h2><p className="lead mt-6">I’m Prasidha Chhetri, an AI marketing expert and digital marketing consultant. I work with small and medium businesses that are putting time and money into marketing but are not seeing enough of the right enquiries or sales. My role is to find what is getting in the way, simplify the plan, and help each part of the marketing work together.</p></div><div className="portrait-frame has-photo about-photo-frame"><Image className="portrait-image" src="/prasidha-about-portrait.png" alt="Prasidha Chhetri in professional business attire" fill priority sizes="(max-width: 1024px) calc(100vw - 2rem), 40vw" /></div></div></section>
    <section className="section about-story-section"><div className="site-shell about-story-grid"><div className="about-story-heading"><span className="about-story-heading__icon" aria-hidden="true"><Lightbulb /></span><p className="eyebrow mt-5">How I think</p><h2 className="about-story-title mt-3">I don’t start with AI. I start with what is getting in your way.</h2></div><div className="about-story-copy"><div className="about-story-point about-story-point-1"><span className="about-story-point__icon" aria-hidden="true"><SearchCheck /></span><p>Many business owners are already doing a lot—posting content, running ads, updating a website, and following up with leads. The frustration comes when all that effort feels scattered and it is hard to tell what is actually helping the business grow.</p></div><div className="about-story-point about-story-point-2"><span className="about-story-point__icon" aria-hidden="true"><Route /></span><p>I look at the whole journey, from the first time someone discovers your business to the moment they decide to contact or buy from you. That usually reveals where the message is unclear, where good prospects are being lost, or where the process is taking more time than it should.</p></div><div className="about-story-point about-story-point-3"><span className="about-story-point__icon" aria-hidden="true"><Sparkles /></span><p>AI is useful when it solves one of those real problems. I use it to make research, content, follow-up, and analysis faster—but never as a replacement for clear thinking, honest communication, or human judgment.</p></div></div></div></section>
    <section className="section about-values-section"><div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">How I work</p><h2 className="section-title mt-3">Simple, honest, and built around your business.</h2></div><div className="grid gap-4 sm:grid-cols-2">{[
      { t: "Straight answers", d: "I explain what I recommend in plain language, including what it can do and what it cannot." },
      { t: "Your business comes first", d: "I recommend what fits your goals, customers, budget, and capacity—not whatever tool happens to be popular." },
      { t: "Useful work", d: "Every strategy, page, campaign, or piece of content should have a clear job and a reason to exist." },
      { t: "Learn and improve", d: "Marketing rarely becomes perfect in one attempt. We pay attention to real responses and improve from there." },
    ].map((item, index) => <div className={`card about-value-card about-value-card-${index + 1}`} key={item.t}><h3 className="text-lg font-extrabold">{item.t}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.d}</p></div>)}</div></div>
      <div className="about-fit-panel mt-12">
        <div className="about-fit-copy">
          <p className="eyebrow">A good working fit</p>
          <h2 className="about-fit-title mt-3">Who I’m best placed to help</h2>
          <p className="about-fit-lead mt-4">I work best with owner-led businesses and small teams that know their marketing could work better, but need a clear view of what to fix first. You may be attracting the wrong enquiries, losing leads after they contact you, struggling to explain your offer, or simply spending too much time trying to keep up.</p>
          <p className="about-fit-lead mt-4">We find the real issue, choose a sensible priority, and build the right solution around it—without adding more noise to your week.</p>
          <div className="about-fit-signals mt-6" aria-label="How we work together">
            <span><SearchCheck size={18} aria-hidden="true" /> Find the real gap</span>
            <span><Route size={18} aria-hidden="true" /> Choose the next step</span>
            <span><Sparkles size={18} aria-hidden="true" /> Build what helps</span>
          </div>
          <Link className="text-link mt-6" href="/services">Explore the services</Link>
        </div>
        <div className="about-fit-visual">
          <Image src="/images/about-fit-prasidha.png" alt="Prasidha Chhetri in professional attire outside a modern workplace" fill sizes="(max-width: 1024px) calc(100vw - 3rem), 46vw" />
        </div>
      </div>
    </div></section>
    <CtaBand heading="Let’s find what is slowing your marketing down—and decide what is worth fixing first." />
  </main>;
}
