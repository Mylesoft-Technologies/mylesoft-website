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
    { name: 'Products', href: '/products' },
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 backdrop-blur-md border-b border-gold-400/20 shadow-lg shadow-navy-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" transitionTypes={['fade']} className="flex items-center group">
            <Logo size="md" className="group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-3 text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">Mylesoft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <MegaMenu />
            {navigation
              .filter((item) => item.name !== 'Products')
              .map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-gray-200 hover:text-gold-400 transition-colors duration-200 font-medium group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Link href="/book-demo" transitionTypes={['slide']}>
              <Button size="sm" className="shadow-lg hover:shadow-xl">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-200 hover:text-gold-400 hover:bg-navy-600/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-navy-700 to-navy-800 border-t border-gold-400/20">
          <div className="px-4 py-6 space-y-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-4 py-3 text-lg font-medium text-gray-200 hover:text-gold-400 hover:bg-navy-600/50 rounded-lg transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold-400/20 space-y-4">
              <div className="flex justify-center">
                <DarkModeToggle />
              </div>
              <Link href="/book-demo" transitionTypes={['slide']} onClick={() => setIsMobileMenuOpen(false)}>
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
