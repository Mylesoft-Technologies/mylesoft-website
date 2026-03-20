import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Heart, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function MylesCarePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="heading-1 mb-6 fade-in">MylesCare</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Intelligent hospital management system. Streamline healthcare delivery with AI-powered diagnostics, comprehensive patient records, and automated appointment scheduling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Button size="lg">Book a Demo</Button>
                  <Button variant="secondary" size="lg">View Features</Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="heart" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Healthcare Management Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive tools for modern healthcare facilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Patient Records',
                  description: 'Digital health records with secure access and comprehensive medical history'
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: 'AI Diagnostics',
                  description: 'Intelligent diagnostic assistance powered by machine learning algorithms'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Appointment System',
                  description: 'Automated scheduling and patient flow management for optimal efficiency'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Billing',
                  description: 'Integrated billing system with insurance processing and payment management'
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
              <h2 className="heading-2 mb-4">Transform Healthcare Delivery</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Join leading healthcare providers using MylesCare for intelligent hospital management
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
