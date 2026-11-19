import type { Metadata } from 'next';
import './globals.css';
import { IntroSplash } from '@/components/IntroSplash';
import { BottomTickerBar } from '@/components/BottomTickerBar';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SITE_META, LOCATIONS } from '@/data/content';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.domain),
  title: {
    default: 'AGN Oto Servis | Kepez / Antalya Oto Servis ve Hasar Onarımı',
    template: '%s | AGN Oto Servis',
  },
  description:
    'Antalya Kepez’de binek ve hafif ticari araçlar için hasar onarımı, kaporta, boya, mekanik servis, oto elektrik, periyodik bakım ve ücretsiz check-up.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AGN Oto Servis | Kepez / Antalya Oto Servis ve Hasar Onarımı',
    description:
      'Binek ve hafif ticari araçlar için hasar onarımı, kaporta, boya, mekanik servis ve periyodik bakım.',
    url: SITE_META.domain,
    siteName: 'AGN Oto Servis',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/assets/hero-mekanik-atolye.webp',
        width: 1200,
        height: 630,
        alt: 'AGN Oto Servis Kepez Atölyesi',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const autoRepairJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_META.domain}/#kepez-autorepair`,
    name: LOCATIONS.kepez.name,
    url: SITE_META.domain,
    telephone: '+905433621901',
    email: LOCATIONS.kepez.email,
    image: `${SITE_META.domain}/assets/hero-mekanik-atolye.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serik Caddesi No: 97',
      postalCode: '07170',
      addressLocality: 'Kepez',
      addressRegion: 'Antalya',
      addressCountry: 'TR',
    },
    description: LOCATIONS.kepez.description,
  };

  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairJsonLd) }}
        />
        <IntroSplash />
        {children}
        <FloatingWhatsApp />
        <BottomTickerBar />
      </body>
    </html>
  );
}
