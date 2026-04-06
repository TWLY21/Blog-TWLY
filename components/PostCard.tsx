import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import Tag from "@/components/Tag";

export default function PostCard({ post }: { post: BlogPostMeta }) {
  const hasUpdated = post.updatedAt && post.updatedAt !== post.date;

  return (
    <article className="group overflow-hidden border border-border bg-surface transition hover:border-accent">
      <Link href={`/blog/${post.slug}`} className="block" aria-label={`Read ${post.title}`}>
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
          <Image
            src={post.cover || "/profile-ig-2.jpg"}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-muted">
          <Tag label={post.category} className="py-0.5" />
          <span>{post.date}</span>
          {hasUpdated ? <span>Updated {post.updatedAt}</span> : null}
        </div>

        <h2 className="font-display mt-3 text-2xl font-semibold leading-tight text-text">
          <Link href={`/blog/${post.slug}`} className="border-b border-transparent transition hover:border-accent hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-muted">{post.excerpt}</p>
        <p className="mt-4 text-sm text-muted">By {post.author}</p>
      </div>
    </article>
  );
}
