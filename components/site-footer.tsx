import Link from 'next/link';
import type { SocialLink } from '@/types/content';

type SiteFooterProps = {
  phoneLabel: string;
  phoneHref: string;
  email: string;
  socials: SocialLink[];
  copyright: string;
};

export function SiteFooter({ phoneLabel, phoneHref, email, socials, copyright }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-panel/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Контакти</p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>
              Телефон: <Link href={phoneHref} className="text-text transition hover:text-accent">{phoneLabel}</Link>
            </p>
            {email ? (
              <p>
                Имейл: <Link href={`mailto:${email}`} className="text-text transition hover:text-accent">{email}</Link>
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 text-sm">
          {socials.map((item) => (
            <Link key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-muted transition hover:text-text">
              {item.label}
            </Link>
          ))}
          <p className="pt-2 text-muted">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}