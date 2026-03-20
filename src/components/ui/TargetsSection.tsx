'use client'

import React from 'react'

interface TargetsSectionProps {
  title: string
  targets: string[]
}

export function TargetsSection({ title, targets }: TargetsSectionProps) {
  return (
    <section style={{ background: 'var(--white)', padding: '80px 5%' }}>
      <div className="max-w-[1200px] mx-auto">
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
            Who It's For
          </span>
          <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
        </div>

        {/* Title */}
        <h2 
          className="font-bold leading-[1.2] mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px,3.5vw,42px)',
            color: 'var(--navy)',
          }}
        >
          {title}
        </h2>

        {/* Tags Grid */}
        <div className="flex flex-wrap gap-2.5">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="px-5 py-2.5 rounded-full"
              style={{
                background: 'rgba(199,150,57,0.08)',
                border: '1px solid rgba(199,150,57,0.2)',
              }}
            >
              <span 
                className="font-medium"
                style={{
                  fontSize: '13px',
                  color: 'var(--gold)',
                }}
              >
                {target}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
