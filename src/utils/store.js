import { configureStore } from '@reduxjs/toolkit'
import documentSlice from './documentSlice'
import searchSlice from './searchSlice'

export const store = configureStore({
    reducer: {
        docsData: documentSlice,
        search: searchSlice
    },
})
