import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { EDURYDE_DATA } from '@/lib/constants/products'

export const metadata = {
  title: 'EduRyde — School Transport Management System',
  description: 'Real-time GPS school bus tracking, instant parent notifications, and route optimisation. Keep every student safe from door to door across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/eduryde',
  },
}

export default function EduRydePage() {
  return <ProductPageLayout {...EDURYDE_DATA} />
}
