import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { MYLESCRM_DATA } from '@/lib/constants/products'

export const metadata = {
  title: 'MylesCRM — Business CRM & Solutions Kenya',
  description: 'Complete CRM and business management platform with M-Pesa invoicing, sales pipeline management, SMS marketing, and AI business insights for East African businesses.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/mylescrm',
  },
}

export default function MylesCRMPage() {
  return <ProductPageLayout {...MYLESCRM_DATA} />
}
