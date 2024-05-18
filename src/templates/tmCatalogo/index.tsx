'use client'
import { CardsComponent, CardsComponentProps } from '@/components/cards'
import { ListBox } from '@/components/listbox'
import { useGetProductsQuery } from '@/redux/service/productsApi'
import { Toaster } from 'react-hot-toast'

const optionsCatalog = [
  { name: 'Todos Los productos' },
  { name: 'Tortas' },
  { name: 'Galletas' },
  { name: 'Brazo gitano' },
  { name: 'Alfajores' }
]

export const TmCatalogo = () => {
  const { data, error, isLoading, isFetching } = useGetProductsQuery(null)

  return (
    <section className='h-full px-8'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses | <span className='text-primary-dark'>Catálogo</span>
      </h1>
      <div className='mt-6 flex items-center justify-between gap-y-3 flex-col sm:flex-row'>
        <h3 className='text-primary-dark text-xl tracking-wide'>Productos</h3>
        <ListBox options={optionsCatalog} />
      </div>

      {/* cards grid */}
      <div className='flex items-center justify-center w-full h-full'>
        {isLoading ? (
          <div className='h-screen flex items-center justify-center'>
            <label className='text-primary-dark mt-1 font-medium text-3xl'>
              CARGANDO...
            </label>
          </div>
        ) : (
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-12 h-full'>
            {data?.map((product: CardsComponentProps, index: number) => (
              <CardsComponent key={index} {...product} />
            ))}
          </div>
        )}
      </div>
      <Toaster toastOptions={{ duration: 4000 }} />
    </section>
  )
}
