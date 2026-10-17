import Image from "next/image";
import { Link } from "@/components/site-link";
import { services, siteConfig } from "@/data/site";

export function SiteFooter() {
  return <footer className="border-t border-[#244a78] bg-[#061a33] text-[#f4f7ff]">
    <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.2fr_.7fr_1.1fr]">
      <div>
        <Link href="/" aria-label="Prasidha Chhetri, home"><Image className="footer-logo" src="/brand-logo.png" width={860} height={290} alt="Prasidha Chhetri — Digital Marketing Consultant" /></Link>
        <p className="mt-5 max-w-sm text-sm leading-7 text-[#b9c9e2]">Practical AI-powered digital marketing that helps small and medium businesses attract, follow up with, and convert more of the right prospects.</p>
        {siteConfig.email && <a className="mt-4 inline-flex text-sm font-bold text-[#d7e4f8] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
      </div>
      <div>
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-widest">Explore</h2>
        <div className="grid gap-2 text-sm text-[#cbd8ed]"><Link href="/about">About me</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div>
      </div>
      <div>
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-widest">Services</h2>
        <div className="grid gap-2 text-sm text-[#cbd8ed] sm:grid-cols-2">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}</div>
      </div>
    </div>
    <div className="site-shell flex flex-col gap-2 border-t border-[#244a78] py-5 text-xs text-[#9fb3cf] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span><span>Clear strategy. Practical execution. Responsible AI.</span></div>
  </footer>;
}
