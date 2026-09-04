import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://homi.rcconstante.dev';
  const pages = ['', '/privacy/', '/terms/', '/support/', '/licenses/'];
  return pages.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date('2026-09-04'),
    changeFrequency: index === 0 ? 'monthly' : 'yearly',
    priority: index === 0 ? 1 : 0.5,
  }));
}
