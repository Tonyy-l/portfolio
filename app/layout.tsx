import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Manrope, Montserrat } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { LoadingScreen } from '@/components/loading-screen';
import { site } from '@/lib/site';
import './globals.css';

const bodyFont = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-body', display: 'swap' });
const headingFont = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-heading', display: 'swap' });

const baseUrl = new URL(site.url);

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme-mode');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolvedTheme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  } catch (error) {}
})();
`;

export const viewport: Viewport = {
  themeColor: '#070B14'
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  manifest: '/site.webmanifest',
  keywords: ['уеб разработчик', 'портфолио', 'български бизнес', 'Next.js', 'SEO'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${site.name} | ${site.title}`,
    description: site.description,
    siteName: site.name
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.title}`,
    description: site.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg" data-theme="dark" className={`${bodyFont.variable} ${headingFont.variable}`} suppressHydrationWarning>
      <body className="bg-radial-glow font-sans text-text antialiased" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SiteHeader brand={site.name} navigation={[...site.navigation]} contactLabel="Поискай оферта" />
        <LoadingScreen />
        <main>{children}</main>
        <SiteFooter
          phoneLabel={site.contact.phoneLabel}
          phoneHref={`tel:${site.contact.phone}`}
          email={site.contact.email}
          socials={[
            { label: 'LinkedIn', href: site.contact.linkedIn },
            { label: 'GitHub', href: site.contact.github }
          ]}
          copyright={site.footer.copyright}
        />
      </body>
    </html>
  );
}
