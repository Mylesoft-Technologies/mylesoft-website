'use client'

import React from 'react'

interface Testimonial {
  quote: string
  author: string
  role: string
  organization: string
}

interface TestimonialsSectionProps {
  title: string
  testimonials: Testimonial[]
  centerHeader?: boolean
}

export function TestimonialsSection({ title, testimonials, centerHeader = false }: TestimonialsSectionProps) {
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
              Testimonials
            </span>
            <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
          </div>

          {/* Title */}
          <h2 
            className="font-bold leading-[1.2] mb-12"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(26px,3.5vw,42px)',
              color: 'var(--white)',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-xl p-7"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(199,150,57,0.15)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.75 mb-3.5">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-[13px] h-[13px]"
                    style={{
                      background: 'var(--gold)',
                      clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p 
                className="italic leading-[1.8] mb-4.5"
                style={{
                  fontSize: '13px',
                  color: 'var(--light-blue)',
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div 
                className="font-bold"
                style={{
                  fontSize: '13px',
                  color: 'var(--white)',
                }}
              >
                {testimonial.author}
              </div>
              
              {/* Role */}
              <div 
                className="mt-0.5"
                style={{
                  fontSize: '11px',
                  color: 'var(--muted)',
                }}
              >
                {testimonial.role}, {testimonial.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
