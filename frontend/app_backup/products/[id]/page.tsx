import { ProductDetail } from '@/pages/ProductDetail'
import { Layout } from '@/components/Layout'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  )
}
