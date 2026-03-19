import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'

const allProducts = [
  // Education Sector
  {
    name: 'EduMyles',
    description: 'Complete school management system transforming education across East Africa.',
    icon: <Icon name="graduation-cap" className="text-gold-400" />,
    features: [
      'Student Information Management',
      'Automated Grading & Reports',
      'Parent Communication Portal',
      'Attendance Tracking',
      'Exam Management',
      'Library Management'
    ],
    status: 'live' as const,
    href: '/products/edumyles',
    sector: 'Education'
  },
  
  // Healthcare Sector
  {
    name: 'MylesCare',
    description: 'AI-powered hospital management system for rn healthcare delivery.',
    icon: <Icon name="stethoscope" className="text-gold-400" />,
    features: [
      'Patient Records Management',
      'Appointment Scheduling',
      'AI Diagnostic Support',
      'Medical Billing',
      'Inventory Management',
      'Telemedicine Integration'
    ],
    status: 'live' as const,
    href: '/products/mylescare',
    sector: 'Healthcare'
  },
  
  // Agriculture Sector
  {
    name: 'AgriMyles',
    description: 'Smart farming solution for agricultural productivity and sustainability.',
    icon: <Icon name="sprout" className="text-gold-400" />,
    features: [
      'Crop Health Monitoring',
      'Weather Integration',
      'Market Price Analytics',
      'Irrigation Management',
      'Supply Chain Tracking',
      'Farm Management'
    ],
    status: 'live' as const,
    href: '/products/agrimyles',
    sector: 'Agriculture'
  },
  
  // Business Sector
  {
    name: 'MylesCRM',
    description: 'Customer relationship management built for African businesses.',
    icon: <Icon name="users" className="text-gold-400" />,
    features: [
      'Lead Management',
      'Sales Pipeline Tracking',
      'Customer Analytics',
      'Email Marketing',
      'Customer Support',
      'Reporting Dashboard'
    ],
    status: 'live' as const,
    href: '/products/mylescrm',
    sector: 'Business'
  },
  
  // AI Platform
  {
    name: 'Myles AI',
    description: 'Africa\'s intelligence engine with local language support.',
    icon: <Icon name="brain" className="text-gold-400" />,
    features: [
      'Multi-language AI ls',
      'Industry-specific Solutions',
      'Real-time Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ],
    status: 'live' as const,
    href: '/products/myles-ai',
    sector: 'AI Platform'
  },
  
  // Financial Services
  {
    name: 'MylesPay',
    description: 'Digital payment solution for seamless transactions.',
    icon: <Icon name="credit-card" className="text-gold-400" />,
    features: [
      'Mobile Money Integration',
      'Multi-currency Support',
      'Instant Settlements',
      'Payment Analytics',
      'Invoice Management',
      'Recurring Payments'
    ],
    status: 'development' as const,
    href: '/products/mylespay',
    sector: 'Financial Services'
  },
  
  // Logistics Sector
  {
    name: 'MylesLogistics',
    description: 'Supply chain and fleet management solution.',
    icon: <Icon name="truck" className="text-gold-400" />,
    features: [
      'Fleet Tracking',
      'Route Optimization',
      'Delivery Management',
      'Warehouse Management',
      'Inventory Tracking',
      'Driver Management'
    ],
    status: 'live' as const,
    href: '/products/myleslogistics',
    sector: 'Logistics'
  },
  
  // Real Estate
  {
    name: 'MylesProperty',
    description: 'Property management system for real estate professionals.',
    icon: <Icon name="building" className="text-gold-400" />,
    features: [
      'Property Listings',
      'Tenant Management',
      'Rent Collection',
      'Maintenance Tracking',
      'Financial Reporting',
      'Document Management'
    ],
    status: 'development' as const,
    href: '/products/mylesproperty',
    sector: 'Real Estate'
  },
  
  // Retail Sector
  {
    name: 'MylesRetail',
    description: 'Point of sale and inventory management for retail businesses.',
    icon: <Icon name="briefcase" className="text-gold-400" />,
    features: [
      'POS System',
      'Inventory Management',
      'Customer Loyalty',
      'Sales Analytics',
      'Multi-store Support',
      'E-commerce Integration'
    ],
    status: 'live' as const,
    href: '/products/mylesretail',
    sector: 'Retail'
  },
  
  // Government Sector
  {
    name: 'MylesGov',
    description: 'Digital governance solution for public sector efficiency.',
    icon: <Icon name="shield" className="text-gold-400" />,
    features: [
      'Citizen Services',
      'Document Management',
      'Workflow Automation',
      'Public Records',
      'Service Requests',
      'Compliance Tracking'
    ],
    status: 'development' as const,
    href: '/products/mylesgov',
    sector: 'Government'
  },
  
  // Manufacturing
  {
    name: 'MylesManufacturing',
    description: 'Production and quality management for manufacturers.',
    icon: <Icon name="zap" className="text-gold-400" />,
    features: [
      'Production Planning',
      'Quality Control',
      'Equipment Maintenance',
      'Supply Chain Management',
      'Cost Analysis',
      'Compliance Tracking'
    ],
    status: 'development' as const,
    href: '/products/mylesmanufacturing',
    sector: 'Manufacturing'
  },
  
  // Hospitality
  {
    name: 'MylesHospitality',
    description: 'Hotel and restaurant management system.',
    icon: <Icon name="heart" className="text-gold-400" />,
    features: [
      'Reservation Management',
      'Room Service',
      'Restaurant POS',
      'Guest Services',
      'Staff Management',
      'Revenue Analytics'
    ],
    status: 'development' as const,
    href: '/products/myleshospitality',
    sector: 'Hospitality'
  },
  
  // Legal Sector
  {
    name: 'MylesLegal',
    description: 'Practice management solution for law firms.',
    icon: <Icon name="file-text" className="text-gold-400" />,
    features: [
      'Case Management',
      'Document Management',
      'Time Tracking',
      'Billing System',
      'Client Portal',
      'Legal Research'
    ],
    status: 'development' as const,
    href: '/products/myleslegal',
    sector: 'Legal'
  },
  
  // Energy Sector
  {
    name: 'MylesEnergy',
    description: 'Energy management and monitoring solution.',
    icon: <Icon name="zap" className="text-gold-400" />,
    features: [
      'Energy Monitoring',
      'Consumption Analytics',
      'Predictive Maintenance',
      'Cost Optimization',
      'Sustainability Tracking',
      'Reporting Dashboard'
    ],
    status: 'development' as const,
    href: '/products/mylesenergy',
    sector: 'Energy'
  },
  
  // Non-Profit Sector
  {
    name: 'MylesNonProfit',
    description: 'Donor and volunteer management for NGOs.',
    icon: <Icon name="heart" className="text-gold-400" />,
    features: [
      'Donor Management',
      'Volunteer Coordination',
      'Grant Tracking',
      'Impact Reporting',
      'Fundraising Campaigns',
      'Compliance Management'
    ],
    status: 'development' as const,
    href: '/products/mylesnonprofit',
    sector: 'Non-Profit'
  },
  
  // Construction Sector
  {
    name: 'MylesConstruction',
    description: 'Project management for construction companies.',
    icon: <Icon name="building" className="text-gold-400" />,
    features: [
      'Project Planning',
      'Resource Management',
      'Budget Tracking',
      'Progress Monitoring',
      'Safety Compliance',
      'Quality Control'
    ],
    status: 'development' as const,
    href: '/products/mylesconstruction',
    sector: 'Construction'
  },
  
  // Media Sector
  {
    name: 'MylesMedia',
    description: 'Content management and publishing platform.',
    icon: <Icon name="file-text" className="text-gold-400" />,
    features: [
      'Content Management',
      'Publishing Workflow',
      'Media Library',
      'Analytics Dashboard',
      'Subscription Management',
      'Multi-channel Distribution'
    ],
    status: 'development' as const,
    href: '/products/mylesmedia',
    sector: 'Media'
  },
  
  // Transportation Sector
  {
    name: 'MylesTransit',
    description: 'Public transportation management system.',
    icon: <Icon name="truck" className="text-gold-400" />,
    features: [
      'Route Management',
      'Fare Collection',
      'Vehicle Tracking',
      'Passenger Analytics',
      'Schedule Management',
      'Maintenance Planning'
    ],
    status: 'development' as const,
    href: '/products/mylestransit',
    sector: 'Transportation'
  }
]

const sectors = Array.from(new Set(allProducts.map(product => product.sector)))

export default function ProductsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6 fade-in">Our Products</h1>
              <p className="text-xl max-w-3xl mx-auto text-navy-100 leading-relaxed mb-8 slide-up">
                Discover our comprehensive suite of AI-powered solutions designed to transform 18 different sectors across East Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="fade-in">
                <div className="stat-number mb-2">18</div>
                <div className="stat-label">Sectors Served</div>
              </div>
              <div className="fade-in" style={{animationDelay: '100ms'}}>
                <div className="stat-number mb-2">20+</div>
                <div className="stat-label">Products</div>
              </div>
              <div className="fade-in" style={{animationDelay: '200ms'}}>
                <div className="stat-number mb-2">6</div>
                <div className="stat-label">Live Products</div>
              </div>
              <div className="fade-in" style={{animationDelay: '300ms'}}>
                <div className="stat-number mb-2">14</div>
                <div className="stat-label">In Development</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products by Sector */}
        {sectors.map((sector) => (
          <section key={sector} className="section">
            <div className="section-padding">
              <div className="mb-12">
                <h2 className="heading-2 mb-4">{sector} Sector</h2>
                <p className="body-text">
                  {sector === 'Education' && 'Transforming educational institutions with comprehensive management solutions.'}
                  {sector === 'Healthcare' && 'rnizing healthcare delivery with AI-powered systems and patient management.'}
                  {sector === 'Agriculture' && 'Empowering farmers with smart technology for increased productivity and sustainability.'}
                  {sector === 'Business' && 'Driving business growth with intelligent customer relationship and operational management.'}
                  {sector === 'AI Platform' && 'Africa\'s intelligence engine powering all our solutions with advanced AI capabilities.'}
                  {sector === 'Financial Services' && 'Revolutionizing financial transactions with secure digital payment solutions.'}
                  {sector === 'Logistics' && 'Optimizing supply chains and fleet operations with intelligent tracking systems.'}
                  {sector === 'Real Estate' && 'Streamlining property management and real estate operations.'}
                  {sector === 'Retail' && 'Enhancing retail operations with integrated POS and inventory management.'}
                  {sector === 'Government' && 'Digitalizing public sector services for improved citizen engagement.'}
                  {sector === 'Manufacturing' && 'Optimizing production processes with smart manufacturing solutions.'}
                  {sector === 'Hospitality' && 'Elevating guest experiences with comprehensive hospitality management.'}
                  {sector === 'Legal' && 'Streamlining legal practice management with intelligent automation.'}
                  {sector === 'Energy' && 'Optimizing energy consumption and management with smart monitoring.'}
                  {sector === 'Non-Profit' && 'Empowering NGOs with tools for donor and volunteer management.'}
                  {sector === 'Construction' && 'Managing construction projects with intelligent project tracking.'}
                  {sector === 'Media' && 'Streamlining content creation and distribution for media organizations.'}
                  {sector === 'Transportation' && 'rnizing public transit with intelligent management systems.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts
                  .filter(product => product.sector === sector)
                  .map((product) => (
                    <ProductCard key={product.name} {...product} />
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Find Your Solution</h2>
              <p className="text-xl text-navy-100 mb-8">
                Not sure which product is right for you? Let our experts help you find the perfect solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Book a Consultation</Button>
                <Button variant="secondary">Download Brochure</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
