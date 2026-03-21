import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Hotel, Users, Calendar, DollarSign, Star, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesHospitality - Hospitality Management Software | MylesCorp Technologies',
  description: 'Complete hospitality management solution for hotels, restaurants, and tourism businesses. Streamline operations and enhance guest experiences.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/myles-hospitality',
  },
}

const MYLESHOSPITALITY_DATA = {
  overview: {
    title: 'MylesHospitality',
    tagline: 'Smart Hospitality Management for Exceptional Guest Experiences',
    description: 'Comprehensive hospitality management solution designed for hotels, restaurants, and tourism businesses across Africa.',
    image: '/api/og/product?name=MylesHospitality&category=Hospitality',
    stats: [
      { number: '100+', label: 'Hospitality Clients' },
      { number: '50K+', label: 'Guests Served Daily' },
      { number: '40%', label: 'Operational Efficiency' },
      { number: '24/7', label: 'Guest Support' }
    ]
  },
  features: [
    {
      icon: 'hotel',
      title: 'Property Management',
      description: 'Complete property management with room booking, housekeeping, and maintenance coordination.'
    },
    {
      icon: 'users',
      title: 'Guest Management',
      description: 'Guest profile management, preferences, and personalized service delivery.'
    },
    {
      icon: 'calendar',
      title: 'Reservation System',
      description: 'Advanced booking engine with real-time availability and automated confirmations.'
    },
    {
      icon: 'dollar-sign',
      title: 'Revenue Management',
      description: 'Dynamic pricing, occupancy optimization, and revenue analytics.'
    },
    {
      icon: 'star',
      title: 'Review Management',
      description: 'Guest review monitoring, response management, and reputation tracking.'
    },
    {
      icon: 'check',
      title: 'Staff Management',
      description: 'Staff scheduling, performance tracking, and training management.'
    }
  ],
  process: [
    { step: '1', title: 'Assessment', description: 'Property analysis and requirement gathering' },
    { step: '2', title: 'Setup', description: 'System configuration and data migration' },
    { step: '3', title: 'Train', description: 'Staff training on all modules and best practices' },
    { step: '4', title: 'Launch', description: 'Go-live with dedicated support team' },
    { step: '5', title: 'Optimize', description: 'Continuous improvement based on usage analytics' }
  ],
  targets: [
    { title: 'Hotels', description: 'Boutique hotels, business hotels, and resort properties' },
    { title: 'Restaurants', description: 'Fine dining, casual dining, and restaurant chains' },
    { title: 'Tourism', description: 'Tour operators, travel agencies, and tourism boards' },
    { title: 'Events', description: 'Conference centers, event venues, and wedding planners' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 8,000/month',
      description: 'Perfect for small properties',
      features: ['Up to 20 rooms', 'Basic booking management', 'Guest database', 'Reporting', 'Mobile app'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 25,000/month',
      description: 'Ideal for medium properties',
      features: ['Up to 100 rooms', 'Advanced booking engine', 'Revenue management', 'Channel management', 'Guest portal', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large properties and chains',
      features: ['Unlimited rooms', 'Full feature access', 'Multi-property management', 'Custom integrations', 'Dedicated support', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesHospitality transformed our operations. Occupancy increased by 35% in the first year.',
      author: 'Patricia Mwaura',
      role: 'General Manager',
      organization: 'Safari Lodge Kenya'
    },
    {
      quote: 'The guest management features have significantly improved our service quality and guest satisfaction.',
      author: 'James Kariuki',
      role: 'Operations Director',
      organization: 'Nairobi Hotel Group'
    }
  ]
}

export default function MylesHospitalityPage() {
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
                HOSPITALITY SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESHOSPITALITY_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESHOSPITALITY_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESHOSPITALITY_DATA.overview.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="primary"
                className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
              >
                Book Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-sm font-semibold border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-navy"
              >
                View Pricing
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESHOSPITALITY_DATA.overview.stats.map((stat, index) => (
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
                Complete Hospitality Management
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Everything you need to manage your hospitality business efficiently and delight your guests.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESHOSPITALITY_DATA.features.map((feature, index) => (
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
              Ready to Elevate Your Guest Experience?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESHOSPITALITY_DATA.overview.stats[0].number} hospitality businesses across Africa already thriving with MylesHospitality.
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
