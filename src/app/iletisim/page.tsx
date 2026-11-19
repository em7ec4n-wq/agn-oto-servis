import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactAppointmentForm } from '@/components/ContactAppointmentForm';
import { LOCATIONS, SITE_META } from '@/data/content';

export const metadata: Metadata = {
  title: 'İletişim, Yol Tarifi ve Randevu Talebi | AGN Oto Servis',
  description:
    'AGN Oto Servis Kepez (Serik Caddesi No: 97) ve AGN Oto Yıkama Meltem (Millet Bahçesi Kapalı Otoparkı -1. kat) adres, telefon, yol tarifi ve randevu formu.',
  alternates: {
    canonical: '/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero single">
            <div>
              <p className="eyebrow line">KEPEZ SERVİS &amp; MELTEM OTO YIKAMA</p>
              <h1>İletişim ve yol tarifi.</h1>
              <p>
                Kepez’deki ana oto servis ve hasar onarım merkezimiz ile Meltem’deki oto yıkama ve
                detaylı araç bakım şubemiz için ayrı yol tarifi ve iletişim kanalları.
              </p>
              <div className="actions" style={{ marginTop: '24px' }}>
                <a className="btn white" href={LOCATIONS.kepez.phoneHref}>
                  Hemen Ara ({LOCATIONS.kepez.phoneDisplay}) <span>↗</span>
                </a>
                <a
                  className="btn outline"
                  href={LOCATIONS.kepez.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <span>↗</span>
                </a>
                <a className="btn outline" href="#randevu">
                  Randevu Talebi Formu
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact band" style={{ borderRadius: '35px', marginInline: 'auto' }}>
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">İKİ FARKLI LOKASYON</p>
                <h2>Şubelerimiz ve Ulaşım</h2>
              </div>
            </div>
            <div className="locations">
              <article>
                <p className="eyebrow">{LOCATIONS.kepez.eyebrow}</p>
                <h3>{LOCATIONS.kepez.name}</h3>
                <p>{LOCATIONS.kepez.address}</p>
                <p>
                  <a href={LOCATIONS.kepez.phoneHref}>{LOCATIONS.kepez.phoneDisplay}</a>
                  <br />
                  <a href={LOCATIONS.kepez.emailHref}>{LOCATIONS.kepez.email}</a>
                </p>
                <p style={{ fontSize: '13px' }}>
                  WhatsApp:{' '}
                  <a
                    href={LOCATIONS.kepez.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    wa.me/905433621901
                  </a>
                </p>
                <div className="actions">
                  <a
                    className="btn white"
                    href={LOCATIONS.kepez.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yol Tarifi ↗
                  </a>
                  <a className="btn outline" href="#randevu">
                    Randevu Talebi
                  </a>
                </div>
              </article>

              <article>
                <p className="eyebrow">{LOCATIONS.meltem.eyebrow}</p>
                <h3>{LOCATIONS.meltem.name}</h3>
                <p>{LOCATIONS.meltem.address}</p>
                <p>{LOCATIONS.meltem.description}</p>
                <p style={{ fontSize: '13px' }}>
                  Resmi Instagram Kanalı:{' '}
                  <a
                    href={LOCATIONS.meltem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    @agnotomotiv
                  </a>
                </p>
                <div className="actions">
                  <a
                    className="btn white"
                    href={LOCATIONS.meltem.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yol Tarifi ↗
                  </a>
                  <a
                    className="btn outline"
                    href={LOCATIONS.meltem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="shell">
            <ContactAppointmentForm />

            <div
              className="subpage-card"
              style={{ marginTop: '20px', background: '#ececeb', padding: '20px 24px' }}
            >
              <p className="eyebrow" style={{ marginBottom: '6px' }}>
                ESKİ SİTE ENVANTER NOTU
              </p>
              <p style={{ fontSize: '12px', color: '#101010' }}>
                {SITE_META.legacyDesignCredit} Eski sitede yer alan genel sosyal medya ana sayfa
                bağlantıları yeni yayına aktarılmamış; yalnızca doğrulanmış Meltem Instagram
                (@agnotomotiv) kanalı korunmuştur.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
