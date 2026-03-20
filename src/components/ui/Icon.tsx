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
  Zap,
  Leaf,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Settings,
  CheckCircle,
  Calendar,
  TrendingUp,
  MapPin,
  Smartphone,
  Route,
  AlertTriangle,
  Clipboard,
  DollarSign,
  Pill,
  Microscope,
  Bed,
  BarChart,
  Headset,
  Mail,
  Package,
  CheckSquare,
  MessageCircle
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
  'leaf': Leaf,
  'linkedin': Linkedin,
  'twitter': Twitter,
  'github': Github,
  'youtube': Youtube,
  'settings': Settings,
  'check-circle': CheckCircle,
  'calendar': Calendar,
  'trending-up': TrendingUp,
  'map-pin': MapPin,
  'smartphone': Smartphone,
  'route': Route,
  'alert-triangle': AlertTriangle,
  'clipboard': Clipboard,
  'dollar-sign': DollarSign,
  'pill': Pill,
  'microscope': Microscope,
  'bed': Bed,
  'bar-chart': BarChart,
  'headset': Headset,
  'mail': Mail,
  'package': Package,
  'check-square': CheckSquare,
  'message-circle': MessageCircle,
}

export function Icon({ name, size = 48, className = '' }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent size={size} className={className} />
}
