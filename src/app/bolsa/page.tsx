import { Layout } from '@/components/layout'
import { TmBag } from '@/templates/tmBag'

export async function generateMetadata() {
  return {
    title: 'Dulces Delicateses | Bolsa de Productos',
    description: 'Encuentra los mejores productos'
  }
}

export default function BolsaPage() {
  return (
    <main className='bg-gray-100 h-screen overflow-y-scroll'>
      <Layout className='!h-auto min-h-screen'>
        <TmBag />
      </Layout>
    </main>
  )
}
