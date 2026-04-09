import Image from "next/image";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";
import { projects } from "@/data/projects";

const highlightPriority = [
  "Node.js",
  "Express",
  "Vue 3",
  "React",
  "Next.js",
  "TypeScript",
  "Playwright",
  "PostgreSQL",
  "React Native",
  "JWT"
];

const highlights = highlightPriority
  .filter((skill) => projects.some((project) => project.tech.includes(skill)))
  .slice(0, 8);

const currentFocus = [
  "Building backend-heavy systems with reliable API boundaries",
  "Improving Playwright stability and test-data strategy",
  "Refining editorial UI quality across portfolio projects"
];

export default function HomePage() {
  const posts = getAllPostsMeta();
  const latestPost = posts[0];
  const lead = posts[0];
  const secondary = posts.slice(1, 3);

  return (
    <section className="space-y-6">
      <header className="paper-grid border border-border bg-surface p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Software Engineer</p>
        <div className="mt-4 grid gap-7 xl:grid-cols-[1.35fr_0.9fr]">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.07] text-text sm:text-5xl md:text-6xl">Ives Tan Kian Hang</h1>
            <p className="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              I build practical full-stack products with strong backend foundations, clean architecture, and reliable
              delivery discipline. This site is structured like an editorial publication to document projects and
              implementation notes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent">
                View Projects
              </Link>
              <Link href="/blog" className="border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent">
                Read Blog
              </Link>
              <a
                href="https://github.com/TWLY21"
                target="_blank"
                rel="noreferrer"
                className="border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="border border-border bg-bg px-3 py-1 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="border border-border bg-bg p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">Current Focus</p>
                <ul className="mt-3 space-y-2">
                  {currentFocus.map((item) => (
                    <li key={item} className="border-b border-border pb-2 text-sm text-muted last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {latestPost ? (
                <Link
                  href={`/blog/${latestPost.slug}`}
                  className="group border border-border bg-bg p-4 transition hover:border-accent"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Latest Article</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.1em] text-accent">{latestPost.category}</p>
                  <h2 className="font-display mt-2 text-2xl font-semibold leading-tight text-text transition group-hover:text-accent">
                    {latestPost.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{latestPost.excerpt}</p>
                  <p className="mt-3 text-xs text-muted">
                    {latestPost.date} | Read now -&gt;
                  </p>
                </Link>
              ) : null}
            </div>
          </div>

          <aside className="border border-border bg-bg p-4">
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image
                src="/profile-ig-2.jpg"
                alt="Portrait of Ives Tan Kian Hang"
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-accent">Core Focus</p>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
              <li>Backend-focused development with practical product thinking</li>
              <li>Automation mindset for testing workflows and delivery</li>
              <li>Scalable architecture patterns for real-world systems</li>
            </ul>
          </aside>
        </div>
      </header>

      {lead ? (
        <section className="border border-border bg-surface p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Featured Article</p>
          <div className="mt-4 grid gap-6 xl:grid-cols-[1.1fr_1fr]">
            <Link href={`/blog/${lead.slug}`} className="group block border border-border bg-bg p-5 transition hover:border-accent">
              <p className="text-xs uppercase tracking-[0.1em] text-accent">{lead.category}</p>
              <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-text md:text-5xl">{lead.title}</h2>
              <p className="mt-3 text-muted">{lead.excerpt}</p>
              <p className="mt-4 text-sm text-muted">
                By {lead.author} | {lead.date}
              </p>
            </Link>
            <div className="grid gap-4">
              {secondary.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-border bg-bg p-5 transition hover:border-accent">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted">{post.category}</p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-text transition group-hover:text-accent">{post.title}</h3>
                  <p className="mt-2 text-muted">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </section>
  );
}
