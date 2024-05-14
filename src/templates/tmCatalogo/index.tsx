import { CardsComponent } from '@/components/cards'
import { ListBox } from '@/components/listbox'
import { Toaster } from 'react-hot-toast'

const optionsCatalog = [
  { name: 'Todos Los productos' },
  { name: 'Tortas' },
  { name: 'Galletas' },
  { name: 'Brazo gitano' },
  { name: 'Alfajores' }
]

export const TmCatalogo = () => {
  const auxOptions = new Array(12).fill('')
  return (
    <section className='h-full'>
      <h1 className='text-gray-500 text-sm tracking-wide'>
        Dulces Delicateses | <span className='text-primary-dark'>Catálogo</span>
      </h1>
      <div className='mt-6 flex items-center justify-between'>
        <h3 className='text-primary-dark text-xl tracking-wide'>Productos</h3>
        <ListBox options={optionsCatalog} />
      </div>

      {/* cards grid */}
      <div className='flex items-center justify-center w-full h-full'>
        <div className='mt-10 grid grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-12 h-full'>
          {auxOptions?.map((_, index) => (
            <CardsComponent key={index} />
          ))}
        </div>
      </div>
      <Toaster toastOptions={{ duration: 4000 }} />
    </section>
  )
}
