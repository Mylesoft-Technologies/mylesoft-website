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
          className="flex items-center space-x-1 text-medium-grey hover:text-navy-500 transition-colors py-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Products</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Mega Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-screen max-w-7xl bg-white border border-light-grey rounded-2xl shadow-2xl mt-2 z-50 overflow-hidden">
            <div className="flex">
              {/* Categories Sidebar */}
              <div className="w-80 bg-off-white border-r border-light-grey p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-navy-500">Our Solutions</h3>
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
                          ? 'bg-white text-navy-500 border-l-4 border-gold-400'
                          : 'hover:bg-white text-medium-grey'
                      }`}
                      onMouseEnter={() => handleCategoryHover(category.title)}
                    >
                      <h4 className="font-semibold">{category.title}</h4>
                      <p className="text-sm text-medium-grey mt-1">
                        {category.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-white rounded-lg border border-light-grey">
                  <h4 className="font-semibold text-navy-500 mb-3">Get Started</h4>
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
                          className="group p-6 bg-white border border-light-grey rounded-xl hover:border-gold-400 hover:shadow-lg transition-all duration-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center text-gold-600 group-hover:bg-gold-200 transition-colors">
                                {product.icon}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-navy-500 group-hover:text-gold-500 transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-medium-grey">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {product.popular && (
                                <span className="px-2 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                              {product.badge && (
                                <span className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-semibold rounded-full">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            {product.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                                <span className="text-sm text-medium-grey">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gold-500 text-sm font-medium group-hover:text-gold-600 transition-colors">
                              Learn more
                            </span>
                            <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-500 mb-2">
                      Explore Our Solutions
                    </h3>
                    <p className="text-medium-grey mb-6">
                      Choose a category to see our AI-powered products designed for East African businesses
                    </p>
                    
                    {/* Featured Products Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      {categories.slice(0, 3).map((category) => (
                        <div key={category.title} className="p-4 bg-off-white rounded-lg border border-light-grey">
                          <h4 className="font-semibold text-navy-500 mb-2">{category.title}</h4>
                          <p className="text-sm text-medium-grey mb-3">{category.description}</p>
                          <div className="space-y-1">
                            {category.products.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                onClick={closeMenu}
                                className="flex items-center space-x-2 text-sm text-gold-500 hover:text-gold-600 transition-colors"
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
              <div className="w-64 bg-navy-500 text-white p-6 hidden xl:block">
                <h3 className="text-lg font-bold mb-4">Why Choose MylesCorp?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">East African Focus</h4>
                      <p className="text-sm text-navy-200">
                        Solutions designed for African markets and challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Secure & Compliant</h4>
                      <p className="text-sm text-navy-200">
                        Data protection and regulatory compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">AI-Powered</h4>
                      <p className="text-sm text-navy-200">
                        Cutting-edge artificial intelligence technology
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm text-navy-200">
                        Round-the-clock customer assistance
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/about" onClick={closeMenu}>
                    <Button variant="secondary" className="w-full bg-white text-navy-500 hover:bg-off-white">
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
