import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseClasses = 'font-semibold rounded-full transition-all duration-200 active:scale-95'
  
  const variantClasses = {
    primary: 'bg-gold-400 text-white hover:bg-gold-500 hover:shadow-medium',
    secondary: 'bg-transparent text-navy-500 border-2 border-navy-500 hover:bg-navy-500 hover:text-white',
    outline: 'bg-transparent text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
