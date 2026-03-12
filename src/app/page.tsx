import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

const featuredProducts = [
  {
    name: 'EduMyles',
    description: 'Complete school management system transforming education across East Africa.',
    icon: <Icon name="graduation-cap" className="text-gold-400" />,
    features: [
      'Student Information Management',
      'Automated Grading & Reports',
      'Parent Communication Portal',
      'Attendance Tracking',
      'Exam Management',
      'Library Management'
    ],
    status: 'live' as const,
    href: '/products/edumyles'
  },
  {
    name: 'MylesCare',
    description: 'AI-powered hospital management system for modern healthcare delivery.',
    icon: <Icon name="stethoscope" className="text-gold-400" />,
    features: [
      'Patient Records Management',
      'Appointment Scheduling',
      'AI Diagnostic Support',
      'Medical Billing',
      'Inventory Management',
      'Telemedicine Integration'
    ],
    status: 'live' as const,
    href: '/products/mylescare'
  },
  {
    name: 'AgriMyles',
    description: 'Smart farming solution for agricultural productivity and sustainability.',
    icon: <Icon name="sprout" className="text-gold-400" />,
    features: [
      'Crop Health Monitoring',
      'Weather Integration',
      'Market Price Analytics',
      'Irrigation Management',
      'Supply Chain Tracking',
      'Farm Management'
    ],
    status: 'development' as const,
    href: '/products/agrimyles'
  }
]

const impactStats = [
  { number: '500+', label: 'Educational Institutions' },
  { number: '100+', label: 'Healthcare Providers' },
  { number: '1,000+', label: 'Businesses' },
  { number: '95%', label: 'Satisfaction Rate' }
]

const howItWorksSteps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'We begin by understanding your organization\'s unique challenges and goals.',
    icon: <Target size={24} className="text-gold-400" />
  },
  {
    number: 2,
    title: 'Strategy',
    description: 'Our experts develop a comprehensive strategy tailored to your specific needs.',
    icon: <Eye size={24} className="text-gold-400" />
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'We execute the plan with minimal disruption to your operations.',
    icon: <Zap size={24} className="text-gold-400" />
  },
  {
    number: 4,
    title: 'Success',
    description: 'We ensure you achieve maximum value from our solutions.',
    icon: <TrendingUp size={24} className="text-gold-400" />
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Kimani',
    role: 'Principal, Nairobi Academy',
    content: 'EduMyles has transformed how we manage our school. The efficiency gains have been remarkable.',
    rating: 5
  },
  {
    name: 'John Mwangi',
    role: 'CEO, Mwangi Enterprises',
    content: 'The AI-powered solutions have revolutionized our business operations. Highly recommended!',
    rating: 5
  },
  {
    name: 'Grace Achieng',
    role: 'Director, County Hospital',
    content: 'MylesCare has improved our patient care and operational efficiency significantly.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6 fade-in">Transforming Africa with AI</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed mb-8 slide-up">
                East Africa's leading AI-powered software company building innovative solutions for Education, Healthcare, Agriculture, and Business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                <Button size="lg">Get Started</Button>
                <Button variant="secondary" size="lg">Book a Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Making an Impact</h2>
              <p className="body-text max-w-2xl mx-auto">
                Our solutions are transforming organizations across East Africa.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="stat-number mb-2">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Featured Solutions</h2>
              <p className="body-text max-w-2xl mx-auto">
                Discover our most popular AI-powered solutions designed for African markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="body-text max-w-2xl mx-auto">
                Our proven process ensures successful implementation and maximum value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gold-400 mb-3">Step {step.number}</div>
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="body-text">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">What Our Customers Say</h2>
              <p className="body-text max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-quote">{testimonial.content}</p>
                  <div className="testimonial-author">{testimonial.name}</div>
                  <div className="small-text text-medium-grey">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organization?</h2>
              <p className="text-xl text-navy-100 mb-8">
                Join hundreds of organizations across East Africa using our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="secondary" size="lg">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="max-w-2xl mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
