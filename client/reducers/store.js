import { configureStore } from '@reduxjs/toolkit'
import sortReducer from './sortSlice.js'

export default configureStore({
  reducer: {
    sort: sortReducer,
  },
})
