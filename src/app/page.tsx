import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Zap,
  MapPin,
  Shield,
  Users,
  TrendingUp,
  Award
} from 'lucide-react'

export const metadata = {
  title: 'MylesCorp Technologies Ltd — AI-Powered Software Solutions for East Africa',
  description:
    'East Africa\'s leading AI-powered software company. ' +
    'EduMyles, MylesCare, AgriMyles, MylesCRM — ' +
    'transforming Education, Healthcare, Agriculture, ' +
    'and Business.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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

        {/* Glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[700px]
                    h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle,' +
              'rgba(26,57,91,0.5)0%,transparent 65%)',
          }}
        />

        {/* Glow bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px]
                    h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle,' +
              'rgba(199,150,57,0.07)0%,transparent 65%)',
          }}
        />

        {/* Gold top rule */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              'linear-gradient(90deg,transparent,#C79639,transparent)',
          }}
        />

        <div
          className="relative z-10 max-w-5xl mx-auto
                    px-4 sm:px-6 lg:px-8 text-center
                    py-32">

          {/* Eyebrow */}
          <div className="flex items-center justify-center
                      gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
              East Africa's Leading Tech Company
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h1
            className="font-display font-bold text-white
                       leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(44px,6vw,84px)' }}>
            Transform Your Business with{' '}
            <em className="text-transparent bg-clip-text
              bg-gradient-to-r from-gold to-gold-light
              not-italic">
              AI-Powered Solutions
            </em>
          </h1>

          {/* Subtitle */}
          <p className="font-body font-light text-light-blue
                    text-xl leading-relaxed max-w-3xl
                    mx-auto mb-4">
            East Africa's leading technology company delivering 
            innovative solutions for Education, Healthcare, 
            Agriculture, and Business.
          </p>

          {/* Tagline */}
          <p className="font-display italic text-gold text-lg
                    mb-10">
            Transforming Industries, Empowering Generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4
                    justify-center mb-16">
            <Link href="/book-demo">
              <Button size="lg">Get Started Today</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              ['500+', 'Schools'],
              ['50K+', 'Students'],
              ['99.9%', 'Uptime'],
              ['24/7', 'Support'],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-3xl
                          text-gold mb-2">{num}</div>
                <div className="font-body text-xs text-muted-blue
                          mt-1 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2 — Stats Bar */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '18',   label: 'Sectors Served'    },
              { num: '4',    label: 'Products Live'      },
              { num: '47',   label: 'Counties Reached'   },
              { num: '2020', label: 'Founded in Nairobi' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-5xl
                          text-gold mb-2">{s.num}</div>
                <div className="font-body text-sm text-med-grey
                          font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why Choose MylesCorp */}
      <section className="py-20 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center
                        gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                Why MylesCorp
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-navy
                       text-4xl md:text-5xl mb-4">
              Built for{' '}
              <span className="text-transparent bg-clip-text
                bg-gradient-to-r from-gold to-gold-light italic">
                African Business
              </span>
            </h2>
            <p className="font-body font-light text-med-grey
                      text-lg max-w-2xl mx-auto">
              We combine world-class technology with deep local 
              knowledge to deliver solutions that actually work 
              for East African organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-gold" />,
                title: 'AI-Powered',
                desc: 'Every product is built on cutting-edge AI — ' +
                      'delivering automation, insights, and intelligence ' +
                      'that give your organisation a real competitive edge.',
              },
              {
                icon: <MapPin className="w-6 h-6 text-gold" />,
                title: 'Built for Kenya',
                desc: 'M-Pesa integration, CBC curriculum support, ' +
                      'SHA insurance, Swahili — built for the realities ' +
                      'of East African business, not adapted from abroad.',
              },
              {
                icon: <Shield className="w-6 h-6 text-gold" />,
                title: '99.9% Uptime',
                desc: 'Enterprise-grade infrastructure on Vercel\'s ' +
                      'global CDN. Your systems are always available — ' +
                      '24 hours a day, 365 days a year.',
              },
              {
                icon: <Users className="w-6 h-6 text-gold" />,
                title: 'Local Support Team',
                desc: 'Our support team is based in Nairobi. ' +
                      'Call us, WhatsApp us, or visit our office — ' +
                      'real people who understand your context.',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-gold" />,
                title: 'Scalable Solutions',
                desc: 'Start small and grow without limits. ' +
                      'Our products scale from 1 user to 100,000 — ' +
                      'with the same reliability and performance.',
              },
              {
                icon: <Award className="w-6 h-6 text-gold" />,
                title: 'Trusted Partner',
                desc: 'We are not a vendor — we are a long-term partner. ' +
                      'We measure our success by the impact we create ' +
                      'for your organisation.',
              },
            ].map(item => (
              <div key={item.title}
                   className="bg-white border border-navy/10
                             rounded-2xl p-8 group hover:border-gold
                             hover:-translate-y-1 hover:shadow-xl
                             transition-all duration-300">
                <div className="w-12 h-12 bg-gold/10 border
                          border-gold/20 rounded-xl flex
                          items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-navy
                           text-xl mb-3 group-hover:text-gold
                           transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body font-light text-med-grey
                          text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Products Preview */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: '#080e18' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center
                        gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                Our Products
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-white
                       text-4xl md:text-5xl mb-4">
              Solutions for Every{' '}
              <em className="text-gold italic">Industry</em>
            </h2>
            <p className="font-body font-light text-light-blue
                    text-lg max-w-2xl mx-auto">
              4 live products transforming Education, Healthcare,
              Agriculture, and Business across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: 'EduMyles',
                sector: 'Education',
                tagline: 'Transforming schools, one mile at a time.',
                icon: '🎓',
                href: '/products/edumyles',
                stats: '500+ Schools',
              },
              {
                name: 'MylesCare',
                sector: 'Healthcare',
                tagline: 'Better care, smarter systems.',
                icon: '🏥',
                href: '/products/mylescare',
                stats: '100+ Facilities',
              },
              {
                name: 'AgriMyles',
                sector: 'Agriculture',
                tagline: 'Farming smarter across Africa.',
                icon: '🌱',
                href: '/products/agrimyles',
                stats: '1,000+ Farmers',
              },
              {
                name: 'MylesCRM',
                sector: 'Business',
                tagline: 'Grow your business intelligently.',
                icon: '📈',
                href: '/products/mylescrm',
                stats: '40% Sales Increase',
              },
            ].map(p => (
              <Link key={p.name} href={p.href}
                    className="block bg-[#0d1929] border
                               border-gold/15 rounded-2xl p-7
                               group hover:border-gold/50
                               hover:-translate-y-2
                               hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]
                               transition-all duration-300
                               relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0
                             h-[3px] bg-gold opacity-0
                             group-hover:opacity-100
                             transition-opacity duration-300" />
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-gold text-[10px] font-bold
                             tracking-[2px] uppercase mb-2
                             font-body">
                  {p.sector}
                </div>
                <h3 className="font-display font-bold text-white
                           text-xl mb-2 group-hover:text-gold
                           transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="font-body text-xs text-muted-blue
                          leading-relaxed mb-4 font-light">
                  {p.tagline}
                </p>
                <div className="font-body text-[11px] text-gold
                          font-bold tracking-wide">
                  {p.stats}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2
                    gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-[11px] font-bold
                           tracking-[2.5px] uppercase font-body">
                  What We Do
                </span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy
                         text-4xl md:text-5xl mb-6">
                Services Built to{' '}
                <span className="text-transparent bg-clip-text
                  bg-gradient-to-r from-gold to-gold-light italic">
                  Transform
                </span>
              </h2>
              <p className="font-body font-light text-med-grey
                        text-base leading-relaxed mb-8">
                Beyond our products, we offer comprehensive 
                technology services — from custom software 
                development to website design, IT consulting, 
                and cloud infrastructure.
              </p>
              <Link href="/services">
                <Button>Explore Our Services →</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Software Development', desc: 'Custom web and mobile applications' },
                { title: 'Website Development', desc: 'Professional websites from KES 25,000' },
                { title: 'IT Consulting', desc: 'Strategic technology advisory' },
                { title: 'Cloud Solutions', desc: 'Migration and infrastructure management' },
                { title: 'Web & App Design', desc: 'UI/UX design that converts' },
              ].map((service, index) => (
                <div key={service.title}
                     className="bg-[#f8f6f2] border border-navy/10
                                rounded-xl p-5 hover:border-gold
                                transition-all duration-200">
                  <div className="w-2 h-2 rounded-full bg-gold
                            mb-3" />
                  <h4 className="font-display font-bold text-navy
                                 text-sm mb-1">{service.title}</h4>
                  <p className="font-body text-xs text-med-grey">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — M.Y.L.E.S. Values */}
      <MYLESValues />

      {/* SECTION 7 — Testimonials */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: '#080e18' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center
                        gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                Client Stories
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-white
                       text-4xl md:text-5xl">
              What Our <em className="text-gold italic">
                Clients Say
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'EduMyles transformed how we manage 600 ' +
                         'students. Fee collection via M-Pesa saved us ' +
                         '3 days of admin work every month.',
                author: 'James Mwangi',
                role: 'Principal, Westlands Academy',
                product: 'EduMyles',
              },
              {
                quote: 'The SHA integration made MylesCare worth ' +
                         'every shilling. Insurance claims that used to ' +
                         'take weeks now process in days.',
                author: 'Dr. Francis Mwenda',
                role: 'Director, Nairobi General Hospital',
                product: 'MylesCare',
              },
              {
                quote: 'Our tomato yield increased 35% in one season ' +
                         'by following the AI crop advisory. ' +
                         'AgriMyles is remarkable.',
                author: 'Samuel Odhiambo',
                role: 'Horticulture Farmer, Kiambu County',
                product: 'AgriMyles',
              },
            ].map(t => (
              <div key={t.author}
                   className="bg-[#0d1929] border border-gold/15
                              rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i}
                         className="w-4 h-4"
                         style={{
                           background: '#C79639',
                           clipPath: 'polygon(50% 0%,61% 35%,' +
                                     '98% 35%,68% 57%,79% 91%,50% 70%,' +
                                     '21% 91%,32% 57%,2% 35%)',
                         }} />
                  ))}
                </div>
                <p className="font-body font-light text-light-blue
                          text-sm leading-[1.8] italic mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-body font-bold text-white
                                text-sm">{t.author}</div>
                  <div className="font-body text-xs text-muted-blue
                                mt-0.5">{t.role}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-gold text-[10px] font-bold
                             tracking-[1.5px] uppercase">
                    {t.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA Section */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ background: '#1A395B' }}
      >
        <div className="absolute inset-0 pointer-events-none"
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
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              'linear-gradient(90deg,transparent,#C79639,transparent)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto
                  px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-white
                   text-4xl md:text-5xl mb-4">
            Ready to Transform Your{' '}
            <em className="text-gold italic">Organisation?</em>
          </h2>
          <p className="font-display italic text-gold text-lg mb-4">
            Transforming Industries, Empowering Generations.
          </p>
          <p className="font-body font-light text-light-blue
                    text-lg mb-10 leading-relaxed">
              Join hundreds of organisations across East Africa 
              already using MylesCorp solutions to grow, serve 
              better, and achieve more.
            </p>
          <div className="flex flex-col sm:flex-row gap-4
                    justify-center">
            <Link href="/book-demo">
              <Button size="lg">Book a Free Demo</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
