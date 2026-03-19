'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'
import { useSmoothScroll } from '@/components/ui/ScrollReveal'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollToElement } = useSmoothScroll()
  
  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold-DEFAULT z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-gold-DEFAULT/25 shadow-lg shadow-navy-900/20'
          : 'bg-navy-deep/80 backdrop-blur-sm border-b border-gold-DEFAULT/15'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" transitionTypes={['fade']} className="flex items-center group">
            <Logo size="md" className="group-hover:scale-110 transition-transform duration-300" />
            <div className="ml-3 flex flex-col">
              <span className="text-[14px] font-body font-bold text-white group-hover:text-gold-DEFAULT transition-colors duration-300">MylesCorp</span>
              <span className="text-[10px] font-body text-gold-DEFAULT uppercase tracking-[1.5px]">Technologies Ltd</span>
            </div>
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
                  className="relative text-light-blue hover:text-gold-DEFAULT transition-all duration-200 font-body font-medium text-[14px] tracking-[0.3px] group"
                >
                  {item.name}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-gold-DEFAULT group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Link href="/book-demo" transitionTypes={['slide']}>
              <Button 
                size="sm" 
                variant="primary"
                className="shadow-lg hover:shadow-xl bg-gold-DEFAULT text-navy-DEFAULT hover:bg-gold-light hover:-translate-y-1 font-body font-bold text-[14px] tracking-[0.4px]"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-light-blue hover:text-gold-DEFAULT hover:bg-navy-dark/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-md border-t border-gold-DEFAULT/20">
          <div className="px-4 py-6 space-y-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-4 py-[11px] text-lg font-body font-medium text-light-blue hover:text-gold-DEFAULT hover:bg-navy-dark/50 rounded-lg transition-colors duration-200 text-left border-l-2 border-transparent hover:border-gold-DEFAULT"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold-DEFAULT/20 space-y-4">
              <div className="flex justify-center">
                <DarkModeToggle />
              </div>
              <Link href="/book-demo" transitionTypes={['slide']} onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  variant="primary"
                  className="w-full shadow-lg hover:shadow-xl bg-gold-DEFAULT text-navy-DEFAULT hover:bg-gold-light font-body font-bold"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
