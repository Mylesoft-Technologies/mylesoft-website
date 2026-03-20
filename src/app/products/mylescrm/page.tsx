import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Users, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, Target } from 'lucide-react'
import Link from 'next/link'

export default function MylesCRMPage() {
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
                <Icon name="users" className="w-5 h-5 text-gold" />
                <span className="text-gold font-body font-semibold">Customer Relationship Management</span>
              </div>
              <h1 className="heading-1 mb-4 fade-in text-white">MylesCRM</h1>
              <p className="text-2xl text-navy-100 leading-relaxed mb-6 slide-up max-w-3xl mx-auto">
                Intelligent CRM System for Business Growth
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-navy-200 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>5K+ Businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>10M+ Contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>45% Sales Increase</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Build stronger customer relationships with intelligent lead management, sales pipeline tracking, and comprehensive customer analytics. MylesCRM transforms how businesses connect with their customers.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">CRM Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Lead Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Sales Pipeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Customer Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Automation</span>
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
                  <Icon name="users" className="text-gold-400" size={96} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-body font-semibold text-sm">
                  Business Growth
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">CRM Features</h2>
              <p className="body-text max-w-2xl mx-auto">
                Powerful tools for managing customer relationships and sales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Lead Management',
                  description: 'Capture, track, and nurture leads through the entire sales funnel'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Sales Pipeline',
                  description: 'Visual pipeline management with deal tracking and forecasting'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Customer Analytics',
                  description: 'Deep insights into customer behavior and sales performance'
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Automation',
                  description: 'Automated workflows for follow-ups, nurturing, and reporting'
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
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Transform Your Customer Relationships</h2>
              <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                Join businesses using MylesCRM for intelligent customer management
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
