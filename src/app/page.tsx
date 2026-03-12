import { Layout } from '@/components/layout/Layout'
import { Logo } from '@/components/ui/Logo'
import { ScrollReveal, Parallax, StaggerReveal, Counter, ProgressLine } from '@/components/ui/ScrollReveal'
import { BackToTop } from '@/components/ui/BackToTop'
import { ArrowRight, Sparkles, Target, Users, Shield, Heart, Award, Globe, TrendingUp, Zap, Star, CheckCircle } from 'lucide-react'
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <Parallax speed={0.3}>
            <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />
          </Parallax>
          <Parallax speed={0.5}>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />
          </Parallax>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="flex justify-center mb-6">
              <Logo size="lg" fallbackColor="gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  AI-Powered Solutions
                </span>
              </h1>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
                East Africa's leading technology company delivering innovative solutions for Education, Healthcare, Agriculture, and Business.
              </p>
              <p className="text-lg text-gold-400 font-semibold italic">
                Transforming Industries, Empowering Generations.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div>
                <Button size="lg">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div>
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results that speak volumes about our commitment to excellence
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerReveal staggerDelay={0.1} itemDelay={0.4}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-navy-500 mb-2 group-hover:text-gold-500 transition-colors duration-300">
                    <Counter end={stat.number} duration={2} delay={0.5 + index * 0.1} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Why Choose Mylesoft
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-500 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-20 bg-gradient-to-br from-navy-500 to-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Progress Timeline
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Continuous improvement and innovation drive our success
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="left">
              {[
                { title: 'AI Integration', progress: 85, description: 'Advanced AI capabilities across all products' },
                { title: 'Client Satisfaction', progress: 95, description: 'Exceptional customer experience and support' },
                { title: 'Market Coverage', progress: 70, description: 'Expanding across East Africa' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <span className="text-gold-400 font-bold">{item.progress}%</span>
                  </div>
                  <ProgressLine color="bg-gold-400" height={3} duration={1.5} delay={0.6 + index * 0.2} />
                  <p className="text-gray-200 mt-3">{item.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of organizations across East Africa already using our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy-500 hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-500">
                Schedule Consultation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </Layout>
  )
}
