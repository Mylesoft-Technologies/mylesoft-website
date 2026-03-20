import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Shield, MapPin, Bell, Users, ArrowRight, CheckCircle, Bus, Clock, Smartphone, Navigation } from 'lucide-react'
import Link from 'next/link'

export default function EduRydePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-deep/80 to-navy-900/90"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent"></div>
          </div>
          <div className="section-padding relative z-10">
            <div className="text-center mb-8 fade-in">
              <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-4">
                <Icon name="bus" className="w-5 h-5 text-gold" />
                <span className="text-gold font-body font-semibold">School Transport Management</span>
                <span className="bg-gold text-navy px-2 py-1 rounded-full text-xs font-body font-semibold">New</span>
              </div>
              <h1 className="heading-1 mb-4 fade-in text-white">EduRyde</h1>
              <p className="text-2xl text-navy-100 leading-relaxed mb-6 slide-up max-w-3xl mx-auto">
                Modern School Transport Management & Safety System
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-navy-200 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>200+ Schools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>50K+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>100% Safety Record</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Ensure student safety with real-time GPS tracking, intelligent route optimization, and instant parent notifications. EduRyde combines cutting-edge technology with comprehensive safety protocols for complete transport management.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Safety Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Live GPS Tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Route Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Parent Alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Emergency SOS</span>
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
                  <Icon name="bus" className="text-gold-400" size={96} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-body font-semibold text-sm">
                  Safety First
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
                <h2 className="heading-2 mb-6">Revolutionizing School Transportation</h2>
                <div className="space-y-4 body-text">
                  <p>
                    EduRyde is a comprehensive school transport management system designed to ensure student safety while optimizing operational efficiency. Our platform combines cutting-edge GPS technology with intelligent route planning to provide schools, parents, and drivers with real-time information and peace of mind.
                  </p>
                  <p>
                    With features like live bus tracking, automated attendance monitoring, and instant emergency notifications, EduRyde has become the trusted solution for over 200 schools across East Africa, safely transporting more than 50,000 students daily with zero safety incidents.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">200+ Schools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">50K+ Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">100% Safety Record</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-semibold">24/7 Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="map" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Advanced Transport Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive solution for safe and efficient school transportation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Real-time Tracking',
                  description: 'Live GPS tracking of all school buses with accurate location updates',
                  features: ['Live Bus Location', 'Speed Monitoring', 'Geofencing', 'Route Deviation Alerts']
                },
                {
                  icon: <Navigation className="w-6 h-6" />,
                  title: 'Route Optimization',
                  description: 'Intelligent route planning to minimize travel time and fuel consumption',
                  features: ['Auto Route Planning', 'Traffic Analysis', 'Stop Optimization', 'Fuel Efficiency']
                },
                {
                  icon: <Bell className="w-6 h-6" />,
                  title: 'Parent Notifications',
                  description: 'Instant alerts for bus arrival, delays, and emergency situations',
                  features: ['SMS Alerts', 'Push Notifications', 'Email Updates', 'Emergency Broadcasting']
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Safety Monitoring',
                  description: 'Comprehensive safety features including driver monitoring and emergency protocols',
                  features: ['Driver Behavior Tracking', 'Emergency SOS', 'Video Surveillance', 'Safety Analytics']
                },
                {
                  icon: <Bus className="w-6 h-6" />,
                  title: 'Fleet Management',
                  description: 'Complete bus fleet management with maintenance scheduling and performance tracking',
                  features: ['Vehicle Maintenance', 'Fuel Tracking', 'Driver Management', 'Performance Reports']
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: 'Mobile App',
                  description: 'User-friendly mobile applications for parents, drivers, and administrators',
                  features: ['Parent App', 'Driver App', 'Admin Dashboard', 'Real-time Chat']
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
              <h2 className="heading-2 mb-4">Why Schools Choose EduRyde</h2>
              <p className="body-text max-w-2xl mx-auto">
                Transform your school transport system with proven benefits
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: '100% Safety',
                  description: 'Zero safety incidents with comprehensive monitoring'
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: '35% Time Savings',
                  description: 'Reduce administrative time with automated processes'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: '95% Parent Satisfaction',
                  description: 'Peace of mind for parents with real-time updates'
                },
                {
                  icon: <Bus className="w-8 h-8" />,
                  title: '25% Cost Reduction',
                  description: 'Optimize routes and reduce fuel consumption'
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
                Hear from schools using EduRyde for safer transportation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "EduRyde has completely transformed our school transport system. Parents are happier, and we've reduced our fuel costs by 30%.",
                  author: "David Mwangi",
                  role: "Transport Manager, Nairobi International School",
                  rating: 5
                },
                {
                  quote: "The real-time tracking feature gives us complete peace of mind. We know exactly where our children are at all times.",
                  author: "Sarah Kamau",
                  role: "Parent, Mombasa Academy",
                  rating: 5
                },
                {
                  quote: "Our drivers love the mobile app, and the route optimization has saved us countless hours each week.",
                  author: "James Okello",
                  role: "Fleet Coordinator, Kisumu Schools",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Shield key={i} className="w-5 h-5 text-gold fill-current" />
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
              <h2 className="heading-2 mb-4">Upgrade Your School Transport System</h2>
              <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                Join leading schools using EduRyde for safer, smarter transportation management
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
