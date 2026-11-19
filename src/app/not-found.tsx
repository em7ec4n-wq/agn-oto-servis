import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="shell band" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div
            className="subpage-card"
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '60px 24px',
              background: '#161616',
              color: '#fff',
              borderColor: '#363636',
            }}
          >
            <p className="eyebrow" style={{ color: '#c8c8c8' }}>
              404 · SAYFA BULUNAMADI
            </p>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 70px)', marginTop: '10px' }}>
              Aradığınız sayfa mevcut değil.
            </h1>
            <p style={{ color: '#d0d0d0', maxWidth: '480px', margin: '16px auto 28px' }}>
              Bağlantı güncellenmiş veya taşınmış olabilir. Kepez servis atölyemiz ve oto yıkama
              sayfalarımız için aşağıdaki bağlantıları kullanabilirsiniz.
            </p>
            <div className="actions" style={{ justifyContent: 'center' }}>
              <Link className="btn white" href="/">
                Ana Sayfaya Dön <span>↗</span>
              </Link>
              <Link className="btn outline" href="/hizmetler">
                Hizmetleri İncele
              </Link>
              <Link className="btn outline" href="/iletisim">
                İletişim &amp; Yol Tarifi
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
