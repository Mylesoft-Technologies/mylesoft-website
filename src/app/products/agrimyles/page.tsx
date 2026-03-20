import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Globe, Cloud, ArrowRight, CheckCircle } from 'lucide-react'

export default function AgriMylesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="heading-1 mb-6 fade-in">AgriMyles</h1>
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Smart agricultural platform. Empower farmers with data-driven insights, weather analytics, and market intelligence to maximize yields and profitability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Button size="lg">Book a Demo</Button>
                  <Button variant="secondary" size="lg">View Features</Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="leaf" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Agricultural Intelligence</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive tools for modern farming and agricultural management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: 'Crop Monitoring',
                  description: 'Real-time crop health monitoring with satellite imagery and IoT sensors'
                },
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: 'Weather Analytics',
                  description: 'Advanced weather forecasting and climate pattern analysis'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Market Prices',
                  description: 'Live market prices and trend analysis for optimal selling decisions'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Farm Management',
                  description: 'Comprehensive farm planning, resource allocation, and yield optimization'
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
              <h2 className="heading-2 mb-4">Transform Your Farming Operations</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Join thousands of farmers using AgriMyles for data-driven agriculture
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
