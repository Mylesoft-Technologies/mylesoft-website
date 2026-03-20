import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Star, Users, ArrowRight, CheckCircle, BookOpen, Award, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

export default function EduMylesPage() {
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
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                EDUCATION MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Complete School
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Management
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Transform your educational institution with intelligent automation, comprehensive 
              analytics, and seamless parent-teacher communication.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Detailed Overview */}
        <section className="section">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Transform your educational institution with intelligent automation, comprehensive analytics, and seamless parent-teacher communication. EduMyles streamlines every aspect of school administration from enrollment to graduation.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Capabilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">AI-Powered Grading</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Real-time Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Parent Portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Mobile Access</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Link href="/book-demo">
                    <Button size="lg">Book a Demo</Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="secondary" size="lg">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gold/30">
                  <Icon name="graduation-cap" className="text-gold-400" size={96} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-body font-semibold text-sm">
                  Industry Leading
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Overview */}
        <section className="section">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Revolutionizing Education Management</h2>
                <div className="space-y-4 body-text">
                  <p>
                    EduMyles is a comprehensive school management system designed to streamline every aspect of educational administration. From student enrollment to graduation, our platform provides intelligent tools that enhance efficiency, improve communication, and deliver actionable insights.
                  </p>
                  <p>
                    Powered by advanced AI algorithms, EduMyles automates routine tasks, predicts student performance trends, and provides personalized learning recommendations. Our system serves over 500 schools across East Africa, managing more than 250,000 students with proven results.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">500+ Schools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">250K+ Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">99.9% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="chart-line" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Comprehensive Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Everything you need to manage your educational institution efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Student Management',
                  description: 'Complete student lifecycle management from admission to graduation',
                  features: ['Digital Registration', 'Attendance Tracking', 'Grade Management', 'Discipline Records']
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: 'Academic Management',
                  description: 'Streamline curriculum planning and academic operations',
                  features: ['Course Planning', 'Timetable Management', 'Exam Scheduling', 'Resource Allocation']
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'AI Grading',
                  description: 'Intelligent automated grading with detailed analytics',
                  features: ['Automated Scoring', 'Plagiarism Detection', 'Performance Analytics', 'Feedback Generation']
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Parent Portal',
                  description: 'Real-time access for parents to monitor student progress',
                  features: ['Progress Tracking', 'Communication Hub', 'Fee Management', 'Event Calendar']
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security with data privacy compliance',
                  features: ['Data Encryption', 'Access Control', 'Audit Trails', 'GDPR Compliance']
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: 'Analytics & Reporting',
                  description: 'Advanced reporting and data visualization for insights',
                  features: ['Performance Dashboards', 'Custom Reports', 'Predictive Analytics', 'Data Export']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-text mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Why Schools Choose EduMyles</h2>
              <p className="body-text max-w-2xl mx-auto">
                Transform your educational institution with proven benefits
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: '40% Efficiency',
                  description: 'Reduce administrative overhead by 40% with automation'
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: '30% Better Results',
                  description: 'Improve student outcomes through data-driven insights'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: '85% Parent Satisfaction',
                  description: 'Enhance parent engagement with transparent communication'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: '100% Data Security',
                  description: 'Enterprise-grade security with compliance standards'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="heading-3 mb-2">{benefit.title}</h3>
                  <p className="body-text">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Success Stories</h2>
              <p className="body-text max-w-2xl mx-auto">
                Hear from educational institutions transformed by EduMyles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "EduMyles transformed our school operations. We've reduced administrative work by 50% and improved parent communication significantly.",
                  author: "Sarah Johnson",
                  role: "Principal, Nairobi Academy",
                  rating: 5
                },
                {
                  quote: "The AI grading system is incredible. It saves our teachers hours of work while providing detailed insights into student performance.",
                  author: "Michael Chen",
                  role: "Academic Director, Mombasa International School",
                  rating: 5
                },
                {
                  quote: "Parents love the real-time access to their children's progress. It has dramatically improved parent satisfaction rates.",
                  author: "Grace Mutiso",
                  role: "Administrator, Kisumu High School",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="body-text mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Ready to Transform Your School?</h2>
              <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                Join over 500 schools already using EduMyles to revolutionize education management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <Button size="lg">Book a Demo</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">View Pricing</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
