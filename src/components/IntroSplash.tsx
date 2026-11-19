'use client';

import React, { useEffect, useState } from 'react';

export function IntroSplash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      // Skip if user prefers reduced motion or if ?ornek=1 / ?no-intro=1 is passed
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const params = new URLSearchParams(window.location.search);
      if (reduced || params.get('ornek') === '1' || params.get('no-intro') === '1') {
        return;
      }

      const seen = sessionStorage.getItem('agn_intro_seen');
      if (!seen) {
        sessionStorage.setItem('agn_intro_seen', '1');
        setVisible(true);
        const timer = setTimeout(() => {
          setVisible(false);
        }, 660);
        return () => clearTimeout(timer);
      }
    } catch {
      // Never block screen if sessionStorage is unavailable
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-splash" aria-hidden="true">
      <img
        src="/assets/agn-logo-orijinal.png"
        alt=""
        onError={() => setVisible(false)}
      />
    </div>
  );
}
