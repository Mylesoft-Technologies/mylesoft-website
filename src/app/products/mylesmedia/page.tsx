import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Camera, Video, Users, Calendar, Share2, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesMedia - Media Management Software | MylesCorp Technologies',
  description: 'Comprehensive media management solution for content creators, broadcasters, and media companies. Streamline content production and distribution.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylesmedia',
  },
}

const MYLESMEDIA_DATA = {
  overview: {
    title: 'MylesMedia',
    tagline: 'Smart Media Management for Content Excellence',
    description: 'Complete media management solution designed for content creators, broadcasters, and media companies across Africa.',
    image: '/api/og/product?name=MylesMedia&category=Media',
    stats: [
      { number: '60+', label: 'Media Clients' },
      { number: '10K+', label: 'Content Pieces Managed' },
      { number: '80%', label: 'Production Efficiency' },
      { number: '24/7', label: 'Content Delivery' }
    ]
  },
  features: [
    {
      icon: 'camera',
      title: 'Content Management',
      description: 'Centralized content library with metadata tagging and advanced search capabilities.'
    },
    {
      icon: 'video',
      title: 'Production Workflow',
      description: 'Streamlined production workflow from planning to final delivery.'
    },
    {
      icon: 'users',
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools for creative teams and production staff.'
    },
    {
      icon: 'calendar',
      title: 'Scheduling',
      description: 'Content scheduling and publishing calendar with automated distribution.'
    },
    {
      icon: 'share2',
      title: 'Distribution',
      description: 'Multi-platform content distribution and social media management.'
    },
    {
      icon: 'check',
      title: 'Analytics',
      description: 'Comprehensive analytics to track content performance and audience engagement.'
    }
  ],
  process: [
    { step: '1', title: 'Setup', description: 'Content library setup and workflow configuration' },
    { step: '2', title: 'Configure', description: 'Custom workflows and team collaboration setup' },
    { step: '3', title: 'Train', description: 'Team training on content management and production tools' },
    { step: '4', title: 'Launch', description: 'Go-live with dedicated support and monitoring' },
    { step: '5', title: 'Optimize', description: 'Continuous improvement based on performance analytics' }
  ],
  targets: [
    { title: 'Broadcasters', description: 'TV and radio stations with content management needs' },
    { title: 'Production Houses', description: 'Video and audio production companies' },
    { title: 'News Organizations', description: 'Digital news platforms and media houses' },
    { title: 'Content Creators', description: 'YouTube creators and digital content studios' }
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 5,000/month',
      description: 'Perfect for small media teams',
      features: ['Up to 10 users', 'Content library (100GB)', 'Basic workflow', 'Social media scheduling', 'Mobile app'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 20,000/month',
      description: 'Ideal for growing media companies',
      features: ['Up to 50 users', 'Content library (1TB)', 'Advanced workflows', 'Multi-platform distribution', 'Analytics dashboard', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large media organizations',
      features: ['Unlimited users', 'Unlimited storage', 'Full feature access', 'Custom integrations', 'Dedicated support', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesMedia transformed our content production workflow. We now produce 3x more content with the same team.',
      author: 'Miriam Achieng',
      role: 'Content Director',
      organization: 'Nairobi Media House'
    },
    {
      quote: 'The analytics and distribution features have significantly increased our content reach and engagement.',
      author: 'David Kamau',
      role: 'Producer',
      organization: 'East Africa Broadcast Network'
    }
  ]
}

export default function MylesMediaPage() {
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
                MEDIA MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESMEDIA_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESMEDIA_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESMEDIA_DATA.overview.description}
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
              {MYLESMEDIA_DATA.overview.stats.map((stat, index) => (
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
                Complete Media Management Solution
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto">
                Everything you need to manage content production, distribution, and performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MYLESMEDIA_DATA.features.map((feature, index) => (
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
              Ready to Transform Your Media Operations?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Join {MYLESMEDIA_DATA.overview.stats[0].number} media companies across Africa already creating more with MylesMedia.
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
