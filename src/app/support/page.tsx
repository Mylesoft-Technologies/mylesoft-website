import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Headphones, ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react'
import { SimpleReveal } from '@/components/ui/SimpleReveal'

export const metadata = {
  title: 'Support | MylesCorp Technologies',
  description: 'Get help and support for MylesCorp products. Contact our support team for technical assistance and guidance.',
}

export default function SupportPage() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-navy-deep">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <SimpleReveal delay={0.2}>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gold-DEFAULT/20 rounded-2xl flex items-center justify-center">
                <Headphones className="w-10 h-10 text-gold-DEFAULT" />
              </div>
            </div>
            
            <h1 className="font-display font-bold text-white mb-6" 
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              Support Center
            </h1>
            
            <p className="font-body text-[18px] font-light text-light-blue leading-relaxed mb-8 max-w-2xl mx-auto">
              Our dedicated support team is here to help you get the most out of MylesCorp products and services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary"
                className="bg-gold-DEFAULT text-navy-DEFAULT hover:bg-gold-light hover:-translate-y-2 shadow-gold hover:shadow-gold px-9 py-4 font-body font-bold"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Live Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-gold-DEFAULT/20 text-gold-DEFAULT hover:border-gold-DEFAULT hover:bg-gold-DEFAULT/10 font-body"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Support
              </Button>
            </div>
          </SimpleReveal>
          
          <SimpleReveal delay={0.4}>
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-DEFAULT/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-gold-DEFAULT" />
                </div>
                <h3 className="font-body font-semibold text-white mb-2">Phone Support</h3>
                <p className="font-body text-muted-blue text-sm">
                  +254 743 993 715<br />
                  Mon-Fri, 9AM-6PM EAT
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-DEFAULT/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gold-DEFAULT" />
                </div>
                <h3 className="font-body font-semibold text-white mb-2">Email Support</h3>
                <p className="font-body text-muted-blue text-sm">
                  support@mylescorp.co.ke<br />
                  24-48 hour response
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-DEFAULT/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-gold-DEFAULT" />
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
