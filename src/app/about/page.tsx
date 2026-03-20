import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { TEAM_MEMBERS } from '@/lib/constants/team'
import Image from 'next/image'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Zap,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react'

export const metadata = {
  title: 'About Us — Our Story & Team',
  description: 'Learn about MylesCorp Technologies — our story, mission, vision, M.Y.L.E.S. values, and the team transforming East Africa with AI-powered technology.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/about',
  },
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
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

          {/* Glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px]
               h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle,' +
                'rgba(26,57,91,0.6) 0%,transparent 70%)',
            }}
          />

          {/* Glow bottom-left */}
          <div
            className="absolute -bottom-32 -left-32 w-[400px]
               h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle,' +
                'rgba(199,150,57,0.07) 0%,transparent 70%)',
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

          {/* Content — relative + z-10 is MANDATORY */}
          <div
            className="relative z-10 max-w-4xl mx-auto
               px-4 sm:px-6 lg:px-8 text-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center
                    gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
              <span style={{
                color: '#C79639',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                OUR STORY
              </span>
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
            </div>

            {/* Heading */}
            <h1
              className="font-display font-bold text-white
                 text-5xl md:text-6xl lg:text-7xl
                 leading-[1.05] mb-6"
            >
              About{' '}
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg,#C79639,#e0b055)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                MylesCorp Technologies
              </em>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body font-light text-xl leading-relaxed
                 max-w-2xl mx-auto"
              style={{ color: '#C7D7EF' }}
            >
              Transforming industries across East Africa with 
              innovative technology solutions since 2020.
            </p>
          </div>
        </section>

        {/* Name Meaning Section */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: '#080e18' }}
        >
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
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#C79639,transparent)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto
                  px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center
                      gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
                <span style={{
                  color: '#C79639', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                }}>
                  OUR NAME
                </span>
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
              </div>
              <h2 className="font-display font-bold text-white
                     text-4xl md:text-5xl mb-4">
                The Story Behind{' '}
                <em style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg,#C79639,#e0b055)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Our Name
                </em>
              </h2>
              <p className="font-body font-light max-w-2xl mx-auto
                    text-lg leading-relaxed"
                 style={{ color: '#C7D7EF' }}>
                MylesCorp Technologies Ltd is a name built on ancient 
                foundations — two words, two languages, one powerful identity 
                rooted in over 2,000 years of meaning.
              </p>
            </div>

            {/* MYLES + CORP cards — FULL WIDTH side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

              {/* MYLES */}
              <div className="bg-gradient-to-br from-navy to-navy-dark
                      border border-gold/20 rounded-2xl p-8
                      hover:border-gold/50 hover:-translate-y-1
                      transition-all duration-300">
                <div style={{
                  color: '#C79639', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  Origin — Latin · <em>miles</em>
                </div>
                <div className="font-display font-bold text-white
                        text-5xl mb-2">
                  MYLES
                </div>
                <div className="font-body font-light italic text-sm mb-6"
                     style={{ color: '#C7D7EF' }}>
                  from Latin <em>miles</em> — soldier, warrior
                </div>
                <div style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#95A9CC', marginBottom: '16px',
                }}>
                  Core Meanings
                </div>
                <div className="space-y-3">
                  {[
                    ['Warrior / Soldier',
                     'Latin miles — disciplined servant of a cause'],
                    ['Devoted Champion',
                     'Old Irish — devoted follower, loyal servant'],
                    ['Gracious & Dear',
                     'Old Slavic milŭ — beloved, pleasant, kind'],
                    ['Courageous Noble',
                     'Old French — chivalrous, noble lineage'],
                  ].map(([title, sub]) => (
                    <div key={title}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                             style={{ background: '#C79639' }} />
                        <span className="text-white text-sm font-medium">
                          {title}
                        </span>
                      </div>
                      <p className="text-xs ml-4 mt-0.5"
                         style={{ color: '#95A9CC' }}>
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CORP */}
              <div className="bg-gradient-to-br from-navy to-navy-dark
                      border border-gold/20 rounded-2xl p-8
                      hover:border-gold/50 hover:-translate-y-1
                      transition-all duration-300">
                <div style={{
                  color: '#C79639', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  Origin — Latin · <em>corpus</em>
                </div>
                <div className="font-display font-bold text-white
                        text-5xl mb-2">
                  CORP
                </div>
                <div className="font-body font-light italic text-sm mb-6"
                     style={{ color: '#C7D7EF' }}>
                  from Latin <em>corpus</em> — body, whole
                </div>
                <div style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#95A9CC', marginBottom: '16px',
                }}>
                  Core Meanings
                </div>
                <div className="space-y-3">
                  {[
                    ['The Body',
                     'Latin corpus — a living, structured organism'],
                    ['Unity & Wholeness',
                     'A whole composed of united, purposeful parts'],
                    ['Collective Structure',
                     'People united as one — moving with one will'],
                    ['Embodied Purpose',
                     'corporationem — assumption of a body'],
                  ].map(([title, sub]) => (
                    <div key={title}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                             style={{ background: '#C79639' }} />
                        <span className="text-white text-sm font-medium">
                          {title}
                        </span>
                      </div>
                      <p className="text-xs ml-4 mt-0.5"
                         style={{ color: '#95A9CC' }}>
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Combined meaning quote */}
            <div className="bg-gradient-to-br from-navy to-navy-dark
                    border border-gold/20 rounded-2xl p-10
                    text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                   style={{ background: '#C79639' }} />
              <p className="text-[10px] font-bold tracking-[2.5px]
                    uppercase mb-3"
                 style={{ color: '#95A9CC' }}>
                Combined Meaning
              </p>
              <p className="font-display font-bold italic text-2xl
                    md:text-3xl"
                 style={{ color: '#C79639' }}>
                "A unified body of warriors devoted to a cause."
              </p>
            </div>

          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2
                    gap-16 items-center">

              {/* Left — text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold
                           tracking-[2.5px] uppercase font-body">
                    Our Story
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy
                       text-4xl md:text-5xl mb-6">
                  How We Started
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    Founded in 2020, MylesCorp Technologies emerged 
                    from a simple yet powerful vision: to harness the 
                    power of artificial intelligence to solve Africa's 
                    most pressing challenges. What started as a small 
                    team of passionate developers has grown into East 
                    Africa's leading AI-powered software company.
                  </p>
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    Our journey began with EduMyles, our flagship 
                    school management system that transformed how 
                    educational institutions across Kenya operate. 
                    Today we power 500+ schools serving more than 
                    50,000 students with cutting-edge technology.
                  </p>
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    From healthcare to agriculture, from CRM to 
                    transport management, our solutions touch every 
                    aspect of life in East Africa. We are not just 
                    building software — we are building the future 
                    of African innovation.
                  </p>
                </div>
              </div>

              {/* Right — stats visual */}
              <div className="bg-gradient-to-br from-navy to-navy-dark
                      rounded-2xl p-10 border border-gold/20">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { num: '2020',  label: 'Year Founded'      },
                    { num: '500+',  label: 'Schools Powered'   },
                    { num: '50K+',  label: 'Students Managed'  },
                    { num: '4',     label: 'Products Live'     },
                    { num: '47',    label: 'Counties Reached'  },
                    { num: '100+',  label: 'Health Facilities' },
                  ].map(s => (
                    <div key={s.label}
                         className="rounded-xl p-5 border"
                         style={{
                           background: 'rgba(8,14,24,0.5)',
                           borderColor: 'rgba(255,255,255,0.05)',
                         }}>
                      <div className="font-display font-bold text-3xl
                              mb-1"
                           style={{ color: '#C79639' }}>
                        {s.num}
                      </div>
                      <div className="font-body text-xs"
                           style={{ color: '#95A9CC' }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20" style={{ background: '#f8f6f2' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center
                      gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                  Who We Are
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy
                     text-4xl md:text-5xl">
                Our Purpose &{' '}
                <span className="text-transparent bg-clip-text
                  bg-gradient-to-r from-gold to-gold-light italic">
                  Direction
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mission */}
              <div className="bg-white border border-navy/10
                      rounded-2xl p-10 flex flex-col
                      hover:border-gold hover:-translate-y-1
                      hover:shadow-xl transition-all
                      duration-300 group">
                <div className="w-14 h-14 bg-gold/10 border
                        border-gold/20 rounded-xl flex
                        items-center justify-center mb-6
                        flex-shrink-0">
                  <Target className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy
                       text-2xl mb-4 group-hover:text-gold
                       transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="font-body font-light text-base
                      leading-relaxed flex-grow"
                   style={{ color: '#545454' }}>
                  To transform African industries through innovative 
                  AI-powered software solutions that drive efficiency, 
                  accessibility, and sustainable growth across East 
                  Africa and beyond.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-navy/10
                      rounded-2xl p-10 flex flex-col
                      hover:border-gold hover:-translate-y-1
                      hover:shadow-xl transition-all
                      duration-300 group">
                <div className="w-14 h-14 bg-gold/10 border
                        border-gold/20 rounded-xl flex
                        items-center justify-center mb-6
                        flex-shrink-0">
                  <Eye className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy
                       text-2xl mb-4 group-hover:text-gold
                       transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="font-body font-light text-base
                      leading-relaxed flex-grow"
                   style={{ color: '#545454' }}>
                  To become Africa's most trusted technology partner, 
                  empowering organizations with intelligent solutions 
                  that bridge the digital divide and unlock human 
                  potential across the continent.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MYLES Values Section */}
        <MYLESValues />

        {/* Leadership Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                  Leadership
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy
                     text-4xl md:text-5xl mb-4">
                Meet Our{' '}
                <span className="text-transparent bg-clip-text
                  bg-gradient-to-r from-gold to-gold-light italic">
                  Team
                </span>
              </h2>
              <p className="font-body font-light max-w-2xl mx-auto
                    text-lg leading-relaxed"
                 style={{ color: '#545454' }}>
                The visionaries driving MylesCorp's mission to transform 
                African technology through innovation and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-navy/10 rounded-2xl p-8
                         hover:border-gold hover:-translate-y-1
                         hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold/20 to-gold/10
                           rounded-full flex items-center justify-center mb-6
                           border-2 border-gold/20">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="text-gold text-2xl font-display font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gold font-body font-medium text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="font-body font-light text-sm leading-relaxed mb-6"
                       style={{ color: '#545454' }}>
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-navy hover:text-gold transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy hover:text-gold transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy hover:text-gold transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats Section */}
        <section className="py-20" style={{ background: '#080e18' }}>
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
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#C79639,transparent)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
                <span style={{
                  color: '#C79639',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                }}>
                  IMPACT
                </span>
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
              </div>
              <h2 className="font-display font-bold text-white
                     text-4xl md:text-5xl mb-4">
                Our{' '}
                <em style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg,#C79639,#e0b055)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Numbers
                </em>
              </h2>
              <p className="font-body font-light max-w-2xl mx-auto
                    text-lg leading-relaxed"
                 style={{ color: '#C7D7EF' }}>
                Measuring our impact across East Africa through 
                transformative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '500+', label: 'Schools', desc: 'Across Kenya' },
                { num: '50K+', label: 'Students', desc: 'Empowered' },
                { num: '47', label: 'Counties', desc: 'Reached' },
                { num: '100+', label: 'Health', desc: 'Facilities' },
                { num: '18', label: 'Products', desc: 'Available' },
                { num: '4', label: 'Years', desc: 'of Innovation' },
                { num: '24/7', label: 'Support', desc: 'Available' },
                { num: '99%', label: 'Uptime', desc: 'Guaranteed' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2"
                       style={{ color: '#C79639' }}>
                    {stat.num}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="font-body text-sm"
                       style={{ color: '#95A9CC' }}>
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ background: '#080e18' }}>
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
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#C79639,transparent)',
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
              <span style={{
                color: '#C79639',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                JOIN US
              </span>
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
            </div>
            <h2 className="font-display font-bold text-white
                   text-4xl md:text-5xl mb-6">
              Join Our{' '}
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg,#C79639,#e0b055)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Journey
              </em>
            </h2>
            <p className="font-body font-light text-xl leading-relaxed
                 max-w-2xl mx-auto mb-10"
              style={{ color: '#C7D7EF' }}>
              Whether you're looking to transform your organization 
              with our solutions or join our growing team, we'd love 
              to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold text-navy hover:bg-gold-light">
                Book a Demo
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
