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
  title: {
    default: 'MylesCorp Technologies Ltd - AI-Powered Software Solutions',
    template: '%s | MylesCorp Technologies',
  },
  description:
    'East Africa\'s leading AI-powered software company delivering ' +
    'innovative solutions for Education, Healthcare, Agriculture, ' +
    'and Business across East Africa and beyond.',
  keywords: [
    'MylesCorp', 'MylesCorp Technologies',
    'School Management System Kenya',
    'Healthcare Software Kenya',
    'EduMyles', 'MylesCare', 'AgriMyles', 'MylesCRM',
    'AI Software East Africa',
    'EdTech Kenya', 'HealthTech Kenya',
  ],
  authors: [{ name: 'MylesCorp Technologies Ltd' }],
  creator: 'MylesCorp Technologies Ltd',
  publisher: 'MylesCorp Technologies Ltd',
  metadataBase: new URL('https://www.mylescorp.co.ke'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.mylescorp.co.ke',
    siteName: 'MylesCorp Technologies Ltd',
    title: 'MylesCorp Technologies — AI-Powered Software Solutions',
    description:
      'East Africa\'s leading AI-powered software company ' +
      'transforming Education, Healthcare, Agriculture, ' +
      'and Business.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MylesCorp Technologies Ltd',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MylesCorp Technologies Ltd',
    description:
      'AI-powered software solutions for East Africa.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
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
