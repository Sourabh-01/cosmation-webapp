import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  background: "",
}

export const globalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBackground } = globalSlice.actions

export default globalSlice.reducer;