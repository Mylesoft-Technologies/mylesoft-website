import { NextResponse } from 'next/server'
import { algoliasearch } from 'algoliasearch'
import type { SearchClient } from 'algoliasearch'

// Initialize Algolia client
const client: SearchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || 'demo-app-id',
  process.env.ALGOLIA_ADMIN_KEY || 'demo-admin-key'
)

// Get the search index
const getIndex = () => {
  return client.initIndex('mylesoft_content')
}

// Mock data - in production, this would come from your CMS/database
const mockContent = [
  // Products
  {
    objectID: 'product-edumyles',
    title: 'EduMyles - Complete School Management System',
    description: 'AI-powered school management system designed to transform educational institutions across Kenya and East Africa.',
    category: 'product',
    slug: 'edumyles',
    tags: ['education', 'AI', 'school management', 'Kenya'],
    url: '/products/edumyles',
    image: '/images/products/edumyles.jpg',
    content: 'EduMyles is a comprehensive AI-powered school management system that streamlines administrative tasks, enhances learning experiences, and provides valuable insights for educational institutions.'
  },
  {
    objectID: 'product-mylescare',
    title: 'MylesCare - Intelligent Hospital Management System',
    description: 'AI-powered hospital management system that streamlines healthcare delivery and improves patient outcomes.',
    category: 'product',
    slug: 'mylescare',
    tags: ['healthcare', 'AI', 'hospital management', 'medical'],
    url: '/products/mylescare',
    image: '/images/products/mylescare.jpg',
    content: 'MylesCare revolutionizes healthcare management with cutting-edge AI technology designed specifically for African healthcare environments.'
  },
  {
    objectID: 'product-agrimyles',
    title: 'AgriMyles - Smart Agricultural Platform',
    description: 'AI-powered agricultural platform helping Kenyan farmers increase productivity and sustainability.',
    category: 'product',
    slug: 'agrimyles',
    tags: ['agriculture', 'AI', 'farming', 'sustainability'],
    url: '/products/agrimyles',
    image: '/images/products/agrimyles.jpg',
    content: 'AgriMyles leverages artificial intelligence and IoT technologies to provide farmers with actionable insights for better crop management.'
  },
  {
    objectID: 'product-mylescrm',
    title: 'MylesCRM - Customer Relationship Management',
    description: 'AI-powered CRM system designed for African businesses to enhance customer relationships.',
    category: 'product',
    slug: 'mylescrm',
    tags: ['CRM', 'AI', 'business', 'customer management'],
    url: '/products/mylescrm',
    image: '/images/products/mylescrm.jpg',
    content: 'MylesCRM is an intelligent customer relationship management system that helps businesses build stronger customer relationships through AI-driven insights.'
  },
  {
    objectID: 'product-myles-ai',
    title: 'Myles AI - Custom AI Solutions',
    description: 'Custom AI development and consulting services for businesses across East Africa.',
    category: 'product',
    slug: 'myles-ai',
    tags: ['AI', 'consulting', 'custom solutions', 'machine learning'],
    url: '/products/myles-ai',
    image: '/images/products/myles-ai.jpg',
    content: 'Myles AI provides custom artificial intelligence solutions tailored to your specific business needs and industry requirements.'
  },

  // Blog Posts
  {
    objectID: 'blog-transforming-education-ai-kenya',
    title: 'Transforming Education in Kenya with AI: The EduMyles Revolution',
    description: 'How artificial intelligence is reshaping the educational landscape across Kenyan schools and universities.',
    category: 'blog',
    slug: 'transforming-education-ai-kenya',
    tags: ['AI', 'education', 'Kenya', 'EduMyles', 'digital transformation'],
    url: '/blog/transforming-education-ai-kenya',
    image: '/images/blog/education-ai-kenya.jpg',
    content: 'Kenya\'s educational landscape is undergoing a profound transformation, driven by the integration of artificial intelligence into everyday learning experiences.',
    author: 'Dr. Sarah Kimani',
    publishedAt: '2024-03-15T10:00:00Z'
  },
  {
    objectID: 'blog-future-healthcare-ai-africa',
    title: 'The Future of Healthcare in Africa: AI-Powered Medical Solutions',
    description: 'Exploring how artificial intelligence is revolutionizing healthcare delivery across African hospitals and clinics.',
    category: 'blog',
    slug: 'future-healthcare-ai-africa',
    tags: ['AI', 'healthcare', 'Africa', 'MylesCare', 'medical technology'],
    url: '/blog/future-healthcare-ai-africa',
    image: '/images/blog/healthcare-ai-africa.jpg',
    content: 'African healthcare systems are at a pivotal moment, with artificial intelligence offering unprecedented opportunities to overcome longstanding challenges.',
    author: 'Dr. Michael Ochieng',
    publishedAt: '2024-03-10T14:30:00Z'
  },
  {
    objectID: 'blog-agricultural-technology-kenya',
    title: 'Agricultural Technology: Transforming Kenyan Farming with AI',
    description: 'How AI-powered solutions are helping Kenyan farmers increase productivity and sustainability.',
    category: 'blog',
    slug: 'agricultural-technology-kenya',
    tags: ['AI', 'agriculture', 'Kenya', 'AgriMyles', 'farming technology'],
    url: '/blog/agricultural-technology-kenya',
    image: '/images/blog/agricultural-technology-kenya.jpg',
    content: 'Kenya\'s agricultural sector, the backbone of the nation\'s economy, is experiencing a technological renaissance powered by artificial intelligence.',
    author: 'James Mwangi',
    publishedAt: '2024-03-05T09:15:00Z'
  },

  // Careers
  {
    objectID: 'career-senior-fullstack-developer',
    title: 'Senior Full Stack Developer',
    description: 'We are seeking a highly skilled Senior Full Stack Developer to join our growing engineering team.',
    category: 'career',
    slug: 'senior-fullstack-developer',
    tags: ['engineering', 'fullstack', 'React', 'Node.js', 'AI'],
    url: '/careers/senior-fullstack-developer',
    image: '/images/careers/developer.jpg',
    content: 'Join our team and help build AI-powered solutions that transform industries across East Africa. We are looking for experienced developers passionate about technology and innovation.',
    department: 'Engineering',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years'
  },
  {
    objectID: 'career-product-manager',
    title: 'Product Manager',
    description: 'Looking for a passionate Product Manager to drive the development of our AI-powered solutions.',
    category: 'career',
    slug: 'product-manager',
    tags: ['product', 'management', 'AI', 'strategy', 'B2B'],
    url: '/careers/product-manager',
    image: '/images/careers/product-manager.jpg',
    content: 'As Product Manager at Mylesoft Technologies, you will work at the intersection of technology, business, and user experience to deliver innovative products.',
    department: 'Product',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years'
  }
]

export async function POST() {
  try {
    // Check if Algolia is configured
    if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Algolia not configured. Please set ALGOLIA_APP_ID and ALGOLIA_ADMIN_KEY environment variables.' },
        { status: 503 }
      )
    }

    // Initialize index
    const index = getIndex()

    // Clear existing records
    await index.clearObjects()

    // Add all content to Algolia
    const { objectIDs } = await index.saveObjects(mockContent)

    // Configure index settings
    await index.setSettings({
      searchableAttributes: ['title', 'description', 'content', 'tags'],
      attributesForFaceting: ['category', 'tags', 'department', 'location'],
      ranking: [
        'typo',
        'geo',
        'words',
        'filters',
        'attribute',
        'exact',
        'custom'
      ],
      customRanking: [
        'desc(publishedAt)',
        'desc(category)'
      ],
      attributesToHighlight: ['title', 'description'],
      attributesToSnippet: ['content:50'],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>',
      hitsPerPage: 20
    })

    return NextResponse.json({
      success: true,
      message: 'Search index updated successfully',
      indexed: objectIDs.length,
      categories: ['product', 'blog', 'career']
    })

  } catch (error) {
    console.error('Search indexing error:', error)
    return NextResponse.json(
      { error: 'Failed to update search index' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Check if Algolia is configured
    if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Algolia not configured' },
        { status: 503 }
      )
    }

    const index = getIndex()
    const stats = await index.getSettings()

    return NextResponse.json({
      success: true,
      indexName: 'mylesoft_content',
      settings: {
        searchableAttributes: stats.searchableAttributes,
        attributesForFaceting: stats.attributesForFaceting,
        hitsPerPage: stats.hitsPerPage
      }
    })

  } catch (error) {
    console.error('Search stats error:', error)
    return NextResponse.json(
      { error: 'Failed to get search stats' },
      { status: 500 }
    )
  }
}
