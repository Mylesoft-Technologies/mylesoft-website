import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { EDUMYLES_DATA } from '@/lib/constants/products'

export const metadata = {
  title: EDUMYLES_DATA.metadata.title,
  description: EDUMYLES_DATA.metadata.description,
}

export default function EduMylesPage() {
  return <ProductPageLayout {...EDUMYLES_DATA} />
}
