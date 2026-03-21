'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const isBrochure = pathname.startsWith('/brochure')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isBrochure && <Header />}
      <main id="main-content" className="flex-1 relative">
        {children}
      </main>
      {!isBrochure && <Footer />}
    </div>
  )
}
