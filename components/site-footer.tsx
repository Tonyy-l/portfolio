import Link from 'next/link';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import type { SocialLink } from '@/types/content';

type SiteFooterProps = {
  phoneLabel: string;
  phoneHref: string;
  email: string;
  socials: SocialLink[];
  copyright: string;
};

function socialIcon(label: string) {
  const key = label.toLowerCase();

  if (key.includes('linkedin')) {
    return LinkedInIcon;
  }

  if (key.includes('github')) {
    return GitHubIcon;
  }

  return LinkIcon;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 6.5A2.19 2.19 0 1 1 2.56 6.5a2.19 2.19 0 0 1 4.38 0ZM3 8.75h3.88V21H3V8.75Zm6.41 0h3.72v1.68h.05c.52-.98 1.8-2.01 3.71-2.01 3.97 0 4.7 2.6 4.7 5.98V21h-3.88v-5.16c0-1.23-.02-2.8-1.71-2.8-1.71 0-1.97 1.34-1.97 2.72V21H9.41V8.75Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.94 5.38.94 11.76c0 5.1 3.3 9.43 7.88 10.96.58.1.8-.26.8-.57 0-.28-.01-1.03-.02-2.02-3.2.71-3.88-1.58-3.88-1.58-.53-1.38-1.3-1.75-1.3-1.75-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.82 2.73 1.29 3.4.98.1-.77.41-1.29.75-1.59-2.56-.3-5.25-1.31-5.25-5.84 0-1.29.44-2.34 1.16-3.17-.12-.3-.5-1.51.11-3.15 0 0 .95-.31 3.12 1.21a10.5 10.5 0 0 1 2.84-.4c.96 0 1.93.13 2.84.4 2.16-1.52 3.11-1.21 3.11-1.21.62 1.64.24 2.85.12 3.15.73.83 1.16 1.88 1.16 3.17 0 4.54-2.7 5.53-5.27 5.82.42.38.79 1.12.79 2.26 0 1.63-.01 2.94-.01 3.34 0 .31.22.68.81.56a11.05 11.05 0 0 0 7.88-10.96C23.06 5.38 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M10 13a5 5 0 0 1 0-7.07l1.06-1.06a5 5 0 0 1 7.07 7.07L17 13" />
      <path d="M14 11a5 5 0 0 1 0 7.07l-1.06 1.06a5 5 0 1 1-7.07-7.07L7 11" />
    </svg>
  );
}

export function SiteFooter({ phoneLabel, phoneHref, email, socials, copyright }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-panel/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Контакти</p>
            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted" aria-hidden />
                <Link
                  href={phoneHref}
                  className="font-medium text-text underline-offset-4 transition hover:text-accent hover:underline"
                >
                  {phoneLabel}
                </Link>
              </p>
              {email ? (
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted" aria-hidden />
                  <Link
                    href={`mailto:${email}`}
                    className="font-medium text-text underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {email}
                  </Link>
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent lg:text-right">
              Последвайте ни
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              {socials.map((item) => {
                const Icon = socialIcon(item.label);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted transition hover:text-text"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-line/60 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>{copyright}</p>

          <a href="#top" className="flex items-center gap-1.5 transition hover:text-text">
            Нагоре
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
