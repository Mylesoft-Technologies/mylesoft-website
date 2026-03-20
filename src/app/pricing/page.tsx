import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Check, X, CheckCircle, Star, Shield, Zap, Users } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small organizations getting started with digital transformation.',
    price: 'KES 15,000',
    period: '/month',
    features: [
      'Up to 50 users',
      'Basic product access',
      'Email support',
      'Standard security',
      'Monthly reports',
      'Mobile app access'
    ],
    notIncluded: [
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
      'White-label options'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing organizations needing advanced features and support.',
    price: 'KES 45,000',
    period: '/month',
    features: [
      'Up to 200 users',
      'All products access',
      'Priority email support',
      'Advanced security',
      'Weekly reports',
      'Mobile app access',
      'Advanced analytics',
      'API access',
      'Custom training'
    ],
    notIncluded: [
      'Dedicated support',
      'Custom integrations',
      'White-label options'
    ],
    popular: true,
    cta: 'Choose Professional'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations with complex needs.',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited users',
      'All products access',
      '24/7 dedicated support',
      'Enterprise security',
      'Real-time reports',
      'Mobile app access',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'White-label options',
      'Dedicated account manager',
      'Custom development'
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact Sales'
  }
]

const productPricing = [
  {
    category: 'Education',
    products: [
      {
        name: 'EduMyles Basic',
        price: 'KES 10,000',
        period: '/month',
        features: ['Up to 100 students', 'Basic management', 'Parent portal']
      },
      {
        name: 'EduMyles Pro',
        price: 'KES 25,000',
        period: '/month',
        features: ['Up to 500 students', 'Advanced features', 'Analytics', 'Mobile app']
      },
      {
        name: 'EduMyles Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited students', 'All features', 'Custom development']
      }
    ]
  },
  {
    category: 'Healthcare',
    products: [
      {
        name: 'MylesCare Basic',
        price: 'KES 15,000',
        period: '/month',
        features: ['Up to 50 doctors', 'Basic patient management', 'Appointment scheduling']
      },
      {
        name: 'MylesCare Pro',
        price: 'KES 40,000',
        period: '/month',
        features: ['Up to 200 doctors', 'Advanced features', 'AI diagnostics', 'Telemedicine']
      },
      {
        name: 'MylesCare Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited doctors', 'All features', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Agriculture',
    products: [
      {
        name: 'AgriMyles Small Farm',
        price: 'KES 5,000',
        period: '/month',
        features: ['Up to 10 hectares', 'Basic monitoring', 'Weather alerts']
      },
      {
        name: 'AgriMyles Commercial',
        price: 'KES 20,000',
        period: '/month',
        features: ['Up to 100 hectares', 'Advanced analytics', 'Market insights']
      },
      {
        name: 'AgriMyles Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited hectares', 'All features', 'Custom solutions']
      }
    ]
  }
]

const faqs = [
  {
    question: 'Do you offer discounts for annual payments?',
    answer: 'Yes! We offer a 20% discount when you pay annually instead of monthly. Contact our sales team to set up annual billing.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, bank transfers, credit cards, and mobile money payments across all East African countries.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
  },
  {
    question: 'Do you provide training and onboarding?',
    answer: 'Yes! Professional and Enterprise plans include comprehensive training and onboarding. Starter plans can purchase training separately.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Starter plans get email support, Professional plans get priority email support, and Enterprise plans get 24/7 dedicated support.'
  }
]

export default function PricingPage() {
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
                TRANSPARENT PRICING
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Simple, Honest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Pricing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Affordable plans designed for African organisations. No hidden fees. No surprises. 
              Start free and scale as you grow.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 mb-8">
              <span className="flex items-center gap-2 text-light-blue text-sm font-body">
                <span className="text-gold">✓</span>
                No Hidden Fees
              </span>
              <span className="flex items-center gap-2 text-light-blue text-sm font-body">
                <span className="text-gold">✓</span>
                14-Day Free Trial
              </span>
              <span className="flex items-center gap-2 text-light-blue text-sm font-body">
                <span className="text-gold">✓</span>
                20% Annual Discount
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                Start Free Trial
              </button>
              <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
                Contact Sales
              </button>
            </div>

          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Choose Your Plan</h2>
              <p className="body-text max-w-2xl mx-auto">
                Flexible pricing options for organizations of all sizes. All plans include core features with premium options for advanced needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-2xl shadow-medium p-8 hover:shadow-large transition-all duration-300 h-full flex flex-col ${
                    plan.popular ? 'ring-2 ring-gold-400 ring-offset-4' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-navy-500 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-gold-400 mb-1">{plan.price}</div>
                      <div className="text-medium-grey text-sm">{plan.period}</div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-8">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center opacity-60">
                            <X size={16} className="text-medium-grey mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className={`w-full ${plan.popular ? 'bg-gold-400 text-white hover:bg-gold-500' : ''}`}>
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product-Specific Pricing */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Product-Specific Pricing</h2>
              <p className="body-text max-w-2xl mx-auto">
                Individual product pricing for organizations needing specific solutions.
              </p>
            </div>
            
            <div className="space-y-12">
              {productPricing.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="heading-3 mb-6 text-center">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="bg-white rounded-lg shadow-medium p-6">
                        <h4 className="font-semibold text-navy-500 mb-2">{product.name}</h4>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-gold-400">{product.price}</span>
                          <span className="text-medium-grey text-sm">{product.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <Check size={14} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
              <p className="body-text max-w-2xl mx-auto">
                Got questions about our pricing? We've got answers.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-medium p-6">
                    <h3 className="font-semibold text-navy-500 mb-3">{faq.question}</h3>
                    <p className="body-text">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-navy-100 mb-8">
                We offer custom pricing for large organizations and specialized requirements. Let's discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Sales Team</Button>
                <Button variant="secondary">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
