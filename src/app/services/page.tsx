import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { 
  Users, 
  Settings, 
  Brain, 
  Shield, 
  TrendingUp,
  Clock,
  Code,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Heart,
  Monitor
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    name: 'Digital Transformation Consulting',
    description: 'Comprehensive assessment and roadmap development for organizations looking to digitize their operations.',
    icon: <Icon name="brain" className="text-gold-400" size={48} />,
    features: [
      'Digital Readiness Assessment',
      'Technology Roadmap Development',
      'Change Management Strategy',
      'Process Optimization',
      'ROI Analysis',
      'Implementation Planning'
    ],
    duration: '3-6 months',
    price: 'Starting from KES 500,000',
    href: '/services/software-development'
  },
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your organization\'s unique requirements.',
    icon: <Icon name="settings" className="text-gold-400" size={48} />,
    features: [
      'Requirements Analysis',
      'Custom Application Development',
      'Integration Services',
      'Testing & Quality Assurance',
      'Deployment & Training',
      'Ongoing Support'
    ],
    duration: '2-8 months',
    price: 'Custom Quote',
    href: '/services/software-development'
  },
  {
    name: 'AI Implementation Services',
    description: 'Strategic implementation of artificial intelligence to drive efficiency and innovation.',
    icon: <Icon name="brain" className="text-gold-400" size={48} />,
    features: [
      'AI Readiness Assessment',
      'Machine Learning l Development',
      'Data Strategy Development',
      'AI Integration Planning',
      'Ethical AI Implementation',
      'Performance Monitoring'
    ],
    duration: '4-12 weeks',
    price: 'Starting from KES 750,000',
    href: '/services/software-development'
  },
  {
    name: 'Cloud Migration Services',
    description: 'Seamless migration of existing systems to cloud infrastructure for scalability and cost efficiency.',
    icon: <Icon name="shield" className="text-gold-400" size={48} />,
    features: [
      'Cloud Strategy Development',
      'Infrastructure Assessment',
      'Migration Planning',
      'Data Migration Services',
      'Security Configuration',
      'Performance Optimization'
    ],
    duration: '6-12 weeks',
    price: 'Starting from KES 300,000',
    href: '/services/cloud-solutions'
  },
  {
    name: 'Cybersecurity Consulting',
    description: 'Comprehensive security assessment and implementation to protect your digital assets.',
    icon: <Icon name="shield" className="text-gold-400" size={48} />,
    features: [
      'Security Assessment',
      'Vulnerability Testing',
      'Security Policy Development',
      'Compliance Management',
      'Security Training',
      'Incident Response Planning'
    ],
    duration: '2-4 weeks',
    price: 'Starting from KES 200,000',
    href: '/services/it-consulting'
  },
  {
    name: 'Training & Support Services',
    description: 'Comprehensive training programs and ongoing support to maximize technology adoption.',
    icon: <Icon name="users" className="text-gold-400" size={48} />,
    features: [
      'Custom Training Programs',
      'User Adoption Strategies',
      'Technical Support Services',
      'Documentation Development',
      'Knowledge Transfer',
      'Performance Monitoring'
    ],
    duration: 'Ongoing',
    price: 'Monthly Retainer',
    href: '/services/it-consulting'
  },
  {
    name: 'Website Development & Hosting',
    description: 'We design, build, and host professional websites for businesses, schools, hospitals, NGOs, and government institutions across East Africa — built on the same world-class technology stack powering MylesCorp itself.',
    icon: <Monitor className="text-gold-400" size={48} />,
    features: [
      'Custom design from scratch — no templates',
      'Mobile-first, fully responsive',
      'Next.js + Vercel — enterprise performance',
      'SSL security + 99.9% uptime guaranteed',
      'SEO optimised from day one',
      'Packages from KES 25,000'
    ],
    duration: '2-6 weeks',
    price: 'Starting from KES 25,000',
    href: '/services/website-development',
    cta: 'View Packages'
  }
]

const processSteps = [
  {
    number: 1,
    title: 'Discovery & Assessment',
    description: 'We begin by understanding your organization\'s unique challenges, goals, and current technology landscape.',
    icon: <CheckCircle size={24} />
  },
  {
    number: 2,
    title: 'Strategy Development',
    description: 'Our experts develop a comprehensive strategy tailored to your specific needs and objectives.',
    icon: <Brain size={24} />
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'We execute the plan with minimal disruption to your operations, ensuring smooth transition.',
    icon: <Settings size={24} />
  },
  {
    number: 4,
    title: 'Optimization & Support',
    description: 'Continuous monitoring and optimization to ensure maximum value and performance.',
    icon: <TrendingUp size={24} />
  }
]

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          {/* Grid texture overlay — always present on dark sections */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glow top-right */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Radial glow bottom-left */}
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                WHAT WE DO
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Comprehensive technology services tailored to transform your organisation and accelerate 
              growth across East Africa.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
                Book a Consultation
              </button>
            </div>

          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Service Offerings</h2>
              <p className="body-text max-w-2xl mx-auto">
                From strategy to implementation, we provide end-to-end services to ensure your technology initiatives succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-medium p-8 hover:shadow-large transition-shadow h-full flex flex-col">
                  <div className="mb-6 flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy-500 mb-3">{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-500 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle size={16} className="text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-light-grey pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-medium-grey">Duration:</span>
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-medium-grey">Price:</span>
                        <span className="text-sm font-medium">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Learn More Link */}
                  {service.href && (
                    <Link 
                      href={service.href}
                      className="text-gold text-sm font-bold font-body flex items-center gap-1 mt-auto pt-4 hover:gap-2 transition-all duration-200"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Process</h2>
              <p className="body-text max-w-2xl mx-auto">
                A proven methodology that ensures successful outcomes for every engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gold-400 mb-3">Step {step.number}</div>
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="body-text flex-grow">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Why Choose MylesCorp Services?</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Local Expertise',
                      description: 'Deep understanding of East African markets and business challenges.',
                      icon: <Globe size={24} className="text-gold-400" />
                    },
                    {
                      title: 'Proven Track Record',
                      description: 'Successfully delivered projects across 18 sectors and 47 counties.',
                      icon: <TrendingUp size={24} className="text-gold-400" />
                    },
                    {
                      title: 'Expert Team',
                      description: 'Highly skilled professionals with extensive industry experience.',
                      icon: <Users size={24} className="text-gold-400" />
                    },
                    {
                      title: 'Customer-Centric Approach',
                      description: 'We put your success at the center of everything we do.',
                      icon: <Heart size={24} className="text-gold-400" />
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="font-semibold text-navy-500 mb-2">{benefit.title}</h3>
                        <p className="body-text">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="brain" className="text-gold-400" size={96} />
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-medium p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-500 mb-1">200+</div>
                    <div className="text-sm text-medium-grey">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white mb-12">
              <h2 className="heading-2 mb-4">Our Impact</h2>
              <p className="text-xl text-navy-100">
                Measurable results that speak to our expertise and commitment
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Client Satisfaction" },
                { number: "200+", label: "Projects Delivered" },
                { number: "18", label: "Sectors Served" },
                { number: "47", label: "Counties Reached" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">{metric.number}</div>
                  <div className="text-navy-100">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organization?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Let's discuss how our services can help you achieve your digital transformation goals. Schedule a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Schedule Consultation</Button>
                <Button variant="secondary">View Case Studies</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
