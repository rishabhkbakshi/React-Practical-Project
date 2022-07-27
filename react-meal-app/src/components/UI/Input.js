import React from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* {...props.input} => don't need to write all the props of the input tag, but one thing keep in mind that input name should be input */}
      <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input
