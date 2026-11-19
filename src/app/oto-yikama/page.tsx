import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LOCATIONS, MELTEM_WASH_SERVICES, SITE_META } from '@/data/content';

export const metadata: Metadata = {
  title: 'AGN Oto Yıkama & Detaylı Araç Bakımı | Meltem / Antalya',
  description:
    'Antalya Meltem Mahallesi Millet Bahçesi Kapalı Otoparkı -1. katta oto yıkama, detaylı yıkama, oto kuaför, pasta cila, seramik, jant ve far parlatma, koltuk yıkama.',
  alternates: {
    canonical: '/oto-yikama',
  },
};

export default function OtoYikamaPage() {
  const autoWashJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoWash',
    '@id': `${SITE_META.domain}/oto-yikama/#meltem-autowash`,
    name: LOCATIONS.meltem.fullName,
    url: `${SITE_META.domain}/oto-yikama`,
    sameAs: [LOCATIONS.meltem.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Meltem Mahallesi, 100. Yıl Bulvarı, Millet Bahçesi Kapalı Otoparkı, -1. kat',
      addressLocality: 'Muratpaşa / Meltem',
      addressRegion: 'Antalya',
      addressCountry: 'TR',
    },
    description:
      'Oto yıkama, detaylı yıkama, oto kuaför, pasta cila, seramik, jant ve far parlatma, koltuk yıkama.',
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoWashJsonLd) }}
        />
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">MELTEM / ANTALYA</p>
              <h1>AGN Oto Yıkama &amp; Detaylı Araç Bakımı</h1>
              <p>
                {LOCATIONS.meltem.address}, {LOCATIONS.meltem.city}. Oto yıkama, detaylı yıkama,
                oto kuaför, pasta cila, seramik, jant ve far parlatma, koltuk yıkama.
              </p>
              <div className="actions" style={{ marginTop: '26px' }}>
                <a
                  className="btn white"
                  href={LOCATIONS.meltem.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yol Tarifi <span>↗</span>
                </a>
                <a
                  className="btn outline"
                  href={LOCATIONS.meltem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram (@agnotomotiv) <span>↗</span>
                </a>
                <a
                  className="btn outline"
                  href={LOCATIONS.meltem.reelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reels Uygulamaları <span>↗</span>
                </a>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img
                src="/assets/agn-garage-dis-cephe.webp"
                alt="AGN Oto Yıkama ve Detaylı Araç Bakımı"
              />
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '12px' }}>
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">UYGULAMA ALANLARI</p>
                <h2>Oto Kuaför ve Detaylı Bakım</h2>
                <p>Meltem şubemizde sunulan araç yıkama ve yüzey koruma uygulamaları.</p>
              </div>
            </div>

            <div className="subpage-grid-2">
              {MELTEM_WASH_SERVICES.map((item, idx) => (
                <article key={idx} className="subpage-card">
                  <span className="badge-pill">Meltem Lokasyonu</span>
                  <h3 style={{ marginTop: '12px' }}>{item.title}</h3>
                  <p style={{ marginTop: '10px', color: '#101010', fontSize: '14px' }}>
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="subpage-grid-2" style={{ marginTop: '18px' }}>
              <div className="subpage-card">
                <p className="eyebrow">KONUM &amp; ULAŞIM BİLGİSİ</p>
                <h3>Millet Bahçesi Kapalı Otoparkı (-1. Kat)</h3>
                <p style={{ marginTop: '10px', color: '#101010' }}>
                  <strong>Adres:</strong> {LOCATIONS.meltem.address}, {LOCATIONS.meltem.city}
                </p>
                <p style={{ marginTop: '10px', fontSize: '13px' }}>
                  {LOCATIONS.meltem.parkingNote}
                </p>
                <div className="actions" style={{ marginTop: '18px' }}>
                  <a
                    className="btn dark"
                    href={LOCATIONS.meltem.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yol Tarifi Al <span>↗</span>
                  </a>
                  <a
                    className="btn outline-dark"
                    href={LOCATIONS.meltem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="subpage-card" style={{ background: '#ececeb' }}>
                <p className="eyebrow">LOKASYON AYRIMI</p>
                <h3>Hasar, Mekanik veya Bakım mı Gerekiyor?</h3>
                <p style={{ marginTop: '10px', color: '#101010', fontSize: '14px' }}>
                  Meltem şubemiz yalnızca oto yıkama, oto kuaför ve detaylı araç bakımı hizmeti
                  vermektedir. Hasar onarımı, kaporta-boya, mekanik servis ve periyodik bakım
                  işlemleri <strong>Kepez Serik Caddesi No: 97</strong> adresindeki ana servis
                  atölyemizde yürütülür.
                </p>
                <div className="actions" style={{ marginTop: '18px' }}>
                  <Link className="btn dark" href="/hizmetler">
                    Kepez Servis Hizmetleri <span>↗</span>
                  </Link>
                  <Link className="text-link" href="/iletisim">
                    İki Konumu Karşılaştır ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
