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
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="heading-1 mb-6 fade-in">MylesCRM</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Customer relationship management system. Build stronger customer relationships with intelligent lead management, sales pipeline tracking, and comprehensive customer analytics.
                </p>
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
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="users" className="text-gold-400" size={96} />
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
