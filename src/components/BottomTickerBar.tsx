import React from 'react';
import Link from 'next/link';

const TICKER_ITEMS = [
  "ANTALYA'NIN 1 NOLU KAPORTA & BOYA SERVİSİ",
  'AGN OTO SERVİS · KEPEZ',
  'FIRIN BOYA & ORİJİNAL RENK EŞLEME',
  'HASAR ONARIMI & SİGORTA TAKİBİ',
  'SERİK CADDESİ NO: 97 · +90 543 362 19 01',
];

export function BottomTickerBar() {
  return (
    <div className="agn-bottom-ticker" role="region" aria-label="AGN Oto Servis Duyuru Bandı">
      <div className="agn-ticker-glow" aria-hidden="true" />
      <Link href="/hizmetler/kaporta-boya" className="agn-ticker-link" aria-label="Antalya'nın 1 nolu kaporta ve boya servisi detayları">
        <div className="agn-ticker-track">
          {/* Two identical groups for seamless infinite loop */}
          {[0, 1].map((copyIdx) => (
            <div className="agn-ticker-group" key={copyIdx} aria-hidden={copyIdx === 1}>
              {TICKER_ITEMS.map((text, idx) => (
                <span className="agn-ticker-item" key={`${copyIdx}-${idx}`}>
                  <span className="agn-ticker-star" aria-hidden="true">★</span>
                  <span className={idx === 0 ? 'agn-ticker-highlight' : ''}>{text}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
