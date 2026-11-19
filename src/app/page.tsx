import React, { Suspense } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceRequestTool } from '@/components/ServiceRequestTool';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell" id="hero">
          <div className="hero-inner">
            <p className="eyebrow line">KEPEZ / ANTALYA</p>
            <h1>
              Oto servis ve
              <br />
              hasar onarımı.
            </h1>
            <p>
              Binek ve hafif ticari araçlar için hasar onarımı, kaporta, boya, mekanik servis ve
              periyodik bakım.
            </p>
            <div className="actions">
              <a className="btn white" href="#talep">
                Servis Talebi Oluştur <span>↗</span>
              </a>
              <Link className="btn outline" href="/hizmetler">
                Hizmetleri İncele
              </Link>
            </div>
          </div>
          <div className="hero-picture">
            <img
              src="/assets/hero-mekanik-atolye.webp"
              alt="AGN atölyesinde motor üzerinde çalışan servis ustası"
            />
            <Link className="photo-link" href="/galeri?foto=hero-mekanik-atolye">
              AGN atölyesinden <span>↗</span>
            </Link>
          </div>
        </section>

        <Suspense
          fallback={
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
                </div>
              </div>
            </section>
          }
        >
          <ServiceRequestTool />
        </Suspense>

        <section className="services band" id="projects">
          <div className="shell">
            <div className="section-head">
              <div>
                <h2>
                  Aracınız için
                  <br />
                  ne gerekiyor?
                </h2>
                <p>Kepez’de binek ve hafif ticari araç servisi.</p>
              </div>
              <Link className="text-link" href="/hizmetler">
                Tüm Hizmetler ↗
              </Link>
            </div>
            <div className="service-grid">
              <Link className="service featured" href="/hizmetler/hasar-ve-onarim">
                <img src="/assets/hasar.webp" alt="Atölyede ön kısmı hasarlı otomobil" />
                <div>
                  <h3>Hasar ve Onarım</h3>
                  <p>Hasar dosyası, ekspertiz ve onarım.</p>
                  <span>↗</span>
                </div>
              </Link>
              <Link className="service" href="/hizmetler/kaporta-boya">
                <img src="/assets/kaporta.webp" alt="Ön çamurlukta kaporta işlemi" />
                <div>
                  <h3>Kaporta &amp; Boya</h3>
                  <p>Gövde düzeltme ve renk eşleme.</p>
                  <span>↗</span>
                </div>
              </Link>
              <Link className="service" href="/hizmetler/mekanik-servis">
                <img src="/assets/mekanik-servis.webp" alt="Kaputu açık otomobil" />
                <div>
                  <h3>Mekanik Servis</h3>
                  <p>Motor, şanzıman ve yürüyen aksam.</p>
                  <span>↗</span>
                </div>
              </Link>
              <Link className="service" href="/hizmetler/periyodik-bakim">
                <img src="/assets/periyodik-bakim.webp" alt="Atölyede hava filtresi kontrolü" />
                <div>
                  <h3>Periyodik Bakım</h3>
                  <p>Yağ, filtre ve temel kontroller.</p>
                  <span>↗</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="guide light band">
          <div className="shell guide-grid">
            <div>
              <h2>Bakım mı, Check&#8209;up mı?</h2>
              <p>Kapsamları karşılaştırıp aracınıza uygun hizmeti seçin.</p>
            </div>
            <div className="guide-options">
              <div>
                <h3>Ücretsiz Check-up</h3>
                <p>
                  Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik kontrolleri.
                </p>
                <Link className="text-link" href="/hizmetler/ucretsiz-checkup">
                  İncele ↗
                </Link>
              </div>
              <div>
                <h3>Periyodik Bakım</h3>
                <p>Motor yağı ve filtre değişimleri, sıvı ve akü kontrolleri.</p>
                <Link className="text-link" href="/hizmetler/periyodik-bakim">
                  İncele ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="dark-block" id="about">
          <section className="workshop band">
            <div className="shell">
              <div className="section-head">
                <div>
                  <h2>AGN atölyesinden.</h2>
                  <p>Kepez’deki servis alanımızdan kareler.</p>
                </div>
                <Link className="text-link" href="/galeri">
                  Galeriyi Gör ↗
                </Link>
              </div>
              <div className="gallery">
                <Link href="/galeri?foto=atolye-gmc">
                  <img
                    src="/assets/atolye-gmc.webp"
                    alt="AGN atölyesinde kaputu açık beyaz araç"
                  />
                </Link>
                <Link href="/galeri?foto=agn-garage-dis-cephe">
                  <img src="/assets/agn-garage-dis-cephe.webp" alt="AGN Garage dış cephesi" />
                </Link>
                <Link href="/galeri?foto=agn-oto-servis-tabela">
                  <img src="/assets/agn-oto-servis-tabela.webp" alt="AGN Oto Servis tabelası" />
                </Link>
              </div>
            </div>
          </section>
          <section className="process band">
            <div className="shell">
              <div className="section-head">
                <div>
                  <h2>Hasar Onarımı Nasıl İlerler?</h2>
                </div>
                <Link className="text-link" href="/hizmetler/hasar-ve-onarim">
                  Süreci İncele ↗
                </Link>
              </div>
              <div className="steps">
                <div>
                  <h3>Hasar Dosyası</h3>
                  <p>Servise ulaşın, hasar dosyası açılsın.</p>
                </div>
                <div>
                  <h3>Ekspertiz ve Onay</h3>
                  <p>Ekspertiz ve sigorta onayı koordine edilir.</p>
                </div>
                <div>
                  <h3>Onarım ve Teslim</h3>
                  <p>Onarım tamamlanır, araç teslim edilir.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="campaign">
          <div className="shell campaign-grid">
            <div>
              <h2>Yağ Bakımına Araç Yıkama Hediye</h2>
              <p>5.000 TL’den başlayan fiyatlarla.</p>
              <Link className="btn dark" href="/kampanyalar/yag-bakimi">
                Kampanyayı İncele <span>↗</span>
              </Link>
            </div>
            <img src="/assets/yag-bakimi.webp" alt="Motor yağı ekleme işlemi" />
          </div>
        </section>

        <section className="faq light band" id="sss">
          <div className="shell faq-grid">
            <div>
              <h2>Sıkça Sorulan Sorular</h2>
              <Link className="text-link" href="/sss">
                Tüm Sorular ↗
              </Link>
            </div>
            <div className="questions">
              <details open>
                <summary>Ücretsiz check-up neleri kapsar?</summary>
                <p>
                  Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik aksamı
                  kontrol edilir.
                </p>
              </details>
              <details>
                <summary>Hangi hizmetleri sunuyorsunuz?</summary>
                <p>
                  Kaporta, boya, mekanik bakım, oto elektrik, detaylı yıkama, pasta cila ve
                  ücretsiz check-up.
                </p>
              </details>
              <details>
                <summary>Servisinize nasıl ulaşırım?</summary>
                <p>
                  Servisimiz Antalya Kepez’de. Randevu için telefon veya WhatsApp üzerinden bize
                  ulaşabilirsiniz.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="contact band" id="iletisim">
          <div id="cta" />
          <div className="shell">
            <div className="section-head">
              <div>
                <h2>İletişim ve yol tarifi.</h2>
              </div>
            </div>
            <div className="locations">
              <article>
                <p className="eyebrow">KEPEZ / ANTALYA</p>
                <h3>AGN Oto Servis</h3>
                <p>Serik Caddesi No: 97, 07170 Kepez / Antalya</p>
                <p>
                  <a href="tel:+905433621901">+90 543 362 19 01</a>
                  <br />
                  <a href="mailto:info@agnotoservis.com">info@agnotoservis.com</a>
                </p>
                <div className="actions">
                  <a
                    className="btn white"
                    href="https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Servis+Serik+Caddesi+97+Kepez+Antalya"
                  >
                    Yol Tarifi ↗
                  </a>
                  <Link className="btn outline" href="/iletisim#randevu">
                    Randevu Talebi
                  </Link>
                </div>
              </article>
              <article>
                <p className="eyebrow">MELTEM / ANTALYA</p>
                <h3>AGN Oto Yıkama</h3>
                <p>
                  Meltem Mahallesi, 100. Yıl Bulvarı, Millet Bahçesi Kapalı Otoparkı, -1. kat
                </p>
                <p>Oto kuaför ve detaylı araç bakımı.</p>
                <div className="actions">
                  <a
                    className="btn white"
                    href="https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Y%C4%B1kama+Millet+Bah%C3%A7esi+Kapal%C4%B1+Otopark%C4%B1+Meltem+Antalya"
                  >
                    Yol Tarifi ↗
                  </a>
                  <a className="btn outline" href="https://www.instagram.com/agnotomotiv/">
                    Instagram ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
