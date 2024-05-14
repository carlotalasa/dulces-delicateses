'use client'
import toast from 'react-hot-toast'
import { CloseIcon, VariantIcon } from './variant'

export interface AtAlertProps {
  message: string
  variant: AtAlertVariant
  className?: string
  toastId?: string
  visible?: boolean
}
export type AtAlertVariant = 'success' | 'error' | 'warning' | 'information'

const backgroundClasses: Record<AtAlertVariant, string> = {
  success: 'bg-secondary-dark border-primary-dark',
  error: 'bg-red-50 border-red-500',
  warning: 'bg-amber-100 border-amber-500',
  information: 'bg-blue-50 border-blue-600'
}
const closeIconClasses: Record<AtAlertVariant, string> = {
  success: 'fill-emerald-900',
  error: 'fill-red-900',
  warning: 'fill-amber-900',
  information: 'fill-blue-900'
}
export const AtAlert = ({
  message,
  variant,
  toastId,
  visible
}: AtAlertProps) => {
  return (
    <div
      className={`relative mt-16 w-full max-w-[20.93rem] rounded-2xl border px-5 py-5 md:max-w-[28rem] ${
        backgroundClasses[variant]
      } ${visible ? 'visible' : 'invisible'}`}
    >
      <div className={`flex flex-row gap-x-2`}>
        <VariantIcon variant={variant} />
        <span className='leading-6 text-white'>{message}</span>
        <CloseIcon
          className={`z-10 ml-auto ${closeIconClasses[variant]}`}
          onClick={() => {
            if (toastId) {
              toast.dismiss(toastId)
            }
          }}
        />
      </div>
    </div>
  )
}
