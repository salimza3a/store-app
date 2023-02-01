import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/GlobalTypes';

type products = {
    productId: number
    quantity: number
}

type Cart = {
    id: number
    userId: number
    data: Date
    products: products[]
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product, void>({
            query: () => "products"
        }),
        getProductById: builder.query<Cart,void>({
            query: (id) => `products/${id}`
        }),
        filterProductsByCategory: builder.query<Product, void>({
            query: (categoryName) => `products/category/${categoryName}`
        })
    })
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useFilterProductsByCategoryQuery } = productsApi