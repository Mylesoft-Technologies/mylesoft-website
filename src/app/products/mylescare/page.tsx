import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { MYLESCARE_DATA } from '@/lib/constants/products'

export const metadata = {
  title: 'MylesCare — Healthcare Management System Kenya',
  description: 'AI-powered hospital and clinic management system with M-Pesa billing, SHA insurance integration, electronic patient records, and pharmacy management for East African health facilities.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylescare',
  },
}

export default function MylesCarePage() {
  return <ProductPageLayout {...MYLESCARE_DATA} />
}
