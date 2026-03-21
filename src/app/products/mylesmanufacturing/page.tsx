import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Settings, BarChart, Users, Target, CheckCircle, Zap } from 'lucide-react'

export const metadata = {
  title: 'MylesManufacturing - Manufacturing Management Software | MylesCorp Technologies',
  description: 'Comprehensive manufacturing management solution. Streamline production, manage inventory, and optimize operations with intelligent automation.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylesmanufacturing',
  },
}

const MYLESMANUFACTURING_DATA = {
  overview: {
    title: 'MylesManufacturing',
    tagline: 'Smart Manufacturing Management for Production Excellence',
    description: 'Complete manufacturing management solution designed to streamline production, optimize inventory, and enhance operational efficiency.',
    image: '/api/og/product?name=MylesManufacturing&category=Manufacturing',
    stats: [
      { number: '80+', label: 'Manufacturing Clients' },
      { number: '25%', label: 'Production Increase' },
      { number: '99.5%', label: 'Quality Control' },
      { number: '24/7', label: 'Production Monitoring' }
    ]
  },
  features: [
    {
      icon: 'settings',
      title: 'Production Planning',
      description: 'Advanced production scheduling with capacity planning and resource optimization.'
    },
    {
      icon: 'bar-chart',
      title: 'Quality Control',
      description: 'Comprehensive quality management with inspection tracking and compliance reporting.'
    },
    {
      icon: 'users',
      title: 'Workforce Management',
      description: 'Employee scheduling, skill tracking, and performance management.'
    },
    {
      icon: 'target',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with automated reordering and stock optimization.'
    },
    {
      icon: 'check-circle',
      title: 'Equipment Maintenance',
      description: 'Preventive maintenance scheduling and equipment performance monitoring.'
    },
    {
      icon: 'zap',
      title: 'Process Automation',
      description: 'Workflow automation and process optimization for maximum efficiency.'
    }
  ],
  process: [
    { step: '1', title: 'Analysis', description: 'Production process analysis and optimization opportunities' },
    { step: '2', title: 'Setup', description: 'System configuration and workflow automation setup' },
    { step: '3', title: 'Integrate', description: 'Integration with existing systems and equipment' },
    { step: '4', title: 'Train', description: 'Comprehensive staff training and change management' },
    { step: '5', title: 'Optimize', description: 'Continuous monitoring and process improvement' }
  ],
  targets: [
    { title: 'Food Processing', description: 'Food and beverage manufacturing companies' },
    { title: 'Textiles', description: 'Textile and garment manufacturing' },
    { title: 'Assembly', description: 'Electronics and mechanical assembly operations' },
    { title: 'Chemical', description: 'Chemical and pharmaceutical manufacturing' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 10,000/month',
      description: 'Perfect for small manufacturers',
      features: ['Up to 50 employees', 'Basic production planning', 'Inventory tracking', 'Quality control', 'Mobile app'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 30,000/month',
      description: 'Ideal for medium manufacturers',
      features: ['Up to 200 employees', 'Advanced planning', 'Full inventory management', 'Quality automation', 'Equipment maintenance', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large manufacturers',
      features: ['Unlimited employees', 'Full feature access', 'Multi-site management', 'Custom integrations', 'Dedicated support', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesManufacturing helped us reduce production time by 30% while improving quality significantly.',
      author: 'Samuel Njoroge',
      role: 'Production Manager',
      organization: 'Kenya Food Processors Ltd'
    },
    {
      quote: 'The inventory management feature alone saved us millions in reduced waste and stockouts.',
      author: 'Grace Mwangi',
      role: 'Operations Director',
      organization: 'East Africa Textiles'
    }
  ]
}

export default function MylesManufacturingPage() {
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
                MANUFACTURING SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESMANUFACTURING_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESMANUFACTURING_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESMANUFACTURING_DATA.overview.description}
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
              {MYLESMANUFACTURING_DATA.overview.stats.map((stat, index) => (
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
                Complete Manufacturing Management
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Intelligent tools to optimize every aspect of your manufacturing operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESMANUFACTURING_DATA.features.map((feature, index) => (
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
              Ready to Optimize Your Production?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESMANUFACTURING_DATA.overview.stats[0].number} manufacturers across Africa already producing more with MylesManufacturing.
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
