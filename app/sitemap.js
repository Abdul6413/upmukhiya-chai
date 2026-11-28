import { SITE, NAV } from '@/components/data';
export default function sitemap() {
  return NAV.map((n) => ({
    url: `${SITE.url}${n.href === '/' ? '' : n.href}`,
    lastModified: new Date(),
    changeFrequency: n.href === '/' ? 'weekly' : 'monthly',
    priority: n.href === '/' ? 1 : n.href === '/franchise' ? 0.9 : 0.7,
  }));
}
