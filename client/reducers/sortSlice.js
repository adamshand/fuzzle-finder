import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    order: 'random',
  },
  reducers: {
    changeOrder: (state, action) => {
      state.order = action.payload
    },
  },
})

export const { changeOrder } = sortSlice.actions
export default sortSlice.reducer
