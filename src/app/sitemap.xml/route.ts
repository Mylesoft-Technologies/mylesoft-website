import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://mylesoft.com'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/careers', priority: '0.7', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/book-demo', priority: '0.8', changefreq: 'monthly' }
  ]

  // Product pages
  const productPages = [
    { url: '/products/edumyles', priority: '0.8', changefreq: 'monthly' },
    { url: '/products/mylescare', priority: '0.8', changefreq: 'monthly' },
    { url: '/products/agrimyles', priority: '0.8', changefreq: 'monthly' },
    { url: '/products/mylescrm', priority: '0.8', changefreq: 'monthly' },
    { url: '/products/myles-ai', priority: '0.8', changefreq: 'monthly' }
  ]

  // Blog posts (mock data - in production, this would come from your CMS)
  const blogPosts = [
    { url: '/blog/transforming-education-ai-kenya', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/future-healthcare-ai-africa', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/agricultural-technology-kenya', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/digital-transformation-east-africa', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/ai-solutions-kenyan-businesses', priority: '0.6', changefreq: 'monthly' }
  ]

  // Career pages (mock data - in production, this would come from your job board)
  const careerPages = [
    { url: '/careers/senior-fullstack-developer', priority: '0.6', changefreq: 'weekly' },
    { url: '/careers/product-manager', priority: '0.6', changefreq: 'weekly' },
    { url: '/careers/ui-ux-designer', priority: '0.6', changefreq: 'weekly' },
    { url: '/careers/data-scientist', priority: '0.6', changefreq: 'weekly' },
    { url: '/careers/devops-engineer', priority: '0.6', changefreq: 'weekly' }
  ]

  // Legal pages
  const legalPages = [
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-of-service', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookie-policy', priority: '0.5', changefreq: 'yearly' }
  ]

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...productPages,
    ...blogPosts,
    ...careerPages,
    ...legalPages
  ]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
