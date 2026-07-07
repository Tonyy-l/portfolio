import Link from 'next/link';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text">Страницата не е намерена</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        Върни се към началната страница или ми пиши директно, ако искаш да обсъдим нов проект.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
          Начална страница
        </Link>
        <Link href={`mailto:${site.contact.email}`} className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-text transition hover:border-accent/40 hover:text-accent">
          Свържи се с мен
        </Link>
      </div>
    </div>
  );
}