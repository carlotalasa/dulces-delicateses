import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/productSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './service/productsApi'

export const store = configureStore({
  reducer: {
    productReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productsApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch