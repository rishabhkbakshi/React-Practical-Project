import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

const Checkout = props => {
  const nameRef = useRef()
  const streetRef = useRef()
  const postalCodeRef = useRef()
  const cityRef = useRef()

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  })

  const confirmHandler = event => {
    event.preventDefault()

    const nameValue = nameRef.current.value
    const streetValue = streetRef.current.value
    const postalCodeValue = postalCodeRef.current.value
    const cityValue = cityRef.current.value

    const nameIsValid = !isEmpty(nameValue)
    const streetIsValid = !isEmpty(streetValue)
    const postalCodeIsValid = isFiveChars(postalCodeValue)
    const cityIsValid = !isEmpty(cityValue)

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid
    })

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue
    })
  }

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formInputsValidity.street && <p>Please enter a street name</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a Postal Code (5 charectors long)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formInputsValidity.city && <p>Please enter a City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
