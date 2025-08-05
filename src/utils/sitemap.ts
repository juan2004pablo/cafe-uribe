
export const generateSitemap = () => {
  const baseUrl = 'https://cafeuribe.com';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/nosotros', priority: '0.8', changefreq: 'monthly' },
    { url: '/variedades', priority: '0.9', changefreq: 'weekly' },
    { url: '/clientes-b2b', priority: '0.7', changefreq: 'monthly' },
    { url: '/contacto', priority: '0.6', changefreq: 'monthly' },
    { url: '/galeria', priority: '0.5', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};
