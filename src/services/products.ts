import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CartItemType = {
    id: number
    category: string
    description: string
    image: string
    title: string
    amount: number
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<CartItemType, null>({
            query: () => "products"
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }),
        filterProductsByCategory: builder.query({
            query: (categoryName) => `products/category/${categoryName}`
        })
    })
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useFilterProductsByCategoryQuery } = productsApi