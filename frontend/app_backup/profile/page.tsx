import { Profile } from '@/pages/Profile'
import { Layout } from '@/components/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function ProfilePage() {
  return (
    <Layout>
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    </Layout>
  )
}
