import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', loading = false, className, children, disabled, ...props }: ButtonProps) {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 ease-out active:scale-95 relative overflow-hidden'
  
  // Exact specifications from design system with enhanced professional styling
  const variantClasses = {
    primary: 'bg-gold-400 text-white hover:bg-gold-500 hover:shadow-gold hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:hover:translate-y-0', // Gold #C79639 bg · white text · hover darkens to #A67C2A · shadow on hover
    secondary: 'bg-transparent text-navy-500 border-2 border-navy-500 hover:bg-navy-500 hover:text-white hover:shadow-navy hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:hover:translate-y-0', // Transparent · navy border · navy text · hover fills navy with white text
    outline: 'bg-transparent text-gold-400 border-2 border-gold-400 hover:bg-gold-50 hover:text-gold-500 hover:shadow-gold hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:hover:translate-y-0' // Gold outline variant
  }
  
  // Exact padding specifications: px-8 py-3 = 12px 32px
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base', // Exact specification: px-8 py-3
    lg: 'px-10 py-4 text-lg'
  }

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Button content with loading state */}
      <span className={clsx('flex items-center justify-center', loading && 'opacity-0')}>
        {children}
      </span>
    </button>
  )
}
