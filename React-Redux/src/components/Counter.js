import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter'
// import { connect } from 'react-redux'
// import { Component } from 'react'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }

  const increseHandler = () => {
    // dispatch({ type: 'increse', amount: 5 })
    dispatch(counterActions.increse(5))
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'show' })
    dispatch(counterActions.show())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

// class Counter extends Component {
//   incrementHandler () {
//     this.props.increment()
//   }

//   decrementHandler () {
//     this.props.decrement()
//   }

//   increseHandler () {
//     this.props.increse()
//   }

//   toggleCounterHandler () {
//     this.props.show()
//     console.log(this.props)
//   }

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showCounter && (
//           <div className={classes.value}>{this.props.counter}</div>
//         )}
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.increseHandler.bind(this)}>
//             Increment by 5
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//     showCounter: !state.showCounter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     increse: () => dispatch({ type: 'increse', amount: 5 }),
//     show: () => dispatch({ type: 'show' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
