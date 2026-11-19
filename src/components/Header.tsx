'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hambRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    // Move focus inside menu on open
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        hambRef.current?.focus();
      } else if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenuAndRestoreFocus = () => {
    setMenuOpen(false);
    setTimeout(() => {
      hambRef.current?.focus();
    }, 0);
  };

  return (
    <header className="top">
      <div className="shell nav">
        <Link href="/" aria-label="Ana sayfa">
          <img className="logo" src="/assets/agn-logo-siyah.png" alt="AGN Oto Servis" />
        </Link>
        <nav aria-label="Ana menü">
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/oto-yikama">Oto Yıkama</Link>
          <Link href="/galeri">Galeri</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <a className="btn amber nav-call" href="tel:+905433621901">
          Hemen Ara <span>↗</span>
        </a>
        <button
          ref={hambRef}
          type="button"
          className="hamb"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          aria-controls="agn-mobil-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i></i>
          <i></i>
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil Ana Menü"
          id="agn-mobil-menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeMenuAndRestoreFocus();
          }}
        >
          <div className="mobile-drawer" ref={drawerRef}>
            <div>
              <div className="mobile-drawer-top">
                <Link href="/" aria-label="Ana sayfa" onClick={() => setMenuOpen(false)}>
                  <img className="logo" src="/assets/agn-logo-siyah.png" alt="AGN Oto Servis" />
                </Link>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="mobile-drawer-close"
                  aria-label="Menüyü kapat"
                  onClick={closeMenuAndRestoreFocus}
                >
                  ×
                </button>
              </div>
              <div className="mobile-drawer-links" role="navigation" aria-label="Mobil bağlantılar">
                <Link href="/hizmetler" onClick={() => setMenuOpen(false)}>
                  Hizmetler
                </Link>
                <Link href="/oto-yikama" onClick={() => setMenuOpen(false)}>
                  Oto Yıkama
                </Link>
                <Link href="/galeri" onClick={() => setMenuOpen(false)}>
                  Galeri
                </Link>
                <Link href="/hakkimizda" onClick={() => setMenuOpen(false)}>
                  Hakkımızda
                </Link>
                <Link href="/iletisim" onClick={() => setMenuOpen(false)}>
                  İletişim
                </Link>
                <Link href="/sss" onClick={() => setMenuOpen(false)}>
                  Sıkça Sorulan Sorular
                </Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              <a className="btn amber" href="tel:+905433621901" style={{ width: '100%' }}>
                Hemen Ara (+90 543 362 19 01) <span>↗</span>
              </a>
              <Link
                className="btn dark"
                href="/#talep"
                style={{ width: '100%' }}
                onClick={() => setMenuOpen(false)}
              >
                Servis Talebi Oluştur <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
