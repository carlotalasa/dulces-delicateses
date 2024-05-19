'use client'
import { CardsComponent, CardsComponentProps } from '@/components/cards'
import { ListBox } from '@/components/listbox'
import { useGetProductsQuery } from '@/redux/service/productsApi'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

const optionsCatalog = [
  { name: 'Todos Los productos', id: 0 },
  { name: 'Tortas', id: 3 },
  { name: 'Brazo gitano', id: 4 },
  { name: 'Alfajores', id: 2 },
  { name: 'Cheescake', id: 5 }
]

export const TmCatalogo = () => {
  const { data, error, isLoading, isFetching } = useGetProductsQuery(null)
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    setProductsData(data)
  }, [data])

  return (
    <section className='h-full px-8'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses | <span className='text-primary-dark'>Catálogo</span>
      </h1>
      <div className='mt-6 flex items-center justify-between gap-y-3 flex-col sm:flex-row'>
        <h3 className='text-primary-dark text-xl tracking-wide'>Productos</h3>
        <ListBox
          options={optionsCatalog}
          onHandleChange={(e) => {
            if (e.id === 0) {
              setProductsData(data)
            } else {
              setProductsData(() =>
                data.filter(
                  (dt: CardsComponentProps) => dt.category_id === e.id
                )
              )
            }
          }}
        />
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
            {productsData?.map(
              (product: CardsComponentProps, index: number) => (
                <CardsComponent key={index} {...product} />
              )
            )}
          </div>
        )}
      </div>
      <Toaster toastOptions={{ duration: 4000 }} />
    </section>
  )
}
