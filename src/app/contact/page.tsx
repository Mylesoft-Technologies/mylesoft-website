import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Users,
  Building,
  FileText,
  MessageCircle,
  Globe,
  Headphones,
  Calendar,
  Award
} from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'

export const metadata = {
  title: 'Contact Us — MylesCorp Technologies',
  description: 'Contact MylesCorp Technologies in Nairobi, Kenya. Call +254 743 993 715, email info@mylescorp.co.ke, or WhatsApp us. We respond within 2 business hours.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/contact',
  },
}

const CONTACT_DATA = {
  overview: {
    title: 'Contact Us',
    tagline: 'Let\'s Connect and Transform Together',
    description: [
      'Have a project in mind? Need a demo? Want to partner with us?',
      'We\'d love to hear from you and discuss how we can help transform your business.'
    ],
    image: '/api/og/product?name=Contact&category=Support',
    stats: [
      { number: '2hrs', label: 'Response Time' },
      { number: '24/7', label: 'Support Available' },
      { number: '4', label: 'East Africa Offices' },
      { number: '98%', label: 'Customer Satisfaction' }
    ]
  },
  features: [
    {
      icon: '📧',
      title: 'Multiple Contact Channels',
      description: 'Reach us via email, phone, WhatsApp, or visit our offices. We\'re always here to help.'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'We respond to all inquiries within 2 business hours. For urgent issues, we\'re available 24/7.'
    },
    {
      icon: '🌍',
      title: 'East African Presence',
      description: 'Offices in Nairobi, Mombasa, Kampala, and Dar es Salaam to serve you better.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our dedicated professionals are ready to assist with your specific needs and requirements.'
    },
    {
      icon: '🎯',
      title: 'Specialized Support',
      description: 'Different departments for sales, technical support, partnerships, and career inquiries.'
    },
    {
      icon: '🏆',
      title: 'Customer Focused',
      description: '98% customer satisfaction rate. Your success is our top priority.'
    }
  ],
  process: [
    { step: 1, title: 'Reach Out', description: 'Contact us through your preferred channel with your requirements' },
    { step: 2, title: 'Consultation', description: 'Our team will schedule a consultation to understand your needs' },
    { step: 3, title: 'Solution Design', description: 'We design a tailored solution specifically for your organization' },
    { step: 4, title: 'Implementation', description: 'Our experts implement the solution with full support and training' },
    { step: 5, title: 'Ongoing Support', description: 'We provide continuous support and optimization for long-term success' }
  ],
  targets: [
    'New Customers - Organizations looking for digital transformation solutions',
    'Existing Clients - Current customers needing support or additional services',
    'Partners - Companies interested in partnership and collaboration opportunities',
    'Job Seekers - Talented professionals looking to join our growing team'
  ],
  testimonials: [
    {
      quote: 'The MylesCorp team responded within hours and provided exactly what we needed. Excellent service!',
      author: 'Sarah Johnson',
      role: 'CEO',
      organization: 'TechStart Kenya'
    },
    {
      quote: 'Their technical support is outstanding. They helped us resolve issues quickly and professionally.',
      author: 'Michael Chen',
      role: 'IT Director',
      organization: 'East Africa Manufacturing'
    },
    {
      quote: 'From first contact to implementation, the MylesCorp team was professional and responsive.',
      author: 'Grace Wanjiku',
      role: 'Operations Manager',
      organization: 'Kenya Agricultural Cooperative'
    }
  ]
}

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

          {/* Gold top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                GET IN TOUCH
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Let&apos;s
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Talk
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {CONTACT_DATA.overview.description[0]}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {CONTACT_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection 
          title={CONTACT_DATA.overview.title}
          description={CONTACT_DATA.overview.description}
          stats={CONTACT_DATA.overview.stats}
        />

        {/* Contact Form and Info */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  CONTACT US
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Get in Touch
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto leading-[1.7]">
                We're here to help. Reach out through any of the channels below and we'll respond within 2 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="font-display font-bold text-navy text-2xl mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display font-bold text-navy text-2xl mb-6">Contact Information</h3>
                
                {/* Departments */}
                <div className="mb-12">
                  <h4 className="font-body font-semibold text-navy text-lg mb-4">Departments</h4>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.name} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                        <h5 className="font-display font-bold text-navy text-xl mb-2">{dept.title}</h5>
                        <p className="font-body text-light-blue text-sm mb-4">{dept.description}</p>
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-navy-deep rounded-xl p-6 text-white">
                  <h4 className="font-display font-bold text-white text-xl mb-4">Quick Contact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-semibold">Main Line</div>
                        <a href="tel:+254743993715" className="text-gold hover:text-gold-light">
                          +254 743 993 715
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:info@mylescorp.co.ke" className="text-gold hover:text-gold-light">
                          info@mylescorp.co.ke
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div className="text-light-blue">Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div className="text-light-blue">Saturday: 9:00 AM - 1:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <FeaturesSection 
          title="Why Contact MylesCorp?"
          description="We make it easy to connect with us and get the support you need for your digital transformation journey."
          features={CONTACT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Our Contact Process"
          description="From first contact to successful implementation — we ensure a smooth and professional experience."
          steps={CONTACT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Who We Help"
          targets={CONTACT_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="What Our Customers Say"
          testimonials={CONTACT_DATA.testimonials}
          centerHeader={true}
        />

        {/* Office Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR OFFICES
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Visit Us Across East Africa
              </h2>
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto leading-[1.7]">
                Find us in major cities across East Africa. Visit our headquarters or connect with our regional offices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                  {office.isHeadquarters && (
                    <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold mb-4 font-body">
                      Headquarters
                    </div>
                  )}
                  <h3 className="font-display font-bold text-navy text-xl mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-body">{office.address}</span>
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
                      <span className="text-sm text-gray-700 font-body">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-navy-deep">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  EMERGENCY SUPPORT
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">24/7 Emergency Support</h2>
              <p className="font-body text-light-blue text-xl max-w-2xl mx-auto leading-[1.7] mb-8">
                For urgent technical support or critical issues, we&apos;re available round the clock to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold text-gold mb-2">24/7 Support</div>
                  <a href="tel:+254743993715" className="text-xl text-white hover:text-gold transition-colors">
                    +254 743 993 715
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold text-gold mb-2">Email Support</div>
                  <a href="mailto:emergency@mylescorp.co.ke" className="text-xl text-white hover:text-gold transition-colors">
                    emergency@mylescorp.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection 
          title="Ready to Transform Your Business?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Contact us today and join ${CONTACT_DATA.overview.stats[3].number} satisfied customers across East Africa.`}
          primaryCta={{ text: "Book a Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Call Us Now", href: "tel:+254743993715" }}
        />
      </div>
    </Layout>
  )
}
