import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/v1/products/products/'
    })
  })
})

export const { useGetProductsQuery } = productsApi