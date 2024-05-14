'use client'
import React, { useState } from 'react'
import './styles.css' // Asegúrate de tener este archivo en la misma carpeta que tu componente
import { setTotalPayment } from '@/redux/features/productSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'

export const DeliveryCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useAppDispatch()
  const { totalPayment } = useAppSelector((state) => state.productReducer)

  const handleChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      dispatch(setTotalPayment(totalPayment + 4))
    } else {
      dispatch(setTotalPayment(totalPayment - 4))
    }
  }

  return (
    <label className='checkbox-container text-gray-500 font-medium'>
      Incluir delivery (+4.0$)
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='real-checkbox'
      />
      <span className={`checkmark ${isChecked ? 'checked' : ''}`}></span>
    </label>
  )
}

export default DeliveryCheckbox
