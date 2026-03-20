'use client'

import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { StaggerReveal, ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface ProductPageLayoutProps {
  metadata: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    heading: string
    goldWord: string
    subtitle: string
    badge: string
    primaryCta: { text: string; href: string }
    secondaryCta: { text: string; href: string }
  }
  overview: {
    stats: { number: string; label: string }[]
    description: string
  }
  features: {
    title: string
    description: string
    icon: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  targets: string[]
  pricing: {
    name: string
    price: string
    description: string
    features: string[]
  }[]
  testimonials: {
    quote: string
    author: string
    role: string
    organization: string
  }[]
}

export function ProductPageLayout({
  metadata,
  hero,
  overview,
  features,
  process,
  targets,
  pricing,
  testimonials
}: ProductPageLayoutProps) {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ background: '#080e18' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Glow bottom-left */}
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Gold top rule */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600">
                {hero.badge}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
              <span style={{
                color: '#C79639',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                {hero.eyebrow}
              </span>
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
            </div>

            {/* Heading */}
            <h1
              className="font-display font-bold leading-[1.05] text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: '#ffffff' }}
            >
              {hero.heading}{' '}
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #C79639, #e0b055)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {hero.goldWord}
              </em>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body font-light text-xl leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: '#C7D7EF' }}
            >
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={hero.primaryCta.href}>
                <Button size="lg" className="shadow-2xl hover:shadow-3xl">
                  {hero.primaryCta.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={hero.secondaryCta.href}>
                <Button variant="outline" size="lg" className="border-white text-white hover:border-gold hover:text-gold">
                  {hero.secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: '#C79639' }}>
                    {stat.number}
                  </div>
                  <div className="font-body text-sm font-medium tracking-wide" style={{ color: '#545454' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <p className="font-body text-lg leading-relaxed text-gray-700">
                  {overview.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#f8f6f2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: '#080e18' }}>
                Powerful Features
              </h2>
              <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage your operations efficiently
              </p>
            </ScrollReveal>

            <StaggerReveal
              staggerDelay={0.1}
              itemDelay={0.2}
              direction="up"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-large transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center text-gold-600 mb-6">
                    <Icon name={feature.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4" style={{ color: '#080e18' }}>
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#080e18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
                How It Works
              </h2>
              <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in 5 simple steps
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-gray-400 text-sm">
                      {step.description}
                    </p>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: '#080e18' }}>
                Who It Is For
              </h2>
              <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                Built for organizations of all sizes
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-4">
              {targets.map((target, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#f8f6f2] rounded-full">
                    <span className="font-body font-medium text-gray-700">{target}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-[#f8f6f2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: '#080e18' }}>
                Pricing Plans
              </h2>
              <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your needs
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className={`bg-white rounded-2xl p-8 shadow-medium hover:shadow-large transition-shadow ${
                    plan.features.includes('Most Popular') ? 'ring-2 ring-gold' : ''
                  }`}>
                    {plan.features.includes('Most Popular') && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-gold-400 to-gold-500">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="font-display font-bold text-2xl mb-2" style={{ color: '#080e18' }}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <div className="font-display font-bold text-3xl" style={{ color: '#C79639' }}>
                        {plan.price}
                      </div>
                      <div className="font-body text-gray-600">
                        {plan.description}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.filter(f => f !== 'Most Popular').map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/book-demo">
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#080e18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
                What Our Customers Say
              </h2>
              <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
                Trusted by organizations across East Africa
              </p>
            </ScrollReveal>

            <StaggerReveal
              staggerDelay={0.1}
              itemDelay={0.2}
              direction="up"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-display font-bold text-white">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-gray-400 text-sm">
                      {testimonial.role}, {testimonial.organization}
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: '#080e18' }}>
                Ready to Get Started?
              </h2>
              <p className="font-body text-xl text-gray-600 mb-8">
                Join hundreds of organizations already using our solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <Button size="lg" className="shadow-2xl hover:shadow-3xl">
                    Book a Free Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  )
}
