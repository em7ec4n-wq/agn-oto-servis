'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CerezTercihleriPage() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('agn_analytics_consent');
      if (stored === 'allowed') {
        setAnalyticsAllowed(true);
      }
    } catch {
      // Local storage unavailable
    }
  }, []);

  const handleSave = () => {
    try {
      if (analyticsAllowed) {
        localStorage.setItem('agn_analytics_consent', 'allowed');
      } else {
        localStorage.setItem('agn_analytics_consent', 'rejected');
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setSaved(true);
    }
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('agn_analytics_consent');
      setAnalyticsAllowed(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setAnalyticsAllowed(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero single">
            <div>
              <p className="eyebrow line">GİZLİLİK AYARLARI</p>
              <h1>Çerez Tercihleri</h1>
              <p>
                Sitemizin teknik olarak çalışması için zorunlu çerezler kullanılır. İzne tabi çerezler
                yalnızca siz onay verdiğinizde etkinleşir.
              </p>
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '10px' }}>
          <div className="shell subpage-grid-2">
            <div className="subpage-card">
              <p className="eyebrow">ÇEREZ KATEGORİLERİ</p>
              <h3>Çerez Yönetimi</h3>

              <div style={{ marginTop: '20px', display: 'grid', gap: '20px' }}>
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid #d9d9d8',
                    background: '#f4f4f3',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <strong>Zorunlu Teknik Çerezler</strong>
                    <span className="badge-pill dark">Her Zaman Aktif</span>
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    Web sitesinin temel gezinme işlevleri, güvenlik protokolleri ve oturum bazlı tekil
                    açılış animasyonunun çalışması için gereklidir. Kapatılamaz.
                  </p>
                </div>

                <div
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid #d9d9d8',
                    background: '#fff',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <label
                      htmlFor="analytics-toggle"
                      style={{ fontSize: '14px', cursor: 'pointer', margin: 0 }}
                    >
                      <strong>İsteğe Bağlı İstatistik Çerezleri</strong>
                    </label>
                    <input
                      id="analytics-toggle"
                      type="checkbox"
                      checked={analyticsAllowed}
                      onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                      style={{ width: '20px', height: '20px', cursor: 'pointer', margin: 0 }}
                    />
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    Ziyaretçi trafiğini ve sayfa kullanımını anonim olarak ölçümleyen çerezlerdir.
                    Varsayılan olarak kapalıdır ve tercihiniz alınana kadar yüklenmez.
                  </p>
                </div>
              </div>

              {saved && (
                <div
                  role="status"
                  style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    background: '#191919',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '13px',
                  }}
                >
                  ✓ Çerez tercihleriniz kaydedildi.
                </div>
              )}

              <div className="actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn dark" onClick={handleSave}>
                  Tercihlerimi Kaydet <span>↗</span>
                </button>
                <button type="button" className="btn outline-dark" onClick={handleReset}>
                  Sıfırla
                </button>
              </div>
            </div>

            <div className="subpage-card">
              <p className="eyebrow">AYDINLATMA BİLGİSİ</p>
              <h3>Çerez Politikası İlkelerimiz</h3>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px', fontSize: '14px', color: '#101010' }}>
                <p>
                  Sitemizde üçüncü taraf hedefli reklam çerezleri veya kimlik belirleyici takip kodları
                  kullanılmamaktadır.
                </p>
                <p>
                  Tarayıcınızın ayarlarından istediğiniz zaman tüm çerezleri silebilir veya çerez
                  kullanımını engelleyebilirsiniz.
                </p>
                <p>
                  Daha fazla bilgi için{' '}
                  <Link href="/gizlilik" className="text-link">
                    Gizlilik Politikası
                  </Link>{' '}
                  ve{' '}
                  <Link href="/yasal-bilgilendirme" className="text-link">
                    Yasal Bilgilendirme
                  </Link>{' '}
                  sayfalarımızı inceleyebilirsiniz.
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
