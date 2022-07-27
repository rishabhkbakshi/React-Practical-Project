import React, { useState } from 'react'
// import styledComponents from 'styled-components'

import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

// Using styleComponents
// const FormControl = styledComponents.div`
//     margin: 0.5rem 0;

//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;
//       color: ${props => (props.invalid ? 'red' : 'black')}
//     }

//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid #ccc;
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//       color: ${props => (props.invalid ? 'red' : 'black')};
//       background-color: ${props => (props.invalid ? '#ffcccb' : 'unset')};
//     }

//     // &.invalid input {
//     //   color: red;
//     //   background-color: #ffcccb;
//     // }

//     // &.invalid label {
//     //   color: red;
//     // }

//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setStyleValue] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setStyleValue(true)
      setEnteredValue(event.target.value)
    } else {
      setStyleValue(false)
      setEnteredValue('')
    }
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (enteredValue.length === 0) {
      setStyleValue(false)
    } else {
      props.onAddGoal(enteredValue)
      setEnteredValue('')
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Code to learn how to achieve dymanic css class*/}

      {/*1st way to changing the style in the styled-component */}
      {/* <FormControl className={`form-control ${!isValid && 'invalid'}`}> */}

      {/*2nd way to changing the style in the styled-component using props*/}
      {/* <FormControl invalid={!isValid}> */}

      {/* using cssModule */}
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type='text'
          onChange={goalInputChangeHandler}
        />

        {/* Code to learn how to achieve dymanic inline css */}
        {/* <label
          style={{
            color: !isValid && 'red'
          }}
        >
          Course Goal
        </label>
        <input
          style={{
            color: !isValid && 'red',
            backgroundColor: !isValid && '#ffcccb'
          }}
          value={enteredValue}
          type='text'
          onChange={goalInputChangeHandler}
        /> */}
      </div>
      <Button courseName={enteredValue} type='submit'>
        Add Goal
      </Button>
    </form>
  )
}

export default CourseInput
