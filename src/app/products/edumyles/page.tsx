import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Star, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function EduMylesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="heading-1 mb-6 fade-in">EduMyles</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Complete school management system powered by AI. Transform your educational institution with intelligent automation, comprehensive analytics, and seamless parent-teacher communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Button size="lg">Book a Demo</Button>
                  <Button variant="secondary" size="lg">View Features</Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="graduation-cap" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Powerful Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Everything you need to manage your educational institution efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Student Management',
                  description: 'Comprehensive student records, attendance tracking, and academic performance monitoring'
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'AI Grading',
                  description: 'Intelligent automated grading system with detailed analytics and insights'
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Parent Portal',
                  description: 'Real-time access for parents to monitor student progress and communicate'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Analytics',
                  description: 'Advanced reporting and data visualization for informed decision-making'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-text">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Ready to Transform Your School?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Join over 500 schools already using EduMyles to revolutionize education management
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
