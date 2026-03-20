'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, X, ArrowRight, Star, Shield, Zap, Users, Globe, Heart, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Product {
  name: string
  description: string
  href: string
  icon: React.ReactNode
  features: string[]
  badge?: string
  popular?: boolean
}

interface Category {
  title: string
  description: string
  products: Product[]
}

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const categories: Category[] = [
    {
      title: 'Education',
      description: 'Transform learning with AI-powered education solutions',
      products: [
        {
          name: 'EduMyles',
          description: 'Complete school management system',
          href: '/products/edumyles',
          icon: <Target className="w-5 h-5" />,
          features: ['Student Management', 'AI Grading', 'Parent Portal', 'Analytics'],
          popular: true
        }
      ]
    },
    {
      title: 'Healthcare',
      description: 'Revolutionize healthcare delivery with smart technology',
      products: [
        {
          name: 'MylesCare',
          description: 'Intelligent hospital management',
          href: '/products/mylescare',
          icon: <Heart className="w-5 h-5" />,
          features: ['Patient Records', 'AI Diagnostics', 'Appointment System', 'Billing']
        }
      ]
    },
    {
      title: 'Agriculture',
      description: 'Empower farmers with data-driven agricultural solutions',
      products: [
        {
          name: 'AgriMyles',
          description: 'Smart agricultural platform',
          href: '/products/agrimyles',
          icon: <Globe className="w-5 h-5" />,
          features: ['Crop Monitoring', 'Weather Analytics', 'Market Prices', 'Farm Management']
        }
      ]
    },
    {
      title: 'Business',
      description: 'Accelerate business growth with intelligent solutions',
      products: [
        {
          name: 'MylesCRM',
          description: 'Customer relationship management',
          href: '/products/mylescrm',
          icon: <Users className="w-5 h-5" />,
          features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Automation']
        },
        {
          name: 'Myles AI',
          description: 'Custom AI development services',
          href: '/products/myles-ai',
          icon: <Zap className="w-5 h-5" />,
          features: ['Machine Learning', 'NLP Solutions', 'Computer Vision', 'Consulting'],
          badge: 'New'
        }
      ]
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveCategory(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setActiveCategory(null)
    }, 200)
  }

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveCategory(null)
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Products Dropdown Trigger */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex items-center space-x-1 text-light-blue hover:text-gold transition-colors py-2 font-body font-medium text-[14px] tracking-[0.3px] group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Products</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
        </button>

        {/* Mega Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-screen max-w-7xl bg-white border border-gold/20 rounded-2xl shadow-2xl mt-2 z-50 overflow-hidden">
            <div className="flex">
              {/* Categories Sidebar */}
              <div className="w-80 bg-gray-50 border-r border-gold/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display font-bold text-navy mb-4">Our Solutions</h3>
                  <button
                    onClick={closeMenu}
                    className="p-1 hover:bg-white rounded-lg transition-colors lg:hidden"
                  >
                    <X size={20} className="text-medium-grey" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.title}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeCategory === category.title
                          ? 'bg-white text-navy border-l-4 border-gold'
                          : 'hover:bg-white text-gray-600'
                      }`}
                      onMouseEnter={() => handleCategoryHover(category.title)}
                    >
                      <h4 className="font-semibold font-body">{category.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 font-body">
                        {category.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-white rounded-lg border border-gold/20">
                  <h4 className="font-semibold text-navy mb-3 font-body">Get Started</h4>
                  <div className="space-y-2">
                    <Link href="/book-demo" onClick={closeMenu}>
                      <Button size="sm" className="w-full">
                        Book a Demo
                      </Button>
                    </Link>
                    <Link href="/pricing" onClick={closeMenu}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Products Content */}
              <div className="flex-1 p-6">
                {activeCategory ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categories
                      .find((cat) => cat.title === activeCategory)
                      ?.products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={closeMenu}
                          className="group p-6 bg-white border border-gold/20 rounded-xl hover:border-gold hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                                {product.icon}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors font-body">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-gray-600 font-body">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {product.popular && (
                                <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full font-body">
                                  Popular
                                </span>
                              )}
                              {product.badge && (
                                <span className="px-2 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full font-body">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            {product.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                                <span className="text-sm text-gray-600 font-body">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors font-body">
                              Learn more
                            </span>
                            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2 font-display">
                      Explore Our Solutions
                    </h3>
                    <p className="text-gray-600 mb-6 font-body">
                      Choose a category to see our AI-powered products designed for East African businesses
                    </p>
                    
                    {/* Featured Products Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      {categories.slice(0, 3).map((category) => (
                        <div key={category.title} className="p-4 bg-gray-50 rounded-lg border border-gold/20">
                          <h4 className="font-semibold text-navy mb-2 font-body">{category.title}</h4>
                          <p className="text-sm text-gray-600 mb-3 font-body">{category.description}</p>
                          <div className="space-y-1">
                            {category.products.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                onClick={closeMenu}
                                className="flex items-center space-x-2 text-sm text-gold hover:text-gold-light transition-colors font-body"
                              >
                                <span>{product.name}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Benefits Sidebar */}
              <div className="w-64 bg-navy text-white p-6 hidden xl:block">
                <h3 className="text-lg font-bold mb-4 font-display">Why Choose MylesCorp?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold font-body">East African Focus</h4>
                      <p className="text-sm text-light-blue font-body">
                        Solutions designed for African markets and challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold font-body">Secure & Compliant</h4>
                      <p className="text-sm text-light-blue font-body">
                        Data protection and regulatory compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold font-body">AI-Powered</h4>
                      <p className="text-sm text-light-blue font-body">
                        Cutting-edge artificial intelligence technology
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold font-body">24/7 Support</h4>
                      <p className="text-sm text-light-blue font-body">
                        Round-the-clock customer assistance
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/about" onClick={closeMenu}>
                    <Button variant="secondary" className="w-full font-body">
                      About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
