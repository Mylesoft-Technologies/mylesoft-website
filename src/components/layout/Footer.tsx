import React from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-500 text-white">
      <div className="container">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Products Column */}
            <div>
              <h3 className="heading-3 mb-6 text-white">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/edumyles" className="text-navy-200 hover:text-gold-400 transition-colors">
                    EduMyles
                  </Link>
                </li>
                <li>
                  <Link href="/products/mylescare" className="text-navy-200 hover:text-gold-400 transition-colors">
                    MylesCare
                  </Link>
                </li>
                <li>
                  <Link href="/products/agrimyles" className="text-navy-200 hover:text-gold-400 transition-colors">
                    AgriMyles
                  </Link>
                </li>
                <li>
                  <Link href="/products/mylescrm" className="text-navy-200 hover:text-gold-400 transition-colors">
                    MylesCRM
                  </Link>
                </li>
                <li>
                  <Link href="/products/myles-ai" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Myles AI
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-navy-200 hover:text-gold-400 transition-colors">
                    All Products →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="heading-3 mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-navy-200 hover:text-gold-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/book-demo" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="heading-3 mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-navy-200 hover:text-gold-400 transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="heading-3 mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-navy-200 mb-1">Email</p>
                  <a href="mailto:info@mylesoft.com" className="text-gold-400 hover:text-gold-300 transition-colors">
                    info@mylesoft.com
                  </a>
                </div>
                <div>
                  <p className="text-navy-200 mb-1">Phone</p>
                  <a href="tel:+254743993715" className="text-gold-400 hover:text-gold-300 transition-colors">
                    +254 743 993 715
                  </a>
                </div>
                <div>
                  <p className="text-navy-200 mb-1">Office</p>
                  <p className="text-navy-200">
                    Wester Heights, Westlands<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://linkedin.com/company/mylesoft-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-gold-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size={20} />
                </a>
                <a
                  href="https://twitter.com/mylesofttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-gold-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Icon name="twitter" size={20} />
                </a>
                <a
                  href="https://github.com/Mylesoft-Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-gold-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Icon name="github" size={20} />
                </a>
                <a
                  href="https://youtube.com/@mylesofttechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-gold-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Icon name="youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-navy-400 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <Logo size="sm" fallbackColor="gold" />
                <p className="text-navy-200 mb-2">
                  Transforming Industries, Empowering Generations.
                </p>
                <p className="text-sm text-navy-300">
                  {currentYear} Mylesoft Technologies Limited. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
                <Link href="/legal/privacy" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/legal/cookies" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
