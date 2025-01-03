import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment (state) {
      state.counter++
    },
    increse (state, action) {
      state.counter = state.counter + action.payload
    },
    decrement (state) {
      state.counter--
    },
    show (state) {
      state.showCounter = !state.showCounter
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer
