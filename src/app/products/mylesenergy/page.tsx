import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'
import { Zap, BarChart, Settings, TrendingUp, AlertCircle, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesEnergy - Energy Management Software | MylesCorp Technologies',
  description: 'Smart energy monitoring and management solution. Track consumption, optimize usage, and reduce costs with AI-powered analytics.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylesenergy',
  },
}

const MYLESENERGY_DATA = {
  overview: {
    title: 'MylesEnergy',
    tagline: 'Smart Energy Management for Sustainable Operations',
    description: 'Optimize energy consumption and reduce costs with our intelligent monitoring and management platform designed for African businesses.',
    image: '/api/og/product?name=MylesEnergy&category=Energy',
    stats: [
      { number: '200+', label: 'Facilities Managed' },
      { number: '30%', label: 'Average Savings' },
      { number: '99.8%', label: 'Accuracy' },
      { number: '24/7', label: 'Monitoring' }
    ]
  },
  features: [
    {
      icon: 'bar-chart',
      title: 'Energy Monitoring',
      description: 'Real-time energy consumption tracking with detailed analytics and insights.'
    },
    {
      icon: 'trending-up',
      title: 'Consumption Analytics',
      description: 'Advanced analytics to identify patterns, trends, and opportunities for optimization.'
    },
    {
      icon: 'settings',
      title: 'Predictive Maintenance',
      description: 'AI-powered predictions for equipment maintenance to prevent failures and downtime.'
    },
    {
      icon: 'zap',
      title: 'Cost Optimization',
      description: 'Smart recommendations to reduce energy costs and improve efficiency.'
    },
    {
      icon: 'alert-circle',
      title: 'Alert System',
      description: 'Real-time alerts for unusual consumption patterns and equipment issues.'
    },
    {
      icon: 'check',
      title: 'Reporting Dashboard',
      description: 'Comprehensive reports for compliance, sustainability, and management review.'
    }
  ],
  process: [
    { step: '1', title: 'Assessment', description: 'Energy audit and baseline establishment' },
    { step: '2', title: 'Installation', description: 'Smart meters and sensors deployment' },
    { step: '3', title: 'Configuration', description: 'Custom alerts and optimization rules setup' },
    { step: '4', title: 'Training', description: 'Team training on dashboard and analytics' },
    { step: '5', title: 'Optimization', description: 'Continuous monitoring and improvement' }
  ],
  targets: [
    { title: 'Manufacturing', description: 'Industrial facilities and production plants' },
    { title: 'Commercial Buildings', description: 'Office buildings, malls, and commercial complexes' },
    { title: 'Hospitality', description: 'Hotels, restaurants, and entertainment venues' },
    { title: 'Healthcare', description: 'Hospitals, clinics, and medical facilities' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 3,000/month',
      description: 'Perfect for small facilities',
      features: ['Up to 5 meters', 'Basic monitoring', 'Monthly reports', 'Email alerts', 'Mobile app'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 10,000/month',
      description: 'Ideal for medium facilities',
      features: ['Up to 25 meters', 'Advanced analytics', 'Real-time alerts', 'Predictive maintenance', 'Custom reports', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large facilities and groups',
      features: ['Unlimited meters', 'Full analytics suite', 'AI optimization', 'Dedicated support', 'Custom integrations', 'On-premise option', 'White-label option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesEnergy helped us reduce our electricity costs by 35% in just 6 months.',
      author: 'David Mwangi',
      role: 'Facilities Manager',
      organization: 'Nairobi Industrial Park'
    },
    {
      quote: 'The predictive maintenance feature alone saved us millions in potential downtime costs.',
      author: 'Grace Wanjiku',
      role: 'Operations Director',
      organization: 'East Africa Manufacturing'
    }
  ]
}

export default function MylesEnergyPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                ENERGY MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESENERGY_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESENERGY_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESENERGY_DATA.overview.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-demo">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Book Free Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-sm font-semibold border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-navy"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESENERGY_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Smart Energy Management Features
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Comprehensive tools to monitor, analyze, and optimize your energy consumption.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESENERGY_DATA.features.map((feature, index) => (
                <div key={index} className="bg-navy-deep/5 rounded-2xl p-8 border border-navy-deep/10 hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={feature.icon} size={24} className="text-gold" />
                  </div>
                  <h3 className="font-body font-bold text-navy text-xl mb-3">{feature.title}</h3>
                  <p className="font-body text-light-blue leading-[1.7]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-deep text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
              Ready to Optimize Your Energy Usage?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESENERGY_DATA.overview.stats[0].number} facilities across East Africa already saving with MylesEnergy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="primary"
                className="px-8 py-4 text-sm font-semibold"
              >
                Book Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-sm font-semibold border-white/20 text-white hover:border-gold hover:text-gold"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
