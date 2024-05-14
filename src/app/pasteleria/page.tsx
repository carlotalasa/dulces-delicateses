import { Layout } from '@/components/layout'
import { TmCakeShop } from '@/templates/tmCakeShop'

export async function generateMetadata() {
  return {
    title: 'Dulces Delicateses | Pasteleria',
    description: 'Encuentra los mejores productos'
  }
}

export default function PasteleriaPage() {
  return (
    <main className='bg-gray-100 h-screen overflow-y-scroll'>
      <Layout className='!h-auto'>
        <TmCakeShop />
      </Layout>
    </main>
  )
}
