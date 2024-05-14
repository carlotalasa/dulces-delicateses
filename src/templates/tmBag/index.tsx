'use client'
import DeliveryCheckbox from '@/components/checkbox'
import { Checkout } from '@/components/checkout'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import { setCheckout, setTotalPayment } from '@/redux/features/productSlice'
import { FaceSmileIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'

export const TmBag = () => {
  const dispatch = useAppDispatch()
  const { products, checkout, totalPayment } = useAppSelector(
    (state) => state.productReducer
  )

  useEffect(() => {
    let total = 0
    products?.map((pdt) => {
      total += pdt.price
    })
    dispatch(setTotalPayment(total))
  }, [products])

  return (
    <section className='h-full w-full'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses |{' '}
        <span className='text-primary-dark'>Tus Productos</span>
      </h1>

      <div
        className={`mt-6 w-full flex flex-col items-center ${
          products?.length > 0
            ? 'justify-center h-auto'
            : 'justify-start h-full'
        } gap-y-8`}
      >
        {!checkout && (
          <div className='flex w-full items-start'>
            <h3 className='text-primary-dark text-xl tracking-wide mb-6'>
              Productos Seleccionados
            </h3>
          </div>
        )}

        {checkout && (
          <div className='flex w-full items-start'>
            <button
              className='text-gray-500 text-md tracking-wide flex items-center justify-center'
              onClick={() => {
                dispatch(setCheckout(false))
              }}
            >
              <ArrowLeftIcon className='w-6 text-gray-500 mr-2' />
              Volver a la Bolsa
            </button>
          </div>
        )}

        {products?.length > 0 ? (
          <>
            {checkout ? (
              <Checkout />
            ) : (
              <>
                {products?.map((_, index) => (
                  <div
                    className='w-3/6 border-secondary-dark border-2 rounded-2xl h-[18rem] p-4 flex items-center justify-between'
                    key={index}
                  >
                    <div className='rounded-md overflow-hidden'>
                      <img
                        src='/torta.jpeg'
                        alt='torta-image'
                        className='h-[16rem] w-[16rem] object-cover'
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center w-4/6 pl-4 gap-y-3 relative h-full'>
                      <button className='absolute right-0 top-0 bg-primary-dark px-4 py-2 rounded-2xl text-white'>
                        Eliminar
                      </button>
                      <span className='text-secondary-dark text-2xl font-medium'>
                        Torta de Oreo con Chocolate
                      </span>
                      <span className='text-secondary-dark font-medium'>
                        Precio: 20$
                      </span>
                      <span className='text-secondary-dark font-medium'>
                        Cantidad: 1
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div
              className={`w-4/6 flex items-center justify-between ${
                checkout ? 'mb-8' : 'mt-6'
              }`}
            >
              <DeliveryCheckbox />
              <span className='text-primary-dark font-medium text-xl'>
                TOTAL: {totalPayment}$
              </span>
            </div>
            {!checkout && (
              <>
                <div className='w-full h-[2px] rounded-xl bg-gray-200' />
                <button
                  className='bg-secondary-dark text-white rounded-2xl p-4'
                  onClick={() => {
                    dispatch(setCheckout(true))
                  }}
                >
                  Confirmar Pedido
                </button>
              </>
            )}
          </>
        ) : (
          <div className='flex items-center gap-x-3 w-3/6 justify-center text-center mt-10'>
            <p className='text-secondary-dark text-3xl'>
              Aun no tienes productos seleccionados, ve al Catalogo!
            </p>
            <FaceSmileIcon className='w-40 text-primary-dark' />
          </div>
        )}
      </div>
    </section>
  )
}
