'use client'
import { AppProvider } from '@/Context/AppContext'
import { Footer } from '../footer'
import { Navbar } from '../navbar'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <section
      className={`flex flex-col items-center justify-between w-full h-full ${className}`}
    >
      <AppProvider>
        <Navbar />
        <div className='container h-full pt-8 pb-12 mt-16'>{children}</div>
        <Footer />
      </AppProvider>
    </section>
  )
}
