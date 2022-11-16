import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'
// import { createStore } from 'redux'

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//       }
//     case 'increse':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//       }
//     case 'show':
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter
//       }
//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//       }
//     default:
//       break
//   }

//   return state
// }

// const store = createStore(counterReducer)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store
