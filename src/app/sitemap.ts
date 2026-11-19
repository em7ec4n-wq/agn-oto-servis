import { MetadataRoute } from 'next';
import { SERVICES, SITE_META } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_META.domain;
  const now = new Date();

  const staticPages = [
    '',
    '/hizmetler',
    '/oto-yikama',
    '/kampanyalar/yag-bakimi',
    '/galeri',
    '/hakkimizda',
    '/sss',
    '/iletisim',
    '/yasal-bilgilendirme',
    '/gizlilik',
    '/cerez-tercihleri',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/hizmetler') || route === '/iletisim' ? 0.9 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((srv) => ({
    url: `${baseUrl}/hizmetler/${srv.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticEntries, ...serviceEntries];
}
