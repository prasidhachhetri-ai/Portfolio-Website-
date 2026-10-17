import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/components/site-link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = { title: "About Me", description: "Learn how Prasidha Chhetri uses practical AI-powered digital marketing to help small and medium businesses grow." };

export default function About() {
  return <main id="main-content">
    <section className="section"><div className="site-shell grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow">About me</p><h1 className="page-title mt-4">Marketing should make business growth clearer—not more complicated.</h1><p className="lead mt-7">I’m Prasidha Chhetri, an AI marketing expert and digital marketing consultant. I help small and medium business owners turn disconnected marketing activities into a clear system for attracting prospects, following up with leads, and creating more sales opportunities.</p></div><div className="portrait-frame has-photo about-photo-frame"><Image className="portrait-image" src="/prasidha-about-portrait.png" alt="Prasidha Chhetri in professional business attire" fill priority sizes="(max-width: 1024px) calc(100vw - 2rem), 40vw" /></div></div></section>
    <section className="section soft-section"><div className="site-shell grid gap-12 lg:grid-cols-2"><div><h2 className="section-title">Your business problem comes before the tool.</h2></div><div className="rich-text !text-base"><p>Many owners are doing plenty of marketing but still face unclear messages, weak enquiries, slow follow-up, or content that takes too much time. I first look at where the customer journey is breaking down.</p><p>Then I combine sound marketing strategy with practical AI tools. AI can speed up research, drafting, follow-up, and analysis. Clear thinking and human review make sure the work stays useful, accurate, and suited to your customers.</p></div></div></section>
    <section className="section"><div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Working principles</p><h2 className="section-title mt-3">Clear priorities and consistent improvement.</h2></div><div className="grid gap-4 sm:grid-cols-2">{[
      { t: "Clarity", d: "You should understand what needs to be done, why it matters, and what comes next." },
      { t: "Transparency", d: "I explain the reasoning, limits, and trade-offs behind each recommendation." },
      { t: "Practical action", d: "The plan must fit your goals, customers, team, tools, and available resources." },
      { t: "Continuous improvement", d: "We use useful feedback and business signals to improve the work over time." },
    ].map((item) => <div className="card" key={item.t}><h3 className="text-lg font-extrabold">{item.t}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.d}</p></div>)}</div></div><div className="mt-12 rounded-2xl border border-border bg-white p-7 md:p-10"><h2 className="font-serif text-3xl">Who I help</h2><p className="lead mt-4 max-w-4xl">I work with owners and small teams who need a clearer marketing direction, better-quality enquiries, stronger follow-up, or a more useful online presence. The right solution may be a focused strategy, campaign, page, message, content plan, or lead-nurturing system.</p><Link className="text-link mt-5" href="/services">Explore the services</Link></div></div></section>
    <CtaBand heading="Find the gaps in your marketing and get a clear plan forward." />
  </main>;
}
