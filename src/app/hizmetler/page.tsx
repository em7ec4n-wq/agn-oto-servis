import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MaintenanceComparisonTool } from '@/components/MaintenanceComparisonTool';
import { SERVICES, LOCATIONS, SITE_META } from '@/data/content';

export const metadata: Metadata = {
  title: 'Hizmetler | Kepez Oto Servis, Hasar Onarımı ve Periyodik Bakım',
  description:
    'Binek ve hafif ticari araçlar için hasar-onarım, kaporta, boya, mekanik bakım ve tamir, periyodik bakım ve yağ değişimi, oto elektrik, pasta cila, oto yıkama ve ücretsiz check-up.',
  alternates: {
    canonical: '/hizmetler',
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">KEPEZ &amp; MELTEM / ANTALYA</p>
              <h1>Hizmetlerimiz.</h1>
              <p>
                Binek ve hafif ticari araçlar için hasar-onarım, kaporta, boya, mekanik bakım ve
                tamir, periyodik bakım ve yağ değişimi, oto elektrik, pasta cila, oto ve detaylı
                yıkama ile ücretsiz check-up.
              </p>
              <div className="actions" style={{ marginTop: '24px' }}>
                <Link className="btn amber" href="/#talep">
                  Servis Talebi Oluştur <span>↗</span>
                </Link>
                <a className="btn outline" href="#karsilastir">
                  Bakım &amp; Check-up Karşılaştır
                </a>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img
                src="/assets/hero-mekanik-atolye.webp"
                alt="AGN Oto Servis Kepez atölyesi"
                style={{ objectPosition: '53% 50%' }}
              />
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '10px' }}>
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">KEPEZ SERVİS ATÖLYESİ</p>
                <h2>Servis ve Onarım Alanları</h2>
                <p>{SITE_META.legacyServiceCounterNote}</p>
              </div>
            </div>

            <div className="subpage-grid-3">
              {SERVICES.map((srv) => (
                <article key={srv.slug} className="catalog-card">
                  <Link href={`/hizmetler/${srv.slug}`} className="catalog-card-media">
                    <img src={srv.cardImage} alt={srv.cardAlt} />
                  </Link>
                  <div className="catalog-card-body">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        className={`badge-pill ${
                          srv.slug === 'ucretsiz-checkup'
                            ? 'green'
                            : srv.slug === 'periyodik-bakim'
                            ? 'amber'
                            : srv.slug === 'hasar-ve-onarim'
                            ? 'red'
                            : 'dark'
                        }`}
                      >
                        {srv.slug === 'ucretsiz-checkup'
                          ? '0 TL · Kontrol'
                          : srv.slug === 'hasar-ve-onarim'
                          ? 'Hasar Servisi'
                          : srv.slug === 'periyodik-bakim'
                          ? 'Motor Bakımı'
                          : 'Kepez Servis'}
                      </span>
                      {srv.priceDisplay && (
                        <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--amber-dark)' }}>
                          {srv.priceDisplay}
                        </span>
                      )}
                    </div>
                    <h3>
                      <Link href={`/hizmetler/${srv.slug}`}>{srv.title}</Link>
                    </h3>
                    <p>{srv.heroDesc}</p>
                    <div className="actions">
                      <Link className="btn dark" href={`/hizmetler/${srv.slug}`}>
                        Detayı İncele <span>↗</span>
                      </Link>
                      <Link className="text-link" href={srv.ctaHref}>
                        Talep Oluştur ↗
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {/* Meltem Oto Yıkama & Pasta Cila / Detaylı Bakım Kartı */}
              <article className="catalog-card">
                <Link href="/oto-yikama" className="catalog-card-media">
                  <img
                    src="/assets/agn-garage-dis-cephe.webp"
                    alt="AGN Oto Yıkama ve Detaylı Araç Bakımı"
                  />
                </Link>
                <div className="catalog-card-body">
                  <div style={{ marginBottom: '8px' }}>
                    <span className="badge-pill blue">Meltem Şubesi</span>
                  </div>
                  <h3>
                    <Link href="/oto-yikama">Oto Yıkama, Pasta Cila &amp; Detaylı Bakım</Link>
                  </h3>
                  <p>
                    Meltem Millet Bahçesi Kapalı Otoparkı -1. katta oto yıkama, detaylı yıkama, oto
                    kuaför, pasta cila, seramik, jant/far parlatma ve koltuk yıkama.
                  </p>
                  <div className="actions">
                    <Link className="btn dark" href="/oto-yikama">
                      Detayı İncele <span>↗</span>
                    </Link>
                    <a
                      className="text-link"
                      href={LOCATIONS.meltem.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yol Tarifi ↗
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <MaintenanceComparisonTool />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
