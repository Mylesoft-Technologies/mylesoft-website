import { Layout } from '@/components/layout/Layout'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Users,
  Building,
  FileText
} from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'

export default function ContactPage() {
  const departments = [
    {
      name: 'general',
      title: 'General Inquiries',
      email: 'info@mylescorp.co.ke',
      phone: '+254 743 993 715',
      description: 'For general questions and information about our services.'
    },
    {
      name: 'sales',
      title: 'Sales & Partnerships',
      email: 'sales@mylescorp.co.ke',
      phone: '+254 743 993 715',
      description: 'Interested in our products or partnership opportunities?'
    },
    {
      name: 'support',
      title: 'Technical Support',
      email: 'support@mylescorp.co.ke',
      phone: '+254 743 993 715',
      description: 'Need help with existing products or technical assistance.'
    },
    {
      name: 'careers',
      title: 'Human Resources',
      email: 'careers@mylescorp.co.ke',
      phone: '+254 743 993 715',
      description: 'Questions about job opportunities and working at MylesCorp.'
    },
  ]

  const offices = [
    {
      city: 'Nairobi',
      address: 'Westlands, Nairobi, Kenya',
      phone: '+254 743 993 715',
      email: 'nairobi@mylescorp.co.ke',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      isHeadquarters: true
    },
    {
      city: 'Mombasa',
      address: 'Mombasa CBD, Mombasa, Kenya',
      phone: '+254 743 993 715',
      email: 'mombasa@mylescorp.co.ke',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false
    },
    {
      city: 'Kampala',
      address: 'Kampala Central, Uganda',
      phone: '+256 743 993 715',
      email: 'kampala@mylescorp.co.ke',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false
    },
    {
      city: 'Dar es Salaam',
      address: 'Dar es Salaam CBD, Tanzania',
      phone: '+255 743 993 715',
      email: 'dar@mylescorp.co.ke',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          {/* Grid texture overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glow top-right */}
          <div 
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Radial glow bottom-left */}
          <div 
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Gold top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
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
                  GET IN TOUCH
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Let&apos;s
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                  Talk
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Have a project in mind? Need a demo? Want to partner with us? We&apos;d love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="heading-2 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="heading-2 mb-6">Get in Touch</h2>
                
                {/* Departments */}
                <div className="mb-12">
                  <h3 className="heading-3 mb-4">Departments</h3>
                  <div className="space-y-4">
                    {departments.map((dept: any) => (
                      <Card variant="light" key={dept.name} className="h-full">
                        <CardHeader>
                          <h4 className="text-2xl font-display font-bold text-navy mb-2">{dept.title}</h4>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed mb-4 font-body text-sm">{dept.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Mail size={16} className="text-gold mr-2" />
                              <a href={`mailto:${dept.email}`} className="text-gold hover:text-gold-light font-body">
                                {dept.email}
                              </a>
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone size={16} className="text-gold mr-2" />
                              <a href={`tel:${dept.phone}`} className="text-gold hover:text-gold-light font-body">
                                {dept.phone}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-navy-500 rounded-lg p-6 text-white">
                  <h3 className="heading-3 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone size={20} className="text-gold-400 mr-3" />
                      <div>
                        <div className="font-semibold">Main Line</div>
                        <a href="tel:+254743993715" className="text-gold-400 hover:text-gold-300">
                          +254 743 993 715
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-gold-400 mr-3" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:info@MylesCorp.com" className="text-gold-400 hover:text-gold-300">
                          info@MylesCorp.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={20} className="text-gold-400 mr-3" />
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div className="text-navy-100">Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div className="text-navy-100">Saturday: 9:00 AM - 1:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Offices</h2>
              <p className="body-text max-w-2xl mx-auto">
                Find us across East Africa. Visit our headquarters or connect with our regional offices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office: any, index: number) => (
                <Card variant="light" key={index} className="h-full flex flex-col">
                  {office.isHeadquarters && (
                    <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold mb-4 font-body">
                      Headquarters
                    </div>
                  )}
                  <CardHeader>
                    <h3 className="text-2xl font-display font-bold text-navy mb-4">{office.city}</h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-body">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-gold mr-2" />
                        <a href={`tel:${office.phone}`} className="text-gold hover:text-gold-light font-body">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="text-gold mr-2" />
                        <a href={`mailto:${office.email}`} className="text-gold hover:text-gold-light font-body">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Clock size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-body">{office.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">Visit Our Headquarters</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                Located in the heart of Westlands, Nairobi. We&apos;d love to meet you in person.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Westlands, Nairobi</h3>
              <p className="text-light-blue mb-4">Visit us at our headquarters</p>
              <Button size="lg">
                Get Directions
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Emergency Support</h2>
              <p className="text-xl text-navy-100 mb-8">
                For urgent technical support or critical issues, we&apos;re available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl font-bold text-gold-400 mb-2">24/7 Support</div>
                  <a href="tel:+254743993715" className="text-xl text-white hover:text-gold-300">
                    +254 743 993 715
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl font-bold text-gold-400 mb-2">Email Support</div>
                  <a href="mailto:emergency@MylesCorp.com" className="text-xl text-white hover:text-gold-300">
                    emergency@MylesCorp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
