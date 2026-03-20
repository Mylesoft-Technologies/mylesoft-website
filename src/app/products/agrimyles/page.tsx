import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { AGRIMYLES_DATA } from '@/lib/constants/products'

export const metadata = {
  title: 'AgriMyles — Agricultural Technology Platform Kenya',
  description: 'Smart agritech platform connecting farmers, cooperatives, and agribusinesses with AI crop advisory, market prices, and supply chain tools across all 47 counties in Kenya.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/products/agrimyles',
  },
}

export default function AgriMylesPage() {
  return <ProductPageLayout {...AGRIMYLES_DATA} />
}
