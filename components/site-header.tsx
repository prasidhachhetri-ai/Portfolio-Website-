"use client";

import { Link } from "@/components/site-link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/blog",label:"Blog"},{href:"/contact",label:"Contact"}];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <header className="sticky top-0 z-50 border-b border-[#d8e1ef]/90 bg-[#f7f9ff]/94 backdrop-blur-xl">
    <div className="site-shell site-header__inner flex min-h-[96px] items-center justify-between gap-5">
      <Link href="/" className="brand-logo-link" aria-label="Prasidha Chhetri, home"><Image className="brand-logo" src="/brand-logo.png" width={860} height={290} priority alt="Prasidha Chhetri — Digital Marketing Consultant" /></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{nav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`site-nav-link font-bold ${pathname === item.href ? "text-primary" : "text-[#43536b] hover:text-primary"}`}>{item.label}</Link>)}</nav>
      <div className="hidden lg:block"><Link className="button-primary text-[.95rem]" href="/consultation#consultation-form">Book a FREE CONSULTATION Call</Link></div>
      <button className="grid h-12 w-12 place-items-center rounded-full border border-border lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-border bg-[#f7f9ff] px-4 pb-5 pt-3 lg:hidden"><div className="site-shell grid gap-1">{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="min-h-12 rounded-lg px-3 py-3 font-bold hover:bg-secondary">{item.label}</Link>)}<Link className="button-primary mt-2 text-center text-sm" href="/consultation#consultation-form" onClick={() => setOpen(false)}>Book a FREE CONSULTATION Call</Link></div></nav>}
  </header>;
}
