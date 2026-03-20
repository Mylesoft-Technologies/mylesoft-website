'use client'

import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
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
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    department: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

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
    }
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
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-navy via-navy-deep to-navy-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  CONTACT US
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                Contact Us
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-xl text-light-blue max-w-3xl mx-auto leading-relaxed font-body">
                Get in touch with our team to discuss how MylesCorp Technologies can help transform your organization. We're here to support your digital transformation journey.
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-500 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-500 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-navy-500 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                    >
                      <option value="general">General Inquiries</option>
                      <option value="sales">Sales & Partnerships</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Human Resources</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-500 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-500 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="heading-2 mb-6">Get in Touch</h2>
                
                {/* Departments */}
                <div className="mb-12">
                  <h3 className="heading-3 mb-6">Departments</h3>
                  <div className="space-y-4">
                  <StaggerReveal staggerDelay={0.1} itemDelay={0.3} direction="up">
                    {departments.map((dept) => (
                      <Card variant="light" key={dept.name} className="h-full">
                        <CardHeader>
                          <h4 className="text-xl font-display font-bold text-navy mb-2">{dept.title}</h4>
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
                  </StaggerReveal>
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
            
            <StaggerReveal
              staggerDelay={0.2}
              itemDelay={0.4}
              direction="up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {offices.map((office, index) => (
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
                          <a href={`tel:${office.phone}`} className="text-sm text-gold hover:text-gold-light font-body">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail size={16} className="text-gold mr-2" />
                          <a href={`mailto:${office.email}`} className="text-sm text-gold hover:text-gold-light font-body">
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
            </StaggerReveal>
          </div>
        </section>

        {/* Map Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">Visit Our Headquarters</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                Located in the heart of Westlands, Nairobi. We'd love to meet you in person.
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
                For urgent technical support or critical issues, we're available 24/7.
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
