import Image from "next/image";
import { Link } from "@/components/site-link";
import { ArrowRight, FileText, MessagesSquare, ScanSearch, Sparkles } from "lucide-react";
import { articles, services } from "@/data/site";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";

const problems = [
  "You spend on marketing but cannot see what is working",
  "You get clicks or enquiries, but too few serious buyers",
  "Good leads go cold because follow-up is slow or inconsistent",
  "Your website does not explain clearly why customers should choose you",
  "Creating useful content takes too much time",
  "You are unsure where AI can genuinely help your business",
];

const aiUses = [
  { icon: ScanSearch, title: "Understand your market", text: "Use AI to organize customer questions, research useful topics, and spot patterns faster." },
  { icon: MessagesSquare, title: "Follow up faster", text: "Create helpful response workflows so fewer valuable enquiries are missed." },
  { icon: FileText, title: "Create content efficiently", text: "Turn your knowledge into clear drafts for social posts, emails, and web pages." },
  { icon: Sparkles, title: "Make better decisions", text: "Summarize campaign results and identify what may need attention next." },
];

const process = [
  { title: "Understand", text: "Review your goals, customers, offer, and current marketing." },
  { title: "Find the gaps", text: "See where attention, enquiries, or sales opportunities are being lost." },
  { title: "Build the plan", text: "Choose the right channels, messages, and practical AI opportunities." },
  { title: "Put it to work", text: "Create the agreed campaigns, content, pages, and follow-up systems." },
  { title: "Measure and improve", text: "Use real feedback to make focused improvements over time." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="site-shell hero-grid">
          <div>
            <p className="eyebrow">Prasidha Chhetri · AI Marketing Expert & Digital Marketing Consultant</p>
            <h1 className="display mt-5 max-w-4xl">Turn scattered marketing into a clear path to <span className="text-primary">more customers.</span></h1>
            <p className="lead mt-7 max-w-2xl">If your ads, content, website, and follow-up are not working together, marketing can feel costly and confusing. I help small and medium businesses use AI-powered digital marketing to attract the right people, respond faster, and turn more enquiries into real sales opportunities.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/consultation">Book a FREE CONSULTATION Call</Link>
              <Link className="button-secondary" href="/services">Explore Services <ArrowRight size={18} /></Link>
            </div>
          </div>
          <div className="portrait-frame has-photo hero-photo-frame">
            <Image
              className="portrait-image"
              src="/prasidha-hero-portrait.png"
              alt="Prasidha Chhetri in a black suit"
              fill
              priority
              sizes="(max-width: 900px) calc(100vw - 2rem), 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Common challenges</p>
            <h2 className="section-title mt-3">Is your marketing busy—but not moving the business forward?</h2>
            <p className="lead mt-5">The problem is often not a lack of effort. It is a lack of connection between your message, marketing channels, and sales follow-up.</p>
          </div>
          <div className="problem-list">{problems.map((problem) => <div className="problem font-bold leading-7" key={problem}>{problem}</div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="quote-panel">
            <p className="eyebrow">How I help</p>
            <h2 className="section-title mt-3">One connected plan from first click to customer.</h2>
          </div>
          <div>
            <p className="lead">I connect your strategy, message, content, campaigns, website, and follow-up so every part has a clear job.</p>
            <p className="mt-5 text-[#52637b]">AI helps speed up research, drafting, personalization, and analysis. Human judgment keeps the work accurate, relevant, and true to your business.</p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="site-shell">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><p className="eyebrow">Services</p><h2 className="section-title mt-3">Practical help for the parts of marketing that slow growth.</h2></div>
            <Link className="text-link" href="/services">Compare all services <ArrowRight size={18} /></Link>
          </div>
          <div className="card-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="mb-10 max-w-2xl"><p className="eyebrow">Working process</p><h2 className="section-title mt-3">From marketing confusion to focused action.</h2></div>
          <div className="process">{process.map((step) => <div className="process-item" key={step.title}><h3 className="font-extrabold leading-snug">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow !text-[#8bb7ff]">Practical AI applications</p>
            <h2 className="section-title mt-3">AI should save time and improve decisions—not add complexity.</h2>
            <p className="lead mt-5">I use AI for practical tasks that support your marketing. It does not replace a strong offer, clear strategy, or thoughtful human review.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">{aiUses.map(({ icon: Icon, title, text }) => <div className="rounded-xl border border-[#234b7e] bg-[#102f55] p-5" key={title}><Icon className="text-[#86b3ff]" /><h3 className="mt-5 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#c9d8ee]">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="portrait-frame has-photo home-secondary-photo-frame">
            <Image
              className="portrait-image"
              src="/prasidha-home-secondary.png"
              alt="Prasidha Chhetri walking outdoors in business-casual clothing"
              fill
              sizes="(max-width: 1024px) calc(100vw - 2rem), 40vw"
            />
          </div>
          <div>
            <p className="eyebrow">Why work with me</p>
            <h2 className="section-title mt-3">Clear advice. Practical action. Honest improvement.</h2>
            <p className="lead mt-5">I start with your business goals, not a list of tools. You get clear recommendations, simple explanations, and a plan that fits your customers, resources, and priorities.</p>
            <Link className="text-link mt-6" href="/about">More about my approach <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="site-shell">
          <div className="mb-9"><p className="eyebrow">From the blog</p><h2 className="section-title mt-3">Simple ideas to help you market smarter.</h2></div>
          <div className="card-grid">{articles.map((article) => <article className="card flex min-h-[270px] flex-col" key={article.slug}><span className="tag self-start">{article.category}</span><h3 className="mt-5 text-2xl font-extrabold leading-tight">{article.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{article.description}</p><Link className="text-link mt-4 text-sm" href={`/blog/${article.slug}`}>Read article <ArrowRight size={17} /></Link></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">Frequently asked</p><h2 className="section-title mt-3">Straight answers before we talk.</h2></div>
          <div className="faq">
            {[
              { q: "What kind of businesses do you work with?", a: "I focus on small and medium businesses that need practical help with strategy, advertising, lead generation, content, websites, messaging, email, or lead nurturing." },
              { q: "Do I need to know anything about AI?", a: "No. I explain AI in terms of the task it can help with, its limits, and the review needed—not technical jargon." },
              { q: "What happens in the free consultation?", a: "We review your goals, current marketing, possible gaps, and suitable digital marketing and AI opportunities. You receive a free customized digital marketing plan with practical next steps." },
              { q: "Does the consultation include implementation?", a: "The consultation provides a personalized review and action plan. If you want hands-on implementation, we can define a suitable scope separately." },
              { q: "How do I get started?", a: "Submit a consultation request with a little context about your business. The appointment is confirmed after follow-up; the form itself does not book a time." },
            ].map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
          </div>
        </div>
      </section>

      <CtaBand heading="Get a clear digital marketing plan built around your business." />
    </main>
  );
}
