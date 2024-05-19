import { useAppDispatch } from '@/hooks/useAppSelector'
import { setResetBag } from '@/redux/features/productSlice'
import { useRouter } from 'next/navigation'

export const SucessfullView = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <div className='h-full w-full flex items-center justify-center flex-col mt-20'>
      <p className='text-2xl text-primary-dark'>Compra Confirmada</p>
      <p className='text-xl text-gray-300 mt-4'>
        ¡Uno de nuestros asesores se pondra en contacto contigo!
      </p>
      <button
        className='bg-secondary-dark text-white rounded-2xl px-4 py-3 mt-4'
        onClick={() => {
          dispatch(setResetBag())
          router.push('/')
        }}
      >
        Volver al Catalogo
      </button>
    </div>
  )
}
