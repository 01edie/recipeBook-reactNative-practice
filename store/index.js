import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './favoritesSlice'

favoritesSlice
export const store = configureStore({
    reducer: favoritesSlice,
    
  })