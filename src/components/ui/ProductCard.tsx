'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { ArrowRight, Check, Star } from 'lucide-react'

interface ProductCardProps {
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  status: 'live' | 'beta' | 'coming-soon'
  href: string
  className?: string
}

export function ProductCard({
  name,
  description,
  icon,
  features,
  status,
  href,
  className
}: ProductCardProps) {
  const statusConfig = {
    live: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      label: 'Live',
      icon: <Check className="w-3 h-3" />
    },
    beta: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      label: 'Beta',
      icon: <Star className="w-3 h-3" />
    },
    'coming-soon': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      label: 'Coming Soon',
      icon: <ArrowRight className="w-3 h-3" />
    }
  }

  const config = statusConfig[status]

  return (
    <div className={`group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-gold-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className || ''}`}>
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
        {config.icon}
        <span className="ml-1">{config.label}</span>
      </div>

      {/* Product Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
        <div className="text-gold-600 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-2xl font-bold text-navy-500 mb-3 group-hover:text-gold-500 transition-colors duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
        {features.length > 3 && (
          <div className="text-sm text-gray-500 italic">
            +{features.length - 3} more features
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-white transition-all duration-300"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}
