'use client';

import React, { useEffect, useRef, useState } from 'react';

// Smooth custom easing: accelerate smoothly, cruise through Antalya bends, gently brake at AGN pin
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100
  const [arrived, setArrived] = useState(false);

  const routePathRef = useRef<SVGPathElement | null>(null);
  const carGroupRef = useRef<SVGGElement | null>(null);
  const trailPathRef = useRef<SVGPathElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmountTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerClose = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setClosing(true);
    unmountTimerRef.current = setTimeout(() => {
      setMounted(false);
    }, 450);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const params = new URLSearchParams(window.location.search);
    if (reduced || params.get('ornek') === '1' || params.get('no-intro') === '1') {
      return;
    }

    setMounted(true);

    // Wait one frame for SVG refs to attach
    const initRaf = requestAnimationFrame(() => {
      const path = routePathRef.current;
      const car = carGroupRef.current;
      const trail = trailPathRef.current;
      if (!path || !car || !trail) return;

      const totalLength = path.getTotalLength();
      trail.style.strokeDasharray = `${totalLength}`;
      trail.style.strokeDashoffset = `${totalLength}`;

      const DRIVE_DURATION_MS = 2750;
      const startTime = performance.now();

      const updateFrame = (now: number) => {
        const elapsed = now - startTime;
        const rawT = Math.min(elapsed / DRIVE_DURATION_MS, 1);
        const easedT = easeInOutQuart(rawT);

        const dist = easedT * totalLength;
        const pt = path.getPointAtLength(dist);
        const lookAhead = path.getPointAtLength(Math.min(dist + 4, totalLength));
        const lookBehind = path.getPointAtLength(Math.max(dist - 4, 0));

        const dx = lookAhead.x - lookBehind.x;
        const dy = lookAhead.y - lookBehind.y;
        const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

        car.setAttribute('transform', `translate(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)}) rotate(${angleDeg.toFixed(2)})`);
        trail.style.strokeDashoffset = `${(totalLength * (1 - easedT)).toFixed(2)}`;

        const pct = Math.round(easedT * 100);
        setProgress(pct);

        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(updateFrame);
        } else {
          setArrived(true);
          closeTimerRef.current = setTimeout(() => {
            setClosing(true);
            unmountTimerRef.current = setTimeout(() => {
              setMounted(false);
            }, 480);
          }, 850);
        }
      };

      rafRef.current = requestAnimationFrame(updateFrame);
    });

    return () => {
      cancelAnimationFrame(initRaf);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
    };
  }, []);

  if (!mounted) return null;

  const remainingKm = Math.max(0, ((100 - progress) / 100) * 4.2).toFixed(1);
  const braking = progress >= 86;

  return (
    <div
      className={`agn-loader ${closing ? 'closing' : ''} ${arrived ? 'arrived' : ''}`}
      role="status"
      aria-label="AGN Oto Servis yükleniyor"
    >
      <div className="agn-loader-bg-glow" aria-hidden="true" />

      <div className="agn-loader-inner">
        {/* Top bar */}
        <div className="agn-loader-top">
          <img
            src="/assets/agn-logo-orijinal.png"
            alt="AGN Oto Servis"
            className="agn-loader-logo"
          />
          <button
            type="button"
            className="agn-loader-skip"
            onClick={triggerClose}
            aria-label="Açılış animasyonunu geç"
          >
            Geç <span>↗</span>
          </button>
        </div>

        {/* Tak-tak-tak sıralı gelen başlık */}
        <div className="agn-loader-headline">
          <div className="agn-tak-stack" aria-label="Antalya'nın 1 Numaralı Kaporta ve Boya Servisi">
            <span className="agn-tak-line tak-1">ANTALYA&apos;NIN</span>
            <span className="agn-tak-line tak-2">
              <em>1 NUMARALI</em>
            </span>
            <span className="agn-tak-line tak-3">KAPORTA &amp; BOYA SERVİSİ</span>
          </div>
          <div className="agn-tak-sub tak-4">
            <span>HASAR ONARIMI</span>
            <i>•</i>
            <span>ŞASİ ÖLÇÜM</span>
            <i>•</i>
            <span>FIRIN BOYA</span>
            <i>•</i>
            <span>KEPEZ / ANTALYA</span>
          </div>
        </div>

        {/* Stylized Antalya Map + Moving Car Slider Stage */}
        <div className="agn-map-card">
          <div className="agn-map-hud">
            <span className="hud-live">
              <i /> ANTALYA GPS ROTA
            </span>
            <span className="hud-dist">
              {arrived ? (
                <strong className="arrived-text">✓ VARIŞ · AGN OTO SERVİS</strong>
              ) : (
                <>
                  Kepez Serik Cad. No: 97 · <strong>{remainingKm} km</strong>
                </>
              )}
            </span>
          </div>

          <div className="agn-map-viewport">
            <svg
              viewBox="0 0 760 270"
              className="agn-map-svg"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                {/* Blueprint grid */}
                <pattern id="agnMapGrid" width="38" height="38" patternUnits="userSpaceOnUse">
                  <path
                    d="M 38 0 L 0 0 0 38"
                    fill="none"
                    stroke="rgba(255,255,255,0.045)"
                    strokeWidth="1"
                  />
                </pattern>

                {/* Route Amber-Gold Paint Gradient */}
                <linearGradient id="agnRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="45%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fde047" />
                </linearGradient>

                {/* Headlight Beam Gradient */}
                <linearGradient id="agnHeadlight" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>

                {/* Sea gradient (Antalya Akdeniz) */}
                <linearGradient id="agnSeaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(2,132,199,0.22)" />
                  <stop offset="100%" stopColor="rgba(2,132,199,0.02)" />
                </linearGradient>

                {/* Soft glow filter */}
                <filter id="agnGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Base dark map + grid */}
              <rect width="760" height="270" fill="#0d0e12" />
              <rect width="760" height="270" fill="url(#agnMapGrid)" />

              {/* Antalya Mediterranean Coast Silhouette (bottom-left) */}
              <path
                d="M 0 205 Q 110 198 205 228 T 395 270 L 0 270 Z"
                fill="url(#agnSeaGrad)"
                stroke="rgba(56,189,248,0.25)"
                strokeWidth="1.2"
              />
              <text x="26" y="252" fill="rgba(125,211,252,0.45)" fontSize="10" fontWeight="800" letterSpacing="3">
                AKDENİZ · ANTALYA KÖRFEZİ
              </text>

              {/* Secondary City Road Network */}
              <g stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none">
                <path d="M 40 30 L 210 110 L 340 60 L 520 130 L 720 45" />
                <path d="M 110 10 L 165 185 L 290 240" />
                <path d="M 295 15 L 330 220" />
                <path d="M 465 10 L 445 250" />
                <path d="M 595 15 L 620 245" />
                <path d="M 20 120 L 740 175" strokeDasharray="4 6" />
                {/* Roundabout near Kepez */}
                <circle cx="458" cy="116" r="14" stroke="rgba(245,158,11,0.18)" strokeWidth="2.5" />
                <circle cx="215" cy="148" r="10" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
              </g>

              {/* District Labels */}
              <g fill="rgba(255,255,255,0.28)" fontSize="9.5" fontWeight="800" letterSpacing="1.6">
                <text x="58" y="88">MELTEM / 100. YIL</text>
                <text x="242" y="48">MURATPAŞA</text>
                <text x="412" y="52">KEPEZ MERKEZ</text>
                <text x="546" y="196">SERİK CADDESİ</text>
              </g>

              {/* Main Route Asphalt Base */}
              <path
                d="M 62 178 C 145 178, 172 108, 258 112 C 344 116, 368 182, 460 156 C 538 134, 570 96, 656 106"
                fill="none"
                stroke="#1f2028"
                strokeWidth="18"
                strokeLinecap="round"
              />
              {/* Asphalt Dashed Center Line */}
              <path
                d="M 62 178 C 145 178, 172 108, 258 112 C 344 116, 368 182, 460 156 C 538 134, 570 96, 656 106"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="7 8"
                strokeLinecap="round"
              />

              {/* Invisible Math Reference Path for Car Position */}
              <path
                ref={routePathRef}
                d="M 62 178 C 145 178, 172 108, 258 112 C 344 116, 368 182, 460 156 C 538 134, 570 96, 656 106"
                fill="none"
                stroke="none"
              />

              {/* Glowing Animated Slider Trail Behind Car */}
              <path
                ref={trailPathRef}
                d="M 62 178 C 145 178, 172 108, 258 112 C 344 116, 368 182, 460 156 C 538 134, 570 96, 656 106"
                fill="none"
                stroke="url(#agnRouteGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#agnGlow)"
              />

              {/* Start Point */}
              <g transform="translate(62, 178)">
                <circle r="7" fill="#18181b" stroke="#ef4444" strokeWidth="2.5" />
                <circle r="2.5" fill="#ef4444" />
              </g>

              {/* Waypoint 1: Kaporta & Şasi */}
              <g transform="translate(258, 112)" opacity={progress >= 32 ? 1 : 0.4}>
                <circle r="6" fill="#09090b" stroke={progress >= 32 ? '#f59e0b' : '#52525b'} strokeWidth="2.2" />
                <circle r="2.2" fill={progress >= 32 ? '#fbbf24' : '#71717a'} />
                <text x="-38" y="-14" fill={progress >= 32 ? '#fcd34d' : '#71717a'} fontSize="9" fontWeight="800">
                  KAPORTA &amp; ŞASİ
                </text>
              </g>

              {/* Waypoint 2: Fırın Boya */}
              <g transform="translate(460, 156)" opacity={progress >= 65 ? 1 : 0.4}>
                <circle r="6" fill="#09090b" stroke={progress >= 65 ? '#f59e0b' : '#52525b'} strokeWidth="2.2" />
                <circle r="2.2" fill={progress >= 65 ? '#fbbf24' : '#71717a'} />
                <text x="-28" y="22" fill={progress >= 65 ? '#fcd34d' : '#71717a'} fontSize="9" fontWeight="800">
                  FIRIN BOYA
                </text>
              </g>

              {/* Destination: AGN OTO SERVİS KEPEZ PIN */}
              <g transform="translate(656, 106)" className={arrived ? 'agn-pin arrived' : 'agn-pin'}>
                {/* Pulse rings */}
                <circle
                  r={arrived ? 34 : 18}
                  fill="rgba(245,158,11,0.12)"
                  stroke="rgba(245,158,11,0.55)"
                  strokeWidth="1.5"
                  className="pin-pulse"
                />
                <circle
                  r="14"
                  fill={arrived ? 'rgba(245,158,11,0.28)' : 'rgba(245,158,11,0.14)'}
                  stroke="#fbbf24"
                  strokeWidth="2"
                />
                {/* Location Pin Icon */}
                <g transform="translate(0, -10)">
                  <path
                    d="M 0 -22 C -9 -22 -15 -15.5 -15 -7 C -15 3.5 0 14 0 14 C 0 14 15 3.5 15 -7 C 15 -15.5 9 -22 0 -22 Z"
                    fill="#f59e0b"
                    stroke="#09090b"
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="-8" r="5" fill="#09090b" />
                  <circle cx="0" cy="-8" r="2.2" fill="#fde047" />
                </g>

                {/* Shop Badge Label */}
                <g transform="translate(-52, 26)">
                  <rect
                    x="0"
                    y="0"
                    width="136"
                    height="36"
                    rx="10"
                    fill={arrived ? '#f59e0b' : 'rgba(15,15,18,0.92)'}
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                  />
                  <text
                    x="68"
                    y="15"
                    textAnchor="middle"
                    fill={arrived ? '#09090b' : '#fde047'}
                    fontSize="10"
                    fontWeight="800"
                  >
                    AGN OTO SERVİS
                  </text>
                  <text
                    x="68"
                    y="28"
                    textAnchor="middle"
                    fill={arrived ? '#18181b' : '#d4d4d8'}
                    fontSize="8"
                    fontWeight="700"
                  >
                    Serik Cad. No: 97 · Kepez
                  </text>
                </g>
              </g>

              {/* Moving Top-Down Sleek Car SVG */}
              <g ref={carGroupRef} transform="translate(62, 178)">
                {/* Headlight Cones */}
                <polygon
                  points="16,-6 62,-20 62,-2 16,-2"
                  fill="url(#agnHeadlight)"
                  opacity={arrived ? 0.35 : 0.9}
                />
                <polygon
                  points="16,2 62,2 62,20 16,6"
                  fill="url(#agnHeadlight)"
                  opacity={arrived ? 0.35 : 0.9}
                />

                {/* Car Drop Shadow */}
                <rect x="-21" y="-10" width="42" height="22" rx="8" fill="rgba(0,0,0,0.55)" />

                {/* Car Body (metallic pearl white + golden racing sheen) */}
                <rect
                  x="-20"
                  y="-10"
                  width="40"
                  height="20"
                  rx="7.5"
                  fill="#fafafa"
                  stroke="#f59e0b"
                  strokeWidth="1.6"
                />

                {/* Front Windshield & Rear Window */}
                <path d="M 3 -7.5 L 10 -6 L 10 6 L 3 7.5 Z" fill="#18181b" />
                <path d="M -13 -6.5 L -8 -7 L -8 7 L -13 6.5 Z" fill="#18181b" />

                {/* Roof with paint gloss highlight */}
                <rect x="-8" y="-6.5" width="11" height="13" rx="3" fill="#e4e4e7" />
                <line x1="-6" y1="-3" x2="2" y2="-3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

                {/* Front Headlights */}
                <rect x="17" y="-7.5" width="3" height="4" rx="1" fill="#fef08a" />
                <rect x="17" y="3.5" width="3" height="4" rx="1" fill="#fef08a" />

                {/* Rear Tail / Brake Lights (glow bright red when braking/parked!) */}
                <rect
                  x="-21"
                  y="-8"
                  width="3.5"
                  height="4.5"
                  rx="1"
                  fill={braking ? '#ff2a2a' : '#b91c1c'}
                  filter={braking ? 'url(#agnGlow)' : undefined}
                />
                <rect
                  x="-21"
                  y="3.5"
                  width="3.5"
                  height="4.5"
                  rx="1"
                  fill={braking ? '#ff2a2a' : '#b91c1c'}
                  filter={braking ? 'url(#agnGlow)' : undefined}
                />
              </g>
            </svg>
          </div>

          {/* Slider Progress Bar & Milestones */}
          <div className="agn-map-slider-area">
            <div className="agn-slider-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
              <div className="agn-slider-fill" style={{ width: `${progress}%` }} />
              <div className="agn-slider-thumb" style={{ left: `${progress}%` }} />
            </div>

            <div className="agn-slider-steps">
              <span className={progress >= 5 ? 'active' : ''}>
                <strong>01</strong> Hasar &amp; Şasi
              </span>
              <span className={progress >= 45 ? 'active' : ''}>
                <strong>02</strong> Kaporta &amp; Fırın Boya
              </span>
              <span className={arrived ? 'active arrived' : progress >= 92 ? 'active' : ''}>
                <strong>03</strong> AGN Kepez · {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
