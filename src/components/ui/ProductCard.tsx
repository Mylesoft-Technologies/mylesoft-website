import React from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

interface ProductCardProps {
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  status: 'live' | 'development' | 'coming'
  href: string
}

export function ProductCard({ name, description, icon, features, status, href }: ProductCardProps) {
  const statusConfig = {
    live: { text: 'Live', className: 'product-status-live' },
    development: { text: 'In Development', className: 'product-status-development' },
    coming: { text: 'Coming Soon', className: 'product-status-coming' }
  }

  const currentStatus = statusConfig[status]

  return (
    <Link href={href} className="product-card group">
      <div className="product-icon">{icon}</div>
      <h3 className="product-title">{name}</h3>
      <p className="product-description">{description}</p>
      
      <div className="product-features">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="product-feature">
            <Check size={16} className="text-gold-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className={`product-status ${currentStatus.className}`}>
        {currentStatus.text}
      </div>
      
      <div className="flex items-center text-gold-400 font-medium group-hover:text-gold-500 transition-colors">
        Learn More
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
