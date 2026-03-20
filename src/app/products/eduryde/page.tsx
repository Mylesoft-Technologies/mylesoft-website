import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { EDURYDE_DATA } from '@/lib/constants/products'

export const metadata = {
  title: EDURYDE_DATA.metadata.title,
  description: EDURYDE_DATA.metadata.description,
}

export default function EduRydePage() {
  return <ProductPageLayout {...EDURYDE_DATA} />
}
