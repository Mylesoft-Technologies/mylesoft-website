import React from 'react'
import { 
  GraduationCap, 
  Stethoscope, 
  Sprout, 
  Briefcase, 
  CreditCard, 
  Truck,
  Building,
  Heart,
  Brain,
  Users,
  FileText,
  Shield,
  Zap
} from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  className?: string
}

const iconMap = {
  'graduation-cap': GraduationCap,
  'stethoscope': Stethoscope,
  'sprout': Sprout,
  'briefcase': Briefcase,
  'credit-card': CreditCard,
  'truck': Truck,
  'building': Building,
  'heart': Heart,
  'brain': Brain,
  'users': Users,
  'file-text': FileText,
  'shield': Shield,
  'zap': Zap,
}

export function Icon({ name, size = 48, className = '' }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent size={size} className={className} />
}
