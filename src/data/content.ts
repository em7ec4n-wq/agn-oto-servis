export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle?: string;
  shortDesc: string;
  heroDesc: string;
  location: 'kepez' | 'meltem';
  inServiceTool: boolean;
  requiresNote?: boolean;
  priceDisplay?: string;
  cardImage: string;
  cardAlt: string;
  detailImage: string;
  detailAlt: string;
  scope: string[];
  details: string[];
  processSteps?: { title: string; desc: string }[];
  pendingApprovalNotes?: {
    id: string;
    label: string;
    legacyStatement: string;
    status: 'draft' | 'approved' | 'published';
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface CampaignItem {
  slug: string;
  title: string;
  priceText: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  status: 'draft' | 'pending_approval' | 'published';
  showInPreview: boolean;
  showInLiveDefault: boolean;
  legacyCtaText: string;
  legacyCtaHref: string;
  details: string[];
  pendingConditions: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  location: 'kepez' | 'meltem';
  category: string;
  objectPosition?: string;
  featuredInHome?: boolean;
  status: 'published' | 'pending_permission';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const SITE_META = {
  name: 'AGN Oto Servis',
  domain: 'https://agnotoservis.com',
  phoneDisplay: '+90 543 362 19 01',
  phoneHref: 'tel:+905433621901',
  whatsappNumber: '905433621901',
  whatsappHref: 'https://wa.me/905433621901',
  email: 'info@agnotoservis.com',
  emailHref: 'mailto:info@agnotoservis.com',
  legacyServiceCounterNote: '7 ana servis alanı (Eski sitenin kendi sayacıdır; güncel kategori dizisinden yeni bir pazarlama sayısı türetilmemiştir).',
  legacyDesignCredit: 'Designed by Niche İşler (Önceki tasarımın kredisidir, eski site envanterinde saklanmaktadır).',
  agencyRole: 'İlay Ajans — Sözleşme kapsamındaki modern siyah-beyaz web tasarım, kullanıcı deneyimi ve Next.js yazılım geliştirme.',
};

export const LOCATIONS = {
  kepez: {
    id: 'kepez',
    eyebrow: 'KEPEZ / ANTALYA',
    name: 'AGN Oto Servis',
    address: 'Serik Caddesi No: 97, 07170 Kepez / Antalya',
    phoneDisplay: '+90 543 362 19 01',
    phoneHref: 'tel:+905433621901',
    whatsappHref: 'https://wa.me/905433621901',
    email: 'info@agnotoservis.com',
    emailHref: 'mailto:info@agnotoservis.com',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Servis+Serik+Caddesi+97+Kepez+Antalya',
    description: 'Binek ve hafif ticari araçlar için hasar onarımı, kaporta, boya, mekanik servis, oto elektrik, periyodik bakım ve ücretsiz check-up.',
    pinStatus: 'Kepez harita pini ve çalışma saatleri işletme teyidi bekliyor.',
  },
  meltem: {
    id: 'meltem',
    eyebrow: 'MELTEM / ANTALYA',
    name: 'AGN Oto Yıkama',
    fullName: 'AGN Oto Yıkama & Detaylı Araç Bakımı',
    address: 'Meltem Mahallesi, 100. Yıl Bulvarı, Millet Bahçesi Kapalı Otoparkı, -1. kat',
    city: 'Antalya',
    description: 'Oto kuaför ve detaylı araç bakımı.',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Y%C4%B1kama+Millet+Bah%C3%A7esi+Kapal%C3%B1+Otopark%C3%B1+Meltem+Antalya'.replace('%C3%B1', '%C4%B1').replace('%C3%B1', '%C4%B1'),
    instagramUrl: 'https://www.instagram.com/agnotomotiv/',
    reelsUrl: 'https://www.instagram.com/agnotomotiv/reels/',
    parkingNote: 'Sosyal medya paylaşımlarında ücretsiz kapalı otopark bilgisi yer almaktadır (Güncelliği işletme teyidindedir).',
    phoneNote: 'Meltem lokasyonu için doğrudan telefon numarası teyit bekliyor; Kepez servis numarası bu lokasyonun numarası olarak gösterilmez.',
  },
};

// Fix exact URL encoding for Meltem directions to match prompt:
// https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Y%C4%B1kama+Millet+Bah%C3%A7esi+Kapal%C4%B1+Otopark%C4%B1+Meltem+Antalya
LOCATIONS.meltem.directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=AGN+Oto+Y%C4%B1kama+Millet+Bah%C3%A7esi+Kapal%C4%B1+Otopark%C4%B1+Meltem+Antalya';

export const SERVICES: ServiceItem[] = [
  {
    slug: 'hasar-ve-onarim',
    title: 'Hasar ve Onarım',
    shortDesc: 'Hasar dosyası, ekspertiz ve onarım.',
    heroDesc: 'Kaza sonrası binek ve hafif ticari araç onarımı, güvenli sürüş ve araç ömrü odaklı süreç yönetimi.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: true,
    cardImage: '/assets/hasar.webp',
    cardAlt: 'Atölyede ön kısmı hasarlı otomobil',
    detailImage: '/assets/onarim.webp',
    detailAlt: 'AGN Oto Servis atölyesinde hasar onarım ve gövde uygulaması',
    scope: [
      'Kaza sonrası binek ve hafif ticari araç hasar tespiti ve onarımı',
      'Sigorta ve kasko hasar dosyasının açılması',
      'Ekspertiz incelemesi ve onay sürecinin servisçe koordine edilmesi',
      'Güvenli sürüş ve araç ömrünü korumaya yönelik onarım ve kontrol',
      'Onarım sonrası son kontroller ve araç teslimi',
    ],
    details: [
      'Kaza sonrası binek ve hafif ticari araçlarda oluşan hasarların güvenli sürüş standartlarına ve araç ömrünü koruyacak teknik kriterlere uygun biçimde onarılmasını sağlıyoruz.',
      'Servise ulaştığınız andan itibaren sigorta veya kasko dosyasının açılması, eksper incelemesi ve onay süreçleri ekibimiz tarafından takip edilir.',
      'Kaporta, boya ve mekanik bileşenlerdeki hasarlar koordineli olarak giderilerek aracınız kontrolden geçmiş şekilde teslim edilir.',
    ],
    processSteps: [
      { title: 'Hasar Dosyası', desc: 'Servise ulaşın, hasar dosyası açılsın.' },
      { title: 'Ekspertiz ve Onay', desc: 'Ekspertiz ve sigorta onayı koordine edilir.' },
      { title: 'Onarım ve Teslim', desc: 'Onarım tamamlanır, araç teslim edilir.' },
    ],
    pendingApprovalNotes: [
      {
        id: 'sigorta-anlasmalari',
        label: 'Sigorta Şirketleri Anlaşma Beyanı',
        legacyStatement: 'Eski sitede "Tüm sigorta şirketleriyle anlaşmalı" beyanı yer almaktadır. Güncel anlaşmalı sigorta şirketleri kapsamı işletme teyidinden sonra yayınlanacaktır.',
        status: 'draft',
      },
    ],
    ctaText: 'Hasar İçin Talep Oluştur',
    ctaHref: '/?hizmet=hasar-ve-onarim#talep',
  },
  {
    slug: 'kaporta-boya',
    title: 'Kaporta & Boya',
    shortTitle: 'Kaporta & Boya',
    shortDesc: 'Gövde düzeltme ve renk eşleme.',
    heroDesc: 'Kaza veya dış etken kaynaklı gövde deformasyonu, çizik ve göçük giderme, şasi/gövde ölçümü ve fırın boya.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: false,
    cardImage: '/assets/kaporta.webp',
    cardAlt: 'Ön çamurlukta kaporta işlemi',
    detailImage: '/assets/boya.webp',
    detailAlt: 'Fırın boya kabininde boya tabancası ile uygulama',
    scope: [
      'Kaza veya dış etken kaynaklı gövde deformasyonu düzeltme',
      'Çizik, ezik ve göçük giderme uygulamaları',
      'Şasi ve gövde ölçümü ile fabrika ölçülerinin hedeflenmesi',
      'Binek ve hafif ticari araç gövde uyumu',
      'Orijinal boya koduna göre hassas ton eşleme',
      'Tozdan arındırılmış ortamda fırın boya uygulaması',
    ],
    details: [
      'Kaporta bölümümüzde kaza veya dış etkenlerden kaynaklanan gövde deformasyonları, şasi ve gövde ölçüm ekipmanlarıyla fabrika ölçüleri hedeflenerek düzeltilir.',
      'Boya aşamasında aracın orijinal boya koduna göre renk ve ton eşlemesi yapılır; fırın boya kabininde homojen ve dayanıklı yüzey kalitesi elde edilir.',
      'Binek ve hafif ticari tüm araç tiplerinde çizik, göçük ve parça bazlı kaporta-boya işlemleri titizlikle yürütülür.',
    ],
    ctaText: 'Kaporta & Boya İçin Talep Oluştur',
    ctaHref: '/?hizmet=kaporta-boya#talep',
  },
  {
    slug: 'mekanik-servis',
    title: 'Mekanik Servis',
    shortDesc: 'Motor, şanzıman ve yürüyen aksam.',
    heroDesc: 'Motor, şanzıman, yürüyen aksam, fren ve süspansiyon sistemleri arıza tespiti, bakım ve parça değişimi.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: true,
    cardImage: '/assets/mekanik-servis.webp',
    cardAlt: 'Kaputu açık otomobil',
    detailImage: '/assets/mekanik-servis-2.webp',
    detailAlt: 'Atölyede motor ve mekanik aksam üzerinde çalışan usta',
    scope: [
      'Motor, şanzıman ve yürüyen aksam arıza incelemesi',
      'Performans düşüklüğü, mekanik ses veya şanzıman arızası tespiti',
      'Fren sistemi: balata ve disk kontrolü ile değişimi',
      'Süspansiyon sistemi: amortisör ve ön takım kontrolü',
      'Gerekli mekanik parça değişimleri ve yol testi kontrolü',
    ],
    details: [
      'Aracınızda yaşadığınız performans düşüklüğü, mekanik sesler, titreşim veya şanzıman kaynaklı belirtiler uzman ekibimiz tarafından incelenir.',
      'Motor, şanzıman, yürüyen aksam, fren (balata, disk) ve süspansiyon (amortisör, ön takım) bileşenleri detaylıca kontrol edilerek gerekli onarım ve parça değişimleri gerçekleştirilir.',
    ],
    ctaText: 'Mekanik Servis İçin Talep Oluştur',
    ctaHref: '/?hizmet=mekanik-servis#talep',
  },
  {
    slug: 'periyodik-bakim',
    title: 'Periyodik Bakım',
    shortDesc: 'Yağ, filtre ve temel kontroller.',
    heroDesc: 'Motor yağı, yağ/hava/polen filtresi değişimi, sıvı seviyeleri, akü ve temel aksam kontrolü.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: false,
    priceDisplay: 'Fiyat için talep oluşturun',
    cardImage: '/assets/periyodik-bakim.webp',
    cardAlt: 'Atölyede hava filtresi kontrolü',
    detailImage: '/assets/periyodik-bakim-2.webp',
    detailAlt: 'Periyodik bakımda motor ve filtre kontrolü',
    scope: [
      'Motor yağı değişimi',
      'Yağ filtresi, hava filtresi ve polen filtresi değişimi',
      'Motor ve fren sıvı seviyeleri kontrolü',
      'Akü ve temel elektrik/mekanik aksam kontrolü',
      'Aracın üretici bakım planına uygun periyodik kontrol',
    ],
    details: [
      'Periyodik bakım kapsamında aracınızın motor yağı ile yağ, hava ve polen filtreleri yenilenir; sıvı seviyeleri, akü durumu ve temel güvenlik aksamları kontrol edilir.',
      'Bakım aralıkları ve uygulanacak işlemler için ilgili aracın üretici bakım planı esas alınır.',
      'Parça ve sarf malzemesi değişimi içeren periyodik bakım, yalnızca gözlem ve ölçüm yapılan ücretsiz check-up hizmetinden ayrıdır.',
    ],
    pendingApprovalNotes: [
      {
        id: 'motul-ortaklik',
        label: 'Motul Ürün ve İş Ortaklığı Kaydı',
        legacyStatement: 'Eski site periyodik bakım bölümünde Motul ürünlerini ve Motul iş ortaklığını, Hakkımızda bölümünde ise Mobil iş ortaklığını belirtmektedir. Ürün/ortaklık ve logo kullanımı güncellenince ilgili alanda yayınlanacaktır.',
        status: 'draft',
      },
    ],
    ctaText: 'Periyodik Bakım İçin Talep Oluştur',
    ctaHref: '/?hizmet=periyodik-bakim#talep',
  },
  {
    slug: 'oto-elektrik',
    title: 'Oto Elektrik',
    shortDesc: 'Akü ve genel elektrik aksamı kontrol ve onarımı.',
    heroDesc: 'Eski sitede yer alan oto elektrik hizmeti; check-up kapsamındaki akü ve genel elektrik aksamı kontrolleriyle bağlantılı servis desteği.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: false,
    cardImage: '/assets/hero-mekanik-atolye.webp',
    cardAlt: 'Atölyede motor ve elektrik aksamı kontrolü',
    detailImage: '/assets/sss.webp',
    detailAlt: 'AGN Oto Servis elektrik ve akü kontrolü',
    scope: [
      'Akü durumu ve şarj kontrolü',
      'Genel elektrik aksamı ve aydınlatma kontrolleri',
      'Ücretsiz check-up kapsamındaki elektrik kontrolleriyle entegre arıza incelemesi',
    ],
    details: [
      'Kepez servisimizde binek ve hafif ticari araçlar için oto elektrik kontrol ve servis hizmeti sunulmaktadır.',
      'Ücretsiz check-up kapsamında yapılan akü ve genel elektrik aksamı kontrollerinde tespit edilen ihtiyaçlar doğrultusunda servis talebi oluşturabilirsiniz.',
    ],
    ctaText: 'Oto Elektrik İçin Talep Oluştur',
    ctaHref: '/?hizmet=oto-elektrik#talep',
  },
  {
    slug: 'ucretsiz-checkup',
    title: 'Ücretsiz Check-up',
    shortDesc: 'Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik kontrolleri.',
    heroDesc: '0 TL. Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik aksamı kontrolleri.',
    location: 'kepez',
    inServiceTool: true,
    requiresNote: false,
    priceDisplay: '0 TL',
    cardImage: '/assets/sss.webp',
    cardAlt: 'Atölyede araç başında kontrol yapan usta',
    detailImage: '/assets/atolye-gmc.webp',
    detailAlt: 'AGN atölyesinde ücretsiz check-up kontrolü',
    scope: [
      'Fren sistemi gözlem ve kontrolü',
      'Motor sıvıları seviye kontrolü',
      'Lastik diş derinliği kontrolü',
      'Akü kontrolü',
      'Genel elektrik aksamı kontrolü',
    ],
    details: [
      'Ücretsiz Check-up (0 TL), aracınızın temel sürüş güvenliği bileşenlerinin gözlem ve ölçümle kontrol edilmesini kapsar.',
      'Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik aksamı kontrol edilir.',
      'Önemli Not: Ücretsiz Check-up bir kontrol hizmetidir; yağ, filtre veya parça değişimi içeren Periyodik Bakım işleminden ayrıdır.',
    ],
    ctaText: 'Ücretsiz Check-up İçin Talep Oluştur',
    ctaHref: '/?hizmet=ucretsiz-checkup#talep',
  },
];

export const MELTEM_WASH_SERVICES = [
  {
    title: 'Oto Yıkama & Detaylı Yıkama',
    desc: 'İç ve dış oto yıkama, detaylı temizlik ve yüzey bakımı uygulamaları.',
  },
  {
    title: 'Oto Kuaför & Koltuk Yıkama',
    desc: 'Kabin içi detaylı temizlik, koltuk yıkama ve döşeme bakımı.',
  },
  {
    title: 'Pasta Cila & Seramik',
    desc: 'Boya yüzeyi parlatma, pasta cila ve seramik koruma uygulamaları.',
  },
  {
    title: 'Jant ve Far Parlatma',
    desc: 'Matlaşmış far yüzeylerinin parlatılması ve detaylı jant temizliği.',
  },
];

export const CAMPAIGNS: CampaignItem[] = [
  {
    slug: 'yag-bakimi',
    title: 'Yağ Bakımına Araç Yıkama Hediye',
    priceText: '5.000 TL’den başlayan fiyatlarla.',
    shortDesc: 'Periyodik yağ bakımında araç yıkama hediyesi kampanyası.',
    image: '/assets/yag-bakimi.webp',
    imageAlt: 'Motor yağı ekleme işlemi',
    status: 'pending_approval',
    showInPreview: true,
    showInLiveDefault: true, // Reference design includes section 7; toggleable via preview/live query or admin state
    legacyCtaText: 'Hemen Ara',
    legacyCtaHref: 'tel:+905433621901',
    details: [
      'Eski sitede yer alan kampanya kapsamında yağ bakımında araç yıkama hediyesi ve 5.000 TL’den başlayan fiyat bilgisi sunulmaktadır.',
      'Güncel araç modeli kapsamı, geçerlilik tarihi ve hediye yıkamanın hangi lokasyonda uygulanacağı bilgisi için doğrudan servisimizle iletişime geçebilirsiniz.',
    ],
    pendingConditions: [
      'Kampanyanın güncel geçerlilik tarihleri ve fiyat kapsamı',
      'Hangi araç segmentlerini (binek / hafif ticari) kapsadığı',
      'Hediye araç yıkamanın Kepez veya Meltem lokasyonlarından hangisinde verildiği',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'atolye-gmc',
    src: '/assets/atolye-gmc.webp',
    alt: 'AGN atölyesinde kaputu açık beyaz araç',
    title: 'Kepez Servis Atölyesi',
    caption: 'AGN Oto Servis Kepez atölyesinde araç kontrol ve bakım alanı.',
    location: 'kepez',
    category: 'Atölye',
    objectPosition: 'center 43%',
    featuredInHome: true,
    status: 'published',
  },
  {
    id: 'agn-garage-dis-cephe',
    src: '/assets/agn-garage-dis-cephe.webp',
    alt: 'AGN Garage dış cephesi',
    title: 'AGN Garage Dış Cephe',
    caption: 'Kepez Serik Caddesi üzerindeki servis dış cephe görünümü.',
    location: 'kepez',
    category: 'Dış Cephe',
    objectPosition: 'center 50%',
    featuredInHome: true,
    status: 'published',
  },
  {
    id: 'agn-oto-servis-tabela',
    src: '/assets/agn-oto-servis-tabela.webp',
    alt: 'AGN Oto Servis tabelası',
    title: 'AGN Oto Servis Tabelası',
    caption: 'AGN Oto Servis kurumsal tabela görünümü.',
    location: 'kepez',
    category: 'Kurumsal',
    objectPosition: 'center 50%',
    featuredInHome: true,
    status: 'published',
  },
  {
    id: 'hero-mekanik-atolye',
    src: '/assets/hero-mekanik-atolye.webp',
    alt: 'AGN atölyesinde motor üzerinde çalışan servis ustası',
    title: 'Motor ve Mekanik Müdahale',
    caption: 'Uzman ekibimiz tarafından motor bölmesinde gerçekleştirilen servis işlemi.',
    location: 'kepez',
    category: 'Mekanik',
    objectPosition: '53% 50%',
    status: 'published',
  },
  {
    id: 'hasar',
    src: '/assets/hasar.webp',
    alt: 'Atölyede ön kısmı hasarlı otomobil',
    title: 'Hasar Tespit ve Onarım Hazırlığı',
    caption: 'Kaza sonrası atölyeye kabul edilen aracın hasar inceleme süreci.',
    location: 'kepez',
    category: 'Hasar ve Onarım',
    status: 'published',
  },
  {
    id: 'onarim',
    src: '/assets/onarim.webp',
    alt: 'Hasar onarım aşamasındaki araç',
    title: 'Gövde ve Hasar Onarımı',
    caption: 'Hasarlı parçaların onarım ve montaj uygulaması.',
    location: 'kepez',
    category: 'Hasar ve Onarım',
    status: 'published',
  },
  {
    id: 'kaporta',
    src: '/assets/kaporta.webp',
    alt: 'Ön çamurlukta kaporta işlemi',
    title: 'Kaporta Düzeltme',
    caption: 'Gövde ve çamurluk yüzeyinde hassas kaporta düzeltme işlemi.',
    location: 'kepez',
    category: 'Kaporta & Boya',
    status: 'published',
  },
  {
    id: 'boya',
    src: '/assets/boya.webp',
    alt: 'Boya tabancası ile fırın boya uygulaması',
    title: 'Fırın Boya Uygulaması',
    caption: 'Orijinal renk koduna uygun ton eşleme ve boya tabancası uygulaması.',
    location: 'kepez',
    category: 'Kaporta & Boya',
    status: 'published',
  },
  {
    id: 'mekanik-servis',
    src: '/assets/mekanik-servis.webp',
    alt: 'Kaputu açık otomobil mekanik kontrol',
    title: 'Mekanik Servis Alanı',
    caption: 'Motor ve yürüyen aksam kontrolleri için servis istasyonu.',
    location: 'kepez',
    category: 'Mekanik',
    status: 'published',
  },
  {
    id: 'mekanik-servis-2',
    src: '/assets/mekanik-servis-2.webp',
    alt: 'Motor üzerinde çalışan mekanik ustası',
    title: 'Motor Bakım ve Onarım',
    caption: 'Motor aksamı üzerinde detaylı mekanik bakım işlemi.',
    location: 'kepez',
    category: 'Mekanik',
    status: 'published',
  },
  {
    id: 'periyodik-bakim',
    src: '/assets/periyodik-bakim.webp',
    alt: 'Atölyede hava filtresi kontrolü',
    title: 'Filtre ve Bakım Kontrolü',
    caption: 'Periyodik bakımda hava filtresi ve motor ekipmanları kontrolü.',
    location: 'kepez',
    category: 'Periyodik Bakım',
    status: 'published',
  },
  {
    id: 'periyodik-bakim-2',
    src: '/assets/periyodik-bakim-2.webp',
    alt: 'Periyodik bakım motor kontrolü',
    title: 'Periyodik Bakım Uygulaması',
    caption: 'Yağ, filtre ve sıvı seviyelerinin periyodik kontrolü.',
    location: 'kepez',
    category: 'Periyodik Bakım',
    status: 'published',
  },
  {
    id: 'yag-bakimi',
    src: '/assets/yag-bakimi.webp',
    alt: 'Motor yağı ekleme işlemi',
    title: 'Motor Yağı Değişimi',
    caption: 'Üretici standartlarına uygun motor yağı dolum işlemi.',
    location: 'kepez',
    category: 'Periyodik Bakım',
    status: 'published',
  },
  {
    id: 'hakkimizda',
    src: '/assets/hakkimizda.webp',
    alt: 'AGN Oto Servis atölye içi genel görünüm',
    title: 'Atölye İçi Genel Görünüm',
    caption: 'Kepez servis atölyemizin çalışma istasyonları.',
    location: 'kepez',
    category: 'Atölye',
    status: 'published',
  },
  {
    id: 'sss',
    src: '/assets/sss.webp',
    alt: 'Atölyede araç başında çalışan usta',
    title: 'Araç Başında Teknik Kontrol',
    caption: 'Servis kabul ve check-up kontrolleri.',
    location: 'kepez',
    category: 'Check-up',
    status: 'published',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'ucretsiz-checkup-kapsami',
    question: 'Ücretsiz check-up neleri kapsar?',
    answer: 'Frenler, motor sıvıları, lastik diş derinliği, akü ve genel elektrik aksamı kontrol edilir.',
    defaultOpen: true,
  },
  {
    id: 'hangi-hizmetler',
    question: 'Hangi hizmetleri sunuyorsunuz?',
    answer: 'Kaporta, boya, mekanik bakım, oto elektrik, detaylı yıkama, pasta cila ve ücretsiz check-up.',
  },
  {
    id: 'servise-ulasim',
    question: 'Servisinize nasıl ulaşırım?',
    answer: 'Servisimiz Antalya Kepez’de. Randevu için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.',
  },
];

export const PENDING_APPROVAL_INVENTORY = [
  {
    category: 'Kampanya Güncelliği ve Koşulları',
    detail: 'Yağ bakımına araç yıkama hediyesi ve 5.000 TL’den başlayan fiyat kampanyasının geçerlilik süresi, araç kapsamı ve yıkamanın hangi şubede verileceği.',
    status: 'Müşteri Onayı Bekliyor',
  },
  {
    category: 'Motul ve Mobil İş Ortaklıkları',
    detail: 'Eski sitede Periyodik Bakım altında geçen Motul ürün/iş ortaklığı ile Hakkımızda altında geçen Mobil iş ortaklığı beyanları ve marka/logo kullanım izinleri.',
    status: 'Envanterde Saklı / Teyit Bekliyor',
  },
  {
    category: 'Sigorta Anlaşmaları Kapsamı',
    detail: 'Eski sitedeki "Tüm sigorta şirketleriyle anlaşma" beyanının güncel poliçe/şirket listesi karşılığı.',
    status: 'Envanterde Saklı / Teyit Bekliyor',
  },
  {
    category: '7/24 Destek Beyanı ve Çalışma Saatleri',
    detail: 'Hakkımızda bölümündeki "7/24 iletişim ve destek" ifadesinin acil hat mı yoksa mesaj kanalı mı olduğu ve atölyenin resmi açık olduğu saatler.',
    status: 'Envanterde Saklı / Teyit Bekliyor',
  },
  {
    category: 'Meltem Oto Yıkama İletişim & Otopark',
    detail: 'Meltem şubesinin doğrudan telefon numarası, kesin harita pini ve Instagram paylaşımlarında geçen ücretsiz kapalı otopark bilgisinin güncelliği.',
    status: 'Müşteri Onayı Bekliyor',
  },
  {
    category: 'Kepez Harita Pini',
    detail: 'Serik Caddesi No: 97 Kepez/Antalya lokasyonunun Google Haritalar üzerindeki kesin koordinat doğrulaması.',
    status: 'Müşteri Onayı Bekliyor',
  },
  {
    category: 'Ticari Unvan, KVKK Veri Sorumlusu ve Form Alıcısı',
    detail: 'Resmi MERSİS/ticari unvan, KVKK veri sorumlusu bilgisi, randevu formunun iletileceği e-posta/CRM alıcısı ve İlay Ajans’ın sözleşmedeki tasarım/geliştirme rolü.',
    status: 'Müşteri Onayı Bekliyor',
  },
  {
    category: 'Görsel, Plaka/Yüz İzinleri ve Müşteri Yorumları',
    detail: 'Eski site ve @agnotomotiv Instagram Reels kapaklarının yayın izni, araç plakası/yüz izinleri ve doğrulanmış müşteri yorumu kaynağı.',
    status: 'Reels Kapakları ve Yorumlar Gizlendi / İzin Bekliyor',
  },
];
