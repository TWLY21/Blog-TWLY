import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Tag from "@/components/Tag";

export const metadata = {
  title: "Projects | Ives Tan Kian Hang"
};

export default function ProjectsPage() {
  const featured = projects[0];
  const secondary = projects.slice(1, 4);
  const archive = projects.slice(4);

  return (
    <section className="space-y-6">
      <header className="paper-grid border border-border bg-surface p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Project Index</p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-text md:text-6xl">Selected Projects</h1>
        <p className="mt-3 max-w-5xl text-muted">
          A structured collection of full-stack systems, frontend products, and practical implementation work with
          emphasis on maintainability and product delivery.
        </p>
      </header>

      {featured ? (
        <section className="border border-border bg-surface p-6 md:p-8">
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.8fr]">
            <article>
              <p className="text-xs uppercase tracking-[0.14em] text-accent">Lead Project</p>
              <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-text md:text-5xl">{featured.title}</h2>
              <p className="mt-4 text-muted">{featured.description}</p>
              <p className="mt-3 text-sm text-muted">
                <span className="text-text">Role:</span> {featured.role}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tech.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
              {featured.github ? (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                >
                  View repository
                  <span aria-hidden>-&gt;</span>
                </a>
              ) : null}
            </article>

            <aside className="border border-border bg-bg p-5">
              <p className="font-display text-lg font-semibold text-text">Snapshot</p>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <dt className="text-muted">Category</dt>
                  <dd className="font-semibold text-text">{featured.category}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <dt className="text-muted">Year</dt>
                  <dd className="font-semibold text-text">{featured.year}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <dt className="text-muted">Stack Size</dt>
                  <dd className="font-semibold text-text">{featured.tech.length} tools</dd>
                </div>
              </dl>
              <Link href="/blog" className="mt-4 inline-block border-b border-transparent text-sm font-semibold text-text transition hover:border-accent hover:text-accent">
                Read implementation notes
              </Link>
            </aside>
          </div>
        </section>
      ) : null}

      {secondary.length ? (
        <section className="space-y-4">
          <h3 className="font-display text-3xl font-semibold text-text">Secondary Projects</h3>
          <div className="grid gap-4">
            {secondary.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {archive.length ? (
        <section className="border border-border bg-surface p-6 md:p-8">
          <h3 className="font-display text-3xl font-semibold text-text">Project Archive</h3>
          <ul className="mt-4 divide-y divide-border">
            {archive.map((project) => (
              <li key={project.id} className="py-4">
                <div className="grid gap-3 md:grid-cols-[240px_1fr_auto] md:items-start">
                  <p className="text-xs uppercase tracking-[0.13em] text-muted">
                    {project.category} | {project.year}
                  </p>
                  <div>
                    <h4 className="font-display text-2xl font-semibold text-text">{project.title}</h4>
                    <p className="mt-1 text-muted">{project.description}</p>
                  </div>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-text transition hover:text-accent">
                      Open
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </section>
  );
}
