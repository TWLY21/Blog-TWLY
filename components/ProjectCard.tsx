import Image from "next/image";
import type { ProjectItem } from "@/data/projects";
import Tag from "@/components/Tag";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group grid gap-0 border border-border bg-surface transition hover:border-accent md:grid-cols-[220px_1fr]">
      <div className="relative min-h-[180px] border-b border-border md:min-h-full md:border-b-0 md:border-r">
        <Image src={project.preview} alt={project.title} fill sizes="(max-width: 768px) 100vw, 220px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.1em] text-muted">
          {project.category} | {project.year}
        </p>
        <h3 className="font-display mt-2 text-3xl font-semibold text-text transition group-hover:text-accent">{project.title}</h3>
        <p className="mt-2 text-muted">{project.description}</p>
        <p className="mt-3 text-sm text-muted">
          <span className="text-text">Role:</span> {project.role}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Tag key={item} label={item} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="border-b border-transparent text-text transition hover:border-accent hover:text-accent">
              GitHub -&gt;
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="border-b border-transparent text-text transition hover:border-accent hover:text-accent"
            >
              Live Demo -&gt;
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
