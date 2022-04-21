import { configureStore } from '@reduxjs/toolkit'
import cart from './cartSlice';
import user from './userSlice'

export  const store = configureStore({
  reducer: {
    cart,
    user
  },
})