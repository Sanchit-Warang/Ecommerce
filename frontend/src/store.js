import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.NODE_ENV !== 'production' ? true : false
})

export default store