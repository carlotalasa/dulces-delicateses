'use client'
import React, { useState } from 'react'
import './styles.css' // Asegúrate de tener este archivo en la misma carpeta que tu componente
import {
  setDelivery,
  setLessTotalPayment,
  setTotalPayment
} from '@/redux/features/productSlice'
import { useAppDispatch } from '@/hooks/useAppSelector'

export const DeliveryCheckbox = ({ delivery }: { delivery: boolean }) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(setDelivery(!delivery))
    if (!delivery) {
      dispatch(setTotalPayment(4))
    } else {
      dispatch(setLessTotalPayment(4))
    }
  }

  return (
    <label className='checkbox-container text-gray-500 font-medium'>
      Incluir delivery (+4.0$)
      <input
        type='checkbox'
        checked={delivery}
        onChange={handleChange}
        className='real-checkbox'
      />
      <span className={`checkmark ${delivery ? 'checked' : ''}`}></span>
    </label>
  )
}

export default DeliveryCheckbox
