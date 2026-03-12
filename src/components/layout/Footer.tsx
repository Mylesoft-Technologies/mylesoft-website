import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'EduMyles', href: '/products/edumyles' },
      { name: 'MylesCare', href: '/products/mylescare' },
      { name: 'MylesCRM', href: '/products/mylescrm' },
      { name: 'AgriMyles', href: '/products/agrimyles' },
      { name: 'Myles AI', href: '/products/myles-ai' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/mylesoft', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mylesoft', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/Mylesoft-Technologies', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@mylesoft', label: 'YouTube' },
  ]

  return (
    <footer className="bg-navy-500 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-navy-500 font-bold text-lg">M</span>
              </div>
              <span className="ml-2 text-2xl font-bold">Mylesoft</span>
            </div>
            <p className="text-navy-100 mb-6 leading-relaxed">
              Transforming Industries, Empowering Generations. East Africa's leading AI-powered software company building solutions for Education, Healthcare, Agriculture, and Business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-navy-100">
                <Mail size={18} className="mr-3 text-gold-400" />
                <span>info@mylesoft.com</span>
              </div>
              <div className="flex items-center text-navy-100">
                <Phone size={18} className="mr-3 text-gold-400" />
                <span>+254 743 993 715</span>
              </div>
              <div className="flex items-center text-navy-100">
                <MapPin size={18} className="mr-3 text-gold-400" />
                <span>Westlands, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-navy-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-navy-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-navy-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-400 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-400 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-navy-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-navy-100 text-sm">
              © {currentYear} Mylesoft Technologies Limited. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
