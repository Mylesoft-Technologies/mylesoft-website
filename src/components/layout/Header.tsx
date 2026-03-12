'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'
import { useSmoothScroll } from '@/components/ui/ScrollReveal'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll()

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Stats', href: '#stats' },
    { name: 'Features', href: '#features' },
    { name: 'Progress', href: '#progress' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href.substring(1), 80)
    } else {
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size="md" className="group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-3 text-xl font-bold text-navy-500 group-hover:text-gold-500 transition-colors duration-300">Mylesoft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <MegaMenu />
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-gray-600 hover:text-navy-500 transition-colors duration-200 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Link href="/book-demo">
              <Button size="sm" className="shadow-lg hover:shadow-xl">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-navy-500 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200/50">
          <div className="px-4 py-6 space-y-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('/products')}
                className="block px-4 py-3 text-lg font-medium text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-left"
              >
                Products
              </button>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-4 py-3 text-lg font-medium text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
              <div className="flex justify-center">
                <DarkModeToggle />
              </div>
              <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full shadow-lg hover:shadow-xl">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
