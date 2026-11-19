import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_META, LOCATIONS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Yasal Bilgilendirme ve KVKK Aydınlatma Metni | AGN Oto Servis',
  description:
    'AGN Oto Servis yasal bilgilendirme, KVKK veri sorumlusu, başvuru ve iletişim kanalları ile İlay Ajans geliştirme rolü.',
  alternates: {
    canonical: '/yasal-bilgilendirme',
  },
};

export default function YasalBilgilendirmePage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero single">
            <div>
              <p className="eyebrow line">KURUMSAL BİLGİLENDİRME</p>
              <h1>Yasal Bilgilendirme &amp; KVKK</h1>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sorumlusu,
                kullanım şartları ve dijital kanallara ilişkin aydınlatma beyanı.
              </p>
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '10px' }}>
          <div className="shell subpage-grid-2">
            <div className="subpage-card">
              <p className="eyebrow">VERİ SORUMLUSU VE BAŞVURU</p>
              <h3>Veri Sorumlusu Bilgilendirmesi</h3>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px', fontSize: '14px', color: '#101010' }}>
                <p>
                  <strong>İşletme Adı:</strong> AGN Oto Servis (Antalya Kepez)
                </p>
                <p>
                  <strong>Adres:</strong> {LOCATIONS.kepez.address}
                </p>
                <p>
                  <strong>E-posta:</strong> {LOCATIONS.kepez.email}
                </p>
                <p>
                  <strong>Telefon:</strong> {LOCATIONS.kepez.phoneDisplay}
                </p>
                <p>
                  Resmi ticari unvan, MERSİS numarası ve veri sorumlusu irtibat kişisi nihai işletme
                  teyidi ile güncellenmektedir. KVKK kapsamındaki bilgi edinme ve başvuru haklarınız
                  için yukarıdaki kanallardan yazılı talepte bulunabilirsiniz.
                </p>
              </div>

              <div className="actions" style={{ marginTop: '24px' }}>
                <Link className="btn dark" href="/gizlilik">
                  Gizlilik Politikası ↗
                </Link>
                <Link className="btn outline-dark" href="/cerez-tercihleri">
                  Çerez Tercihleri ↗
                </Link>
              </div>
            </div>

            <div className="subpage-card">
              <p className="eyebrow">DİJİTAL GELİŞTİRME &amp; KAPSAM</p>
              <h3>Tasarım, Geliştirme ve Hizmet Sınırları</h3>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px', fontSize: '14px', color: '#101010' }}>
                <p>
                  <strong>Geliştirme Rolü:</strong> {SITE_META.agencyRole}
                </p>
                <p>
                  <strong>Ödeme ve Rezervasyon Şartı:</strong> Bu web sitesi üzerinden herhangi bir
                  online ödeme alınmamakta, kredi kartı bilgisi talep edilmemekte ve bağlayıcı kesin
                  rezervasyon oluşturulmamaktadır. Sitedeki formlar yalnızca bir servis/randevu isteği
                  niteliğinde olup nihai teyit servis yetkilileri tarafından sağlanır.
                </p>
                <p>
                  <strong>Veri Saklama İlkesi:</strong> İletişim ve talep formlarında paylaşılan
                  telefon, e-posta veya araç bilgileri tarayıcı hafızasında (localStorage/sessionStorage)
                  kalıcı olarak depolanmaz.
                </p>
                <p>
                  <strong>İzne Tabi Araçlar:</strong> Analitik ve pazarlama çerezleri ziyaretçi tercihi
                  alınana kadar yüklenmez.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
