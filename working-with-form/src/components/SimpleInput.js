import useInput from '../hooks/use-input'

const SimpleInput = props => {
  // const nameInputRef = useRef()
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && emailRegex.test(value))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    resetNameInput()
    resetEmailInput()

    // console.log(enteredName)
    // console.log(nameInputRef.current.value)
  }

  const nameInputClassess = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClassess = emailInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError && <p className='error-text'>Name can't be blank</p>}
      <div className={emailInputClassess}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          // ref={nameInputRef}
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError && (
        <p className='error-text'>Please enter a valid email</p>
      )}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
