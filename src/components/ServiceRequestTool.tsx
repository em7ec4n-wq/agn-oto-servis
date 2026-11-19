'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES, SITE_META } from '@/data/content';

const KEPEZ_SERVICES = SERVICES.filter((s) => s.location === 'kepez' && s.inServiceTool);

const EXAMPLE_DATA = {
  brandModel: 'Renault Clio',
  year: '2021',
  serviceSlug: 'hasar-ve-onarim',
  serviceTitle: 'Hasar ve Onarım',
  note: 'Sağ ön çamurlukta hasar',
};

export function ServiceRequestTool() {
  const searchParams = useSearchParams();

  const [isExampleMode, setIsExampleMode] = useState(false);
  const [brandModel, setBrandModel] = useState('');
  const [year, setYear] = useState('');
  const [serviceSlug, setServiceSlug] = useState('');
  const [note, setNote] = useState('');
  const [touched, setTouched] = useState<{
    brandModel?: boolean;
    year?: boolean;
    serviceSlug?: boolean;
    note?: boolean;
  }>({});

  // Check URL parameters for pre-selecting valid service slug or example mode
  useEffect(() => {
    if (!searchParams) return;
    const ornekParam = searchParams.get('ornek');
    const hizmetParam = searchParams.get('hizmet');

    if (ornekParam === '1') {
      setIsExampleMode(true);
    } else {
      setIsExampleMode(false);
    }

    if (hizmetParam) {
      const valid = KEPEZ_SERVICES.find((s) => s.slug === hizmetParam);
      if (valid) {
        setServiceSlug(valid.slug);
        setIsExampleMode(false);
      }
    }
  }, [searchParams]);

  const maxAllowedYear = useMemo(() => new Date().getFullYear() + 1, []);

  const selectedService = useMemo(
    () => KEPEZ_SERVICES.find((s) => s.slug === serviceSlug),
    [serviceSlug]
  );

  // Validation logic
  const trimmedBrand = brandModel.trim();
  const isBrandValid = trimmedBrand.length >= 2 && trimmedBrand.length <= 60;

  const trimmedYear = year.trim();
  const numericYear = Number(trimmedYear);
  const isYearValid =
    /^\d{4}$/.test(trimmedYear) && numericYear >= 1950 && numericYear <= maxAllowedYear;

  const isServiceValid = Boolean(selectedService);

  const trimmedNote = note.trim();
  const requiresNote = Boolean(selectedService?.requiresNote); // true for hasar-ve-onarim and mekanik-servis
  const isNoteValid = requiresNote
    ? trimmedNote.length > 0 && trimmedNote.length <= 280
    : trimmedNote.length <= 280;

  const isFormValid = !isExampleMode && isBrandValid && isYearValid && isServiceValid && isNoteValid;

  const whatsappUrl = useMemo(() => {
    const parts: string[] = [];
    if (selectedService) {
      parts.push(
        `Merhaba AGN Oto Servis, Kepez servisinizden ${selectedService.title} için randevu ve fiyat bilgisi rica ediyorum.`
      );
    } else {
      parts.push(
        'Merhaba AGN Oto Servis, Kepez servisinizden bilgi ve randevu almak istiyorum.'
      );
    }

    if (trimmedBrand && isYearValid) {
      parts.push(`Aracım ${trimmedBrand}, ${trimmedYear} model.`);
    } else if (trimmedBrand) {
      parts.push(`Aracım ${trimmedBrand}.`);
    } else if (isYearValid) {
      parts.push(`Araç model yılı: ${trimmedYear}.`);
    }

    if (trimmedNote.length > 0) {
      parts.push(`Not: ${trimmedNote}.`);
    }

    return `https://wa.me/${SITE_META.whatsappNumber}?text=${encodeURIComponent(parts.join(' '))}`;
  }, [selectedService, trimmedBrand, isYearValid, trimmedYear, trimmedNote]);

  // If example mode is active (?ornek=1), render the exact DOM and values of AGN-Modern-Referans.html
  if (isExampleMode) {
    return (
      <section className="request light band" id="talep">
        <div className="shell">
          <div className="request-panel">
            <div className="section-head">
              <div>
                <h2>
                  Servis talebi
                  <br /> oluşturun.
                </h2>
                <p>Araç bilgilerinizi girin, talebinizi WhatsApp üzerinden iletin.</p>
              </div>
            </div>
            <div className="request-grid">
              <div className="fields">
                <label>
                  Marka / Model
                  <input
                    value={EXAMPLE_DATA.brandModel}
                    readOnly
                    onFocus={() => setIsExampleMode(false)}
                  />
                </label>
                <label>
                  Model yılı
                  <input
                    value={EXAMPLE_DATA.year}
                    readOnly
                    onFocus={() => setIsExampleMode(false)}
                  />
                </label>
                <label>
                  Hizmet
                  <select
                    value={EXAMPLE_DATA.serviceTitle}
                    onChange={() => setIsExampleMode(false)}
                  >
                    <option>{EXAMPLE_DATA.serviceTitle}</option>
                  </select>
                </label>
                <label>
                  Belirti / Not
                  <input
                    value={EXAMPLE_DATA.note}
                    readOnly
                    onFocus={() => setIsExampleMode(false)}
                  />
                </label>
              </div>
              <div className="result">
                <p className="eyebrow">ÖRNEK</p>
                <h3>Talep Özeti</h3>
                <p>
                  <strong>
                    {EXAMPLE_DATA.brandModel} · {EXAMPLE_DATA.year}
                  </strong>
                  <br />
                  {EXAMPLE_DATA.serviceTitle}
                  <br />
                  {EXAMPLE_DATA.note}
                </p>
                <a
                  className="btn whatsapp"
                  href={`https://wa.me/${SITE_META.whatsappNumber}?text=${encodeURIComponent(
                    'Merhaba AGN Oto Servis, Kepez servisinizden bilgi ve randevu almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp’tan İlet <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="request light band" id="talep">
      <div className="shell">
        <div className="request-panel">
          <div className="section-head">
            <div>
              <h2>
                Servis talebi
                <br /> oluşturun.
              </h2>
              <p>Araç bilgilerinizi girin, talebinizi WhatsApp üzerinden iletin.</p>
            </div>
          </div>
          <div className="request-grid">
            <div className="fields">
              <label>
                Marka / Model
                <input
                  type="text"
                  name="brandModel"
                  placeholder="Örn: Renault Clio"
                  maxLength={60}
                  value={brandModel}
                  onChange={(e) => {
                    setBrandModel(e.target.value);
                    setTouched((prev) => ({ ...prev, brandModel: true }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, brandModel: true }))}
                  aria-invalid={Boolean(touched.brandModel && !isBrandValid)}
                />
                {touched.brandModel && !isBrandValid && (
                  <span className="field-error" role="alert">
                    Marka ve modeli yazın.
                  </span>
                )}
              </label>

              <label>
                Model yılı
                <input
                  type="text"
                  inputMode="numeric"
                  name="year"
                  placeholder="Örn: 2021"
                  maxLength={4}
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setTouched((prev) => ({ ...prev, year: true }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, year: true }))}
                  aria-invalid={Boolean(touched.year && !isYearValid)}
                />
                {touched.year && !isYearValid && (
                  <span className="field-error" role="alert">
                    Geçerli bir model yılı girin.
                  </span>
                )}
              </label>

              <label>
                Hizmet
                <select
                  name="service"
                  value={serviceSlug}
                  onChange={(e) => {
                    setServiceSlug(e.target.value);
                    setTouched((prev) => ({ ...prev, serviceSlug: true }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, serviceSlug: true }))}
                  aria-invalid={Boolean(touched.serviceSlug && !isServiceValid)}
                >
                  <option value="">Servis hizmeti seçin</option>
                  {KEPEZ_SERVICES.map((srv) => (
                    <option key={srv.slug} value={srv.slug}>
                      {srv.title}
                    </option>
                  ))}
                </select>
                {touched.serviceSlug && !isServiceValid && (
                  <span className="field-error" role="alert">
                    Bir servis hizmeti seçin.
                  </span>
                )}
              </label>

              <label>
                Belirti / Not
                <input
                  type="text"
                  name="note"
                  placeholder={
                    requiresNote
                      ? 'Örn: Sağ ön çamurlukta hasar (Zorunlu)'
                      : 'Varsa belirti veya notunuz (İsteğe bağlı)'
                  }
                  maxLength={280}
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                    setTouched((prev) => ({ ...prev, note: true }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, note: true }))}
                  aria-invalid={Boolean((touched.note || requiresNote) && !isNoteValid)}
                />
                {(touched.note || (touched.serviceSlug && requiresNote)) && !isNoteValid && (
                  <span className="field-error" role="alert">
                    Aracınızdaki belirtiyi veya hasarı kısaca yazın.
                  </span>
                )}
              </label>
            </div>

            <div className="result" aria-live="polite">
              <p className="eyebrow">{isFormValid ? 'HAZIR TALEP' : 'TALEP DURUMU'}</p>
              <h3>Talep Özeti</h3>
              {isFormValid && selectedService ? (
                <p>
                  <strong>
                    {trimmedBrand} · {trimmedYear}
                  </strong>
                  <br />
                  {selectedService.title}
                  {trimmedNote ? (
                    <>
                      <br />
                      {trimmedNote}
                    </>
                  ) : null}
                </p>
              ) : (
                <p>
                  <strong>
                    {isBrandValid ? trimmedBrand : 'Marka / Model'} ·{' '}
                    {isYearValid ? trimmedYear : 'Yıl'}
                  </strong>
                  <br />
                  {selectedService ? selectedService.title : 'Hizmet seçilmedi'}
                  <br />
                  {trimmedNote
                    ? trimmedNote
                    : requiresNote
                    ? 'Belirti veya hasar notu gerekli'
                    : 'Bilgileri tamamladığınızda özet güncellenir'}
                </p>
              )}

              <a
                className="btn whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp’tan İlet <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
