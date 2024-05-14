import type { ButtonHTMLAttributes } from 'react'
import { AtAlertVariant } from '.'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

export const VariantIcon = ({ variant }: { variant: AtAlertVariant }) => {
  const wrapperClassName = 'w-6 h-6 bg'
  switch (variant) {
    case 'success':
      return (
        <div className={wrapperClassName}>
          <CheckIcon className='fill-primary-dark' />
        </div>
      )
    default:
  }
  return <></>
}
export const CloseIcon = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <XMarkIcon className='mt-0.5 flex h-full w-6 fill-primary-dark items-center' />
    </button>
  )
}
