import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, DM_Mono } 
  from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { AnalyticsProvider } from '@/components/analytics/Analytics'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { LiveChat } from '@/components/ui/LiveChat'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MylesCorp Technologies - AI-Powered Software Solutions for East Africa',
  description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
  keywords: 'AI software Kenya, school management system, hospital management software, agricultural technology, business solutions, East Africa',
  authors: [{ name: 'MylesCorp Technologies' }],
  creator: 'MylesCorp Technologies',
  publisher: 'MylesCorp Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mylescorp.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mylescorp.co.ke',
    title: 'MylesCorp Technologies - AI-Powered Software Solutions for East Africa',
    description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
    siteName: 'MylesCorp Technologies',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MylesCorp Technologies - AI-Powered Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MylesCorp Technologies - AI-Powered Software Solutions for East Africa',
    description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification: example-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${dmMono.variable}`}>
      <head>
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        
        {/* SEO */}
        <link rel="canonical" href="https://mylescorp.co.ke" />
        <link rel="alternate" hrefLang="en" href="https://mylescorp.co.ke" />
        <link rel="alternate" hrefLang="x" href="https://mylescorp.co.ke" />
        <link rel="alternate" type="application/rss+xml" title="MylesCorp Technologies Blog RSS Feed" href="https://mylescorp.co.ke/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MylesCorp Technologies",
              "url": "https://mylescorp.co.ke",
              "logo": "https://mylescorp.co.ke/logo.png",
              "description": "East Africa's leading AI-powered software company building innovative solutions for Education, Healthcare, Agriculture, and Business.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wester Heights, Westlands",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "postalCode": "00100",
                "addressCountry": "Kenya"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254 743 993 715",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mylescorp-technologies",
                "https://twitter.com/mylescorptech",
                "https://github.com/MylesCorp-Technologies"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-body">
        {/* Skip to main content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:rounded-md font-body font-semibold transition-all duration-300"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-1 relative">
            {children}
          </main>
        </div>
        
        <CookieConsent />
        <WhatsAppButton />
        <LiveChat />
        <AnalyticsProvider />
      </body>
    </html>
  )
}
