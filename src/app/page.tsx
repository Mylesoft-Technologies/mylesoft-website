import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Zap, MapPin, Shield, Users, TrendingUp, Award
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* SECTION 1 — Hero */}
        <section
          className="relative min-h-screen flex items-center
                   justify-center overflow-hidden"
          style={{ background: '#080e18' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px,
                          transparent 1px),
                linear-gradient(90deg,rgba(199,150,57,0.04) 1px,
                          transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
          
          {/* Radial glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />
          
          {/* Radial glow bottom-left */}
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />
          
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                AI-POWERED SOLUTIONS
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Transforming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Industries
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              East Africa&apos;s leading AI-powered software company delivering 
              innovative solutions that transform businesses and 
              empower communities across the continent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" transitionTypes={['slide']}>
                <Button 
                  size="lg" 
                  variant="primary"
                  className="shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold"
                >
                  Book a Free Demo
                </Button>
              </Link>
              <Link href="/contact" transitionTypes={['slide']}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/20 text-white hover:border-gold hover:text-gold px-8 py-4 text-lg font-semibold"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Products Overview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Products</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive software solutions designed to transform 
                education, healthcare, agriculture, and business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'EduMyles',
                  description: 'Complete School Management System',
                  icon: Zap,
                  color: 'from-blue-500 to-blue-600',
                  href: '/products/edumyles'
                },
                {
                  name: 'MylesCare',
                  description: 'Healthcare Management Platform',
                  icon: Shield,
                  color: 'from-green-500 to-green-600',
                  href: '/products/mylescare'
                },
                {
                  name: 'AgriMyles',
                  description: 'Smart Agricultural Solutions',
                  icon: MapPin,
                  color: 'from-yellow-500 to-yellow-600',
                  href: '/products/agrimyles'
                },
                {
                  name: 'MylesCRM',
                  description: 'Business Management System',
                  icon: Users,
                  color: 'from-purple-500 to-purple-600',
                  href: '/products/mylescrm'
                }
              ].map((product, index) => (
                <Link 
                  key={index}
                  href={product.href}
                  className="group block"
                >
                  <div className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${product.color}`}>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center ${product.color}`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-white/90 text-sm font-body">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Stats */}
        <section className="section bg-navy">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-white">Trusted Across East Africa</h2>
              <p className="text-light-blue max-w-2xl mx-auto font-body">
                Empowering thousands of users in Kenya, Uganda, Tanzania, 
                and beyond with innovative AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Schools Managed', icon: '🎓' },
                { number: '50K+', label: 'Patients Served', icon: '🏥' },
                { number: '1000+', label: 'Farmers Helped', icon: '🌾' },
                { number: '200+', label: 'Businesses Transformed', icon: '💼' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-body">
                    {stat.icon} {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Features */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Why Choose MylesCorp?</h2>
              <p className="body-text max-w-2xl mx-auto">
                We combine cutting-edge AI technology with deep 
                industry expertise to deliver solutions that work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Intelligence',
                  description: 'Advanced machine learning algorithms provide smart insights and automation.',
                  icon: TrendingUp
                },
                {
                  title: 'Industry-Specific Solutions',
                  description: 'Purpose-built for education, healthcare, agriculture, and business.',
                  icon: Shield
                },
                {
                  title: '24/7 Expert Support',
                  description: 'Dedicated team available round the clock for assistance.',
                  icon: Award
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-navy-500 rounded-2xl p-8 text-white h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-light-blue font-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Values */}
        <MYLESValues />

        {/* SECTION 6 — CTA */}
        <section className="section bg-navy">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-white">Ready to Transform Your Organisation?</h2>
              <p className="text-light-blue text-xl max-w-2xl mx-auto font-body mb-8">
                Let&apos;s discuss how our AI-powered solutions can 
                drive your success and growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" transitionTypes={['slide']}>
                <Button size="lg">Book a Free Demo</Button>
              </Link>
              <Link href="/contact" transitionTypes={['slide']}>
                <Button variant="outline" size="lg">
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
