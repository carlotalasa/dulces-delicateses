import Link from 'next/link'

export const Footer = () => {
  return (
    <section className='w-full bg-white h-auto lg:h-[20rem] flex flex-col items-center justify-center'>
      <footer className='w-full h-full container py-8'>
        <div className='h-full flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0'>
          <div className='flex flex-col items-center lg:items-start justify-between h-full gap-y-3 w-[24rem]'>
            <Link
              href='/'
              className='uppercase font-normal text-xl tracking-wide text-primary-dark hidden lg:block'
            >
              Dulces <br /> Delicateses
            </Link>

            <div className='flex flex-col items-center lg:items-start gap-y-2'>
              <span className='text-gray-500'>Horario</span>
              <p className='text-gray-500 text-sm'>
                Lunes a Viernes: 8:00am - 7:00pm
              </p>
              <p className='text-gray-500 text-sm'>Sabados: 8:00am - 1:00pm</p>
            </div>
          </div>

          <div className='border-r-2 w-1 h-full' />

          <div className='flex flex-col items-center justify-around h-full w-[24rem] gap-y-3 lg:gap-y-0'>
            <Link
              href='/'
              className='uppercase text-sm tracking-wide text-gray-500 hover:text-primary-dark '
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

          <div className='border-r-2 w-1 h-full' />

          <div className='flex flex-col items-center justify-around h-full w-[24rem] gap-y-5 lg:gap-y-0'>
            <div className='flex items-center justify-center w-full gap-x-3'>
              <img
                src='/icons/whatsapp.png'
                alt='Whatsapp-image'
                className='w-6'
              />
              <a
                className='text-gray-400 hover:text-primary-dark cursor-pointer'
                target='_blank'
                href='https://wa.me/584147229263?text=Hola!%20Quiero%20mas%20informaci%C3%B3n%20sobre%20el%20catalogo%20de%20productos.'
              >
                +58 414-7229263
              </a>
            </div>
            <div className='flex items-center justify-center w-full gap-x-3'>
              <img
                src='/icons/instagram.png'
                alt='instagram-image'
                className='w-5'
              />
              <a
                className='text-gray-400 hover:text-primary-dark'
                href='https://www.instagram.com/dulcesdelicateses.sc/'
                target='_blank'
              >
                @dulcesdelicateses.sc
              </a>
            </div>
            <div className='flex items-center justify-center w-full gap-x-2'>
              <img
                src='/icons/marcador-de-posicion.png'
                alt='ubication-image'
                className='w-5'
              />
              <a
                className='text-primary-dark cursor-pointer'
                target='_blank'
                href="https://www.google.com/maps/place/7%C2%B046'36.8%22N+72%C2%B012'17.8%22W/@7.7767636,-72.2064759,18z/data=!4m4!3m3!8m2!3d7.7768779!4d-72.2049323?hl=es&entry=ttu"
              >
                Residencias quinimari edificio 74-A
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-primary-dark w-full flex items-center justify-center py-1'>
        <p className='text-white'>
          Todos los derechos reservados - Venezuela - 2024
        </p>
      </div>
    </section>
  )
}
