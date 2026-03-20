import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Shield, MapPin, Bell, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function EduRydePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-4 fade-in">
                  <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-body font-semibold">New</span>
                  <span className="text-gold text-sm font-body">Education Transport Solution</span>
                </div>
                <h1 className="heading-1 mb-6 fade-in">EduRyde</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Modern school transport management and tracking system. Ensure student safety with real-time GPS tracking, intelligent route optimization, and instant parent notifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Button size="lg">Book a Demo</Button>
                  <Button variant="secondary" size="lg">View Features</Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="bus" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Advanced Transport Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive solution for safe and efficient school transportation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Real-time Tracking',
                  description: 'Live GPS tracking of all school buses with accurate location updates'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Route Optimization',
                  description: 'Intelligent route planning to minimize travel time and fuel consumption'
                },
                {
                  icon: <Bell className="w-6 h-6" />,
                  title: 'Parent Notifications',
                  description: 'Instant alerts for bus arrival, delays, and emergency situations'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Safety Monitoring',
                  description: 'Comprehensive safety features including driver monitoring and emergency protocols'
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

        {/* Benefits Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Why Schools Choose EduRyde</h2>
                <div className="space-y-4 body-text">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Enhanced Safety</h4>
                      <p>Real-time monitoring ensures student safety and peace of mind for parents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Operational Efficiency</h4>
                      <p>Optimized routes reduce fuel costs and improve overall transport efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Parent Satisfaction</h4>
                      <p>Transparent communication and real-time updates build trust with parents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="shield" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Upgrade Your School Transport System</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Join leading schools using EduRyde for safer, smarter transportation management
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
