import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { TEAM_MEMBERS } from '@/lib/constants/team'
import Image from 'next/image'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react'

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
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
                OUR STORY
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                MylesCorp Technologies
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Transforming industries across East Africa with innovative technology solutions since 2020.
            </p>

          </div>
        </section>

        {/* Company Story */}
        <section className="section">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Our Story</h2>
                <div className="space-y-4 body-text">
                  <p>
                    Founded in 2020, MylesCorp Technologies emerged from a simple yet powerful vision: to harness the power of artificial intelligence to solve Africa's most pressing challenges. What started as a small team of passionate developers has grown into East Africa's leading AI-powered software company.
                  </p>
                  <p>
                    Our journey began with the development of EduMyles, our flagship school management system that transformed how educational institutions across Kenya and beyond operate. Today, we power over 500 schools, serving more than 250,000 students with cutting-edge technology.
                  </p>
                  <p>
                    From healthcare to agriculture, from customer relationship management to digital payments, our solutions touch every aspect of rn life in East Africa. We're not just building software; we're building the future of African innovation.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="brain" className="text-gold-400" size={96} />
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-gold p-6 hover-lift">
                  <div className="text-center">
                    <div className="stat-number mb-1">4+</div>
                    <div className="stat-label">Years of Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Target className="text-gold-400" size={32} />
                </div>
                <h3 className="heading-3 mb-4">Our Mission</h3>
                <p className="body-text">
                  To transform African industries through innovative AI-powered software solutions that drive efficiency, accessibility, and sustainable growth across East Africa and beyond.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Eye className="text-gold-400" size={32} />
                </div>
                <h3 className="heading-3 mb-4">Our Vision</h3>
                <p className="body-text">
                  To become Africa's most trusted technology partner, empowering organizations with intelligent solutions that bridge the digital divide and unlock human potential across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Core Values</h2>
              <p className="body-text max-w-2xl mx-auto">
                The principles that guide everything we do, from product development to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Heart className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Customer First</h3>
                <p className="body-text flex-grow">
                  We exist to serve our customers. Every decision we make starts with the question: "How does this create value for our users?"
                </p>
              </div>

              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Zap className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Innovation</h3>
                <p className="body-text flex-grow">
                  We push boundaries and challenge the status quo. Innovation isn't just what we do—it's who we are.
                </p>
              </div>

              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Shield className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Integrity</h3>
                <p className="body-text flex-grow">
                  We build trust through transparency, honesty, and ethical practices in all our relationships and operations.
                </p>
              </div>

              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Users className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Collaboration</h3>
                <p className="body-text flex-grow">
                  We believe in the power of teamwork and partnerships. Together, we achieve more than we ever could alone.
                </p>
              </div>

              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Globe className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Local Focus</h3>
                <p className="body-text flex-grow">
                  While we think globally, our solutions are deeply rooted in local context. We understand African challenges because we live them.
                </p>
              </div>

              <div className="text-center group h-full flex flex-col">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <TrendingUp className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Excellence</h3>
                <p className="body-text flex-grow">
                  We pursue excellence in everything we do. From code quality to customer service, good enough is never good enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Leadership Team</h2>
              <p className="body-text max-w-2xl mx-auto">
                Meet the visionaries driving MylesCorp's mission to transform African technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {TEAM_MEMBERS.map((member, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-gray-100 min-h-[420px]"
    >
      {/* Navy header */}
      <div className="bg-gradient-to-r from-navy to-navy-dark p-8 text-center">
        {/* Avatar — photo if available, icon placeholder if not */}
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-gold/40">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              width={96}
              height={96}
              className="w-full h-full object-cover object-top"
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gold/20 flex items-center justify-center">
              <Users className="w-12 h-12 text-gold" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-gold font-semibold text-sm font-body mb-1">
          {member.role}
        </p>
        {member.email && (
          <p className="text-light-blue text-xs font-body opacity-80">
            {member.email}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex-grow flex flex-col">
        <p className="text-gray-600 leading-relaxed font-body text-base mb-6 flex-grow">
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center space-x-3 mt-auto">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
              title={`Email ${member.name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          <a
            href={member.social.linkedin}
            className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={member.social.twitter}
            className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white mb-12">
              <h2 className="heading-2 mb-4">By the Numbers</h2>
              <p className="text-xl text-navy-100">
                Our impact across East Africa speaks for itself
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Schools" },
                { number: "250K+", label: "Students" },
                { number: "100+", label: "Hospitals" },
                { number: "1K+", label: "Farmers" },
                { number: "18", label: "Sectors" },
                { number: "47", label: "Counties" },
                { number: "20+", label: "Products" },
                { number: "4", label: "Countries" }
              ].map((stat, index) => (
                <div key={index} className="text-center scale-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="stat-number mb-2">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Join Our Journey</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Whether you're looking to transform your organization with our solutions or join our growing team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Book a Demo</Button>
                <Button variant="secondary">View Careers</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
