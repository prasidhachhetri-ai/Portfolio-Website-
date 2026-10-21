"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Link } from "@/components/site-link";
import type { Article } from "@/data/site";

export function BlogExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];

  const filtered = useMemo(
    () =>
      articles.filter(
        (article) =>
          (category === "All" || article.category === category) &&
          `${article.title} ${article.description} ${article.intro} ${article.sections
            .map((section) => `${section.heading} ${section.paragraphs.join(" ")}`)
            .join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [articles, query, category],
  );

  return (
    <div>
      <div className="search-bar mb-8">
        <label className="relative">
          <span className="sr-only">Search articles</span>
          <Search className="absolute left-4 top-[15px] text-muted-foreground" size={20} />
          <input
            className="w-full !pl-12"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles by title or topic…"
            type="search"
          />
        </label>
        <label>
          <span className="sr-only">Filter by category</span>
          <select className="w-full" value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((article) => (
            <article className="card flex min-h-[440px] flex-col overflow-hidden !p-0" key={article.slug}>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-white">
                <Image
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1200px) 50vw, 380px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="tag self-start">{article.category}</span>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{article.description}</p>
                <div className="article-meta mt-5">
                  <span>{article.readingTime}</span>
                </div>
                <Link className="text-link mt-3 text-sm" href={`/blog/${article.slug}`}>
                  Read article <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#aabbb5] bg-white/50 p-10 text-center">
          <h2 className="text-xl font-extrabold">No articles match that search.</h2>
          <p className="mt-2 text-muted-foreground">Try a broader term or choose a different category.</p>
          <button
            className="button-secondary mt-5"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
