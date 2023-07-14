import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.NODE_ENV !== 'production' ? true : false,
})

export default store
