import { Layout } from '@/components/layout/Layout'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden">
        {/* Static Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.png" 
                alt="Mylesoft Technologies" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  AI-Powered Solutions
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              East Africa's leading technology company delivering innovative solutions for Education, Healthcare, Agriculture, and Business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div>
                <Button size="lg">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div>
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
