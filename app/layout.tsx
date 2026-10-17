import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WebMcpTools } from "@/components/webmcp-tools";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5173"),
  title: {
    default: "Prasidha Chhetri | AI Marketing Expert & Digital Marketing Consultant",
    template: "%s | Prasidha Chhetri",
  },
  description: "Practical AI and digital marketing strategy for small and medium businesses that want better leads, clearer marketing, and stronger follow-up.",
  openGraph: { type: "website", siteName: "Prasidha Chhetri", title: "Prasidha Chhetri | AI Marketing Expert & Digital Marketing Consultant", description: "Practical AI and digital marketing strategy for growing businesses.", images: [{ url: "/brand-logo.png", width: 860, height: 290, alt: "Prasidha Chhetri — Digital Marketing Consultant" }] },
  twitter: { card: "summary_large_image", title: "Prasidha Chhetri", description: "AI Marketing Expert & Digital Marketing Consultant", images: ["/brand-logo.png"] },
  icons: {
    icon: [{ url: "/favicon-exact.png", type: "image/png" }],
    shortcut: "/favicon-exact.png",
    apple: [{ url: "/favicon-exact.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Prasidha Chhetri",jobTitle:"AI Marketing Expert & Digital Marketing Consultant",description:"Practical AI and digital marketing support for small and medium businesses."})}} />
        <WebMcpTools />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
