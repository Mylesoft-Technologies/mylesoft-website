'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowUp, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { subscribeToNewsletter } from '@/app/actions/subscribeNewsletter'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubscribe() {
    if (!email) return
    setStatus('loading')
    const result = await subscribeToNewsletter(email)
    setStatus(result.success ? 'success' : 'error')
    if (result.success) setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white relative border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            
            {/* Brand Column */}
            <ScrollReveal direction="up" delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Logo size="lg" fallbackColor="gold" />
                  <div>
                    <h3 className="text-[14px] font-body font-bold text-white">MylesCorp</h3>
                    <p className="text-[10px] font-body text-gold uppercase tracking-[1.5px]">Technologies</p>
                  </div>
                </div>
                
                <p className="text-light-blue leading-relaxed max-w-sm font-body">
                  MylesCorp Technologies Ltd is a Nairobi-based software company 
                  dedicated to building innovative digital solutions that transform 
                  businesses and industries across Africa and beyond.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-light-blue">
                    <Mail className="w-5 h-5 text-gold" />
                    <span className="font-body">info@mylescorp.co.ke</span>
                  </div>
                  <div className="flex items-center space-x-3 text-light-blue">
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="font-body">+254 743 993 715</span>
                  </div>
                  <div className="flex items-center space-x-3 text-light-blue">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span className="font-body">Westlands, Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Products Column */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Products</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'EduMyles', href: '/products/edumyles', desc: 'School Management' },
                    { name: 'MylesCare', href: '/products/mylescare', desc: 'Healthcare Solutions' },
                    { name: 'AgriMyles', href: '/products/agrimyles', desc: 'Agricultural Tech' },
                    { name: 'MylesCRM', href: '/products/mylescrm', desc: 'Business Solutions' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className="group block"
                      >
                        <div className="text-light-blue hover:text-gold transition-all duration-300 font-body font-medium">
                          {item.name}
                        </div>
                        <div className="text-gray-400 text-sm group-hover:text-light-blue transition-colors duration-300">
                          {item.desc}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Company Column */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Company</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Products', href: '/products' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Pricing', href: '/pricing' },
                    { name: 'Our Team', href: '/team' },
                    { name: 'Careers', href: '/careers' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Partners', href: '/partners' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-gold transition-all duration-300 flex items-center group font-body"
                      >
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Newsletter Column */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Stay Connected</h3>
                <div className="text-gray-300 mb-6 font-body">
                  Get the latest updates on our innovative solutions and industry insights delivered to your inbox.
                </div>
                
                {status === 'success' ? (
                  <p className="text-green-400 text-sm font-body">
                    ✅ Subscribed! Check your email.
                  </p>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-3 py-2 bg-white/10 border
                                 border-white/20 rounded-md text-white
                                 text-sm placeholder:text-gray-400
                                 focus:outline-none focus:border-gold
                                 font-body"
                      onKeyDown={e =>
                        e.key === 'Enter' && handleSubscribe()
                      }
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={status === 'loading'}
                      className="px-4 py-2 bg-gold text-navy text-sm
                                 font-bold rounded-md font-body
                                 hover:bg-gold-light disabled:opacity-60
                                 transition-all duration-200"
                    >
                      {status === 'loading' ? '...' : 'Subscribe'}
                    </button>
                  </div>
                )}

                {status === 'error' && (
                  <p className="text-red-400 text-sm font-body">
                    ❌ Subscription failed. Please try again.
                  </p>
                )}

                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-light-blue text-sm font-body">Follow us on social media</p>
                  <div className="flex space-x-3">
                    {[
                      { name: 'linkedin', href: 'https://www.linkedin.com/company/mylescorp_tech' },
                      { name: 'facebook', href: 'https://web.facebook.com/mylescorp' },
                      { name: 'twitter', href: 'https://x.com/mylescorp_tech' },
                      { name: 'github', href: 'https://github.com/MylesCorp-Technologies' },
                      { name: 'youtube', href: 'https://www.youtube.com/@mylescorp_tech' }
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-navy-dark/50 border border-gold/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-gold hover:bg-navy-dark hover:border-gold/50 transform hover:scale-110 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon name={social.name} size={18} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 lg:space-y-0 gap-4 text-center sm:text-left">
                <p className="text-gray-400 text-sm font-body">
                  &copy; 2026 <span className="text-gold font-semibold">MylesCorp Technologies</span>. All rights reserved.
                </p>
                <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 text-sm">
                  <Link href="/legal/privacy" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                    Privacy Policy
                  </Link>
                  <Link href="/legal/terms" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                    Terms of Service
                  </Link>
                  <Link href="/legal/cookies" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                    Cookie Policy
                  </Link>
                  <Link href="/legal/compliance" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                    Compliance
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 text-sm">
                <Link href="/legal/privacy" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                  Terms of Service
                </Link>
                <Link href="/legal/cookies" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                  Cookie Policy
                </Link>
                <Link href="/legal/compliance" className="text-gray-300 hover:text-gold transition-colors duration-300 font-body">
                  Compliance
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.7}>
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-gray-300 hover:text-gold transition-all duration-300 font-body"
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Enhanced Tagline Section */}
        <ScrollReveal direction="fade" delay={0.8}>
          <div className="text-center py-8 border-t border-gold/20">
            <p className="text-gold font-display italic font-bold text-xl mb-4">
              Transforming Industries, Empowering Generations.
            </p>
            <p className="text-gray-300 text-sm font-body mb-6">
              Innovation • Excellence • Impact — The MylesCorp Promise
            </p>
            <div className="flex items-center justify-center space-x-12 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gray-400 text-xs font-body">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-500" />
                <span className="text-gray-400 text-xs font-body">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-1000" />
                <span className="text-gray-400 text-xs font-body">Data Protection Act</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
