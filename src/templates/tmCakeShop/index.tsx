'use client'
import { ListBox } from '@/components/listbox'
import { useAlert } from '@/hooks/useAlert'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import { setProducts } from '@/redux/features/productSlice'
import { Input } from '@headlessui/react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const optionsSize = [
  { name: 'Pequeña' },
  { name: 'Mediana' },
  { name: 'Grande' }
]

const optionsPonque = [
  { name: 'Chocolate' },
  { name: 'Red Velvet' },
  { name: 'Vainilla' }
]

const optionsRelleno = [
  { name: 'Chocolate' },
  { name: 'Crema Pastelera' },
  { name: 'Arequipe' }
]

interface formStateProps {
  cakeSize: string | null
  cakeType: string | null
  cakeStuffed: string | null
  comments: string | null
}

export const TmCakeShop = () => {
  const showAlert = useAlert()
  const products = useAppSelector((state) => state.productReducer.products)
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<formStateProps>({
    cakeSize: optionsSize[0].name,
    cakeType: optionsPonque[0].name,
    cakeStuffed: optionsRelleno[0].name,
    comments: null
  })

  return (
    <section className='h-full mb-12 p-8'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses |{' '}
        <span className='text-primary-dark'>Pasteleria</span>
      </h1>
      <div className='mt-12 flex items-center justify-start w-full'>
        <h2 className='text-primary-dark text-xl tracking-wide'>
          Crea Tu Pedido
        </h2>
      </div>

      <div className='h-full w-full flex flex-col items-center justify-center mt-12'>
        <div className='flex items-center justify-center mt-2 w-full'>
          <div className='h-[40rem] bg-white w-full lg:w-4/6 rounded-2xl p-6 flex flex-col items-center justify-between'>
            <h3 className='text-xl text-gray-400 font-normal'>
              Ingresa tu pedido
            </h3>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Tamaño de la Torta
              </span>
              <ListBox
                options={optionsSize}
                className='w-[12rem] sm:w-[20rem] md:!w-[30rem]'
                onHandleChange={(e) =>
                  setForm((fields) => {
                    return {
                      ...fields,
                      cakeSize: e.name
                    }
                  })
                }
              />
            </div>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Ponque de la Torta
              </span>
              <ListBox
                options={optionsPonque}
                className='w-[12rem] sm:w-[20rem] md:!w-[30rem]'
                onHandleChange={(e) =>
                  setForm((fields) => {
                    return {
                      ...fields,
                      cakeType: e.name
                    }
                  })
                }
              />
            </div>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Relleno de la Torta
              </span>
              <ListBox
                options={optionsRelleno}
                className='w-[12rem] sm:w-[20rem] md:!w-[30rem]'
                onHandleChange={(e) =>
                  setForm((fields) => {
                    return {
                      ...fields,
                      cakeStuffed: e.name
                    }
                  })
                }
              />
            </div>

            {/* <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Decorado de la Torta
              </span>
              <ListBox options={optionsSize} className='!w-[30rem]' />
            </div> */}

            <div className='flex flex-col items-start justify-center w-[12rem] sm:w-[20rem] md:w-[30rem]'>
              <span className='ml-1 text-primary-dark text-md'>
                Comentarios
              </span>
              <Input
                className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none'
                placeholder='Ej: Agrega mi nombre a la torta'
                value={form.comments ?? ''}
                onChange={(e) =>
                  setForm((fields) => {
                    return {
                      ...fields,
                      comments: e.target.value
                    }
                  })
                }
              />
            </div>

            <button
              className='bg-secondary-dark text-white rounded-2xl p-4 disabled:bg-gray-300'
              disabled={
                !form.cakeSize ||
                !form.cakeStuffed ||
                !form.cakeType ||
                !form.comments
              }
              onClick={() => {
                showAlert({
                  message: '¡Nuevo Producto en bolsa!',
                  variant: 'success'
                })
                dispatch(
                  setProducts([
                    ...products,
                    {
                      id: `${new Date()}`,
                      name: `Tora de ${form.cakeType} con relleno de ${form.cakeStuffed}`,
                      description: `tamaño ${form.cakeSize}, con detalles: ${form.comments}`,
                      price: null,
                      image: null
                    }
                  ])
                )
                setForm({
                  cakeSize: optionsSize[0].name,
                  cakeType: optionsPonque[0].name,
                  cakeStuffed: optionsRelleno[0].name,
                  comments: null
                })
              }}
            >
              Confirmar Pedido y Agregar a la Bolsa
            </button>
          </div>
        </div>
      </div>
      <Toaster toastOptions={{ duration: 4000 }} />
    </section>
  )
}
