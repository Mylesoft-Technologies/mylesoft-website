import { Layout } from '@/components/layout/Layout'
import { ScrollReveal, StaggerReveal, Counter } from '@/components/ui/ScrollReveal'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { Users, Award, Target, Heart, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { TEAM_MEMBERS } from '@/lib/constants/team'
import Image from 'next/image'

const values = [
  { icon: <Target className="w-8 h-8" />, title: "Mission-Driven", description: "We're committed to solving real problems for African businesses" },
  { icon: <Heart className="w-8 h-8" />, title: "Customer-Centric", description: "Our success is measured by our customers' success" },
  { icon: <Award className="w-8 h-8" />, title: "Excellence", description: "We strive for excellence in everything we do" },
  { icon: <Users className="w-8 h-8" />, title: "Collaboration", description: "We believe in the power of teamwork and partnership" }
]

export default function TeamPage() {
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
                MEET THE TEAM
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-6">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Amazing Team
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              We're a diverse group of passionate individuals united by our mission to transform 
              African businesses through innovative technology solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR VALUES
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal
            staggerDelay={0.1}
            itemDelay={0.4}
            direction="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <Card variant="light" key={index} className="text-center group h-full flex flex-col">
                <CardIcon size="md">
                  <div className="text-gold">{value.icon}</div>
                </CardIcon>
                <CardHeader>
                  <h3 className="text-2xl font-display font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed font-body">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  LEADERSHIP
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                The brilliant minds behind MylesCorp's success
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal
            staggerDelay={0.1}
            itemDelay={0.2}
            direction="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {TEAM_MEMBERS.map((member, index) => (
                <Card variant="light" key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                  {/* LARGE PHOTO AREA — top of card */}
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-navy to-navy-dark flex-shrink-0">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        priority={false}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-20 h-20 text-gold/40" />
                      </div>
                    )}

                    {/* Gold gradient overlay at bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy/80 to-transparent" />

                    {/* Role badge overlaid on photo bottom */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-gold font-body font-semibold text-xs uppercase tracking-wider bg-navy/60 px-2 py-1 rounded-md backdrop-blur-sm">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* CARD CONTENT — below photo */}
                  <div className="p-6 flex-grow flex flex-col">
                    
                    {/* Name */}
                    <h3 className="text-lg font-display font-bold text-navy mb-1 group-hover:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>

                    {/* Email */}
                    {member.email && (
                      <p className="text-muted-blue text-xs font-body mb-3">
                        {member.email}
                      </p>
                    )}

                    {/* Bio */}
                    <p className="text-gray-600 leading-relaxed font-body text-sm mb-5 flex-grow">
                      {member.bio}
                    </p>

                    {/* Social links */}
                    <div className="flex items-center gap-2 mt-auto">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-9 h-9 bg-navy/8 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
                          title={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 bg-navy/8 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-9 h-9 bg-navy/8 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </StaggerReveal>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                JOIN US
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-light-blue mb-8 font-body">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Send Your Resume
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
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  GET IN TOUCH
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 font-body">
                Have questions about our team or want to collaborate?
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <Card variant="light" className="text-center h-full flex flex-col">
                <CardIcon size="md">
                  <Mail className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-xl font-display font-bold text-navy mb-2">Email</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body">team@mylescorp.co.ke</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Card variant="light" className="text-center h-full flex flex-col">
                <CardIcon size="md">
                  <Phone className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-xl font-display font-bold text-navy mb-2">Phone</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body">+254 743 993 715</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <Card variant="light" className="text-center h-full flex flex-col">
                <CardIcon size="md">
                  <MapPin className="text-gold" />
                </CardIcon>
                <CardHeader>
                  <h3 className="text-xl font-display font-bold text-navy mb-2">Office</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body">Nairobi, Kenya</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
