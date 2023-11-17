import { configureStore } from '@reduxjs/toolkit'
import { globalSlice } from './globalState'

export const store = configureStore({
  reducer: {
    globalState: globalSlice.reducer
  },
})