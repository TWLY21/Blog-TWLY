import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import Tag from "@/components/Tag";

type FeaturedPostProps = {
  post: BlogPostMeta;
  readingTime: string;
};

export default function FeaturedPost({ post, readingTime }: FeaturedPostProps) {
  return (
    <section className="border border-border bg-surface">
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        <Link href={`/blog/${post.slug}`} className="group block border-b border-border lg:border-b-0 lg:border-r">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src={post.cover || "/profile-ig-2.jpg"}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.14em] text-accent">Featured Article</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-text md:text-5xl">
            <Link href={`/blog/${post.slug}`} className="border-b border-transparent transition hover:border-accent">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 text-muted">{post.excerpt}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">
            {post.category} | {post.date} | {readingTime}
          </p>
          <p className="mt-2 text-sm text-muted">By {post.author}</p>
          <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text transition hover:text-accent">
            Read article
            <span aria-hidden>-&gt;</span>
          </Link>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <Tag key={tag} label={`#${tag}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
