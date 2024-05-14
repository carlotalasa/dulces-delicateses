import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ReduxProviders } from '@/redux/provider'

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: 'Dulces Delicateses',
  description: 'Los mejores postresde la ciudad'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={font.className}>
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  )
}
