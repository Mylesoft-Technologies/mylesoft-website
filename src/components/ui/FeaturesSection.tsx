'use client'

import React from 'react'

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  title: string
  description: string
  features: Feature[]
  centerHeader?: boolean
}

export function FeaturesSection({ title, description, features, centerHeader = false }: FeaturesSectionProps) {
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
              Features
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl p-6 transition-all duration-250 relative overflow-hidden"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(26,57,91,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,57,91,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 transition-opacity duration-250"
                style={{
                  background: 'linear-gradient(90deg,var(--gold),transparent)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0'
                }}
              />

              {/* Icon */}
              <div 
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-3.5 text-xl"
                style={{
                  background: 'rgba(199,150,57,0.1)',
                  border: '1px solid rgba(199,150,57,0.2)',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-2"
                style={{
                  fontSize: '15px',
                  color: 'var(--navy)',
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p 
                className="leading-[1.7]"
                style={{
                  fontSize: '13px',
                  color: 'var(--med)',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
