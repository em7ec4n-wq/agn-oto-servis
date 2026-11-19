import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CAMPAIGNS, LOCATIONS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Yağ Bakımına Araç Yıkama Hediye Kampanyası',
  description:
    'AGN Oto Servis periyodik yağ bakımında araç yıkama hediyesi ve 5.000 TL’den başlayan fiyatlarla bakım kampanyası.',
  alternates: {
    canonical: '/kampanyalar/yag-bakimi',
  },
};

export default function YagBakimiKampanyaPage() {
  const campaign = CAMPAIGNS[0];

  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">KAMPANYA DETAYI · KEPEZ / ANTALYA</p>
              <h1>{campaign.title}</h1>
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                {campaign.priceText}
              </p>
              <p>{campaign.shortDesc}</p>
              <div className="actions" style={{ marginTop: '26px' }}>
                <a className="btn white" href={campaign.legacyCtaHref}>
                  {campaign.legacyCtaText} ({LOCATIONS.kepez.phoneDisplay}) <span>↗</span>
                </a>
                <Link className="btn outline" href="/?hizmet=periyodik-bakim#talep">
                  Periyodik Bakım Talebi Oluştur
                </Link>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img src={campaign.image} alt={campaign.imageAlt} />
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '12px' }}>
          <div className="shell subpage-grid-2">
            <div className="subpage-card">
              <p className="eyebrow">KAMPANYA BİLGİSİ</p>
              <h3>Yağ Bakımı ve Araç Yıkama Hediyesi</h3>
              <div style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
                {campaign.details.map((text, idx) => (
                  <p key={idx} style={{ color: '#101010', fontSize: '14px' }}>
                    {text}
                  </p>
                ))}
              </div>
              <div className="actions" style={{ marginTop: '22px' }}>
                <a className="btn dark" href={campaign.legacyCtaHref}>
                  Hemen Ara <span>↗</span>
                </a>
                <Link className="text-link" href="/hizmetler/periyodik-bakim">
                  Periyodik Bakım Kapsamını İncele ↗
                </Link>
              </div>
            </div>

            <div className="subpage-card" style={{ background: '#ececeb' }}>
              <p className="eyebrow">DOĞRULAMA &amp; YAYIN KOŞULLARI</p>
              <h3>İşletme Teyidi Bekleyen Başlıklar</h3>
              <p style={{ marginTop: '8px', fontSize: '13px', color: '#101010' }}>
                Aracınızın marka, model ve motor tipine göre kesin yağ/filtre kapsamını öğrenmek
                için servisimizle iletişime geçebilirsiniz:
              </p>
              <ul className="scope-list">
                {campaign.pendingConditions.map((cond, idx) => (
                  <li key={idx}>{cond}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
