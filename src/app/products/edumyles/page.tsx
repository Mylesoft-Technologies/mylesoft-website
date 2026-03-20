import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { EDUMYLES_DATA } from '@/lib/constants/products'

export const metadata = {
  title: 'EduMyles — School Management System Kenya',
  description: 'Complete AI-powered school management system for Kenyan schools. CBC & 8-4-4 support, M-Pesa fee collection, parent portal, exam management. Used by 500+ schools.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/edumyles',
  },
}

export default function EduMylesPage() {
  return <ProductPageLayout {...EDUMYLES_DATA} />
}
