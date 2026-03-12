import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Check, X } from 'lucide-react'

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
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Pricing Plans</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed">
                Transparent pricing designed for African organizations. Choose the plan that fits your needs and scale as you grow.
              </p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-xl shadow-medium p-8 hover:shadow-large transition-shadow ${
                    plan.popular ? 'ring-2 ring-gold-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gold-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="heading-3 mb-2">{plan.name}</h3>
                    <p className="body-text text-sm mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-navy-500">{plan.price}</span>
                      <span className="text-medium-grey">{plan.period}</span>
                    </div>
                  </div>
                  
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
                  
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant="secondary"'}`}
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    {plan.cta}
                  </Button>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
