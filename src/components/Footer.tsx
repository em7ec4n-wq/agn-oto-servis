import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <Link href="/" aria-label="Ana sayfa">
          <img className="logo" src="/assets/agn-logo-beyaz.png" alt="AGN Oto Servis" />
        </Link>
        <div>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/sss">SSS</Link>
          <Link href="/yasal-bilgilendirme">Yasal Bilgilendirme</Link>
        </div>
        <small>© 2026 AGN Oto Servis</small>
      </div>
    </footer>
  );
}
