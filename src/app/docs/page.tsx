import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FileText, ArrowRight, BookOpen } from 'lucide-react'
import { SimpleReveal } from '@/components/ui/SimpleReveal'

export const metadata = {
  title: 'Documentation | MylesCorp Technologies',
  description: 'Comprehensive documentation for MylesCorp products and services. Get started with our guides, API references, and tutorials.',
}

export default function DocsPage() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-navy-deep">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <SimpleReveal delay={0.2}>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-gold" />
              </div>
            </div>
            
            <h1 className="font-display font-bold text-white mb-6" 
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              Documentation
            </h1>
            
            <p className="font-body text-[18px] font-light text-light-blue leading-relaxed mb-8 max-w-2xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you make the most of MylesCorp products and services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary"
                className="bg-gold text-navy hover:bg-gold-light hover:-translate-y-2 shadow-gold hover:shadow-gold px-9 py-4 font-body font-bold"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Browse Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10 font-body"
              >
                API Reference
              </Button>
            </div>
          </SimpleReveal>
          
          <SimpleReveal delay={0.4}>
            <div className="mt-16 text-center">
              <p className="font-body text-muted-blue text-sm">
                Our documentation is currently being updated with the latest features and improvements.
              </p>
              <p className="font-body text-muted-blue text-sm mt-2">
                Need immediate assistance?{' '}
                <a href="/contact" className="text-gold hover:text-gold-light transition-colors">
                  Contact our support team
                </a>
              </p>
            </div>
          </SimpleReveal>
        </div>
      </section>
    </Layout>
  )
}
