import { Orders } from '@/pages/Orders'
import { Layout } from '@/components/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function OrdersPage() {
  return (
    <Layout>
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    </Layout>
  )
}
