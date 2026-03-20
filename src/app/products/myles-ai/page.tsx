import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react'

export default function MylesAIPage() {
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
                  <span className="text-gold text-sm font-body">AI Services</span>
                </div>
                <h1 className="heading-1 mb-6 fade-in">Myles AI</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Custom AI development services. Transform your business with cutting-edge machine learning, natural language processing, and computer vision solutions tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Button size="lg">Book a Demo</Button>
                  <Button variant="secondary" size="lg">View Features</Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="brain" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">AI Development Services</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive AI solutions for modern business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: 'Machine Learning',
                  description: 'Custom ML models for predictive analytics and automation'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'NLP Solutions',
                  description: 'Natural language processing for text analysis and chatbots'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Computer Vision',
                  description: 'Image recognition and visual data analysis solutions'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Consulting',
                  description: 'Expert AI strategy consulting and implementation guidance'
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
                <h2 className="heading-2 mb-6">Why Choose Myles AI</h2>
                <div className="space-y-4 body-text">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solutions</h4>
                      <p>Tailored AI solutions designed specifically for your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Team</h4>
                      <p>Experienced AI engineers and data scientists with proven track records</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">End-to-End Service</h4>
                      <p>From strategy to implementation and ongoing support for your AI journey</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="zap" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Transform Your Business with AI</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Let us help you leverage artificial intelligence for competitive advantage
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
