import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hakkımızda | AGN Oto Servis Kepez / Antalya',
  description:
    'Antalya Kepez’de binek ve hafif ticari, her marka ve modele yönelik oto servis, hasar onarımı, kaporta, fırın boya ve mekanik bakım merkezi.',
  alternates: {
    canonical: '/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">KURUMSAL · KEPEZ / ANTALYA</p>
              <h1>Hakkımızda.</h1>
              <p>
                Antalya Kepez’de binek ve hafif ticari, her marka ve modele yönelik oto servis,
                hasar onarımı, kaporta, fırın boya ve mekanik bakım hizmeti sunuyoruz.
              </p>
              <div className="actions" style={{ marginTop: '26px' }}>
                <Link className="btn white" href="/iletisim">
                  İletişim &amp; Yol Tarifi <span>↗</span>
                </Link>
                <Link className="btn outline" href="/hizmetler">
                  Hizmetleri İncele
                </Link>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img
                src="/assets/hakkimizda.webp"
                alt="AGN Oto Servis Kepez atölye içi görünümü"
              />
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '12px' }}>
          <div className="shell">
            <div className="subpage-grid-2">
              <div className="subpage-card">
                <p className="eyebrow">SERVİS YAKLAŞIMIMIZ</p>
                <h3>Otomotiv Tecrübesi ve Teknik Donanım</h3>
                <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                  <p style={{ color: '#101010', fontSize: '14px' }}>
                    AGN Oto Servis olarak Antalya Kepez’deki servis merkezimizde binek ve hafif
                    ticari her marka ve model araca yönelik kapsamlı bakım ve onarım hizmeti
                    veriyoruz.
                  </p>
                  <p style={{ color: '#101010', fontSize: '14px' }}>
                    Sektörel otomotiv tecrübemizi, uzman ekibimiz ve güncel teknik donanımımızla
                    birleştirerek müşteri memnuniyetini ve sürüş güvenliğini önceliklendiriyoruz.
                  </p>
                  <p style={{ color: '#101010', fontSize: '14px' }}>
                    Özellikle kaza sonrası hasar onarımı, şasi/gövde ölçüm odaklı kaporta düzeltme,
                    orijinal kodla renk eşleme ve fırın boya uygulamalarında yüksek işçilik
                    standartlarıyla çalışıyoruz. Sigorta dosyası açılışı ve ekspertiz onay
                    süreçlerini araç sahipleri adına titizlikle koordine ediyoruz.
                  </p>
                </div>
              </div>

              <div className="subpage-card">
                <div
                  style={{
                    height: '210px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src="/assets/agn-oto-servis-tabela.webp"
                    alt="AGN Oto Servis kurumsal tabelası"
                  />
                </div>
                <p className="eyebrow">KURUMSAL ENVANTER &amp; TEYİT BİLGİLERİ</p>
                <h3>İş Ortaklığı ve Destek Kanalı Beyanları</h3>
                <ul className="scope-list" style={{ marginTop: '12px' }}>
                  <li>
                    <strong>Mobil &amp; Motul İş Ortaklığı Kaydı:</strong> Eski sitede Hakkımızda
                    bölümünde Mobil iş ortaklığı, Periyodik Bakım bölümünde ise Motul ürünleri ve
                    iş ortaklığı ifadesi yer almaktadır. Güncel ürün ve marka iş ortaklığı kapsamı
                    işletme onayıyla güncellenmektedir.
                  </li>
                  <li>
                    <strong>7/24 İletişim ve Destek Beyanı:</strong> Eski sitede yer alan &ldquo;7/24
                    iletişim ve destek&rdquo; beyanı atölyenin fiziksel olarak 24 saat açık olduğu
                    anlamına gelmez; acil iletişim ve destek kanalının çalışma saatleri işletme
                    teyidiyle kesinleştirilmektedir.
                  </li>
                </ul>
                <div className="actions" style={{ marginTop: '22px' }}>
                  <Link className="btn dark" href="/iletisim">
                    İletişime Geçin <span>↗</span>
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
