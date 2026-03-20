import { Layout } from '@/components/layout/Layout'
import { Logo } from '@/components/ui/Logo'
import { SimpleReveal } from '@/components/ui/SimpleReveal'
import { Counter } from '@/components/ui/ScrollReveal'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { ArrowRight, Sparkles, Target, Users, Shield, Heart, Globe, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { number: 500, label: 'Schools Transformed', icon: <Target className="w-8 h-8" /> },
  { number: 50000, label: 'Students Managed', icon: <Users className="w-8 h-8" /> },
  { number: 99.9, label: 'Uptime Guaranteed', icon: <Shield className="w-8 h-8" />, suffix: '%' },
  { number: 24, label: 'Support Available', icon: <Heart className="w-8 h-8" />, suffix: '/7' }
]

const features = [
  {
    title: 'AI-Powered Solutions',
    description: 'Leverage cutting-edge artificial intelligence to transform your business operations and drive growth.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of Education, Healthcare, Agriculture, and Business sectors across East Africa.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful implementations with measurable impact on client success.',
    icon: <TrendingUp className="w-6 h-6" />
  }
]

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
        {/* Grid texture overlay — always present on dark sections */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial glow top-right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Radial glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              EAST AFRICA'S LEADING TECH COMPANY
            </span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
              AI-Powered Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            East Africa's leading technology company delivering innovative solutions for Education,
            Healthcare, Agriculture, and Business.
          </p>

          {/* Tagline line */}
          <p className="font-display italic font-bold text-gold text-center mb-10">
            "Transforming Industries, Empowering Generations."
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
              <Sparkles className="mr-2 w-5 h-5" />
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
              Book a Demo
            </button>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleReveal delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR IMPACT
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results that speak volumes about our commitment to excellence
              </p>
            </div>
          </SimpleReveal>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <SimpleReveal key={index} delay={0.4 + index * 0.1}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    <Counter end={stat.number} suffix={stat.suffix || ''} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </SimpleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleReveal delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  WHY US
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                Why Choose MylesCorp
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise
              </p>
            </div>
          </SimpleReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <SimpleReveal key={index} delay={0.4 + index * 0.2}>
                <Card variant="dark" className="group">
                  <CardIcon size="md">
                    {feature.icon}
                  </CardIcon>
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-200 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </SimpleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleReveal delay={0.2}>
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50" />
              <span className="text-white/80 text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                GET STARTED
              </span>
              <div className="w-8 h-0.5 bg-white/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of organizations across East Africa already using our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Schedule Consultation
              </Button>
            </div>
          </SimpleReveal>
        </div>
      </section>
    </Layout>
  )
}
