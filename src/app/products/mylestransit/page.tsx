import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { MapPin, Users, Calendar, DollarSign, Route, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesTransit - Transportation Management Software | MylesCorp Technologies',
  description: 'Comprehensive transportation management solution for logistics companies, schools, and public transport. Optimize routes and manage fleets efficiently.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylestransit',
  },
}

const MYLESTRANSIT_DATA = {
  overview: {
    title: 'MylesTransit',
    tagline: 'Smart Transportation Management for Efficient Mobility',
    description: 'Complete transportation management solution designed for logistics companies, schools, and public transport operators across Africa.',
    image: '/api/og/product?name=MylesTransit&category=Transportation',
    stats: [
      { number: '120+', label: 'Transport Clients' },
      { number: '500K+', label: 'Passengers Managed' },
      { number: '35%', label: 'Fuel Savings' },
      { number: '24/7', label: 'Route Monitoring' }
    ]
  },
  features: [
    {
      icon: 'map-pin',
      title: 'Route Optimization',
      description: 'Intelligent route planning with real-time traffic updates and fuel optimization.'
    },
    {
      icon: 'users',
      title: 'Passenger Management',
      description: 'Complete passenger database with tracking, scheduling, and communication tools.'
    },
    {
      icon: 'calendar',
      title: 'Fleet Management',
      description: 'Vehicle scheduling, maintenance tracking, and performance monitoring.'
    },
    {
      icon: 'dollar-sign',
      title: 'Revenue Management',
      description: 'Fare collection, revenue tracking, and financial reporting for transport operations.'
    },
    {
      icon: 'route',
      title: 'Real-time Tracking',
      description: 'GPS-based vehicle tracking with real-time location and status updates.'
    },
    {
      icon: 'check',
      title: 'Safety Management',
      description: 'Driver safety monitoring, incident reporting, and compliance tracking.'
    }
  ],
  process: [
    { step: '1', title: 'Assessment', description: 'Transport operations analysis and optimization opportunities' },
    { step: '2', title: 'Setup', description: 'System configuration and GPS device installation' },
    { step: '3', title: 'Train', description: 'Driver and staff training on all system features' },
    { step: '4', title: 'Launch', description: 'Go-live with dedicated support and monitoring' },
    { step: '5', title: 'Optimize', description: 'Continuous route optimization and system improvements' }
  ],
  targets: [
    { title: 'School Transport', description: 'Educational institutions managing student transportation' },
    { title: 'Public Transport', description: 'Bus companies and public transport operators' },
    { title: 'Logistics', description: 'Delivery and logistics companies' },
    { title: 'Corporate Transport', description: 'Employee transportation services' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 3,000/month',
      description: 'Perfect for small operators',
      features: ['Up to 10 vehicles', 'Basic route planning', 'Driver management', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 12,000/month',
      description: 'Ideal for medium operators',
      features: ['Up to 50 vehicles', 'Advanced optimization', 'Real-time tracking', 'Passenger management', 'Revenue tracking', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large transport companies',
      features: ['Unlimited vehicles', 'Full feature access', 'Multi-location management', 'Custom integrations', 'Dedicated support', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesTransit helped us optimize our school routes and save 30% on fuel costs. Parents love the real-time tracking!',
      author: 'Rebecca Wanjiku',
      role: 'Transport Manager',
      organization: 'Nairobi International School'
    },
    {
      quote: 'The route optimization feature has transformed our bus operations. We now serve more routes with fewer resources.',
      author: 'James Muriithi',
      role: 'Operations Director',
      organization: 'City Bus Services Kenya'
    }
  ]
}

export default function MylesTransitPage() {
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
                TRANSPORTATION SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESTRANSIT_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESTRANSIT_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESTRANSIT_DATA.overview.description}
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
              {MYLESTRANSIT_DATA.overview.stats.map((stat, index) => (
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
                Complete Transportation Management
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Intelligent tools to optimize routes, manage fleets, and enhance passenger experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESTRANSIT_DATA.features.map((feature, index) => (
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
              Ready to Optimize Your Transportation?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESTRANSIT_DATA.overview.stats[0].number} transport operators across Africa already saving with MylesTransit.
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
