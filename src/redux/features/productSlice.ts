import { createSlice } from '@reduxjs/toolkit'

interface CardProductsProps {
  name: string,
  id: string,
  price: number
}

interface ProductsProps {
  numberOfProducts: number
  checkout: boolean
  totalPayment: number
  products: Array<CardProductsProps>
}

const initialState: ProductsProps = {
  numberOfProducts: 0,
  checkout: false,
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
    setTotalPayment: (state, action) => {
      state.totalPayment = action?.payload
    }
  }
})

export const { setProducts, setCheckout, setTotalPayment } = productSlice.actions

export default productSlice.reducer