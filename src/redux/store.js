import { configureStore } from '@reduxjs/toolkit'
import  Show  from './ShowManger'

export default configureStore({
  reducer: {showdata:Show},
})