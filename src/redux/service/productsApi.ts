import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/v1/products/products/'
    }),
    createOrder: builder.mutation({
      query: (args) => ({
        url: '/api/v1/orders/create-order/',
        body: {
          ...args
        },
        method: 'POST'
      })
    })
  })
})

export const { useGetProductsQuery, useCreateOrderMutation } = productsApi