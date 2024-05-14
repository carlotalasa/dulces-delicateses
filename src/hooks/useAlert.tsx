'use client'
import { AtAlert, AtAlertVariant } from '@/components/alert'
import { useCallback } from 'react'
import toast from 'react-hot-toast'

export type AlertProps = {
  message: string
  variant: AtAlertVariant
}

export const useAlert = () => {
  return useCallback(({ message, variant }: AlertProps) => {
    toast.custom((t) => (
      <AtAlert
        message={message}
        variant={variant}
        toastId={t.id}
        visible={t.visible}
      />
    ))
  }, [])
}
