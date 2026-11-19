'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/content';

const COMPARE_SLUGS = ['ucretsiz-checkup', 'periyodik-bakim'] as const;

export function MaintenanceComparisonTool() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'ucretsiz-checkup',
    'periyodik-bakim',
  ]);

  const compareServices = SERVICES.filter((s) =>
    COMPARE_SLUGS.includes(s.slug as (typeof COMPARE_SLUGS)[number])
  );

  const toggleService = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const activeItems = compareServices.filter((s) => selectedSlugs.includes(s.slug));

  return (
    <section className="compare-panel" id="karsilastir" aria-label="Bakım ve Check-up Karşılaştır">
      <div>
        <p className="eyebrow">KAPSAM KARŞILAŞTIRMASI</p>
        <h2>Bakım ve Check-up Karşılaştır</h2>
        <p style={{ marginTop: '10px', maxWidth: '640px' }}>
          Ücretsiz Check-up ile parça ve yağ değişimi içeren Periyodik Bakım hizmetlerinin
          doğrulanmış kapsamlarını karşılaştırın.
        </p>
      </div>

      <div className="compare-controls" role="group" aria-label="Karşılaştırılacak hizmetleri seçin">
        {compareServices.map((srv) => {
          const isSelected = selectedSlugs.includes(srv.slug);
          return (
            <button
              key={srv.slug}
              type="button"
              className={`compare-toggle ${isSelected ? 'active' : ''}`}
              aria-pressed={isSelected}
              onClick={() => toggleService(srv.slug)}
            >
              <span>{isSelected ? '✓' : '+'}</span>
              {srv.title}
            </button>
          );
        })}
      </div>

      {activeItems.length === 0 ? (
        <div
          className="subpage-card"
          role="alert"
          style={{ textAlign: 'center', padding: '28px' }}
        >
          <p style={{ color: '#101010', fontWeight: 700 }}>
            Karşılaştırmak için en az bir hizmet seçin.
          </p>
        </div>
      ) : (
        <div className="compare-cards">
          {activeItems.map((srv) => (
            <article key={srv.slug} className="compare-card">
              <span className="badge-pill">
                {srv.slug === 'ucretsiz-checkup' ? 'Kontrol & Gözlem' : 'Yağ & Filtre Değişimi'}
              </span>
              <h3 style={{ marginTop: '12px' }}>{srv.title}</h3>
              <div className="compare-price">{srv.priceDisplay || 'Fiyat için talep oluşturun'}</div>
              <p style={{ fontSize: '13px' }}>{srv.shortDesc}</p>

              <ul className="scope-list" style={{ marginBottom: '20px' }}>
                {srv.scope.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="actions" style={{ marginTop: 'auto', paddingTop: '12px' }}>
                <Link className="btn dark" href={`/?hizmet=${srv.slug}#talep`}>
                  Bu Hizmet İçin Talep Oluştur <span>↗</span>
                </Link>
                <Link className="text-link" href={`/hizmetler/${srv.slug}`}>
                  İncele ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
