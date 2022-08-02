import React from 'react'
import useForm from './Hooks/useForm'

import './styles.css'
import './signUpForm.css'
import { signupForm } from './Utils/formConfig'

export default function SignupForm () {
  const { renderFormInputs, isFormValid } = useForm(signupForm)

  return (
    <form className='signupForm'>
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button type='submit' disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  )
}
