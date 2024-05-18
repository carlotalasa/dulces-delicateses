'use client'
import { useAlert } from '@/hooks/useAlert'
import { SvgComponent } from '../svg/bag-plus-icon'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import { setProducts, setTotalPayment } from '@/redux/features/productSlice'
import { CakeIcon } from '@heroicons/react/20/solid'
export interface CardsComponentProps {
  id: number
  name: string
  description: string
  price: string
  stock: number
  image_preview: string
  category_id: number
}

export const CardsComponent = ({
  id,
  name,
  description,
  price,
  stock,
  image_preview
}: CardsComponentProps) => {
  const showAlert = useAlert()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.productReducer.products)

  return (
    <div className='shadow-md w-[18rem] rounded-xl border border-secondary-dark h-auto p-4'>
      <div className='rounded-md overflow-hidden'>
        {image_preview ? (
          <img
            src={image_preview}
            alt={`torta-image-${name}`}
            className='h-[16rem] w-[16rem] object-cover'
          />
        ) : (
          <CakeIcon className='text-gray-400' />
        )}
      </div>
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center justify-between w-full'>
          <div className='bg-secondary-dark w-auto rounded-xl px-2 py-1 mt-4'>
            <span className='text-white text-sm font-medium'>
              {stock > 0 ? 'Disponible' : 'Sin Stock'}
            </span>
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
                    id,
                    name,
                    description,
                    price,
                    stock,
                    image: image_preview
                  }
                ])
              )
              dispatch(setTotalPayment(price))
            }}
          >
            <SvgComponent />
          </button>
        </div>
        <label className='text-primary-dark mt-1 font-medium'>{name}</label>
        <p className='text-gray-600 mt-1 text-xs'>{description}</p>
        <span className='text-primary-dark font-medium'>{price}</span>
      </div>
    </div>
  )
}
