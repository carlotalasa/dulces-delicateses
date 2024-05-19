import { Layout } from '@/components/layout'
import { TmCatalogo } from '@/templates/tmCatalogo'

export async function generateMetadata() {
  return {
    title: 'Dulces Delicateses | Catálogo',
    description: 'Encuentra los mejores productos'
  }
}

export default function Home() {
  return (
    <main className='bg-gray-100 h-screen overflow-y-scroll'>
      <Layout className='!h-auto md:min-h-screen'>
        <TmCatalogo />
      </Layout>
    </main>
  )
}
