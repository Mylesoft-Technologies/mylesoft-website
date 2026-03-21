import { Layout } from '@/components/layout/Layout'
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react'
import { SimpleReveal } from '@/components/ui/SimpleReveal'

export const metadata = {
  title: 'Support | MylesCorp Technologies',
  description: 'Get help and support for MylesCorp products. Contact our support team for technical assistance and guidance.',
}

export default function SupportPage() {
  return (
    <Layout>
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
          <SimpleReveal delay={0.2}>
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                SUPPORT CENTER
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              24/7
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Support
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Our dedicated support team is here to help you get the most out of 
              MylesCorp products and services.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Live Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
                <Mail className="mr-2 w-5 h-5" />
                Email Support
              </button>
            </div>
          </SimpleReveal>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleReveal delay={0.4}>
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-body font-semibold text-white mb-2">Phone Support</h3>
                <p className="font-body text-muted-blue text-sm">
                  +254 743 993 715<br />
                  Mon-Fri, 9AM-6PM EAT
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-body font-semibold text-white mb-2">Email Support</h3>
                <p className="font-body text-muted-blue text-sm">
                  support@mylescorp.co.ke<br />
                  24-48 hour response
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-body font-semibold text-white mb-2">Live Chat</h3>
                <p className="font-body text-muted-blue text-sm">
                  Available on website<br />
                  Mon-Fri, 9AM-6PM EAT
                </p>
              </div>
            </div>
          </SimpleReveal>
          
          <SimpleReveal delay={0.6}>
            <div className="mt-16 text-center">
              <p className="font-body text-muted-blue text-sm">
                For urgent technical issues, please include your product name and version in your communication.
              </p>
            </div>
          </SimpleReveal>
        </div>
      </section>
    </Layout>
  )
}
