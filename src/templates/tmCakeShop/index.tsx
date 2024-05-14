import { ListBox } from '@/components/listbox'
import { Input } from '@headlessui/react'

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

export const TmCakeShop = () => {
  return (
    <section className='h-full mb-12'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses |{' '}
        <span className='text-primary-dark'>Pasteleria</span>
      </h1>
      <div className='mt-12 flex items-center justify-start w-full'>
        <h2 className='text-primary-dark text-xl tracking-wide'>
          Crea Tu Pedido
        </h2>
      </div>

      <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center mt-2 w-full'>
          <div className='h-[40rem] bg-white w-4/6 rounded-2xl p-6 flex flex-col items-center justify-between'>
            <h3 className='text-xl text-gray-400 font-normal'>
              Ingresa tu pedido
            </h3>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Tamaño de la Torta
              </span>
              <ListBox options={optionsSize} className='!w-[30rem]' />
            </div>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Ponque de la Torta
              </span>
              <ListBox options={optionsPonque} className='!w-[30rem]' />
            </div>

            <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Relleno de la Torta
              </span>
              <ListBox options={optionsRelleno} className='!w-[30rem]' />
            </div>

            {/* <div className='flex flex-col items-start justify-center gap-y-2'>
              <span className='ml-1 text-primary-dark text-md'>
                Decorado de la Torta
              </span>
              <ListBox options={optionsSize} className='!w-[30rem]' />
            </div> */}

            <div className='flex flex-col items-start justify-center w-[30rem]'>
              <span className='ml-1 text-primary-dark text-md'>
                Comentarios
              </span>
              <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
            </div>

            <button className='bg-secondary-dark text-white rounded-2xl p-4'>
              Confirmar Pedido y Agregar a la Bolsa
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
