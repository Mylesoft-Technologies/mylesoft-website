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
  Zap,
  ArrowRight,
  Star,
  CheckCircle
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
    href: '/products/mylescare'
  },
  {
    name: 'AgriMyles',
    description: 'Smart agricultural platform empowering farmers with data-driven insights.',
    icon: <Icon name="leaf" className="text-gold-400" />,
    features: [
      'Crop Monitoring & Analysis',
      'Weather Forecasting',
      'Market Price Tracking',
      'Farm Resource Management',
      'Yield Prediction',
      'Supply Chain Integration'
    ],
    status: 'live' as const,
    href: '/products/agrimyles'
  },
  {
    name: 'MylesCRM',
    description: 'Customer relationship management solution for growing businesses.',
    icon: <Icon name="users" className="text-gold-400" />,
    features: [
      'Lead Management',
      'Sales Pipeline Tracking',
      'Customer Analytics',
      'Email Campaigns',
      'Task Automation',
      'Performance Reporting'
    ],
    status: 'beta' as const,
    href: '/products/mylescrm'
  }
]

const stats = [
  { number: '500+', label: 'Schools Transformed', icon: <Target className="w-8 h-8" /> },
  { number: '50K+', label: 'Students Managed', icon: <Users className="w-8 h-8" /> },
  { number: '99.9%', label: 'Uptime Guaranteed', icon: <Shield className="w-8 h-8" /> },
  { number: '24/7', label: 'Support Available', icon: <Heart className="w-8 h-8" /> }
]

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal, Nairobi Academy',
    content: 'EduMyles has transformed how we manage our school. The automation and analytics have saved us countless hours.',
    rating: 5
  },
  {
    name: 'John Kimani',
    role: 'CEO, AgriTech Solutions',
    content: 'AgriMyles gives us real-time insights into crop performance. Our yields have increased by 30% since implementation.',
    rating: 5
  },
  {
    name: 'Mary Wanjiku',
    role: 'Hospital Administrator',
    content: 'MylesCare streamlined our patient management system. Efficiency has improved dramatically across all departments.',
    rating: 5
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

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              East Africa's leading technology company delivering innovative solutions for Education, Healthcare, Agriculture, and Business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="shadow-2xl hover:shadow-3xl">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-navy-500 mb-2 group-hover:text-gold-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
              Our Featured Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific products designed to solve real business challenges in East Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about their transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-navy-500">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-navy-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of organizations across East Africa already using our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy-500 hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-500">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </Layout>
  )
}
