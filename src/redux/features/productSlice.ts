import { createSlice } from '@reduxjs/toolkit'

export interface CardProductsProps {
  image: string
  name: string,
  id: string,
  price: number
  description: string
}

interface ProductsProps {
  numberOfProducts: number
  checkout: boolean
  delivery: boolean
  totalPayment: number
  products: Array<CardProductsProps>
}

const initialState: ProductsProps = {
  numberOfProducts: 0,
  checkout: false,
  delivery: false,
  totalPayment: 0,
  products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.numberOfProducts = action.payload?.length
      state.products = action?.payload
    },
    setCheckout: (state, action) => {
      state.checkout = action?.payload
    },
    setDelivery: (state, action) => {
      state.delivery = action?.payload
    },
    setTotalPayment: (state, action) => {
      state.totalPayment += typeof action?.payload === 'string' ? parseFloat(action?.payload) : action?.payload
    },
    setLessTotalPayment: (state, action) => {
      state.totalPayment -= typeof action?.payload === 'string' ? parseFloat(action?.payload) : action?.payload
    }
  }
})

export const { setProducts, setCheckout, setTotalPayment, setLessTotalPayment, setDelivery } = productSlice.actions

export default productSlice.reducer