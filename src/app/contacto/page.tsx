import { Layout } from '@/components/layout'

export async function generateMetadata() {
  return {
    title: 'Dulces Delicateses | Contacto',
    description: 'Encuentra los mejores productos'
  }
}

export default function ContactoPage() {
  return (
    <main className='bg-gray-100 h-screen overflow-y-scroll'>
      <Layout>
        <section className='h-full'>
          <h2 className='text-gray-500 text-sm tracking-wide'>
            Dulces Delicateses |{' '}
            <span className='text-primary-dark'>Contacto</span>
          </h2>
        </section>
      </Layout>
    </main>
  )
}
