import React from 'react'
import clsx from 'clsx'
import { Icon } from '@/components/ui/Icon'

interface ProductCardProps {
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  status: 'live' | 'development'
  href: string
}

export function ProductCard({ name, description, icon, features, status, href }: ProductCardProps) {
  return (
    <div className={clsx(
      'product-card',
      status === 'live' ? 'product-card-live' : 'product-card-development'
    )}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="heading-3 mb-1">{name}</h3>
          <span className={clsx(
            'badge',
            status === 'live' ? 'badge-success' : 'badge-warning'
          )}>
            {status === 'live' ? 'Live' : 'In Development'}
          </span>
        </div>
      </div>
      
      <p className="body-text mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-navy-500 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-1.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center text-gold-600 font-medium hover:text-gold-500 transition-colors">
        Learn More
        <Icon name="arrow-right" className="ml-2" size={16} />
      </div>
    </div>
  )
}
