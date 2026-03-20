import { ProductPageLayout } from '@/components/layout/ProductPageLayout'
import { MYLESCRM_DATA } from '@/lib/constants/products'

export const metadata = {
  title: MYLESCRM_DATA.metadata.title,
  description: MYLESCRM_DATA.metadata.description,
}

export default function MylesCRMPage() {
  return <ProductPageLayout {...MYLESCRM_DATA} />
}
