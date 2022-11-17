import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '../feauters/theme/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})  