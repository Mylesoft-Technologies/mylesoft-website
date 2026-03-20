import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { MYLESCARE_DATA } from '@/lib/constants/products'

export const metadata = {
  title: MYLESCARE_DATA.metadata.title,
  description: MYLESCARE_DATA.metadata.description,
}

export default function MylesCarePage() {
  return <ProductPageLayout {...MYLESCARE_DATA} />
}
