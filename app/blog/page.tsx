import type { Metadata } from "next";
import { articles } from "@/data/site";
import { BlogExplorer } from "@/components/blog-explorer";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Blog",
  description: "Simple, practical articles about AI-powered marketing, lead generation, content, landing pages, and conversion.",
};

export default function Blog() {
  return <main id="main-content">
    <section className="services-list-section soft-section" aria-labelledby="blogs-heading">
      <div className="site-shell">
        <h1 id="blogs-heading" className="page-label-heading mb-7">BLOGS</h1>
        <BlogExplorer articles={articles} />
      </div>
    </section>
    <CtaBand heading="Want advice shaped around your business instead of general tips?" compact />
  </main>;
}
