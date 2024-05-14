import { useAppSelector } from '@/hooks/useAppSelector'
import Link from 'next/link'

export const Navbar = () => {
  const numberOfProducts = useAppSelector(
    (state) => state.productReducer.numberOfProducts
  )
  return (
    <section className='w-full flex items-center justify-center bg-white fixed top-0 z-50'>
      <nav className='container w-full h-16 flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6 md:gap-x-12'>
          <Link
            href='/'
            className='uppercase font-normal text-xl tracking-wide text-primary-dark'
          >
            Dulces Delicateses
          </Link>
          <Link
            href='/'
            className='uppercase text-sm tracking-wide text-gray-500 hover:text-primary-dark'
          >
            Catálogo
          </Link>
          <Link
            href='/pasteleria'
            className='uppercase text-sm tracking-wide text-gray-500 hover:text-primary-dark'
          >
            Pasteleria
          </Link>
          <Link
            href='/nosotros'
            className='uppercase text-sm tracking-wide text-gray-500 hover:text-primary-dark'
          >
            Nosotros
          </Link>
          {/* <Link
            href='/contacto'
            className='uppercase text-sm tracking-wide text-gray-500 hover:text-primary-dark'
          >
            Contacto
          </Link> */}
        </div>
        <div>
          <Link href='/bolsa' className='relative'>
            {numberOfProducts > 0 && (
              <div className='absolute bg-primary-dark rounded-full w-4 flex items-center justify-center left-4'>
                <span className='text-white text-xs'>{numberOfProducts}</span>
              </div>
            )}
            <img
              src='/icons/bolsa-icon.png'
              alt='bolsa-compras'
              className='w-6 cursor-pointer'
            />
          </Link>
        </div>
      </nav>
    </section>
  )
}
