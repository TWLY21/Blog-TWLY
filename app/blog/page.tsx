import BlogListClient from "@/components/BlogListClient";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Blog | Ives Tan Kian Hang"
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const showcase = projects.slice(0, 3);

  return (
    <section className="space-y-6">
      <header className="paper-grid border border-border bg-surface p-6 md:p-8">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-muted">Engineering Journal</p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-text md:text-6xl">Blog</h1>
        <p className="mt-3 max-w-5xl text-muted">
          Notes, lessons, and implementation stories from my projects. I focus on what changed, why it mattered,
          and what I would improve in the next iteration.
        </p>
      </header>

      <BlogListClient posts={posts} />

      <section className="border border-border bg-surface p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Project Showcase</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-text">Selected Builds</h2>
          </div>
          <a
            href="https://github.com/TWLY21"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-text transition hover:text-accent"
          >
            View all repositories -&gt;
          </a>
        </div>

        <div className="mt-5 grid gap-4">
          {showcase.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
}
