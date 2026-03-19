import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardContent, CardIcon } from '@/components/ui/Card'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { 
  MapPin, 
  Clock, 
  Users, 
  Brain, 
  Heart, 
  Shield,
  TrendingUp,
  Target,
  Award,
  Briefcase,
  DollarSign
} from 'lucide-react'

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years',
    category: 'Engineering',
    description: 'We are looking for an experienced full-stack developer to join our engineering team and help build scalable AI-powered solutions for African markets.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong understanding of databases and API design',
      'Experience with AI/ML concepts is a plus',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible work arrangements',
      'Professional development budget',
      'Health insurance and wellness benefits',
      'Opportunity to work on impactful projects'
    ],
    posted: '2 weeks ago'
  },
  {
    title: 'Product Manager',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    category: 'Product',
    description: 'Join our product team to drive the development of innovative solutions that address real challenges in education, healthcare, and agriculture.',
    requirements: [
      '3+ years of product management experience',
      'Experience with SaaS products and enterprise software',
      'Strong analytical and data-driven decision making',
      'Excellent communication and stakeholder management',
      'Understanding of African markets is a plus',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Flexible work environment',
      'Direct impact on customer success'
    ],
    posted: '1 week ago'
  }
]

const departments = [
  {
    name: 'Engineering',
    description: 'Build innovative AI-powered solutions that transform African industries.',
    teamSize: '15+',
    focusAreas: ['Frontend', 'Backend', 'AI/ML', 'DevOps']
  },
  {
    name: 'Product',
    description: 'Shape the future of our products and ensure they solve real customer problems.',
    teamSize: '6+',
    focusAreas: ['Product Strategy', 'Design', 'Research', 'Analytics']
  },
  {
    name: 'Operations',
    description: 'Keep our business running smoothly and efficiently as we scale.',
    teamSize: '8+',
    focusAreas: ['Finance', 'HR', 'Legal', 'Admin']
  },
  {
    name: 'Sales',
    description: 'Drive growth and build relationships with organizations across East Africa.',
    teamSize: '8+',
    focusAreas: ['Business development', 'customer acquisition', 'partnerships']
  },
  {
    name: 'Customer Success',
    description: 'Ensure our customers achieve maximum value and success with our solutions.',
    teamSize: '6+',
    focusAreas: ['Customer onboarding', 'support', 'relationship management']
  },
  {
    name: 'Marketing',
    description: 'Tell our story and build our brand across African markets.',
    teamSize: '4+',
    focusAreas: ['Brand building', 'content creation', 'digital marketing']
  }
]

const benefits = [
  {
    icon: <DollarSign size={24} className="text-gold-400" />,
    title: 'Competitive Compensation',
    description: 'Market-aligned salaries with performance-based bonuses and equity options for key roles.'
  },
  {
    icon: <Heart size={24} className="text-gold-400" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and mental health support for all team members.'
  },
  {
    icon: <Briefcase size={24} className="text-gold-400" />,
    title: 'Professional Growth',
    description: 'Continuous learning opportunities, training budgets, conference attendance, and clear career progression paths.'
  },
  {
    icon: <Users size={24} className="text-gold-400" />,
    title: 'Great Team',
    description: 'Work with talented, passionate colleagues who are transforming Africa through technology.'
  },
  {
    icon: <Target size={24} className="text-gold-400" />,
    title: 'Impactful Work',
    description: 'Join a mission-driven company making real difference in education, healthcare, and agriculture.'
  },
  {
    icon: <TrendingUp size={24} className="text-gold-400" />,
    title: 'Flexible Work',
    description: 'Hybrid work options, flexible hours, and focus on results rather than face time.'
  }
]

const cultureValues = [
  {
    title: 'Innovation First',
    description: 'We encourage experimentation, learning, and pushing boundaries to solve Africa\'s challenges creatively.'
  },
  {
    title: 'Customer Obsessed',
    description: 'Our customers\' success is our success. We go above and beyond to ensure they achieve their goals.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We believe diverse perspectives create better solutions. Teamwork and knowledge sharing are in our DNA.'
  },
  {
    title: 'Local Context',
    description: 'We understand African markets because we\'re part of them. Our solutions are built by Africans, for Africa.'
  },
  {
    title: 'Growth Mindset',
    description: 'We invest in our people\'s development and provide opportunities for career advancement and skill building.'
  }
]

export default function CareersPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-navy via-navy-deep to-navy-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  CAREERS
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                Careers at MylesCorp
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-xl text-light-blue max-w-3xl mx-auto leading-relaxed font-body">
                Join our team of innovators transforming Africa through technology. We're looking for passionate individuals who want to make a real impact.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section">
          <div className="section-padding">
            <div className="mb-12">
              <h2 className="heading-2 mb-4">Open Positions</h2>
              <p className="body-text max-w-2xl mx-auto">
                We're always looking for talented individuals to join our mission. Find your opportunity below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
                {openPositions.map((position, index) => (
                  <Card variant="light" key={index} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-navy mb-2">{position.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <MapPin size={16} className="mr-2" />
                          <span>{position.location}</span>
                          <span className="mx-2">•</span>
                          <span>{position.type}</span>
                          <span className="mx-2">•</span>
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold font-body">
                        {position.category}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 font-body flex-grow">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-3 font-body">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 font-body">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-3 font-body">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 font-body">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm text-gray-500">
                        <Clock size={16} className="mr-2" />
                        Posted {position.posted}
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </Card>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Teams</h2>
              <p className="body-text max-w-2xl mx-auto">
                Meet the departments driving our mission forward. Each team plays a crucial role in transforming African industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
                {departments.map((dept, index) => (
                  <Card variant="light" key={index} className="text-center h-full flex flex-col">
                    <CardIcon size="lg">
                      <Brain className="text-gold" />
                    </CardIcon>
                    <CardHeader>
                      <h3 className="text-2xl font-display font-bold text-navy mb-3">{dept.name}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 mb-4 font-body flex-grow">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-semibold text-navy">Team Size:</span>
                          <span className="text-gray-500 ml-2">{dept.teamSize}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold text-navy">Focus Areas:</span>
                          <span className="text-gray-500 ml-2">{dept.focusAreas.join(', ')}</span>
                        </div>
                      </div>
                    </CardContent>
                    <div className="mt-auto p-6 pt-0">
                      <Button variant="secondary" className="w-full">
                        View {dept.name} Roles
                      </Button>
                    </div>
                  </Card>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="section">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Culture */}
              <div>
                <h2 className="heading-2 mb-6">Our Culture</h2>
                <p className="body-text mb-8">
                  At MylesCorp, we've built a culture that brings out the best in people and drives innovation that matters for Africa.
                </p>
                
                <div className="space-y-6">
                  {cultureValues.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                          <Award size={24} className="text-gold-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="heading-3 mb-2">{value.title}</h3>
                        <p className="body-text">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="heading-2 mb-6">Why Work With Us</h2>
                <p className="body-text mb-8">
                  We offer comprehensive benefits and perks to support our team members' growth and well-being.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="heading-3 mb-3">{benefit.title}</h3>
                      <p className="body-text text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Ready to Join Us?</h2>
              <p className="text-xl text-navy-100 mb-8">
                Take the next step in your career journey. Apply for open positions or connect with our team to explore opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>View All Positions</Button>
                <Button variant="secondary">Join Talent Network</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
