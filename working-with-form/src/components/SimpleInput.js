import { useState } from 'react'

const SimpleInput = props => {
  // const nameInputRef = useRef()
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsValid =
    enteredEmail.trim() !== '' && emailRegex.test(enteredEmail)
  const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    setEnteredName('')
    setEnteredEmail('')

    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)

    // console.log(enteredName)
    // console.log(nameInputRef.current.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return
    }
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
    if (!enteredEmailIsValid) {
      return
    }
  }

  const nameInputClassess = nameInputInvalid
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClassess = emailInputInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassess}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          // ref={nameInputRefF}
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputInvalid && <p className='error-text'>Name can't be blank</p>}
      <div className={emailInputClassess}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          // ref={nameInputRef}
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {emailInputInvalid && (
        <p className='error-text'>Please enter a valid email</p>
      )}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
