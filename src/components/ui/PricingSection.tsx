'use client'

import React from 'react'
import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
}

interface PricingSectionProps {
  title: string
  description: string
  plans: PricingPlan[]
  centerHeader?: boolean
}

export function PricingSection({ title, description, plans, centerHeader = false }: PricingSectionProps) {
  return (
    <section style={{ background: 'var(--off)', padding: '80px 5%' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={centerHeader ? 'text-center' : ''}>
          {/* Eyebrow */}
          <div className={`flex items-center gap-2.5 mb-3 ${centerHeader ? 'justify-center' : ''}`}>
            <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
            <span style={{
              color: 'var(--gold)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
            }}>
              Pricing
            </span>
            <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
          </div>

          {/* Title */}
          <h2 
            className="font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(26px,3.5vw,42px)',
              color: 'var(--navy)',
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p 
            className="font-light leading-[1.8] max-w-[600px] mb-12"
            style={{
              fontSize: '17px',
              color: 'var(--med)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            {description}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                border: plan.featured ? '2px solid var(--gold)' : '1px solid rgba(26,57,91,0.12)',
                background: 'var(--white)',
              }}
            >
              {/* Top Section */}
              <div 
                className="p-6"
                style={{
                  background: plan.featured 
                    ? 'linear-gradient(135deg,var(--navy),#254a78)' 
                    : 'var(--navy)',
                }}
              >
                {plan.featured && (
                  <div className="inline-block px-2.5 py-0.5 mb-2.5 rounded-full">
                    <span style={{
                      background: 'var(--gold)',
                      color: 'var(--navy)',
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 
                  className="font-bold mb-1"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    color: 'var(--white)',
                  }}
                >
                  {plan.name}
                </h3>
                
                <p 
                  className="font-light"
                  style={{
                    fontSize: '12px',
                    color: 'var(--light-blue)',
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price Section */}
              <div 
                className="p-[18px_24px]"
                style={{
                  background: 'var(--ice)',
                  borderBottom: '1px solid rgba(26,57,91,0.08)',
                }}
              >
                <div 
                  className="font-bold"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '28px',
                    color: 'var(--navy)',
                  }}
                >
                  {plan.price}
                </div>
                <div 
                  className="mt-0.5"
                  style={{
                    fontSize: '11px',
                    color: 'var(--med)',
                  }}
                >
                  {plan.period}
                </div>
              </div>

              {/* Features */}
              <div className="p-5 flex-grow">
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div 
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: 'rgba(199,150,57,0.15)',
                        }}
                      >
                        <div 
                          className="w-1 h-1.5"
                          style={{
                            border: '1.5px solid var(--gold)',
                            borderLeft: 'none',
                            borderTop: 'none',
                            transform: 'rotate(45deg)',
                            marginBottom: '2px',
                          }}
                        />
                      </div>
                      <span 
                        className="leading-[1.5]"
                        style={{
                          fontSize: '13px',
                          color: 'var(--dark)',
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div 
                className="p-4"
                style={{
                  borderTop: '1px solid rgba(26,57,91,0.08)',
                }}
              >
                <Link href="/book-demo">
                  <button 
                    className="w-full py-3 rounded-md font-bold text-[13px] transition-all"
                    style={{
                      background: plan.featured ? 'var(--gold)' : 'transparent',
                      color: plan.featured ? 'var(--navy)' : 'var(--navy)',
                      border: plan.featured ? 'none' : '1.5px solid rgba(26,57,91,0.2)',
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.borderColor = 'var(--gold)'
                        e.currentTarget.style.color = 'var(--gold)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.borderColor = 'rgba(26,57,91,0.2)'
                        e.currentTarget.style.color = 'var(--navy)'
                      }
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
