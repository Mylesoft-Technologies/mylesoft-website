import { Layout } from '@/components/layout/Layout'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { Users, Award, Target, Heart, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

const teamMembers = [
  {
    name: "Jonathan Myles",
    role: "CEO & Founder",
    bio: "A visionary software engineer and entrepreneur, Jonathan founded Mylesoft Technologies in 2020 with a mission to build AI-powered solutions addressing East Africa's most critical challenges. He leads the company's overall strategy, product development, and technology architecture across all 20+ Mylesoft products.",
    image: "/team/michael.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
   {
    name: "Pauline Moraa",
    role: "COO",
    bio: "Pauline brings operational excellence and business development expertise to Mylesoft. As COO, she drives the company's day-to-day operations, sales, marketing, and customer partnerships — ensuring every Mylesoft product delivers measurable impact across East Africa.",
    image: "/team/david.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "AI and machine learning expert with extensive experience in building scalable enterprise solutions. MIT graduate with multiple patents in AI.",
    image: "/team/sarah.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Amina Hassan",
    role: "Head of Design",
    bio: "Creative director passionate about user-centered design. Award-winning designer with experience in fintech and healthcare applications.",
    image: "/team/amina.jpg",
    social: { linkedin: "#", twitter: "#" }
  }
]

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
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Amazing Team
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
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
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerReveal staggerDelay={0.1} itemDelay={0.4} direction="up">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-500 mb-4 group-hover:text-gold-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind Mylesoft's success
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-navy-500 to-navy-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gold-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-gold-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-navy-500 mb-2">{member.name}</h3>
                    <p className="text-gold-500 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600 hover:bg-gold-400 hover:text-white transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600 hover:bg-gold-400 hover:text-white transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-navy-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white shadow-premium-gold hover:shadow-premium-glow">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-600">
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
              <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Have questions about our team or want to collaborate?
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Email</h3>
                <p className="text-gray-600">team@mylesoft.com</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Phone</h3>
                <p className="text-gray-600">+254 743993715</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Office</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
