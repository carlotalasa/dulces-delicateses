import { Layout } from '@/components/layout'

export async function generateMetadata() {
  return {
    title: 'Dulces Delicateses | Nosotros',
    description: 'Encuentra los mejores productos'
  }
}

export default function NosotrosPage() {
  return (
    <main className='bg-gray-100 h-screen overflow-y-scroll'>
      <Layout>
        <section className='h-full'>
          <h2 className='text-gray-500 text-sm tracking-wide'>
            Dulces Delicateses |{' '}
            <span className='text-primary-dark'>Nosotros</span>
          </h2>

          <div className='mt-12 flex items-center justify-between gap-x-10 h-full'>
            <div className='flex flex-col items-center justify-center space-y-3 border border-primary-dark py-4 px-8 rounded-lg'>
              <div className='shadow-md w-[20rem] rounded-full overflow-hidden'>
                <img src='/carlota-profile.jpeg' alt='Carlota Image' />
              </div>
              <label className='font-medium text-primary-dark text-2xl'>
                Carlota Lasa
              </label>
              <span className='text-base text-secondary-dark font-medium'>
                Chef Internacional
              </span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src='/logo.png' className='w-[15rem]' alt='Carlota Image' />
              <div className='p-4 w-full bg-gray-200 rounded-lg'>
                <p className='text-justify font-light text-primary-dark text-base'>
                  Bienvenidos a Dulces Delicateses! Nuestro viaje comenzó en
                  mayo de 2021 con la pasión por endulzar momentos especiales.
                  En Dulces Delicateses, nos dedicamos a crear experiencias
                  dulces que deleitan los sentidos y alimentan el alma. Te
                  acompañamos en tus eventos especiales con nuestros postres de
                  mesa hechos con amor y creatividad, cada uno de nuestros
                  productos es una obra maestra de sabor y elegancia. Con el
                  compromiso de ofrecer siempre lo mejor en repostería, nuestras
                  tortas en buttercream y en fondant son el centro de atención
                  en cualquier celebración. Únete a nosotros en este viaje de
                  delicias donde cada bocado es una celebración de la dulzura y
                  la creatividad. ¡Descubre el arte de endulzar la vida con
                  Dulces Delicateses!
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  )
}
