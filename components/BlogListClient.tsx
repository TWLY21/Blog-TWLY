"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";
import Tag from "@/components/Tag";

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 90))} min read`;
}

function getRelated(post: BlogPostMeta, posts: BlogPostMeta[]): BlogPostMeta[] {
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score: candidate.tags.filter((tag) => post.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.post);
}

export default function BlogListClient({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const tags = useMemo(() => {
    const unique = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => unique.add(tag)));
    return ["all", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = activeTag === "all" || post.tags.includes(activeTag);
      const matchesQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.author.toLowerCase().includes(needle) ||
        post.tags.some((tag) => tag.toLowerCase().includes(needle));
      return matchesTag && matchesQuery;
    });
  }, [activeTag, posts, query]);

  const featured = filtered[0];
  const secondary = filtered.slice(1, 4);
  const latestFeed = filtered.slice(4);
  const trending = posts.slice(0, 5);
  const related = featured ? getRelated(featured, posts) : [];

  return (
    <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <section className="border border-border bg-surface p-4 md:p-5">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <label className="text-sm text-muted">
              Search posts
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, author, excerpt, or tag"
                className="mt-2 w-full border border-border bg-bg px-3 py-2 text-text outline-none transition placeholder:text-muted focus:border-accent"
              />
            </label>
            <p className="text-sm text-muted">
              {filtered.length} result{filtered.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag === "all" ? "All" : `#${tag}`} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
            ))}
          </div>
        </section>

        {featured ? <FeaturedPost post={featured} readingTime={readingTime(featured.excerpt)} /> : null}

        {secondary.length ? (
          <section className="space-y-4">
            <h3 className="font-display text-3xl font-semibold text-text">Secondary Highlights</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {secondary.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ) : null}

        {latestFeed.length ? (
          <section className="border border-border bg-surface p-5 md:p-6">
            <h3 className="font-display border-b border-border pb-3 text-3xl font-semibold text-text">Latest Articles</h3>
            <ul className="divide-y divide-border">
              {latestFeed.map((post) => (
                <li key={post.slug} className="py-4">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="text-xs uppercase tracking-[0.11em] text-muted">
                      {post.category} | {post.date} | {readingTime(post.excerpt)}
                    </p>
                    <h4 className="font-display mt-1 text-2xl font-semibold text-text transition group-hover:text-accent">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-muted">{post.excerpt}</p>
                    <p className="mt-2 text-sm text-muted">By {post.author}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {related.length ? (
          <section className="border border-border bg-surface p-5 md:p-6">
            <h3 className="font-display text-3xl font-semibold text-text">Related Posts</h3>
            <p className="mt-1 text-muted">Readers who started here also continued with these articles.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-border bg-bg p-4 transition hover:border-accent">
                  <p className="text-xs uppercase tracking-[0.11em] text-muted">{post.category}</p>
                  <h4 className="font-display mt-2 text-xl font-semibold text-text transition group-hover:text-accent">{post.title}</h4>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {!filtered.length ? (
          <div className="border border-border bg-surface p-8 text-center text-muted">
            No posts found for your current search/filter.
          </div>
        ) : null}
      </div>

      <aside className="space-y-4">
        <section className="border border-border bg-surface p-5 2xl:sticky 2xl:top-24">
          <p className="font-display text-lg font-semibold text-text">Trending</p>
          <ul className="mt-3 space-y-3">
            {trending.map((post, index) => (
              <li key={post.slug} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted">Top {index + 1}</p>
                  <p className="font-display mt-1 text-xl font-semibold text-text transition group-hover:text-accent">{post.title}</p>
                  <p className="mt-1 text-xs text-muted">{post.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-border bg-surface p-5">
          <p className="font-display text-lg font-semibold text-text">Categories</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags
              .filter((tag) => tag !== "all")
              .slice(0, 10)
              .map((tag) => (
                <Tag key={tag} label={`#${tag}`} onClick={() => setActiveTag(tag)} />
              ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
