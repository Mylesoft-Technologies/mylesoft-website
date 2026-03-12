import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'
import { StepCard } from '@/components/ui/StepCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { Calendar, Settings, Rocket } from 'lucide-react'

const featuredProducts = [
  {
    name: 'EduMyles',
    description: 'Complete school management system transforming education across East Africa.',
    icon: <Icon name="graduation-cap" className="text-gold-400" />,
    features: [
      'Student Information Management',
      'Automated Grading & Reports',
      'Parent Communication Portal'
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
      'AI Diagnostic Support'
    ],
    status: 'live' as const,
    href: '/products/mylescare'
  },
  {
    name: 'MylesCRM',
    description: 'Customer relationship management built for African businesses.',
    icon: <Icon name="users" className="text-gold-400" />,
    features: [
      'Lead Management',
      'Sales Pipeline Tracking',
      'Customer Analytics'
    ],
    status: 'live' as const,
    href: '/products/mylescrm'
  },
  {
    name: 'AgriMyles',
    description: 'Smart farming solution for agricultural productivity and sustainability.',
    icon: <Icon name="sprout" className="text-gold-400" />,
    features: [
      'Crop Health Monitoring',
      'Weather Integration',
      'Market Price Analytics'
    ],
    status: 'live' as const,
    href: '/products/agrimyles'
  },
  {
    name: 'Myles AI',
    description: 'Africa\'s intelligence engine with local language support.',
    icon: <Icon name="brain" className="text-gold-400" />,
    features: [
      'Multi-language AI Models',
      'Industry-specific Solutions',
      'Real-time Analytics'
    ],
    status: 'live' as const,
    href: '/products/myles-ai'
  },
  {
    name: 'MylesPay',
    description: 'Digital payment solution for seamless transactions.',
    icon: <Icon name="credit-card" className="text-gold-400" />,
    features: [
      'Mobile Money Integration',
      'Multi-currency Support',
      'Instant Settlements'
    ],
    status: 'development' as const,
    href: '/products/mylespay'
  }
]

const howItWorksSteps = [
  {
    number: 1,
    title: 'Book a Demo',
    description: 'Schedule a personalized demonstration with our solutions expert to see how Mylesoft can transform your organization.',
    icon: <Calendar size={24} />
  },
  {
    number: 2,
    title: 'Customise',
    description: 'Work with our team to configure the solution to your specific needs and integrate with your existing systems.',
    icon: <Settings size={24} />
  },
  {
    number: 3,
    title: 'Go Live',
    description: 'Launch with comprehensive training, ongoing support, and start seeing immediate results in your operations.',
    icon: <Rocket size={24} />
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Kimani',
    title: 'Principal',
    organization: 'Nairobi Girls High School',
    quote: 'EduMyles has transformed how we manage student information and communicate with parents. The AI-powered analytics help us make data-driven decisions.',
    rating: 5
  },
  {
    name: 'John Mwangi',
    title: 'CEO',
    organization: 'Mombasa General Hospital',
    quote: 'MylesCare revolutionized our patient management system. We\'ve reduced wait times by 40% and improved patient outcomes significantly.',
    rating: 5
  },
  {
    name: 'Grace Achieng',
    title: 'Farm Manager',
    organization: 'Green Valley Farms',
    quote: 'AgriMyles helps us monitor crop health and predict yields. Our productivity increased by 35% in the first season.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background">
            {/* Animated background will be added here */}
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              East Africa's Leading AI-Powered Software Company
            </h1>
            <p className="hero-subtitle">
              Transforming Education, Healthcare, Agriculture & Business across East Africa with 20+ AI-powered solutions built for Africa, by Africa.
            </p>
            <div className="hero-buttons">
              <Button>Book a Free Demo</Button>
              <Button variant="secondary">Explore Products</Button>
            </div>
          </div>
        </section>

        {/* Impact Stats Strip */}
        <section className="impact-stats">
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Schools</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">250K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hospitals</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">1K+</div>
              <div className="stat-label">Farmers</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">18</div>
              <div className="stat-label">Sectors</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">47</div>
              <div className="stat-label">Counties</div>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Featured Products</h2>
              <p className="body-text max-w-2xl mx-auto">
                Our most popular AI-powered solutions transforming organizations across East Africa.
              </p>
            </div>
            <div className="grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="body-text max-w-2xl mx-auto">
                Get started with Mylesoft in three simple steps.
              </p>
            </div>
            <div className="grid-cols-3">
              {howItWorksSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">What Our Customers Say</h2>
              <p className="body-text max-w-2xl mx-auto">
                Trusted by leading organizations across East Africa.
              </p>
            </div>
            <div className="grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Myles AI Spotlight */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Powered by Myles AI</h2>
              <p className="text-xl mb-8 text-navy-100">
                Africa's intelligence engine supporting local languages and industry-specific needs.
              </p>
              {/* Myles AI features will be added here */}
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Trusted By Leading Organizations</h2>
            </div>
            {/* Partner logos will be added here */}
          </div>
        </section>

        {/* Blog Preview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Latest Insights</h2>
              <p className="body-text max-w-2xl mx-auto">
                Thought leadership on technology, business, and innovation in Africa.
              </p>
            </div>
            <div className="grid-cols-3">
              {/* Blog cards will be added here */}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organisation?</h2>
              <p className="text-xl mb-8 text-navy-100">
                Join hundreds of organizations already using Mylesoft solutions.
              </p>
              <div className="hero-buttons">
                <Button>Book a Demo</Button>
                <Button variant="secondary">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
