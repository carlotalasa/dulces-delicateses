'use client'
import DeliveryCheckbox from '@/components/checkbox'
import { Checkout } from '@/components/checkout'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import {
  CardProductsProps,
  setCheckout,
  setLessTotalPayment,
  setProducts
} from '@/redux/features/productSlice'
import {
  FaceSmileIcon,
  ArrowLeftIcon,
  CakeIcon
} from '@heroicons/react/20/solid'

export const TmBag = () => {
  const dispatch = useAppDispatch()
  const { products, checkout, totalPayment, delivery } = useAppSelector(
    (state) => state.productReducer
  )

  return (
    <section className='h-full w-full px-8'>
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
                {products?.map((product: CardProductsProps, index: number) => (
                  <div
                    className='w-full xl:w-3/6 border-secondary-dark border-2 rounded-2xl h-auto md:h-[18rem] p-4 flex flex-col md:flex-row items-center justify-between'
                    key={index}
                  >
                    <div className='rounded-md overflow-hidden'>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt='torta-image'
                          className='h-[16rem] w-[16rem] object-cover'
                        />
                      ) : (
                        <CakeIcon className='text-gray-400 w-[14rem]' />
                      )}
                    </div>
                    <div className='flex flex-col-reverse md:flex-col items-start justify-center w-full md:w-4/6 pl-4 gap-y-3 relative h-3/6 md:h-full'>
                      <button
                        className='relative md:absolute right-0 top-0 bg-primary-dark px-4 py-2 rounded-2xl text-white'
                        onClick={() => {
                          dispatch(
                            setProducts(
                              products?.filter((pdt) => pdt.id !== product.id)
                            )
                          )
                          dispatch(setLessTotalPayment(product.price))
                        }}
                      >
                        Eliminar
                      </button>
                      <span className='text-secondary-dark text-2xl font-medium'>
                        {product.name}
                      </span>
                      {product.price && (
                        <span className='text-secondary-dark font-medium'>
                          {product.price}
                        </span>
                      )}
                      {product.description && (
                        <p className='text-gray-600 text-xs'>
                          {product.description}
                        </p>
                      )}

                      <span className='text-secondary-dark font-medium'>
                        Cantidad: 1
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div
              className={`w-full lg:w-4/6 flex items-center justify-between ${
                checkout ? 'mb-8' : 'mt-6'
              }`}
            >
              <DeliveryCheckbox delivery={delivery} />
              <span className='text-primary-dark font-medium text-xl text-center'>
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
