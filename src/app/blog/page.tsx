import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

const blogPosts = [
  {
    title: 'The Future of AI in African Education',
    excerpt: 'Exploring how artificial intelligence is transforming educational landscapes across East Africa, from personalized learning to administrative efficiency.',
    author: 'Michael Myles',
    role: 'CEO & Founder',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Education Technology',
    image: null,
    featured: true,
    tags: ['AI in Education', 'EdTech', 'East Africa', 'Innovation']
  },
  {
    title: 'Digital Healthcare: Bridging the Gap in East Africa',
    excerpt: 'How technology is revolutionizing healthcare delivery in remote areas, improving patient outcomes and reducing medical costs.',
    author: 'Dr. Sarah Kimani',
    role: 'Healthcare Advisor',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Healthcare Innovation',
    image: null,
    featured: true,
    tags: ['Digital Health', 'Telemedicine', 'Healthcare Africa', 'Medical Technology']
  },
  {
    title: 'Smart Agriculture: Technology for African Farmers',
    excerpt: 'Revolutionizing farming practices with IoT sensors, weather prediction, and market intelligence to increase yields and reduce waste.',
    author: 'Grace Achieng',
    role: 'Agriculture Specialist',
    date: '2024-03-08',
    readTime: '6 min read',
    category: 'AgriTech',
    image: null,
    featured: false,
    tags: ['Smart Farming', 'AgriTech', 'IoT', 'African Agriculture']
  },
  {
    title: 'Building Scalable SaaS for African Markets',
    excerpt: 'Key considerations for developing software solutions that address the unique challenges and opportunities in East African business environments.',
    author: 'David Ochieng',
    role: 'CTO',
    date: '2024-03-05',
    readTime: '8 min read',
    category: 'Software Development',
    image: null,
    featured: false,
    tags: ['SaaS', 'African Markets', 'Scalability', 'Software Architecture']
  },
  {
    title: 'Cybersecurity in the African Context',
    excerpt: 'Understanding unique security challenges facing African organizations and implementing strategies to protect digital assets effectively.',
    author: 'Security Team',
    role: 'Security Experts',
    date: '2024-03-01',
    readTime: '10 min read',
    category: 'Security',
    image: null,
    featured: false,
    tags: ['Cybersecurity', 'African Security', 'Digital Protection', 'Risk Management']
  },
  {
    title: 'Cloud Migration Strategies for East African Businesses',
    excerpt: 'Step-by-step guide to successful cloud adoption, addressing infrastructure challenges and maximizing ROI.',
    author: 'Technical Team',
    role: 'Cloud Architects',
    date: '2024-02-28',
    readTime: '12 min read',
    category: 'Cloud Computing',
    image: null,
    featured: true,
    tags: ['Cloud Migration', 'Digital Transformation', 'Infrastructure', 'ROI']
  },
  {
    title: 'Mobile Money Integration: The Kenyan Success Story',
    excerpt: 'How M-Pesa and mobile payment innovations are transforming financial services across East Africa.',
    author: 'Finance Team',
    role: 'Financial Analysts',
    date: '2024-02-25',
    readTime: '6 min read',
    category: 'FinTech',
    image: null,
    featured: false,
    tags: ['Mobile Money', 'M-Pesa', 'FinTech', 'Kenyan Innovation']
  }
]

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Education Technology', count: 1 },
  { name: 'Healthcare Innovation', count: 1 },
  { name: 'AgriTech', count: 1 },
  { name: 'Software Development', count: 1 },
  { name: 'Security', count: 1 },
  { name: 'Cloud Computing', count: 1 },
  { name: 'FinTech', count: 1 }
]

const featuredPosts = blogPosts.filter(post => post.featured)
const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Blog & Insights</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed">
                Thought leadership on technology, business, and innovation in Africa. Stay updated with the latest trends, insights, and best practices from our experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="section">
            <div className="section-padding">
              <div className="mb-12">
                <h2 className="heading-2 mb-4">Featured Articles</h2>
                <p className="body-text max-w-2xl mx-auto">
                  Our most important insights and thought leadership pieces.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-medium overflow-hidden hover:shadow-large transition-shadow">
                    <div className="aspect-video bg-gold-100 flex items-center justify-center">
                      <Icon name="brain" className="text-gold-400" size={48} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-1">
                          <span className="inline-block bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                            {post.category}
                          </span>
                          <h3 className="heading-3 mb-2">{post.title}</h3>
                        </div>
                      </div>
                      <p className="body-text mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-medium-grey">
                          <User size={16} className="mr-2" />
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.role}</span>
                        </div>
                        <div className="flex items-center text-sm text-medium-grey">
                          <Calendar size={16} className="mr-2" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gold-600 font-medium hover:text-gold-500 transition-colors">
                        Read Article
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="mb-12">
              <h2 className="heading-2 mb-4">Recent Articles</h2>
              <p className="body-text max-w-2xl mx-auto">
                Latest insights from our team on technology trends, industry analysis, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-medium overflow-hidden hover:shadow-large transition-shadow">
                  <div className="aspect-video bg-gold-100 flex items-center justify-center">
                    <Icon name="brain" className="text-gold-400" size={32} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <span className="inline-block bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                          {post.category}
                        </span>
                        <h3 className="heading-3 mb-2">{post.title}</h3>
                      </div>
                    </div>
                    <p className="body-text mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-medium-grey">
                        <User size={16} className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-medium-grey">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gold-600 font-medium hover:text-gold-500 transition-colors">
                      Read More
                      <ChevronRight size={16} className="ml-2" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Browse by Category</h2>
              <p className="body-text max-w-2xl mx-auto">
                Explore our articles by topic to find insights most relevant to your interests.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-medium p-6 text-center hover:shadow-large transition-shadow">
                  <div className="text-3xl font-bold text-navy-500 mb-2">{category.count}</div>
                  <div className="text-sm text-medium-grey mb-4">{category.name}</div>
                  <Button variant="outline" className="w-full">
                    View {category.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Stay Updated</h2>
              <p className="text-xl text-navy-100 mb-8">
                Get the latest insights delivered to your inbox. Join our community of technology leaders and innovators.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20"
                  />
                  <Button type="submit">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
