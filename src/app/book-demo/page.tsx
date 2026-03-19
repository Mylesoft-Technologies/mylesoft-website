import { Layout } from '@/components/layout/Layout'
import { CalComBooking } from '@/components/integrations/CalComBooking'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Calendar, Clock, Users, Check, Star } from 'lucide-react'

export default function BookDemoPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Book a Demo</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed">
                Experience our AI-powered solutions firsthand. Schedule a personalized demonstration with our experts to see how MylesCorp can transform your organization.
              </p>
              <div className="mt-8">
                <Button size="lg">Schedule Your Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Choose Your Demo Type</h2>
              <p className="body-text max-w-2xl mx-auto">
                We offer different demo formats to meet your specific needs and interests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Demo */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="brain" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Product Demo</h3>
                <p className="body-text mb-6">
                  Comprehensive demonstration of our solutions tailored to your industry and specific requirements.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>45-minute personalized walkthrough</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Q&A with solution experts</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Custom scenario demonstrations</span>
                  </div>
                </div>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="users" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Strategic Consultation</h3>
                <p className="body-text mb-6">
                  In-depth discussion about your digital transformation needs and strategic roadmap development.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>60-minute strategic session</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>ROI analysis and recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Implementation planning</span>
                  </div>
                </div>
              </div>

              {/* Technical Support */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="settings" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Technical Support</h3>
                <p className="body-text mb-6">
                  Get help with existing products, technical questions, or troubleshooting assistance.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>30-minute focused session</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Problem resolution guidance</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Best practice recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div>
                <h2 className="heading-2 mb-6">Schedule Your Demo</h2>
                <CalComBooking />
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="heading-2 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Pre-Demo Preparation</h3>
                      <p className="body-text">
                        We research your organization and industry to tailor the demonstration to your specific needs and challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Live Demonstration</h3>
                      <p className="body-text">
                        Interactive walkthrough of our solutions with real-world scenarios relevant to your operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Q&A and Discussion</h3>
                      <p className="body-text">
                        Comprehensive answers to your questions and strategic discussion about implementation and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Star size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Follow-up Support</h3>
                      <p className="body-text">
                        Ongoing assistance and resources to ensure successful implementation and adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-xl text-navy-100 mb-8">
                Join 500+ organizations across East Africa who have transformed their operations with MylesCorp solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Educational Institutions' },
                { number: '100+', label: 'Healthcare Providers' },
                { number: '1,000+', label: 'Businesses' },
                { number: '95%', label: 'Satisfaction Rate' },
                { number: '18', label: 'Countries Served' },
                { number: '47', label: 'Kenyan Counties' },
                { number: '24/7', label: 'Support Available' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-navy-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organization?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Take the first step towards digital transformation. Schedule your personalized demo today and see how MylesCorp can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule Your Demo</Button>
                <Button variant="secondary">Download Brochure</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
