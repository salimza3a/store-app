import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/products";
import cartReducer, {getTotals} from './cartSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) => {
      return  getDefaultMiddleware().concat(productsApi.middleware)
    }
})

store.dispatch(getTotals())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch