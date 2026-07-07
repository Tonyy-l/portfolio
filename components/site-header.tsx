'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/content';

type SiteHeaderProps = {
  brand: string;
  navigation: NavItem[];
  contactLabel: string;
};

export function SiteHeader({ brand, navigation, contactLabel }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const resolveHref = (href: string) => (href.startsWith('http') || href.startsWith('/') ? href : '/' + href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-text">
          {brand}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={resolveHref(item.href)} className="text-sm text-muted transition hover:text-text">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakti"
            className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-text transition hover:border-accent/60 hover:bg-accent/15"
          >
            {contactLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-text lg:hidden"
          aria-label="Отвори менюто"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Меню</span>
          <span className="flex flex-col gap-1.5">
            <span className={cn('h-0.5 w-5 bg-current transition', open && 'translate-y-2 rotate-45')} />
            <span className={cn('h-0.5 w-5 bg-current transition', open && 'opacity-0')} />
            <span className={cn('h-0.5 w-5 bg-current transition', open && '-translate-y-2 -rotate-45')} />
          </span>
        </button>
      </div>

      <div className={cn('border-t border-line bg-panel/95 lg:hidden', open ? 'block' : 'hidden')}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navigation.map((item) => (
            <Link key={item.href} href={resolveHref(item.href)} className="rounded-xl px-3 py-3 text-sm text-text transition hover:bg-white/5">
              {item.label}
            </Link>
          ))}
          <Link href="/#kontakti" className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-slate-950">
            {contactLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}