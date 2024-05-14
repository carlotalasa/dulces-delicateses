import { Input } from '@headlessui/react'

export const Checkout = () => {
  return (
    <form className='h-full w-full flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center w-full'>
        <div className='h-[45rem] bg-white w-4/6 rounded-2xl p-6 flex flex-col items-center justify-between'>
          <h3 className='text-2xl text-gray-400 font-normal'>
            Ingresa tus Datos
          </h3>

          <div className='flex flex-col items-start justify-center w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Nombre y Apellido
            </span>
            <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
          </div>

          <div className='flex flex-col items-start justify-center w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Número de Cedula
            </span>
            <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
          </div>

          <div className='flex flex-col items-start justify-center w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Número de Teléfono
            </span>
            <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
          </div>

          <div className='flex flex-col items-start justify-center w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>Dirección</span>
            <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
          </div>

          <div className='flex flex-col items-start justify-center w-[30rem]'>
            <span className='ml-1 text-primary-dark text-md'>
              Método de Pago
            </span>
            <Input className='mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-primary-dark border-primary-dark outline-none' />
          </div>

          <button
            className='bg-secondary-dark text-white rounded-2xl px-4 py-3 mt-4'
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </form>
  )
}
