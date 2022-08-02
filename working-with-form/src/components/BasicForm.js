import useInput from '../hooks/use-input'

const BasicForm = props => {
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameValueHandler
  } = useInput(value => value.trim() !== '')

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: resetLastName,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameValueHandler
  } = useInput(value => value.trim() !== '')

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailValueHandler
  } = useInput(value => value.trim() !== '' && emailRegex.test(value))

  let formIsValid = false
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    resetFirstName()
    resetLastName()
    resetEmail()
    alert('Form is submitted => Aage ka lecturer dekhiye please')
  }

  const firstNameClass = firstNameHasError
    ? 'form-control invalid'
    : 'form-control'
  const lastNameClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            value={firstNameValue}
            onChange={firstNameValueHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className='error-text'>First Name can't be blank</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            value={lastNameValue}
            onChange={lastNameValueHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className='error-text'>Last Name can't be blank</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={emailValue}
          onChange={emailValueHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className='error-text'>Email Name can't be blank</p>
        )}
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default BasicForm
