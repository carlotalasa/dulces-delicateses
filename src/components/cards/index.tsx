'use client'
import { useAlert } from '@/hooks/useAlert'
import { SvgComponent } from '../svg/bag-plus-icon'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import { setProducts } from '@/redux/features/productSlice'

export const CardsComponent = () => {
  const showAlert = useAlert()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.productReducer.products)

  return (
    <div className='shadow-md w-[18rem] rounded-xl border border-secondary-dark h-auto p-4'>
      <div className='rounded-md overflow-hidden'>
        <img
          src='/torta.jpeg'
          alt='torta-image'
          className='h-[16rem] w-[16rem] object-cover'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center justify-between w-full'>
          <div className='bg-secondary-dark w-[4.2rem] rounded-xl px-2 py-1 mt-4'>
            <span className='text-white text-sm font-medium'>¡Nuevo!</span>
          </div>
          <button
            className='p-2 mt-1 rounded-full'
            onClick={() => {
              showAlert({
                message: '¡Nuevo Producto en bolsa!',
                variant: 'success'
              })
              dispatch(
                setProducts([
                  ...products,
                  {
                    name: 'Torta de Chocolate',
                    id: '12',
                    price: 20
                  }
                ])
              )
            }}
          >
            <SvgComponent />
          </button>
        </div>
        <label className='text-primary-dark mt-1 font-medium'>
          Torta de Oreo con Chocolate
        </label>
        <span className='text-primary-dark font-medium'>20$</span>
      </div>
    </div>
  )
}
