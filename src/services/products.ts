import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
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