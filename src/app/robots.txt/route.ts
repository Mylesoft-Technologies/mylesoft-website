import { NextResponse } from 'next/server'

export function GET() {
  const robotsTxt = `# Mylesoft Technologies - Robots.txt
# Website: https://mylesoft.com
# Last updated: ${new Date().toISOString()}

User-agent: *
Allow: /

# Prioritize important pages
Crawl-delay: 1

# Sitemap
Sitemap: https://mylesoft.com/sitemap.xml
Sitemap: https://mylesoft.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /*.json$

# Allow specific API endpoints for SEO
Allow: /api/search/
Allow: /api/blog/

# Block common bot patterns
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Allow search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Image optimization
User-agent: Googlebot-Image
Allow: /images/
Allow: /public/

User-agent: Bingbot-Image
Allow: /images/
Allow: /public/`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}
