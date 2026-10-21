import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "@/components/site-link";
import { CtaBand } from "@/components/cta-band";
import { articles, getArticle } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  return article
    ? { title: article.title, description: article.description }
    : { title: "Article not found" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <main id="main-content">
      <article>
        <header className="section pb-10">
          <div className="site-shell max-w-4xl">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span>{article.category}</span>
            </nav>
            <span className="tag mt-10">{article.category}</span>
            <h1 className="page-title mt-5">{article.title}</h1>
            <p className="lead mt-6">{article.description}</p>
            <div className="article-meta mt-6">
              <span>By Prasidha Chhetri</span>
              <span aria-hidden="true">•</span>
              <span>{article.readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Practical guide</span>
            </div>
          </div>
        </header>

        <div className="site-shell max-w-5xl pb-12">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_70px_rgba(28,63,91,.12)]">
            <Image
              className="object-cover object-center"
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) calc(100vw - 2rem), 960px"
            />
          </figure>
        </div>

        <div className="border-y border-border bg-white">
          <div className="site-shell max-w-3xl py-12 rich-text">
            <p className="!mt-0 text-xl leading-9 text-foreground">{article.intro}</p>

            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.image && section.imageAlt && (
                  <figure className="my-8">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-[#eef3f8]">
                      <Image
                        className="object-cover"
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 768px) calc(100vw - 2rem), 720px"
                      />
                    </div>
                    {section.imageCaption && (
                      <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.tip && (
                  <aside className="my-7 rounded-2xl border border-[#b8d2ff] bg-[#f3f7ff] px-6 py-5 text-[1rem] leading-7 text-foreground">
                    <strong>Practical tip:</strong> {section.tip}
                  </aside>
                )}
                {section.link && (
                  <p>
                    {section.link.before}
                    <Link className="article-backlink" href={section.link.href}>
                      {section.link.label}
                    </Link>
                    {section.link.after}
                  </p>
                )}
              </section>
            ))}

            <section className="mt-14 rounded-2xl border border-border bg-[#f8fbff] p-6 md:p-8">
              <h2 className="!mt-0 !text-3xl">{article.closingHeading ?? "A final thought"}</h2>
              {article.closing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {article.closingLink.before}
                <Link className="article-backlink" href={article.closingLink.href}>
                  {article.closingLink.label}
                </Link>
                {article.closingLink.after}
              </p>
            </section>
          </div>
        </div>
      </article>

      <section className="section-sm soft-section">
        <div className="site-shell max-w-4xl">
          <h2 className="font-serif text-3xl">Continue reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link className="card overflow-hidden !p-0" href={`/blog/${item.slug}`} key={item.slug}>
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-white">
                  <Image className="object-cover" src={item.image} alt="" fill sizes="(max-width: 640px) calc(100vw - 2rem), 420px" />
                </div>
                <div className="p-6">
                  <span className="tag">{item.category}</span>
                  <h3 className="mt-4 text-xl font-extrabold leading-snug">{item.title}</h3>
                  <span className="text-link mt-3 text-sm">Read article <ArrowRight size={17} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Apply the ideas to your own marketing." />
    </main>
  );
}
