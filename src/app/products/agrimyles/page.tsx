import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { AGRIMYLES_DATA } from '@/lib/constants/products'

export const metadata = {
  title: AGRIMYLES_DATA.metadata.title,
  description: AGRIMYLES_DATA.metadata.description,
}

export default function AgriMylesPage() {
  return <ProductPageLayout {...AGRIMYLES_DATA} />
}
