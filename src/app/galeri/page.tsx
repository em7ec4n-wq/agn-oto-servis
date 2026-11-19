import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GalleryClient } from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Galeri | AGN Oto Servis Kepez Atölyesinden Kareler',
  description:
    'AGN Oto Servis Antalya Kepez servis atölyesinden gerçek çalışma kareleri, hasar onarımı, kaporta, fırın boya ve mekanik servis fotoğrafları.',
  alternates: {
    canonical: '/galeri',
  },
};

export default function GaleriPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero single">
            <div>
              <p className="eyebrow line">KEPEZ ATÖLYESİ &amp; GÖRSEL ARŞİV</p>
              <h1>AGN atölyesinden.</h1>
              <p>
                Kepez’deki servis alanımızdan gerçek çalışma kareleri. Fotoğrafları büyütmek,
                klavye yön tuşları veya mobil kaydırma ile incelemek için herhangi bir kareye
                tıklayın.
              </p>
              <div className="actions" style={{ marginTop: '24px' }}>
                <Link className="btn amber" href="/#talep">
                  Servis Talebi Oluştur <span>↗</span>
                </Link>
                <Link className="btn outline" href="/hizmetler">
                  Hizmetleri İncele
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '10px' }}>
          <div className="shell">
            <Suspense fallback={<div>Galeri yükleniyor...</div>}>
              <GalleryClient />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
