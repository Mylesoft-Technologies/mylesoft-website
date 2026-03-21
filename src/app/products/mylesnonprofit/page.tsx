import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Heart, Users, Target, TrendingUp, Award, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesNonProfit - NGO Management Software | MylesCorp Technologies',
  description: 'Comprehensive donor and volunteer management solution for NGOs. Track donations, manage volunteers, and report impact with ease.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylesnonprofit',
  },
}

const MYLESNONPROFIT_DATA = {
  overview: {
    title: 'MylesNonProfit',
    tagline: 'Empowering NGOs with Smart Management Tools',
    description: 'Complete donor and volunteer management platform designed specifically for African non-profit organizations and charities.',
    image: '/api/og/product?name=MylesNonProfit&category=Non-Profit',
    stats: [
      { number: '150+', label: 'NGOs Supported' },
      { number: 'KES 50M+', label: 'Donations Tracked' },
      { number: '10K+', label: 'Volunteers Managed' },
      { number: '98%', label: 'Satisfaction' }
    ]
  },
  features: [
    {
      icon: 'heart',
      title: 'Donor Management',
      description: 'Comprehensive donor database with giving history, communication preferences, and engagement tracking.'
    },
    {
      icon: 'users',
      title: 'Volunteer Coordination',
      description: 'Manage volunteer profiles, schedules, and assignments with automated reminders and tracking.'
    },
    {
      icon: 'target',
      title: 'Grant Tracking',
      description: 'Track grant applications, deadlines, and reporting requirements with automated notifications.'
    },
    {
      icon: 'trending-up',
      title: 'Impact Reporting',
      description: 'Create detailed impact reports for stakeholders with customizable templates and analytics.'
    },
    {
      icon: 'award',
      title: 'Fundraising Tools',
      description: 'Online fundraising campaigns, event management, and donation processing integration.'
    },
    {
      icon: 'check',
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated reporting and document management.'
    }
  ],
  process: [
    { step: '1', title: 'Setup', description: 'Import existing donor and volunteer data' },
    { step: '2', title: 'Configure', description: 'Customize donation forms and volunteer opportunities' },
    { step: '3', title: 'Integrate', description: 'Connect payment gateways and communication tools' },
    { step: '4', title: 'Train', description: 'Train your team on all features and best practices' },
    { step: '5', title: 'Launch', description: 'Go live with ongoing support and optimization' }
  ],
  targets: [
    { title: 'Community NGOs', description: 'Local community-based organizations and associations' },
    { title: 'International NGOs', description: 'Branches of international non-profit organizations' },
    { title: 'Foundations', description: 'Private and corporate foundations managing grants' },
    { title: 'Charities', description: 'Religious and charitable organizations' }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 2,000/month',
      description: 'Perfect for small NGOs',
      features: ['Up to 500 contacts', 'Basic donation tracking', 'Volunteer management', 'Email templates', 'Monthly reports'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 8,000/month',
      description: 'Ideal for growing NGOs',
      features: ['Up to 5,000 contacts', 'Advanced donor management', 'Grant tracking', 'Online fundraising', 'Impact reporting', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large NGOs and networks',
      features: ['Unlimited contacts', 'Full feature access', 'Custom integrations', 'Dedicated support', 'Multi-organization management', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesNonProfit transformed how we manage our donors and volunteers. Everything is now organized and efficient.',
      author: 'Rebecca Okonkwo',
      role: 'Executive Director',
      organization: 'Hope Foundation Kenya'
    },
    {
      quote: 'The impact reporting feature helped us secure a major grant that we would have otherwise missed.',
      author: 'James Muriithi',
      role: 'Programs Manager',
      organization: 'East Africa Wildlife Trust'
    }
  ]
}

export default function MylesNonProfitPage() {
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
                NGO MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESNONPROFIT_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESNONPROFIT_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESNONPROFIT_DATA.overview.description}
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
              {MYLESNONPROFIT_DATA.overview.stats.map((stat, index) => (
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
                Complete NGO Management Solution
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Everything you need to manage donors, volunteers, grants, and demonstrate impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESNONPROFIT_DATA.features.map((feature, index) => (
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
              Ready to Amplify Your Impact?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESNONPROFIT_DATA.overview.stats[0].number} NGOs across East Africa already transforming their operations.
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
