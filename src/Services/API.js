import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
  tagTypes: ['products', 'productsComments'],
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'],
    }),
    getComments: builder.query({
      query: (id) => `products/${id}/comments`,
      providesTags: ['productsComments'],
    }),
    createComment: builder.mutation({
      query: (data) => ({
        url: `products/${data.id}/comments`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['productsComments'],
    })
  }),
})

export const { useGetProductsQuery } = productAPI
export const { useGetCommentsQuery } = productAPI
export const { useCreateCommentMutation } = productAPI