import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LOCATIONS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve Kişisel Verilerin Korunması | AGN Oto Servis',
  description:
    'AGN Oto Servis web sitesi gizlilik politikası, form verilerinin işlenmesi, kişisel verilerin korunması ve güvenlik ilkeleri.',
  alternates: {
    canonical: '/gizlilik',
  },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero single">
            <div>
              <p className="eyebrow line">GİZLİLİK VE VERİ GÜVENLİĞİ</p>
              <h1>Gizlilik Politikası</h1>
              <p>
                AGN Oto Servis olarak kişisel verilerinizin güvenliğine ve gizliliğine azami önem
                veriyoruz.
              </p>
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '10px' }}>
          <div className="shell subpage-grid-2">
            <div className="subpage-card">
              <p className="eyebrow">VERİ TOPLAMA İLKELERİ</p>
              <h3>Hangi Bilgileri Topluyoruz?</h3>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px', fontSize: '14px', color: '#101010' }}>
                <p>
                  Sitemiz üzerindeki servis talep aracı ve randevu formunu kullandığınızda paylaştığınız
                  ad, soyad, telefon veya e-posta adresi ile araç marka, model ve arıza notu bilgileri
                  yalnızca talebinize geri dönüş yapabilmek amacıyla işlenir.
                </p>
                <p>
                  <strong>Kalıcı Depolama Yapılmaması:</strong> Form alanlarına girdiğiniz kişisel
                  bilgileriniz tarayıcınızın yerel hafızasında (Local Storage / Session Storage) kalıcı
                  olarak saklanmaz ve üçüncü taraflarla reklam amacıyla paylaşılmaz.
                </p>
                <p>
                  <strong>WhatsApp Yönlendirmesi:</strong> Servis talebi aracı tercih ettiğinizde
                  oluşturulan taslak metin, doğrudan kendi WhatsApp uygulamanız üzerinden işletme
                  numaramıza ({LOCATIONS.kepez.phoneDisplay}) iletilir; web sunucusunda izinsiz veri kaydı
                  tutulmaz.
                </p>
              </div>
            </div>

            <div className="subpage-card">
              <p className="eyebrow">GÜVENLİK VE HAKLARINIZ</p>
              <h3>Veri Güvenliği ve Başvuru</h3>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px', fontSize: '14px', color: '#101010' }}>
                <p>
                  Web sitemiz SSL/TLS şifreleme sertifikası (HTTPS) ile korunmakta olup veri iletimi
                  şifreli kanallar üzerinden gerçekleşir.
                </p>
                <p>
                  6698 sayılı KVKK’nın 11. maddesi kapsamındaki haklarınız uyarınca, verilerinizin
                  işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme hakkına
                  sahipsiniz.
                </p>
                <p>
                  Tüm başvurularınızı <strong>{LOCATIONS.kepez.email}</strong> e-posta adresi veya{' '}
                  <strong>{LOCATIONS.kepez.address}</strong> posta adresi üzerinden iletebilirsiniz.
                </p>
              </div>

              <div className="actions" style={{ marginTop: '22px' }}>
                <Link className="btn dark" href="/yasal-bilgilendirme">
                  Yasal Bilgilendirme ↗
                </Link>
                <Link className="btn outline-dark" href="/cerez-tercihleri">
                  Çerez Tercihleri ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
