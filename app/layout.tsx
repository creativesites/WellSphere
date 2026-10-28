import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { site } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Compliance, Technology and Supply in Lusaka`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'PACRA registration Zambia',
    'ZRA tax clearance Lusaka',
    'ZEMA environmental impact assessment',
    'software development Zambia',
    'building materials Lusaka',
    'office supplies Lusaka',
    'procurement services Zambia',
    'WellSphere General Dealers',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: '/images/logo.jpg', width: 300, height: 170, alt: site.name }],
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: '#06140d',
  width: 'device-width',
  initialScale: 1,
};

// Structured data so Google can show the business, its location and phone numbers.
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phones.map((p) => p.display),
  address: { '@type': 'PostalAddress', addressLocality: 'Lusaka', addressCountry: 'ZM' },
  identifier: { '@type': 'PropertyValue', name: 'PACRA Registration Number', value: site.registrationNumber },
  areaServed: 'ZM',
  logo: `${site.url}/images/logo.jpg`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <div className="page">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
