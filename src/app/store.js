import { configureStore } from '@reduxjs/toolkit'
import updateUserReducer from '../utils/updateUser'

export default configureStore({
  reducer: {
      user : updateUserReducer
  }
})