import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { AnalyticsProvider } from '@/components/analytics/Analytics'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { LiveChat } from '@/components/ui/LiveChat'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Mylesoft Technologies - AI-Powered Software Solutions for East Africa',
  description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
  keywords: 'AI software Kenya, school management system, hospital management software, agricultural technology, business solutions, East Africa',
  authors: [{ name: 'Mylesoft Technologies' }],
  creator: 'Mylesoft Technologies',
  publisher: 'Mylesoft Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mylesoft.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mylesoft.com',
    title: 'Mylesoft Technologies - AI-Powered Software Solutions for East Africa',
    description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
    siteName: 'Mylesoft Technologies',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mylesoft Technologies - AI-Powered Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mylesoft Technologies - AI-Powered Software Solutions for East Africa',
    description: 'East Africa\'s leading AI-powered software company. Transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
    images: ['/og-image.svg'],
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
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
        <link rel="icon" type="image/svg+xml" sizes="192x192" href="/icon-192x192.svg" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/icon-512x512.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        
        {/* SEO */}
        <link rel="canonical" href="https://mylesoft.com" />
        <link rel="alternate" hrefLang="en" href="https://mylesoft.com" />
        <link rel="alternate" hrefLang="x-default" href="https://mylesoft.com" />
        <link rel="alternate" type="application/rss+xml" title="Mylesoft Technologies Blog RSS Feed" href="https://mylesoft.com/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mylesoft Technologies",
              "url": "https://mylesoft.com",
              "logo": "https://mylesoft.com/logo.png",
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
                "https://www.linkedin.com/company/mylesoft-technologies",
                "https://twitter.com/mylesofttech",
                "https://github.com/Mylesoft-Technologies"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-dark-grey antialiased">
        <div className="skip-to-main">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy-500 text-white p-2 rounded">
            Skip to main content
          </a>
        </div>
        
        <main id="main-content">
          {children}
        </main>
        
        <CookieConsent />
        <WhatsAppButton />
        <LiveChat />
        <AnalyticsProvider />
      </body>
    </html>
  )
}
