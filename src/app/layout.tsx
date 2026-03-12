import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: {
    default: 'Mylesoft Technologies - East Africa\'s Leading AI-Powered Software Company',
    template: '%s | Mylesoft Technologies'
  },
  description: 'Transforming Education, Healthcare, Agriculture & Business across East Africa with 20+ AI-powered software solutions. Built for Africa, by Africa.',
  keywords: ['AI software Kenya', 'school management system', 'hospital management software', 'EdTech Africa', 'HealthTech Kenya', 'AgriTech solutions'],
  authors: [{ name: 'Mylesoft Technologies' }],
  creator: 'Mylesoft Technologies',
  publisher: 'Mylesoft Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mylesoft.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mylesoft.com',
    title: 'Mylesoft Technologies - East Africa\'s Leading AI-Powered Software Company',
    description: 'Transforming Education, Healthcare, Agriculture & Business across East Africa with 20+ AI-powered software solutions.',
    siteName: 'Mylesoft Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mylesoft Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mylesoft Technologies - East Africa\'s Leading AI-Powered Software Company',
    description: 'Transforming Education, Healthcare, Agriculture & Business across East Africa with 20+ AI-powered software solutions.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
