import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     Show : (state,action)=> {
        console.log(action,"yuygy");
        return action.payload
     }
  },
})

// Action creators are generated for each case reducer function
export const {Show } = counterSlice.actions

export default counterSlice.reducer