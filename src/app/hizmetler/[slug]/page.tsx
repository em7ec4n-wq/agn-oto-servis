import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SERVICES, LOCATIONS } from '@/data/content';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Hizmet Bulunamadı' };
  }
  return {
    title: `${service.title} | Kepez / Antalya`,
    description: service.heroDesc,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | AGN Oto Servis`,
      description: service.heroDesc,
      images: [{ url: service.detailImage }],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const periodicService = SERVICES.find((s) => s.slug === 'periyodik-bakim');
  const checkupService = SERVICES.find((s) => s.slug === 'ucretsiz-checkup');

  return (
    <>
      <Header />
      <main>
        <section className="shell">
          <div className="subpage-hero">
            <div>
              <p className="eyebrow line">KEPEZ / ANTALYA · SERVİS DETAYI</p>
              <h1>{service.title}</h1>
              <p>{service.heroDesc}</p>
              {service.priceDisplay && (
                <p style={{ marginTop: '12px', color: '#fff', fontWeight: 800 }}>
                  Ücret / Kapsam: {service.priceDisplay}
                </p>
              )}
              <div className="actions" style={{ marginTop: '26px' }}>
                <Link className="btn white" href={service.ctaHref}>
                  {service.ctaText} <span>↗</span>
                </Link>
                <a className="btn outline" href={LOCATIONS.kepez.phoneHref}>
                  Hemen Ara ({LOCATIONS.kepez.phoneDisplay})
                </a>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img src={service.detailImage} alt={service.detailAlt} />
            </div>
          </div>
        </section>

        <section className="band" style={{ paddingTop: '12px' }}>
          <div className="shell">
            <div className="subpage-grid-2">
              <div className="subpage-card">
                <p className="eyebrow">HİZMET KAPSAMI</p>
                <h3>Neleri Kapsar?</h3>
                <ul className="scope-list" style={{ marginTop: '18px' }}>
                  {service.scope.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {service.slug === 'oto-elektrik' && (
                  <div
                    style={{
                      marginTop: '24px',
                      padding: '16px',
                      background: '#f4f4f3',
                      borderRadius: '16px',
                    }}
                  >
                    <p style={{ color: '#101010', fontWeight: 700, fontSize: '13px' }}>
                      Ücretsiz Check-up Bağlantısı
                    </p>
                    <p style={{ fontSize: '13px', marginTop: '6px' }}>
                      Aracınızın akü ve genel elektrik aksamı kontrolleri Ücretsiz Check-up (0 TL)
                      kapsamında da incelenmektedir.
                    </p>
                    <Link
                      className="text-link"
                      href="/hizmetler/ucretsiz-checkup"
                      style={{ marginTop: '10px' }}
                    >
                      Ücretsiz Check-up Kapsamını Gör ↗
                    </Link>
                  </div>
                )}
              </div>

              <div className="subpage-card">
                <p className="eyebrow">ATÖLYE SÜRECİ VE DETAYLAR</p>
                <h3>Uygulama Yaklaşımımız</h3>
                <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                  {service.details.map((p, idx) => (
                    <p key={idx} style={{ color: '#101010', fontSize: '14px' }}>
                      {p}
                    </p>
                  ))}
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginTop: '22px',
                  }}
                >
                  <Link
                    href={`/galeri?foto=${service.slug === 'hasar-ve-onarim' ? 'hasar' : service.slug === 'kaporta-boya' ? 'kaporta' : 'mekanik-servis'}`}
                    style={{
                      height: '150px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    <img src={service.cardImage} alt={service.cardAlt} />
                  </Link>
                  <Link
                    href={`/galeri?foto=${service.slug === 'hasar-ve-onarim' ? 'onarim' : service.slug === 'kaporta-boya' ? 'boya' : 'mekanik-servis-2'}`}
                    style={{
                      height: '150px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    <img src={service.detailImage} alt={service.detailAlt} />
                  </Link>
                </div>
              </div>
            </div>

            {service.processSteps && (
              <div
                className="dark-block"
                style={{
                  borderRadius: '27px',
                  padding: '32px',
                  marginTop: '24px',
                }}
              >
                <div className="section-head">
                  <div>
                    <p className="eyebrow">SÜREÇ ADIMLARI</p>
                    <h2>Hasar Onarımı Nasıl İlerler?</h2>
                  </div>
                  <Link className="btn white" href={service.ctaHref}>
                    {service.ctaText} <span>↗</span>
                  </Link>
                </div>
                <div className="steps">
                  {service.processSteps.map((step, i) => (
                    <div key={i}>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(service.slug === 'ucretsiz-checkup' || service.slug === 'periyodik-bakim') &&
              checkupService &&
              periodicService && (
                <div className="compare-panel" style={{ marginTop: '24px' }}>
                  <p className="eyebrow">AYRI HİZMET KAPSAMLARI</p>
                  <h2>Ücretsiz Check-up ile Periyodik Bakım Farkı</h2>
                  <p style={{ marginTop: '8px', maxWidth: '680px' }}>
                    Ücretsiz Check-up yalnızca gözlem ve ölçüm kontrollerini (0 TL) içerir;
                    Periyodik Bakım ise motor yağı ve filtrelerin fiilen değiştirildiği bakım
                    işlemidir.
                  </p>
                  <div className="compare-cards" style={{ marginTop: '18px' }}>
                    <article className="compare-card">
                      <span className="badge-pill">Kontrol Hizmeti (Parça Değişimsiz)</span>
                      <h3 style={{ marginTop: '10px' }}>{checkupService.title}</h3>
                      <div className="compare-price">{checkupService.priceDisplay}</div>
                      <ul className="scope-list" style={{ marginBottom: '18px' }}>
                        {checkupService.scope.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        className="btn dark"
                        href={checkupService.ctaHref}
                        style={{ marginTop: 'auto' }}
                      >
                        Check-up İçin Talep Oluştur <span>↗</span>
                      </Link>
                    </article>

                    <article className="compare-card">
                      <span className="badge-pill">Parça &amp; Sıvı Değişimli Bakım</span>
                      <h3 style={{ marginTop: '10px' }}>{periodicService.title}</h3>
                      <div className="compare-price">{periodicService.priceDisplay}</div>
                      <ul className="scope-list" style={{ marginBottom: '18px' }}>
                        {periodicService.scope.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        className="btn dark"
                        href={periodicService.ctaHref}
                        style={{ marginTop: 'auto' }}
                      >
                        Periyodik Bakım İçin Talep Oluştur <span>↗</span>
                      </Link>
                    </article>
                  </div>
                </div>
              )}

            {service.pendingApprovalNotes && service.pendingApprovalNotes.length > 0 && (
              <div
                className="subpage-card"
                style={{
                  marginTop: '24px',
                  background: '#ececeb',
                }}
              >
                <p className="eyebrow">İÇERİK ENVANTERİ &amp; TEYİT KAYDI</p>
                {service.pendingApprovalNotes.map((note) => (
                  <div key={note.id} style={{ marginTop: '8px' }}>
                    <h3 style={{ fontSize: '20px' }}>{note.label}</h3>
                    <p style={{ marginTop: '6px', color: '#101010', fontSize: '13px' }}>
                      {note.legacyStatement}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
