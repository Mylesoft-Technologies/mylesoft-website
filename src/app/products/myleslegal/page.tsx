import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Shield, FileText, Clock, DollarSign, Users, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesLegal - Law Practice Management Software | MylesCorp Technologies',
  description: 'Comprehensive practice management solution for law firms. Case management, document management, time tracking, and billing system in one platform.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/myleslegal',
  },
}

const MYLESLEGAL_DATA = {
  overview: {
    title: 'MylesLegal',
    tagline: 'Smart Practice Management for Modern Law Firms',
    description: 'Transform your law firm with our comprehensive practice management solution designed specifically for the African legal landscape.',
    image: '/api/og/product?name=MylesLegal&category=Legal',
    stats: [
      { number: '500+', label: 'Law Firms' },
      { number: '50K+', label: 'Cases Managed' },
      { number: '99.9%', label: 'Uptime' },
      { number: '24/7', label: 'Support' }
    ]
  },
  features: [
    {
      icon: 'file-text',
      title: 'Case Management',
      description: 'Comprehensive case tracking with deadlines, documents, and client communication all in one place.'
    },
    {
      icon: 'shield',
      title: 'Document Management',
      description: 'Secure document storage with version control, sharing permissions, and advanced search capabilities.'
    },
    {
      icon: 'clock',
      title: 'Time Tracking',
      description: 'Automated time tracking with billable hour calculation and detailed activity logs.'
    },
    {
      icon: 'dollar-sign',
      title: 'Billing System',
      description: 'Automated invoicing, expense tracking, and payment processing with multiple payment methods.'
    },
    {
      icon: 'users',
      title: 'Client Portal',
      description: 'Secure client portal for case updates, document sharing, and communication.'
    },
    {
      icon: 'check',
      title: 'Compliance Tools',
      description: 'Built-in compliance checks for legal regulations and court requirements.'
    }
  ],
  process: [
    { step: '1', title: 'Setup', description: 'Quick 30-minute setup with data migration assistance' },
    { step: '2', title: 'Configure', description: 'Customize workflows, templates, and user permissions' },
    { step: '3', title: 'Train', description: 'Comprehensive training for your team with ongoing support' },
    { step: '4', title: 'Launch', description: 'Go live with your dedicated account manager' },
    { step: '5', title: 'Scale', description: 'Add more features and users as your firm grows' }
  ],
  targets: [
    { title: 'Solo Practitioners', description: 'Perfect for independent lawyers and small firms' },
    { title: 'Mid-size Firms', description: 'Scalable solution for growing legal practices' },
    { title: 'Large Firms', description: 'Enterprise features for established law firms' },
    { title: 'Corporate Legal', description: 'In-house legal teams and corporate counsel' }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 5,000/month',
      description: 'Perfect for solo practitioners',
      features: ['Up to 3 users', 'Basic case management', 'Document storage (5GB)', 'Email support', 'Mobile app access'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 15,000/month',
      description: 'Ideal for growing firms',
      features: ['Up to 15 users', 'Advanced case management', 'Document storage (50GB)', 'Priority support', 'Client portal', 'Time tracking', 'Basic reporting'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large firms and enterprises',
      features: ['Unlimited users', 'Full feature access', 'Unlimited storage', 'Dedicated support', 'Custom integrations', 'Advanced analytics', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesLegal transformed how we manage our cases. Everything is now organized and accessible.',
      author: 'Sarah Johnson',
      role: 'Managing Partner',
      organization: 'Johnson & Associates'
    },
    {
      quote: 'The billing system alone saved us 10 hours per week. Incredible ROI!',
      author: 'Michael Chen',
      role: 'Senior Partner',
      organization: 'LegalEdge Partners'
    }
  ]
}

export default function MylesLegalPage() {
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
                LEGAL TECH SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESLEGAL_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESLEGAL_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESLEGAL_DATA.overview.description}
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
              {MYLESLEGAL_DATA.overview.stats.map((stat, index) => (
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
                Powerful Features for Modern Law Firms
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Everything you need to manage your practice efficiently and grow your client base.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESLEGAL_DATA.features.map((feature, index) => (
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
              Ready to Transform Your Law Practice?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESLEGAL_DATA.overview.stats[0].number} law firms across East Africa already using MylesLegal.
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
