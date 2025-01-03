import './input.css'

const Input = props => {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value
  } = props

  return (
    <div className='inputContainer'>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className='error'>{errorMessage}</span>
      )}
    </div>
  )
}

export default Input
