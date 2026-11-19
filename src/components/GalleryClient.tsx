'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { GALLERY_ITEMS, LOCATIONS, GalleryItem } from '@/data/content';

export function GalleryClient() {
  const searchParams = useSearchParams();
  const publishedItems = GALLERY_ITEMS.filter((item) => item.status === 'published');

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const fotoParam = searchParams?.get('foto');
    if (fotoParam) {
      const idx = publishedItems.findIndex((item) => item.id === fotoParam);
      if (idx !== -1) {
        setActiveIndex(idx);
      }
    }
  }, [searchParams, publishedItems]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % publishedItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + publishedItems.length) % publishedItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, publishedItems.length]);

  const activeItem: GalleryItem | null =
    activeIndex !== null ? publishedItems[activeIndex] : null;

  return (
    <>
      <div className="subpage-grid-3">
        {publishedItems.map((item, idx) => (
          <article key={item.id} className="catalog-card">
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="catalog-card-media"
              style={{
                border: 0,
                padding: 0,
                width: '100%',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              aria-label={`${item.title} fotoğrafını büyüt`}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ objectPosition: item.objectPosition || 'center' }}
              />
            </button>
            <div className="catalog-card-body">
              <span className="badge-pill">{item.category}</span>
              <h3 style={{ marginTop: '10px', fontSize: '21px' }}>{item.title}</h3>
              <p>{item.caption}</p>
              <button
                type="button"
                className="text-link"
                onClick={() => setActiveIndex(idx)}
              >
                Fotoğrafı Büyüt ↗
              </button>
            </div>
          </article>
        ))}
      </div>

      <div
        className="subpage-card"
        style={{
          marginTop: '28px',
          background: '#141414',
          color: '#fff',
          borderColor: '#363636',
        }}
      >
        <p className="eyebrow">MELTEM OTO YIKAMA &amp; DETAYLI BAKIM</p>
        <h3>Meltem Uygulama Videoları (Instagram Reels)</h3>
        <p style={{ marginTop: '10px', color: '#d0d0d0', maxWidth: '680px' }}>
          Meltem şubemizdeki oto yıkama, pasta cila ve detaylı kuaför uygulamalarını resmi
          Instagram Reels sayfamız üzerinden inceleyebilirsiniz. (Araç plakaları ve Reels kapakları
          yayın izni doğrulaması tamamlanana kadar doğrudan galeri ızgarasına eklenmemiştir.)
        </p>
        <div className="actions" style={{ marginTop: '18px' }}>
          <a
            className="btn white"
            href={LOCATIONS.meltem.reelsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram Reels Sayfasını Aç <span>↗</span>
          </a>
          <a
            className="btn outline"
            href={LOCATIONS.meltem.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            @agnotomotiv Profili <span>↗</span>
          </a>
        </div>
      </div>

      {activeItem && activeIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            className="lightbox-modal"
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const diff = e.changedTouches[0].clientX - touchStartX;
              if (diff > 45) {
                setActiveIndex(
                  (activeIndex - 1 + publishedItems.length) % publishedItems.length
                );
              } else if (diff < -45) {
                setActiveIndex((activeIndex + 1) % publishedItems.length);
              }
              setTouchStartX(null);
            }}
          >
            <div className="lightbox-media">
              <img src={activeItem.src} alt={activeItem.alt} />
            </div>
            <div className="lightbox-bar">
              <div>
                <span className="badge-pill dark">
                  {activeIndex + 1} / {publishedItems.length} · {activeItem.category}
                </span>
                <h3 style={{ marginTop: '8px', fontSize: '22px' }}>{activeItem.title}</h3>
                <p>{activeItem.caption}</p>
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="btn outline"
                  aria-label="Önceki fotoğraf"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + publishedItems.length) % publishedItems.length
                    )
                  }
                >
                  ← Önceki
                </button>
                <button
                  type="button"
                  className="btn outline"
                  aria-label="Sonraki fotoğraf"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % publishedItems.length)
                  }
                >
                  Sonraki →
                </button>
                <button
                  type="button"
                  className="btn white"
                  aria-label="Işık kutusunu kapat"
                  onClick={() => setActiveIndex(null)}
                >
                  Kapat (Esc)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
