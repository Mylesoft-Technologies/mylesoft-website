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
  CheckCircle,
  ArrowRight,
  Globe,
  Heart
} from 'lucide-react'

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
    price: 'Starting from KES 500,000'
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
    price: 'Custom Quote'
  },
  {
    name: 'AI Implementation Services',
    description: 'Strategic implementation of artificial intelligence to drive efficiency and innovation.',
    icon: <Icon name="brain" className="text-gold-400" size={48} />,
    features: [
      'AI Readiness Assessment',
      'Machine Learning Model Development',
      'Data Strategy Development',
      'AI Integration Planning',
      'Ethical AI Implementation',
      'Performance Monitoring'
    ],
    duration: '4-12 weeks',
    price: 'Starting from KES 750,000'
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
    price: 'Starting from KES 300,000'
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
    price: 'Starting from KES 200,000'
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
    price: 'Monthly Retainer'
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
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Professional Services</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed">
                Expert consulting and implementation services to help your organization leverage technology for growth and efficiency. Our team of specialists brings deep industry knowledge and technical expertise to every project.
              </p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-medium p-8 hover:shadow-large transition-shadow">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="heading-3 mb-4">{service.name}</h3>
                  <p className="body-text mb-6">{service.description}</p>
                  
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="text-center">
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
