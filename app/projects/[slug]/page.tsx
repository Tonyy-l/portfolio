import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectGallery } from '@/components/project-gallery';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 630 }]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const contactHref = site.contact.email ? `mailto:${site.contact.email}` : '/#kontakti';

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <Link href="/#portfolio" className="text-sm text-muted transition hover:text-accent">
          ← Назад към портфолиото
        </Link>
        <div className="mt-6 rounded-[2rem] border border-line bg-panel p-6 shadow-card md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text md:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#kontakt" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
              Вземи оферта
            </Link>
            <Link href={project.link} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent/40 hover:text-accent">
              Отвори сайта
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <img src={project.image} alt={project.name} className="h-full min-h-[360px] w-full rounded-[2rem] border border-line object-cover shadow-card" />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid gap-4">
            <InfoCard title="Клиент" text={project.client} />
            <InfoCard title="Цел на проекта" text={project.goal} />
            <InfoCard title="Решение" text={project.solution} />
          </div>
        </Reveal>
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-line bg-panel p-6 shadow-card">
            <SectionHeading eyebrow="Предизвикателства" title="Какво трябваше да бъде решено" />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl border border-line bg-panel p-6 shadow-card">
            <SectionHeading eyebrow="Технологии" title="Използван стек" />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-line bg-white/5 px-3 py-1 text-sm text-muted">
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Резултат</p>
              <p className="mt-3 text-sm leading-6 text-muted">{project.result}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-12">
        <Reveal>
          <div className="rounded-3xl border border-line bg-panel p-6 shadow-card">
            <SectionHeading eyebrow="Галерия" title="Екранни кадри от проекта" />
            <div className="mt-8">
              <ProjectGallery images={project.gallery} />
            </div>
          </div>
        </Reveal>
      </section>

      <section id="kontakt" className="mt-12">
        <Reveal>
          <div className="rounded-[2rem] border border-accent/20 bg-gradient-to-r from-accent/10 to-accent2/10 p-8 shadow-card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Следваща стъпка</p>
                <h2 className="mt-3 text-2xl font-semibold text-text">Искаш подобен резултат за твоя бизнес?</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Пиши ми и ще обсъдим подход, срок и най-подходящата структура за твоя проект.
                </p>
              </div>
              <Link href={contactHref} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                Свържи се с мен
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-line bg-panel p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{title}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}