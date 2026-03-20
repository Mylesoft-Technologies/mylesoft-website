'use client'

import React, { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { EDUMYLES_DATA } from '@/lib/constants/products'
import { EDURYDE_DATA } from '@/lib/constants/products'
import { MYLESCARE_DATA } from '@/lib/constants/products'
import { AGRIMYLES_DATA } from '@/lib/constants/products'
import { MYLESCRM_DATA } from '@/lib/constants/products'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'MylesCorp Technologies — Products',
  description: 'Explore MylesCorp\'s suite of AI-powered products: EduMyles (school management), MylesCare (healthcare), AgriMyles (agriculture), MylesCRM (business) — built for East Africa.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products',
  },
}

const products = [
  { id: 'edumyles', name: 'EduMyles', data: EDUMYLES_DATA, badge: 'LIVE' },
  { id: 'eduryde', name: 'EduRyde', data: EDURYDE_DATA, badge: 'LIVE' },
  { id: 'mylescare', name: 'MylesCare', data: MYLESCARE_DATA, badge: 'LIVE' },
  { id: 'agrimyles', name: 'AgriMyles', data: AGRIMYLES_DATA, badge: 'LIVE' },
  { id: 'mylescrm', name: 'MylesCRM', data: MYLESCRM_DATA, badge: 'LIVE' },
]

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState('edumyles')

  const currentProduct = products.find(p => p.id === activeProduct)
  const data = currentProduct?.data

  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5%] h-16" style={{
          background: 'rgba(8,14,24,0.92)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(199,150,57,0.15)',
        }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[16px]" style={{
              background: 'linear-gradient(135deg,var(--navy),var(--navy-dark))',
              border: '1.5px solid var(--gold)',
              color: 'var(--gold)',
              fontFamily: 'Playfair Display, serif',
            }}>
              M
            </div>
            <div>
              <div className="font-bold text-[13px]" style={{ color: 'var(--white)' }}>MylesCorp</div>
              <div className="text-[9px]" style={{ 
                color: 'var(--gold)', 
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}>
                Technologies Ltd
              </div>
            </div>
          </div>
          <a 
            href="/book-demo"
            className="px-5 py-2 rounded-md text-[13px] font-bold no-underline cursor-pointer"
            style={{
              background: 'var(--gold)',
              color: 'var(--navy)',
            }}
          >
            Book a Demo
          </a>
        </nav>

        {/* Product Tabs */}
        <div className="sticky top-16 z-[900] flex gap-0 overflow-x-auto px-[5%]" style={{
          background: 'rgba(8,14,24,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(199,150,57,0.12)',
        }}>
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`px-6 py-4 text-[13px] font-semibold cursor-pointer relative whitespace-nowrap transition-colors duration-200 ${
                activeProduct === product.id ? 'text-[var(--gold)]' : 'text-[rgba(255,255,255,0.5)]'
              }`}
              onMouseEnter={(e) => {
                if (activeProduct !== product.id) {
                  e.currentTarget.style.color = 'var(--white)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeProduct !== product.id) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                }
              }}
            >
              {product.name}{' '}
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[9px] font-bold ml-1.5" style={{
                background: 'rgba(39,174,96,0.15)',
                color: '#27ae60',
                border: '1px solid rgba(39,174,96,0.3)',
                letterSpacing: '0.5px',
              }}>
                {product.badge}
              </span>
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)] transition-transform duration-200"
                style={{
                  transform: activeProduct === product.id ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Product Pages */}
        {products.map((product) => (
          <div 
            key={product.id}
            style={{ display: activeProduct === product.id ? 'block' : 'none' }}
          >
            {data && (
              <>
                {/* Hero */}
                <ProductHero {...data.hero} />

                {/* Stats */}
                <StatsSection stats={data.overview.stats} />

                {/* Overview */}
                <OverviewSection 
                  title={product.name}
                  description={data.overview.description.split('\n\n')}
                  stats={[
                    { number: "99.9%", label: "System uptime" },
                    { number: "3 min", label: "Avg registration time" },
                    { number: data.overview.stats[0].number, label: data.overview.stats[0].label },
                    { number: "24/7", label: "Support available" },
                  ]}
                />

                {/* Features */}
                <FeaturesSection 
                  title="Everything Your Organization Needs"
                  description={`8 powerful modules covering every aspect of ${product.name.toLowerCase()} management — all in one platform.`}
                  features={data.features.map(f => ({
                    ...f,
                    icon: f.icon === 'users' ? '👥' : 
                           f.icon === 'credit-card' ? '💳' :
                           f.icon === 'file-text' ? '📝' :
                           f.icon === 'check-circle' ? '✅' :
                           f.icon === 'message-circle' ? '📱' :
                           f.icon === 'calendar' ? '🗓️' :
                           f.icon === 'briefcase' ? '💼' :
                           f.icon === 'bar-chart' ? '📊' :
                           f.icon === 'map-pin' ? '📍' :
                           f.icon === 'smartphone' ? '🔔' :
                           f.icon === 'route' ? '🗺️' :
                           f.icon === 'truck' ? '🚌' :
                           f.icon === 'alert-triangle' ? '🚨' :
                           f.icon === 'stethoscope' ? '📋' :
                           f.icon === 'pill' ? '💊' :
                           f.icon === 'microscope' ? '🔬' :
                           f.icon === 'shield' ? '🏥' :
                           f.icon === 'bed' ? '🛏️' :
                           f.icon === 'sprout' ? '🌱' :
                           f.icon === 'clipboard' ? '📊' :
                           f.icon === 'trending-up' ? '💰' :
                           f.icon === 'dollar-sign' ? '🏦' :
                           f.icon === 'brain' ? '🤝' : '📦'
                  }))}
                  centerHeader={true}
                />

                {/* Process */}
                <ProcessSection 
                  title="Up and Running in 5 Steps"
                  description="From sign-up to managing your operations digitally — a clear and simple onboarding process."
                  steps={data.process}
                  centerHeader={true}
                />

                {/* Targets */}
                <TargetsSection 
                  title="Built for Every Organization"
                  targets={data.targets}
                />

                {/* Pricing */}
                <PricingSection 
                  title="Simple, Transparent Pricing"
                  description="All plans include free setup, training, and ongoing support. No hidden fees."
                  plans={data.pricing.map(p => ({
                    ...p,
                    price: p.price.split('/')[0],
                    period: p.price.split('/')[1] || 'per month',
                    featured: p.features.includes('Most Popular')
                  }))}
                  centerHeader={true}
                />

                {/* Testimonials */}
                <TestimonialsSection 
                  title="What Our Customers Say"
                  testimonials={data.testimonials}
                  centerHeader={true}
                />

                {/* CTA */}
                <CTASection 
                  title={`Ready to Transform Your ${product.name.includes('Edu') ? 'School' : product.name.includes('Care') ? 'Healthcare Facility' : product.name.includes('Agri') ? 'Farm' : 'Business'}?`}
                  tagline="Transforming Industries, Empowering Generations."
                  description={`Join ${data.overview.stats[0].number} ${product.name.includes('Edu') ? 'schools' : product.name.includes('Care') ? 'healthcare facilities' : product.name.includes('Agri') ? 'farmers' : 'businesses'} across East Africa already using ${product.name}. Book a free demo today.`}
                  primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
                  secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}
