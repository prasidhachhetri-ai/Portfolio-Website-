import Image from "next/image";
import { Link } from "@/components/site-link";
import { BarChart3, Bot, BrainCircuit, Sparkles, TrendingUp, Workflow } from "lucide-react";
import { services, siteConfig } from "@/data/site";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer__ai-growth-path" aria-hidden="true"><span><BrainCircuit /></span><span><Sparkles /></span><span><Workflow /></span><span><BarChart3 /></span><span><TrendingUp /></span></div>
    <div className="site-shell site-footer__grid relative z-10">
      <div className="site-footer__brand sm:col-span-2 lg:col-span-1">
        <Link href="/" aria-label="Prasidha Chhetri, home"><Image className="footer-logo" src="/brand-logo.png" width={860} height={290} alt="Prasidha Chhetri — Digital Marketing Consultant" /></Link>
        <p className="site-footer__description mt-5 max-w-sm">Practical AI-powered digital marketing that helps small and medium businesses attract, follow up with, and convert more of the right prospects.</p>
        {siteConfig.email && <a className="site-footer__email mt-4 inline-flex font-bold underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
        <div className="site-footer__growth" aria-label="AI-powered business growth"><span><Bot aria-hidden="true" />AI insight</span><span><Workflow aria-hidden="true" />Better systems</span><span><TrendingUp aria-hidden="true" />Focused growth</span></div>
      </div>
      <nav className="site-footer__column site-footer__explore" aria-label="Footer navigation">
        <h2>Explore</h2>
        <div className="site-footer__links grid"><Link href="/about">About me</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div>
      </nav>
      <nav className="site-footer__column site-footer__services" aria-label="Footer services">
        <h2>Services</h2>
        <div className="site-footer__links grid sm:grid-cols-2">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}</div>
      </nav>
    </div>
    <div className="site-footer__bottom site-shell relative z-10 flex flex-col gap-2 border-t py-5 text-xs sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span><span>Clear strategy. Practical execution. Responsible AI.</span></div>
  </footer>;
}
