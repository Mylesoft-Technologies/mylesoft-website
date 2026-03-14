import { Layout } from '@/components/layout/Layout'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { Handshake, Target, Globe, Award, TrendingUp, Users, Mail, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

const partnershipTypes = [
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Strategic Partners",
    description: "Collaborate with us to deliver comprehensive solutions to our shared customers",
    benefits: ["Revenue sharing opportunities", "Co-marketing initiatives", "Joint product development"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Technology Partners",
    description: "Integrate your technology with our platform to expand your market reach",
    benefits: ["API integration support", "Technical collaboration", "Shared customer base"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Channel Partners",
    description: "Resell our solutions and earn attractive commissions while growing your business",
    benefits: ["Competitive commission rates", "Sales training and support", "Marketing materials"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Implementation Partners",
    description: "Help businesses implement our solutions and join our certified partner network",
    benefits: ["Certification program", "Implementation tools", "Customer referrals"]
  }
]

const currentPartners = [
  {
    name: "Microsoft",
    type: "Technology Partner",
    description: "Azure and Office 365 integration partner",
    logo: "/partners/microsoft.png"
  },
  {
    name: "Google Cloud",
    type: "Technology Partner", 
    description: "Cloud infrastructure and AI services partner",
    logo: "/partners/google.png"
  },
  {
    name: "Safaricom",
    type: "Strategic Partner",
    description: "Mobile payments and connectivity partner",
    logo: "/partners/safaricom.png"
  },
  {
    name: "Equity Bank",
    type: "Financial Partner",
    description: "Payment processing and financial services partner",
    logo: "/partners/equity.png"
  }
]

const partnershipStats = [
  { number: 50, label: "Active Partners", suffix: "+" },
  { number: 10, label: "Countries", suffix: "+" },
  { number: 100000, label: "End Users", suffix: "+" },
  { number: 95, label: "Partner Satisfaction", suffix: "%" }
]

export default function PartnersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center mb-6">
              <Logo size="lg" fallbackColor="gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Partner With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Mylesoft Technologies
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Join our growing ecosystem of partners and help us transform African businesses 
              through innovative technology solutions.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white shadow-premium-gold hover:shadow-premium-glow">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-600">
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-navy-500 mb-2">
                    {stat.number.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect partnership model for your business
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-500 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Working together to deliver exceptional value to customers
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-navy-600 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-10 h-10 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-500 mb-2">{partner.name}</h3>
                  <p className="text-gold-500 font-semibold text-sm mb-3">{partner.type}</p>
                  <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Partner With Mylesoft?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-gold-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Growth</h3>
                <p className="text-gray-200 leading-relaxed">
                  Tap into new revenue streams with our innovative solutions and growing customer base across East Africa.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Users className="w-12 h-12 text-gold-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Market Access</h3>
                <p className="text-gray-200 leading-relaxed">
                  Gain access to our extensive network and customer relationships across multiple African markets.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Award className="w-12 h-12 text-gold-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-gray-200 leading-relaxed">
                  Receive comprehensive training, marketing support, and technical assistance to ensure your success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's explore how we can create value together through a strategic partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
                Start Partnership Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-600">
                Download Partnership Guide
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Partnership Inquiries
              </h2>
              <p className="text-xl text-gray-600">
                Our partnership team is ready to answer your questions
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <Mail className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="text-xl font-bold text-navy-500 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">partners@mylesoft.com</p>
                <p className="text-gray-600 text-sm">
                  Send us your partnership proposal and we'll get back to you within 48 hours.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <Phone className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="text-xl font-bold text-navy-500 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">+254 743993715</p>
                <p className="text-gray-600 text-sm">
                  Monday to Friday, 9:00 AM - 6:00 PM East Africa Time
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
