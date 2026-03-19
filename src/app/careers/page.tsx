import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { 
  MapPin, 
  Users, 
  Briefcase, 
  Heart, 
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  Target,
  Brain
} from 'lucide-react'

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of our AI-powered products and mentor junior developers. Experience with React, Node.js, and cloud technologies.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Next.js, and TypeScript',
      'Experience with Node.js and cloud platforms',
      'Strong problem-solving and communication skills',
      'Passion for education technology in Africa'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible work arrangements',
      'Professional development budget',
      'Health insurance and wellness benefits',
      'Opportunity to work on impactful projects'
    ],
    posted: '2 weeks ago',
    category: 'Engineering'
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and implement machine learning models for our products, particularly in natural language processing and computer vision.',
    requirements: [
      '3+ years of AI/ML engineering experience',
      'Strong Python and TensorFlow/PyTorch skills',
      'Experience with NLP and computer vision',
      'Understanding of African language contexts',
      'Research publication record preferred'
    ],
    benefits: [
      'Cutting-edge AI projects',
      'Conference and training opportunities',
      'Competitive compensation package',
      'Work with latest AI technologies',
      'Impact on African industries'
    ],
    posted: '1 week ago',
    category: 'Engineering'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Create beautiful, intuitive user interfaces for our products serving African markets. Strong understanding of mobile-first design.',
    requirements: [
      '3+ years of product design experience',
      'Strong portfolio of digital products',
      'Proficiency in Figma, Adobe Creative Suite',
      'Experience with mobile app design',
      'Understanding of African user contexts'
    ],
    benefits: [
      'Creative freedom and autonomy',
      'Opportunity to shape product direction',
      'Work with diverse product portfolio',
      'Professional development budget',
      'Collaborative, innovative team'
    ],
    posted: '3 days ago',
    category: 'Design'
  },
  {
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Drive growth of Mylesoft products across East Africa. Build relationships with educational institutions, hospitals, and businesses.',
    requirements: [
      '3+ years of B2B sales experience',
      'Experience with SaaS or technology sales',
      'Strong understanding of African business landscape',
      'Excellent communication and presentation skills',
      'Ability to travel within East Africa'
    ],
    benefits: [
      'Competitive base salary plus commission',
      'Company car and travel allowance',
      'Sales training and development',
      'Opportunity to work with cutting-edge technology',
      'Impact on education and healthcare'
    ],
    posted: '1 week ago',
    category: 'Sales'
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Ensure our customers achieve maximum value from our products. Build lasting relationships with educational and healthcare institutions.',
    requirements: [
      '4+ years of customer success experience',
      'Experience with SaaS or enterprise software',
      'Strong problem-solving and relationship-building skills',
      'Understanding of education or healthcare sectors',
      'Excellent communication in English and Swahili'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Flexible work environment',
      'Direct impact on customer success'
    ],
    posted: '2 weeks ago',
    category: 'Customer Success'
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead marketing initiatives to promote Mylesoft across East Africa. Develop campaigns that resonate with local markets.',
    requirements: [
      '5+ years of marketing experience',
      'Experience with B2B technology marketing',
      'Understanding of African digital landscape',
      'Strong content creation and campaign management skills',
      'Experience with SEO and digital marketing'
    ],
    benefits: [
      'Competitive salary and performance incentives',
      'Marketing budget and creative freedom',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Opportunity to build brand across Africa'
    ],
    posted: '4 days ago',
    category: 'Marketing'
  }
]

const departments = [
  {
    name: 'Engineering',
    description: 'Build innovative software solutions that transform African industries.',
    teamSize: '15+',
    focus: 'Product development, AI implementation, technical innovation'
  },
  {
    name: 'Design',
    description: 'Create beautiful, intuitive experiences for our diverse user base across Africa.',
    teamSize: '5+',
    focus: 'User experience, interface design, product design'
  },
  {
    name: 'Sales',
    description: 'Drive growth and build relationships with organizations across East Africa.',
    teamSize: '8+',
    focus: 'Business development, customer acquisition, partnerships'
  },
  {
    name: 'Customer Success',
    description: 'Ensure our customers achieve maximum value and success with our solutions.',
    teamSize: '6+',
    focus: 'Customer onboarding, support, relationship management'
  },
  {
    name: 'Marketing',
    description: 'Tell our story and build our brand across African markets.',
    teamSize: '4+',
    focus: 'Brand building, content creation, digital marketing'
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
                Careers at Mylesoft
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
                    <CardContent>
                      <p className="text-gray-600 mb-4 font-body flex-grow">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-semibold text-navy">Team Size:</span>
                          <span className="ml-2">{dept.teamSize}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold text-navy">Focus:</span>
                          <span className="ml-2">{dept.focus}</span>
                        </div>
                      </div>
                    </CardContent>
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
                  At Mylesoft, we've built a culture that brings out the best in people and drives innovation that matters for Africa.
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
