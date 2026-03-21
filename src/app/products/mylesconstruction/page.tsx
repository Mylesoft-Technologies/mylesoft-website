import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Target, Users, Calendar, DollarSign, CheckCircle, Settings } from 'lucide-react'

export const metadata = {
  title: 'MylesConstruction - Construction Project Management Software | MylesCorp Technologies',
  description: 'Intelligent project management for construction companies. Track projects, manage resources, and monitor progress in real-time.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylesconstruction',
  },
}

const MYLESCONSTRUCTION_DATA = {
  overview: {
    title: 'MylesConstruction',
    tagline: 'Smart Project Management for Construction Companies',
    description: 'Comprehensive construction project management solution with intelligent tracking, resource management, and progress monitoring.',
    image: '/api/og/product?name=MylesConstruction&category=Construction',
    stats: [
      { number: '100+', label: 'Projects Managed' },
      { number: 'KES 2B+', label: 'Project Value' },
      { number: '95%', label: 'On-Time Delivery' },
      { number: '24/7', label: 'Site Monitoring' }
    ]
  },
  features: [
    {
      icon: 'target',
      title: 'Project Planning',
      description: 'Advanced project planning with Gantt charts, milestone tracking, and dependency management.'
    },
    {
      icon: 'users',
      title: 'Resource Management',
      description: 'Manage workforce, equipment, and materials with real-time availability and allocation.'
    },
    {
      icon: 'dollar-sign',
      title: 'Budget Tracking',
      description: 'Comprehensive budget management with cost tracking, expense reporting, and variance analysis.'
    },
    {
      icon: 'calendar',
      title: 'Schedule Management',
      description: 'Detailed scheduling with critical path analysis and automated delay notifications.'
    },
    {
      icon: 'check-circle',
      title: 'Progress Monitoring',
      description: 'Real-time progress tracking with photo documentation and quality control checkpoints.'
    },
    {
      icon: 'settings',
      title: 'Safety Management',
      description: 'Safety protocol management, incident reporting, and compliance tracking.'
    }
  ],
  process: [
    { step: '1', title: 'Setup', description: 'Project templates and workflow configuration' },
    { step: '2', title: 'Configure', description: 'Customize forms, reports, and approval workflows' },
    { step: '3', title: 'Train', description: 'Team training on mobile app and web platform' },
    { step: '4', title: 'Deploy', description: 'Roll out across projects with dedicated support' },
    { step: '5', title: 'Optimize', description: 'Continuous improvement based on usage analytics' }
  ],
  targets: [
    { title: 'General Contractors', description: 'Large construction companies managing multiple projects' },
    { title: 'Specialty Contractors', description: 'Electrical, plumbing, and HVAC specialists' },
    { title: 'Property Developers', description: 'Real estate development companies' },
    { title: 'Infrastructure Projects', description: 'Government and infrastructure development projects' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 5,000/month',
      description: 'Perfect for small contractors',
      features: ['Up to 5 projects', 'Basic planning tools', 'Resource tracking', 'Mobile app access', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 20,000/month',
      description: 'Ideal for medium contractors',
      features: ['Up to 25 projects', 'Advanced planning', 'Budget tracking', 'Progress monitoring', 'Safety management', 'Priority support', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large construction companies',
      features: ['Unlimited projects', 'Full feature access', 'Custom integrations', 'Dedicated support', 'Multi-company management', 'On-premise option', 'White-label solution'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesConstruction helped us deliver 3 major projects on time and under budget. The ROI has been incredible.',
      author: 'Samuel Kamau',
      role: 'Project Director',
      organization: 'Kenya Construction Ltd'
    },
    {
      quote: 'The real-time progress monitoring feature transformed how we manage our construction sites.',
      author: 'Esther Njoroge',
      role: 'Operations Manager',
      organization: 'East Africa Developers'
    }
  ]
}

export default function MylesConstructionPage() {
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
                CONSTRUCTION MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESCONSTRUCTION_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESCONSTRUCTION_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESCONSTRUCTION_DATA.overview.description}
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
              {MYLESCONSTRUCTION_DATA.overview.stats.map((stat, index) => (
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
                Complete Construction Management
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Intelligent tools to plan, execute, and monitor construction projects efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESCONSTRUCTION_DATA.features.map((feature, index) => (
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
              Ready to Build Better?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESCONSTRUCTION_DATA.overview.stats[0].number} construction companies across East Africa building with MylesConstruction.
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
