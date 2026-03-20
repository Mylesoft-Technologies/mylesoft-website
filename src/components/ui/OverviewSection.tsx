'use client'

import React from 'react'

interface OverviewSectionProps {
  title: string
  description: string[]
  stats: { number: string; label: string }[]
}

export function OverviewSection({ title, description, stats }: OverviewSectionProps) {
  return (
    <section style={{ background: 'var(--white)', padding: '80px 5%' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
              <span style={{
                color: 'var(--gold)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                What Is {title}
              </span>
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
            {description.map((paragraph, index) => (
              <p 
                key={index}
                className="mb-4"
                style={{
                  fontSize: '15px',
                  color: 'var(--med)',
                  lineHeight: '1.9',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Visual Stats */}
          <div 
            className="rounded-2xl p-10"
            style={{
              background: 'linear-gradient(135deg,var(--navy),var(--navy-dark))',
              border: '1px solid rgba(199,150,57,0.2)',
            }}
          >
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="rounded-xl p-4.5"
                  style={{
                    background: 'rgba(8,14,24,0.5)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div 
                    className="font-bold"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '28px',
                      color: 'var(--gold)',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="mt-1"
                    style={{
                      fontSize: '11px',
                      color: 'var(--muted)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
