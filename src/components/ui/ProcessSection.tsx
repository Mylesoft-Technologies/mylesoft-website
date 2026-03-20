'use client'

import React from 'react'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessSectionProps {
  title: string
  description: string
  steps: ProcessStep[]
  centerHeader?: boolean
}

export function ProcessSection({ title, description, steps, centerHeader = false }: ProcessSectionProps) {
  return (
    <section style={{ background: 'var(--navy-deep)', padding: '80px 5%' }}>
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
              How It Works
            </span>
            <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
          </div>

          {/* Title */}
          <h2 
            className="font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(26px,3.5vw,42px)',
              color: 'var(--white)',
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p 
            className="font-light leading-[1.8] max-w-[600px] mb-12"
            style={{
              fontSize: '17px',
              color: 'var(--light-blue)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            {description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-5 gap-0 relative">
          {/* Connecting Line */}
          <div 
            className="absolute top-7 left-[10%] right-[10%] h-0.5"
            style={{
              background: 'linear-gradient(90deg,var(--gold),rgba(199,150,57,0.2))',
            }}
          />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2.5 relative z-1">
              {/* Step Number */}
              <div 
                className="w-[54px] h-[54px] rounded-full flex items-center justify-center mb-3.5"
                style={{
                  background: 'var(--navy-deep)',
                  border: '2px solid var(--gold)',
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    color: 'var(--gold)',
                  }}
                >
                  {step.step}
                </span>
              </div>

              {/* Title */}
              <h4 
                className="font-bold mb-1.5"
                style={{
                  fontSize: '13px',
                  color: 'var(--white)',
                }}
              >
                {step.title}
              </h4>

              {/* Description */}
              <p 
                className="leading-[1.6]"
                style={{
                  fontSize: '11px',
                  color: 'var(--muted)',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
