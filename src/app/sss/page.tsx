import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ_ITEMS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (SSS) | AGN Oto Servis',
  description:
    'AGN Oto Servis ücretsiz check-up kapsamı, sunulan oto servis hizmetleri ve Antalya Kepez servis ulaşım/randevu bilgileri hakkında sıkça sorulan sorular.',
  alternates: {
    canonical: '/sss',
  },
};

export default function SssPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">BİLGİLENDİRME · KEPEZ / ANTALYA</p>
              <h1>Sıkça Sorulan Sorular</h1>
              <p>
                Ücretsiz check-up kapsamımız, servis hizmetlerimiz ve randevu/ulaşım süreçlerimiz
                hakkında merak edilen soruların yanıtları.
              </p>
              <div className="actions" style={{ marginTop: '26px' }}>
                <Link className="btn amber" href="/iletisim">
                  İletişim &amp; Randevu <span>↗</span>
                </Link>
                <Link className="btn outline" href="/#talep">
                  Servis Talebi Oluştur
                </Link>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img
                src="/assets/sss.webp"
                alt="Atölyede araç başında kontrol yapan servis ustası"
              />
            </div>
          </div>
        </section>

        <section className="faq light band" style={{ paddingTop: '12px' }}>
          <div className="shell faq-grid">
            <div>
              <p className="eyebrow">DOĞRULANMIŞ YANITLAR</p>
              <h2>Merak Edilenler</h2>
              <p style={{ marginTop: '12px' }}>
                Aracınızla ilgili özel bir belirti veya hasar durumu için doğrudan iletişim
                sayfamızdan bize ulaşabilirsiniz.
              </p>
              <div className="actions" style={{ marginTop: '20px' }}>
                <Link className="btn dark" href="/iletisim">
                  İletişime Geçin <span>↗</span>
                </Link>
              </div>
            </div>
            <div className="questions">
              {FAQ_ITEMS.map((item, idx) => (
                <details key={item.id} open={idx === 0 || item.defaultOpen}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
