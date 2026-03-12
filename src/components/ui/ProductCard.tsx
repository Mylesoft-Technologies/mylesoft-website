'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Star, Zap, Shield, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/Skeleton'

interface ProductCardProps {
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  status: 'live' | 'beta' | 'coming-soon' | 'development'
  href: string
  className?: string
  loading?: boolean
}

export function ProductCard({ 
  name, 
  description, 
  icon, 
  features, 
  status, 
  href, 
  className = '',
  loading = false 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (loading) {
    return <ProductCardSkeleton className={className} />
  }

  const statusColors = {
    live: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white',
    beta: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white',
    'coming-soon': 'bg-gradient-to-r from-gray-500 to-gray-600 text-white',
    development: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
  }

  const statusIcons = {
    live: <Star className="w-3 h-3" />,
    beta: <Zap className="w-3 h-3" />,
    'coming-soon': <Shield className="w-3 h-3" />,
    development: <Wrench className="w-3 h-3" />
  }

  return (
    <motion.div
      className={`glass-morphism p-6 rounded-2xl hover-lift-premium group cursor-pointer relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center text-gold-600 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-2xl">{icon}</div>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-navy-500 group-hover:text-gold-500 transition-all duration-300 mb-1">
              {name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        <motion.div 
          className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {statusIcons[status]}
          <span className="uppercase tracking-wider">{status}</span>
        </motion.div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <motion.div 
            key={index} 
            className="flex items-center space-x-3 group/item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-gray-600 text-sm group-hover/item:text-navy-500 transition-colors duration-200">
              {feature}
            </span>
          </motion.div>
        ))}
        {features.length > 3 && (
          <div className="text-sm text-gray-500 italic">
            +{features.length - 3} more features
          </div>
        )}
      </div>

      {/* Action Button */}
      <motion.div 
        className="flex items-center justify-between pt-4 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-gold-500 text-sm font-medium group-hover:text-gold-600 transition-colors duration-200">
            Learn more
          </span>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ArrowRight className="w-4 h-4 text-gold-500" />
          </motion.div>
        </div>
        
        <Button 
          size="sm" 
          className="shadow-premium-gold hover:shadow-premium-glow"
        >
          View Details
        </Button>
      </motion.div>

      {/* Hover Effect Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// Product Card Skeleton Component
function ProductCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-morphism p-6 rounded-2xl ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl animate-shimmer" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" height={24} width="60%" />
              <Skeleton variant="text" height={16} width="80%" />
            </div>
          </div>
          <Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
              <Skeleton variant="text" height={14} width="90%" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Skeleton variant="rectangular" width={80} height={20} />
          <Skeleton variant="rectangular" width={100} height={32} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}
