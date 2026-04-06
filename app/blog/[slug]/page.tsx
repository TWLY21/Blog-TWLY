import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { getAllPostsMeta, getPostBySlug, getTableOfContents, toHeadingId, type BlogPostMeta } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt
  };
}

function nodeText(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return String(child);
      if (React.isValidElement(child)) {
        return nodeText((child.props as { children?: React.ReactNode }).children);
      }
      return "";
    })
    .join("");
}

function getRelatedPosts(current: { slug: string; tags: string[] }, allPosts: BlogPostMeta[], limit = 3): BlogPostMeta[] {
  return allPosts
    .filter((post) => post.slug !== current.slug)
    .map((post) => {
      const overlap = post.tags.filter((tag) => current.tags.includes(tag)).length;
      return { post, score: overlap };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.updatedAt || b.post.date).getTime() - new Date(a.post.updatedAt || a.post.date).getTime();
    })
    .slice(0, limit)
    .map((entry) => entry.post);
}

export default async function BlogDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const tocItems = getTableOfContents(post.content);
  const hasUpdated = post.updatedAt && post.updatedAt !== post.date;
  const allPosts = getAllPostsMeta();
  const relatedPosts = getRelatedPosts(post, allPosts);
  const cover = post.cover || "/profile-ig-2.jpg";

  return (
    <section className="space-y-6">
      <article className="overflow-hidden border border-border bg-surface">
        <div className="relative aspect-[16/7] w-full border-b border-border">
          <Image src={cover} alt={post.title} fill sizes="100vw" className="object-cover" priority />
        </div>

        <div className="p-6 md:p-10">
          <header className="mb-8 space-y-3 border-b border-border pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
              <span className="border border-border bg-bg px-2.5 py-1 font-semibold text-accent">{post.category}</span>
              <span>{post.date}</span>
              {hasUpdated ? <span>Updated {post.updatedAt}</span> : null}
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-text md:text-5xl">{post.title}</h1>
            <p className="max-w-3xl text-muted">{post.excerpt}</p>
            <p className="text-sm text-muted">By {post.author}</p>
          </header>

          <div className="grid gap-8 xl:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="border border-border bg-bg p-4 xl:sticky xl:top-24 xl:h-fit">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-muted">On this page</p>
              {tocItems.length ? (
                <nav className="mt-3 space-y-1">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className={`toc-link level-${item.level}`}>
                      {item.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="mt-2 text-sm text-muted">No headings available.</p>
              )}
            </aside>

            <div className="prose-article space-y-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h2: ({ children }) => {
                    const text = nodeText(children);
                    return (
                      <h2 id={toHeadingId(text)} className="scroll-mt-24 text-2xl font-semibold">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const text = nodeText(children);
                    return (
                      <h3 id={toHeadingId(text)} className="scroll-mt-24 text-xl font-semibold">
                        {children}
                      </h3>
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length ? (
        <section className="border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-3xl font-semibold text-text">Related Posts</h2>
          <p className="mt-1 text-muted">Continue exploring related notes and implementation stories.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group overflow-hidden border border-border bg-bg transition hover:border-accent">
                <div className="relative aspect-[16/10] w-full border-b border-border">
                  <Image
                    src={related.cover || "/profile-ig-2.jpg"}
                    alt={related.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">{related.category}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-text group-hover:text-accent">{related.title}</h3>
                  <p className="mt-2 text-sm text-muted">{related.excerpt}</p>
                  <p className="mt-3 text-xs text-muted">
                    By {related.author} | {related.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
