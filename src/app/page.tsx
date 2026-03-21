import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import {
  Zap, MapPin, Shield, Users, TrendingUp, Award, Crown, Star, CheckCircle, Globe, Rocket, Heart
} from 'lucide-react'

export const metadata = {
  title: 'MylesCorp Technologies Ltd — AI-Powered Software Solutions for East Africa',
  description: 'East Africa\'s leading AI-powered software company. EduMyles, MylesCare, AgriMyles, MylesCRM — transforming Education, Healthcare, Agriculture, and Business across Kenya, Uganda, Tanzania.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/',
  },
}

const HOMEPAGE_DATA = {
  overview: {
    title: 'MylesCorp Technologies',
    tagline: 'Transforming Industries, Empowering Generations',
    description: [
      'East Africa\'s leading AI-powered software company delivering innovative solutions.',
      'Transforming businesses and empowering communities across the continent with cutting-edge technology.'
    ],
    image: '/api/og/product?name=MylesCorp&category=Company',
    stats: [
      { number: '500+', label: 'Schools Managed' },
      { number: '50K+', label: 'Patients Served' },
      { number: '1,000+', label: 'Farmers Helped' },
      { number: '200+', label: 'Businesses Transformed' }
    ]
  },
  features: [
    {
      icon: '🤖',
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide smart insights and automation for your business.'
    },
    {
      icon: '🎯',
      title: 'Industry-Specific Solutions',
      description: 'Purpose-built solutions for education, healthcare, agriculture, and business sectors.'
    },
    {
      icon: '🌍',
      title: 'East African Focus',
      description: 'Designed specifically for African markets with local expertise and understanding.'
    },
    {
      icon: '👑',
      title: 'Premium Support',
      description: 'Dedicated team available round the clock for assistance and guidance.'
    },
    {
      icon: '🚀',
      title: 'Scalable Technology',
      description: 'Grow from startup to enterprise with solutions that scale with your business.'
    },
    {
      icon: '❤️',
      title: 'Community Impact',
      description: 'Empowering local communities and contributing to sustainable development.'
    }
  ],
  process: [
    { step: 1, title: 'Discovery', description: 'We understand your unique challenges and requirements' },
    { step: 2, title: 'Strategy', description: 'Develop a tailored solution roadmap for your organization' },
    { step: 3, title: 'Implementation', description: 'Deploy solutions with expert guidance and support' },
    { step: 4, title: 'Training', description: 'Empower your team with comprehensive training and resources' },
    { step: 5, title: 'Growth', description: 'Scale and optimize as your business evolves and grows' }
  ],
  targets: [
    'Educational Institutions - Schools, colleges, and universities seeking digital transformation',
    'Healthcare Providers - Hospitals, clinics, and medical centers needing management solutions',
    'Agricultural Organizations - Farms, cooperatives, and agribusinesses',
    'Business Enterprises - SMEs and corporations looking for operational efficiency'
  ],
  testimonials: [
    {
      quote: 'MylesCorp transformed our school operations. We\'ve seen a 40% improvement in efficiency and student engagement.',
      author: 'Sarah Johnson',
      role: 'Principal',
      organization: 'Nairobi Academy'
    },
    {
      quote: 'The AI-powered solutions helped us reduce patient wait times by 60% while improving care quality.',
      author: 'Dr. Michael Chen',
      role: 'Medical Director',
      organization: 'East Africa Medical Center'
    },
    {
      quote: 'Their agricultural solutions increased our yield by 35% while reducing costs significantly.',
      author: 'Grace Wanjiku',
      role: 'Farm Manager',
      organization: 'Kenya Agricultural Cooperative'
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 15,000',
      period: '/month',
      description: 'Perfect for small organizations getting started',
      features: ['Up to 50 users', 'Basic features', 'Email support', 'Standard security'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 45,000',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: ['Up to 200 users', 'Advanced features', 'Priority support', 'Enhanced security', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: ['Unlimited users', 'All features', '24/7 support', 'Custom integrations', 'Dedicated account manager'],
      popular: false
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* SECTION 1 — Hero */}
        <section
          className="relative min-h-screen flex items-center
                   justify-center overflow-hidden"
          style={{ background: '#080e18' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px,
                          transparent 1px),
                linear-gradient(90deg,rgba(199,150,57,0.04) 1px,
                          transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
          
          {/* Radial glow top-right */}
          <div
            className="hidden sm:block absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.3) 0%, transparent 70%)',
            }}
          />
          
          {/* Radial glow bottom-left */}
          <div
            className="hidden sm:block absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.03) 0%, transparent 70%)',
            }}
          />
          
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 max-w-4xl mx-auto">
            {/* Company Name */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] break-words text-balance">
                {HOMEPAGE_DATA.overview.title}
              </h2>
            </div>
            
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                AI-POWERED SOLUTIONS
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 break-words text-balance">
              {HOMEPAGE_DATA.overview.tagline.split(',')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                {HOMEPAGE_DATA.overview.tagline.split(',')[1]}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10">
              {HOMEPAGE_DATA.overview.description[0]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/book-demo" transitionTypes={['slide']}>
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl px-6 py-3 text-sm font-semibold"
                >
                  Book a Free Demo
                </Button>
              </Link>
              <Link href="/products" transitionTypes={['slide']}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-white px-6 py-3 text-sm font-semibold"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact" transitionTypes={['slide']}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto border-2 border-gold/50 text-gold hover:border-gold hover:bg-gold/10 px-6 py-3 text-sm font-semibold"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              {HOMEPAGE_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Products Overview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Products</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive software solutions designed to transform 
                education, healthcare, agriculture, and business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'EduMyles',
                  description: 'Complete School Management System',
                  icon: Zap,
                  color: 'from-blue-500 to-blue-600',
                  href: '/products/edumyles'
                },
                {
                  name: 'MylesCare',
                  description: 'Healthcare Management Platform',
                  icon: Shield,
                  color: 'from-green-500 to-green-600',
                  href: '/products/mylescare'
                },
                {
                  name: 'AgriMyles',
                  description: 'Smart Agricultural Solutions',
                  icon: MapPin,
                  color: 'from-yellow-500 to-yellow-600',
                  href: '/products/agrimyles'
                },
                {
                  name: 'MylesCRM',
                  description: 'Business Management System',
                  icon: Users,
                  color: 'from-purple-500 to-purple-600',
                  href: '/products/mylescrm'
                }
              ].map((product, index) => (
                <Link 
                  key={index}
                  href={product.href}
                  className="group block"
                >
                  <div className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${product.color}`}>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center ${product.color}`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-white/90 text-sm font-body">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Stats */}
        <section className="section bg-navy">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-white">Trusted Across East Africa</h2>
              <p className="text-light-blue max-w-2xl mx-auto font-body">
                Empowering thousands of users in Kenya, Uganda, Tanzania, 
                and beyond with innovative AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Schools Managed', icon: '🎓' },
                { number: '50K+', label: 'Patients Served', icon: '🏥' },
                { number: '1000+', label: 'Farmers Helped', icon: '🌾' },
                { number: '200+', label: 'Businesses Transformed', icon: '💼' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-body">
                    {stat.icon} {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection 
          title="Why Choose MylesCorp?"
          description="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that work for African businesses."
          features={HOMEPAGE_DATA.features}
          centerHeader={true}
        />

        {/* SECTION 5 — Values */}
        <MYLESValues />

        {/* Process Section */}
        <ProcessSection 
          title="Our 5-Step Process"
          description="From discovery to growth — we guide you through every step of your digital transformation journey."
          steps={HOMEPAGE_DATA.process}
          centerHeader={true}
        />

        {/* Targets Section */}
        <TargetsSection 
          title="Built for Every Organization"
          targets={HOMEPAGE_DATA.targets}
        />

        {/* Testimonials Section */}
        <TestimonialsSection 
          title="Success Stories"
          testimonials={HOMEPAGE_DATA.testimonials}
          centerHeader={true}
        />

        {/* Pricing Section */}
        <PricingSection 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your organization. All plans include our core features with premium options for advanced needs."
          plans={HOMEPAGE_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Final CTA Section */}
        <CTASection 
          title="Ready to Transform Your Organisation?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Let's discuss how our AI-powered solutions can drive your success and growth. Join ${HOMEPAGE_DATA.overview.stats[3].number} businesses already thriving with MylesCorp.`}
          primaryCta={{ text: "Book a Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
