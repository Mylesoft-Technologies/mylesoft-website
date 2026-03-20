import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Globe, Cloud, ArrowRight, CheckCircle, Sprout, TrendingUp, MapPin, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function AgriMylesPage() {
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
                <Icon name="leaf" className="w-5 h-5 text-gold" />
                <span className="text-gold font-body font-semibold">Agricultural Intelligence Platform</span>
              </div>
              <h1 className="heading-1 mb-4 fade-in text-white">AgriMyles</h1>
              <p className="text-2xl text-navy-100 leading-relaxed mb-6 slide-up max-w-3xl mx-auto">
                Smart Agricultural Platform for Modern Farming
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-navy-200 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>10K+ Farmers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>1M+ Acres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>30% Yield Increase</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Empower farmers with data-driven insights, weather analytics, and market intelligence to maximize yields and profitability. AgriMyles brings smart farming technology to agricultural operations.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Agriculture Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Crop Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Weather Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Market Prices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Farm Management</span>
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
                  <Icon name="leaf" className="text-gold-400" size={96} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-body font-semibold text-sm">
                  Farming Smart
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
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Transform Your Farming Operations</h2>
              <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                Join thousands of farmers using AgriMyles for data-driven agriculture
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
