import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background">
            {/* Animated background will be added here */}
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              East Africa's Leading AI-Powered Software Company
            </h1>
            <p className="hero-subtitle">
              Transforming Education, Healthcare, Agriculture & Business across East Africa with 20+ AI-powered solutions built for Africa, by Africa.
            </p>
            <div className="hero-buttons">
              <Button>Book a Free Demo</Button>
              <Button variant="secondary">Explore Products</Button>
            </div>
          </div>
        </section>

        {/* Impact Stats Strip */}
        <section className="impact-stats">
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Schools</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">250K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hospitals</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">1K+</div>
              <div className="stat-label">Farmers</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">18</div>
              <div className="stat-label">Sectors</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">47</div>
              <div className="stat-label">Counties</div>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Featured Products</h2>
              <p className="body-text max-w-2xl mx-auto">
                Our most popular AI-powered solutions transforming organizations across East Africa.
              </p>
            </div>
            <div className="grid-cols-3">
              {/* Product cards will be added here */}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="body-text max-w-2xl mx-auto">
                Get started with Mylesoft in three simple steps.
              </p>
            </div>
            <div className="grid-cols-3">
              {/* Steps will be added here */}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">What Our Customers Say</h2>
              <p className="body-text max-w-2xl mx-auto">
                Trusted by leading organizations across East Africa.
              </p>
            </div>
            {/* Testimonials will be added here */}
          </div>
        </section>

        {/* Myles AI Spotlight */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Powered by Myles AI</h2>
              <p className="text-xl mb-8 text-navy-100">
                Africa's intelligence engine supporting local languages and industry-specific needs.
              </p>
              {/* Myles AI features will be added here */}
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Trusted By Leading Organizations</h2>
            </div>
            {/* Partner logos will be added here */}
          </div>
        </section>

        {/* Blog Preview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Latest Insights</h2>
              <p className="body-text max-w-2xl mx-auto">
                Thought leadership on technology, business, and innovation in Africa.
              </p>
            </div>
            <div className="grid-cols-3">
              {/* Blog cards will be added here */}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organisation?</h2>
              <p className="text-xl mb-8 text-navy-100">
                Join hundreds of organizations already using Mylesoft solutions.
              </p>
              <div className="hero-buttons">
                <Button>Book a Demo</Button>
                <Button variant="secondary">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
