import { Layout } from '@/components/layout/Layout'
import { ScrollReveal, StaggerReveal, Counter } from '@/components/ui/ScrollReveal'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { Handshake, Target, Globe, Award, TrendingUp, Users, Mail, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Partners — MylesCorp Technologies',
  description: 'Partner with MylesCorp Technologies to deliver AI-powered solutions across East Africa. Technology, reseller, and integration partnerships.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/partners',
  },
}

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
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                OUR PARTNERS
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Trusted
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Partnerships
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Building an ecosystem of innovation with leading organisations across East Africa 
              and beyond.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.8}>
            <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
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
                  <div className="text-4xl md:text-5xl font-display font-bold text-navy mb-2">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium font-body">{stat.label}</div>
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
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OPPORTUNITIES
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Find the perfect partnership l for your business
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal
            staggerDelay={0.2}
            itemDelay={0.4}
            direction="up"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {partnershipTypes.map((type, index) => (
              <Card variant="light" key={index} className="h-full flex flex-col">
                <CardHeader>
                  <h3 className="text-2xl font-display font-bold text-navy mb-3">{type.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 leading-relaxed mb-6 font-body">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm font-body">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="mt-auto p-6 pt-0">
                  <Button variant="secondary" className="w-full">
                    Explore {type.title}
                  </Button>
                </div>
              </Card>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  TRUSTED PARTNERS
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Working together to deliver exceptional value to customers
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal
            staggerDelay={0.2}
            itemDelay={0.4}
            direction="up"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentPartners.map((partner, index) => (
              <Card variant="light" key={index} className="h-full flex flex-col">
                <CardIcon size="md">
                  <Award className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-xl font-display font-bold text-navy mb-2">{partner.name}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gold font-semibold text-sm mb-3 font-body">{partner.type}</p>
                  <p className="text-gray-600 leading-relaxed font-body">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                WHY PARTNER
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Why Partner With MylesCorp?
              </h2>
              <p className="text-xl text-light-blue max-w-3xl mx-auto font-body">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <Card variant="dark" className="text-center">
                <CardIcon size="md">
                  <TrendingUp className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Revenue Growth</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-light-blue leading-relaxed font-body">
                    Tap into new revenue streams with our innovative solutions and growing customer base across East Africa.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Card variant="dark" className="text-center">
                <CardIcon size="md">
                  <Users className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Market Access</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-light-blue leading-relaxed font-body">
                    Gain access to our extensive network and customer relationships across multiple African markets.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <Card variant="dark" className="text-center">
                <CardIcon size="md">
                  <Award className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Expert Support</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-light-blue leading-relaxed font-body">
                    Receive comprehensive training, marketing support, and technical assistance to ensure your success.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white" />
              <span className="text-white text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                READY TO GROW
              </span>
              <div className="w-8 h-0.5 bg-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Grow With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-body">
              Let's explore how we can create value together through a strategic partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100">
                Start Partnership Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
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
                <p className="text-gray-600 mb-4">partners@MylesCorp.com</p>
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
