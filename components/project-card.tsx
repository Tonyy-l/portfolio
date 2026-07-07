import Link from 'next/link';
import type { Project } from '@/types/content';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-panel shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
      <img src={project.image} alt={project.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-text">{project.name}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-muted">
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={project.link} target="_blank" rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Виж сайта
          </Link>
         
        </div>
      </div>
    </article>
  );
}
