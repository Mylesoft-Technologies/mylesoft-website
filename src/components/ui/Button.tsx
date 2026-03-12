'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold-400 to-gold-500 text-white hover:from-gold-500 hover:to-gold-600 focus:ring-gold-400 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-navy-500 text-white hover:bg-navy-600 focus:ring-navy-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white focus:ring-navy-500',
    ghost: 'text-navy-500 hover:bg-navy-50 focus:ring-navy-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    link: 'text-gold-500 hover:text-gold-600 underline-offset-4 hover:underline focus:ring-gold-400 p-0'
  }
  
  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Loader2 className={`w-5 h-5 animate-spin ${iconSizes[size]}`} />
          {children && <span className="ml-2">{children}</span>}
        </>
      )
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          <span className={iconSizes[size]}>{icon}</span>
          {children && <span className="ml-2">{children}</span>}
        </>
      )
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children && <span className="mr-2">{children}</span>}
          <span className={iconSizes[size]}>{icon}</span>
        </>
      )
    }

    return children
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  )
}
