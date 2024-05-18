import { useAppDispatch } from '@/hooks/useAppSelector'
import { setProducts } from '@/redux/features/productSlice'
import { Input } from '@headlessui/react'
import { useState } from 'react'

interface formStateProps {
  name: string | null
  id: string | null
  phone: string | null
  address: string | null
  payment: string | null
}

export const Checkout = () => {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<formStateProps>({
    name: null,
    id: null,
    phone: null,
    address: null,
    payment: null
  })

  return (
    <form className='h-full w-full flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center w-full'>
        <div className='h-[45rem] bg-white w-full lg:w-4/6 rounded-2xl p-6 flex flex-col items-center justify-between'>
          <h3 className='text-2xl text-gray-400 font-normal'>
            Ingresa tus Datos
          </h3>

          <div className='flex flex-col items-start justify-center w-[15rem] sm:w-[20rem] md:w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Nombre y Apellido
            </span>
            <Input
              className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
              onChange={(e) =>
                setForm((fields) => {
                  return {
                    ...fields,
                    name: e.target.value
                  }
                })
              }
            />
          </div>

          <div className='flex flex-col items-start justify-center w-[15rem] sm:w-[20rem] md:w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Número de Cedula
            </span>
            <Input
              className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
              onChange={(e) =>
                setForm((fields) => {
                  return {
                    ...fields,
                    id: e.target.value
                  }
                })
              }
            />
          </div>

          <div className='flex flex-col items-start justify-center w-[15rem] sm:w-[20rem] md:w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Número de Teléfono
            </span>
            <Input
              className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
              placeholder='+58'
              onChange={(e) =>
                setForm((fields) => {
                  return {
                    ...fields,
                    phone: e.target.value
                  }
                })
              }
            />
          </div>

          <div className='flex flex-col items-start justify-center w-[15rem] sm:w-[20rem] md:w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>Dirección</span>
            <Input
              className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
              onChange={(e) =>
                setForm((fields) => {
                  return {
                    ...fields,
                    address: e.target.value
                  }
                })
              }
            />
          </div>

          <div className='flex flex-col items-start justify-center w-[15rem] sm:w-[20rem] md:w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Método de Pago
            </span>
            <Input
              className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
              placeholder='Efectivo, Transferencia (Bancolombia - Zelle - Bolivares)'
              onChange={(e) =>
                setForm((fields) => {
                  return {
                    ...fields,
                    payment: e.target.value
                  }
                })
              }
            />
          </div>

          <button
            className='bg-secondary-dark text-white rounded-2xl px-4 py-3 mt-4 disabled:bg-gray-300'
            disabled={
              !form.name ||
              !form.id ||
              !form.phone ||
              !form.address ||
              !form.payment
            }
            onClick={(e) => {
              e.preventDefault()
              dispatch(setProducts([]))
            }}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </form>
  )
}
