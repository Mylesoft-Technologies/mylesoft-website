'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowUp, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-DEFAULT text-white relative overflow-hidden border-t border-gold-DEFAULT/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <ScrollReveal direction="up" delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Logo size="lg" fallbackColor="gold" />
                  <div>
                    <h3 className="text-[14px] font-body font-bold text-white">MylesCorp</h3>
                    <p className="text-[10px] font-body text-gold-DEFAULT uppercase tracking-[1.5px]">Technologies Ltd</p>
                  </div>
                </div>
                
                <p className="text-navy-200 leading-relaxed max-w-sm">
                  Transforming industries across East Africa with innovative AI-powered solutions. 
                  Your trusted partner for digital excellence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-navy-200">
                    <Mail className="w-5 h-5 text-gold-400" />
                    <span>info@mylescorp.co.ke</span>
                  </div>
                  <div className="flex items-center space-x-3 text-navy-200">
                    <Phone className="w-5 h-5 text-gold-400" />
                    <span>+254 743993715</span>
                  </div>
                  <div className="flex items-center space-x-3 text-navy-200">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Products Column */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-6">Products</h3>
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
                        <div className="text-light-blue hover:text-gold-DEFAULT transition-all duration-300 font-body font-medium">
                          {item.name}
                        </div>
                        <div className="text-muted-blue text-sm group-hover:text-light-blue transition-colors duration-300">
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
                <h3 className="text-xl font-bold text-white mb-6">Company</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'About Us', href: '/about' },
                    { name: 'Our Team', href: '/team' },
                    { name: 'Careers', href: '/careers' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Partners', href: '/partners' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className="text-muted-blue hover:text-gold-DEFAULT transition-all duration-300 flex items-center group font-body"
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
                <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
                <div className="text-muted-blue mb-4 font-body">
                  Get the latest updates on our innovative solutions and industry insights.
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-navy-dark/50 border border-gold-DEFAULT/20 rounded-lg text-white placeholder-muted-blue focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 font-body"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gold-DEFAULT text-navy-DEFAULT hover:bg-gold-light shadow-gold hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 font-body font-bold"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <span className="flex items-center justify-center">
                        <Heart className="w-4 h-4 mr-2" />
                        Subscribed!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Subscribe
                      </span>
                    )}
                  </Button>
                </form>

                {/* Social Links */}
                <div className="space-y-3">
                  <p className="text-navy-200 text-sm">Follow us</p>
                  <div className="flex space-x-3">
                    {[
                      { name: 'linkedin', href: 'https://www.linkedin.com/company/mylescorp_tech' },
                      { name: 'twitter', href: 'https://x.com/mylescorp_tech' },
                      { name: 'github', href: 'https://github.com/MylesCorp-Technologies' },
                      { name: 'youtube', href: 'https://www.youtube.com/@mylescorp_tech' }
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-navy-dark/50 border border-gold-DEFAULT/20 rounded-lg flex items-center justify-center text-muted-blue hover:text-gold-DEFAULT hover:bg-navy-dark hover:border-gold-DEFAULT/50 transform hover:scale-110 transition-all duration-300"
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
        <div className="border-t border-gold-DEFAULT/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <ScrollReveal direction="up" delay={0.5}>
              <div className="text-muted-blue text-sm font-body">
                © {currentYear} <span className="text-gold-DEFAULT font-semibold">MylesCorp Technologies Ltd</span>. All rights reserved.
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-muted-blue hover:text-gold-DEFAULT transition-colors duration-300 font-body">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-blue hover:text-gold-DEFAULT transition-colors duration-300 font-body">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-muted-blue hover:text-gold-DEFAULT transition-colors duration-300 font-body">
                  Cookie Policy
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.7}>
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-muted-blue hover:text-gold-DEFAULT transition-all duration-300 font-body"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Tagline */}
        <ScrollReveal direction="fade" delay={0.8}>
          <div className="text-center py-6 border-t border-gold-DEFAULT/20">
            <p className="text-gold-DEFAULT font-display italic font-bold text-[13px]">
              Transforming Industries, Empowering Generation.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </footer>
  )
}
