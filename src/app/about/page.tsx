import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6 fade-in">About Mylesoft Technologies</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed mb-8 slide-up">
                Transforming Industries, Empowering Generations. East Africa's leading AI-powered software company building innovative solutions for Education, Healthcare, Agriculture, and Business.
              </p>
            </div>
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
                    Founded in 2020, Mylesoft Technologies emerged from a simple yet powerful vision: to harness the power of artificial intelligence to solve Africa's most pressing challenges. What started as a small team of passionate developers has grown into East Africa's leading AI-powered software company.
                  </p>
                  <p>
                    Our journey began with the development of EduMyles, our flagship school management system that transformed how educational institutions across Kenya and beyond operate. Today, we power over 500 schools, serving more than 250,000 students with cutting-edge technology.
                  </p>
                  <p>
                    From healthcare to agriculture, from customer relationship management to digital payments, our solutions touch every aspect of modern life in East Africa. We're not just building software; we're building the future of African innovation.
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
              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Heart className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Customer First</h3>
                <p className="body-text">
                  We exist to serve our customers. Every decision we make starts with the question: "How does this create value for our users?"
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Zap className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Innovation</h3>
                <p className="body-text">
                  We push boundaries and challenge the status quo. Innovation isn't just what we do—it's who we are.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Shield className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Integrity</h3>
                <p className="body-text">
                  We build trust through transparency, honesty, and ethical practices in all our relationships and operations.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Users className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Collaboration</h3>
                <p className="body-text">
                  We believe in the power of teamwork and partnerships. Together, we achieve more than we ever could alone.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <Globe className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Local Focus</h3>
                <p className="body-text">
                  We understand African markets because we're part of them. Our solutions are built by Africans, for Africa.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                  <TrendingUp className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-3">Excellence</h3>
                <p className="body-text">
                  We pursue excellence in everything we do, from code quality to customer service, continuously raising our standards.
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
                Meet the visionaries driving Mylesoft's mission to transform African technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Michael Myles",
                  role: "Founder & CEO",
                  bio: "Visionary leader with 15+ years in software development and African business strategy.",
                  avatar: null
                },
                {
                  name: "Sarah Kimani",
                  role: "CTO",
                  bio: "AI expert driving technical innovation and product architecture.",
                  avatar: null
                },
                {
                  name: "David Ochieng",
                  role: "Head of Operations",
                  bio: "Operations specialist ensuring seamless delivery across 18 sectors.",
                  avatar: null
                },
                {
                  name: "Grace Achieng",
                  role: "Head of Customer Success",
                  bio: "Customer experience champion serving 500+ organizations across East Africa.",
                  avatar: null
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold-600 font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="heading-3 mb-2">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="body-text text-sm">{member.bio}</p>
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
