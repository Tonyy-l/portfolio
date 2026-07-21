import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { ReviewForm } from '@/components/review-form';
import { getApprovedReviews } from '@/lib/reviews';
import { site } from '@/lib/site';

export default async function HomePage() {
  const reviews = await getApprovedReviews();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <Reveal className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              {site.hero.eyebrow}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
              {site.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {site.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#kontakti"
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                {site.hero.primaryCta}
              </Link>

              <Link
                href="#portfolio"
                className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-text transition hover:border-accent/40 hover:text-accent"
              >
                {site.hero.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-line bg-panel/80 p-5 shadow-card">
              <div className="rounded-[1.5rem] border border-line bg-gradient-to-br from-accent/10 via-panel to-accent2/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  Представяне на студиото
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text">
                  Чисти системи, ясна структура, професионално изпълнение.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted">
                  Професионална дигитална визия, изградена с фокус върху доверие,
                  яснота и реални бизнес резултати.
                </p>
              </div>

              <div className="mt-5 grid gap-3 rounded-[1.5rem] border border-line bg-white/5 p-4 text-sm text-muted">
                <div className="flex items-center justify-between gap-4">
                  <span>Телефон</span>

                  <Link
                    href={`tel:${site.contact.phone}`}
                    className="text-text transition hover:text-accent"
                  >
                    {site.contact.phoneLabel}
                  </Link>
                </div>

                {site.contact.email ? (
                  <div className="flex items-center justify-between gap-4">
                    <span>Имейл</span>

                    <Link
                      href={`mailto:${site.contact.email}`}
                      className="text-text transition hover:text-accent"
                    >
                      {site.contact.email}
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="uslugi"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Решения, създадени за доверие, ясни действия и продажби"
            description="Всяка услуга е подредена така, че бизнесът да изглежда професионално и да насочва потребителя към следващата стъпка."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <article className="h-full rounded-3xl border border-line bg-panel p-6 shadow-card transition hover:border-accent/30">
                <h3 className="text-xl font-semibold text-text">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="portfolio" className="border-y border-line bg-panel/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Портфолио"
              title="Подбрани проекти с ясна структура и реален бизнес фокус"
              description="Всеки проект е подготвен като отделна страница с детайли, технологии, галерия и силен CTA за контакт."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="rounded-[2rem] border border-accent/20 bg-gradient-to-r from-accent/10 to-accent2/10 p-8 shadow-card">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                    Призив към действие
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-text">
                    {site.ctaBand.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {site.ctaBand.text}
                  </p>
                </div>

                <Link
                  href="#kontakti"
                  className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  {site.ctaBand.button}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="za-men"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
  <div className="rounded-[2rem] border border-line bg-panel/80 p-5 shadow-card">
    <div className="rounded-[1.5rem] border border-line bg-gradient-to-br from-accent/10 via-panel to-accent2/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
        Бърз поглед
      </p>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text">
        Резултати, структура и бърза комуникация.
      </h2>

      <p className="mt-4 text-sm leading-6 text-muted">
        Фокусът ми е върху сайтове, които изглеждат чисто, работят бързо и
        водят до реални заявки.
      </p>

      <div className="mt-6 grid gap-3">
        <div className="flex items-start gap-3 rounded-2xl border border-line bg-white/5 p-4">
          <span className="mt-0.5 text-lg font-semibold text-accent">01</span>
          <div>
            <p className="text-sm font-medium text-text">Бърза изработка</p>
            <p className="mt-1 text-sm text-muted">От няколко дни за малки сайтове до няколко седмици при по-сложни проекти.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-line bg-white/5 p-4">
          <span className="mt-0.5 text-lg font-semibold text-accent">02</span>
          <div>
            <p className="text-sm font-medium text-text">Индивидуален дизайн</p>
            <p className="mt-1 text-sm text-muted">Без готови шаблони — всеки сайт е съобразен с бранда.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-line bg-white/5 p-4">
          <span className="mt-0.5 text-lg font-semibold text-accent">03</span>
          <div>
            <p className="text-sm font-medium text-text">Бърза комуникация</p>
            <p className="mt-1 text-sm text-muted">Отговор до 24 часа на всяко запитване.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow={site.about.eyebrow}
              title={site.about.title}
              description={site.about.description}
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-line bg-panel p-6">
                <h3 className="text-lg font-semibold text-text">
                  Опит
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {site.about.experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-line bg-panel p-6">
                <h3 className="text-lg font-semibold text-text">
                  Умения
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {site.about.skills.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-line bg-panel p-6">
              <h3 className="text-lg font-semibold text-text">
                Технологии
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {site.about.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-line bg-white/5 px-3 py-1 text-sm text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      <section
        id="kontakti"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow={site.form.eyebrow}
              title={site.form.title}
              description={site.form.description}
            />

            <div className="mt-8 rounded-3xl border border-line bg-panel p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Пряка връзка
              </p>

              <div className="mt-4 space-y-3 text-sm text-muted">
                <p>
                  Телефон:{' '}
                  <Link
                    href={`tel:${site.contact.phone}`}
                    className="text-text transition hover:text-accent"
                  >
                    {site.contact.phoneLabel}
                  </Link>
                </p>

                {site.contact.email ? (
                  <p>
                    Имейл:{' '}
                    <Link
                      href={`mailto:${site.contact.email}`}
                      className="text-text transition hover:text-accent"
                    >
                      {site.contact.email}
                    </Link>
                  </p>
                ) : null}

                <p>
                  LinkedIn:{' '}
                  <Link
                    href={site.contact.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text transition hover:text-accent"
                  >
                    Профил
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm
              email={site.contact.email}
              labels={site.form.fields}
              placeholders={site.form.placeholders}
              projectTypes={site.form.projectTypes}
              budgets={site.form.budgets}
              submitLabel={site.form.submitLabel}
              successMessage={site.form.successMessage}
              errorMessage={site.form.errorMessage}
            />
          </Reveal>
        </div>
      </section>

      <section id="otzivi" className="border-y border-line bg-panel/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Отзиви"
              title="Истински ревюта с оценка и одобрение преди публикуване"
              description="Хората могат да пишат мнение и да дадат оценка от 1 до 5, а на сайта се показват само одобрените ревюта."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {reviews.map((review, index) => (
                <Reveal key={review.id} delay={index * 70}>
                  <article className="h-full rounded-3xl border border-line bg-panel p-6 shadow-card">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted">
                      {review.quote}
                    </p>

                    <div className="mt-6">
                      <p className="font-semibold text-text">
                        {review.name}
                      </p>

                      <p className="text-sm text-muted">
                        {review.company}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <ReviewForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}





