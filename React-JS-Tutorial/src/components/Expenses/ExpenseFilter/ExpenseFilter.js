import React from 'react'

import './ExpenseFilter.css'

const ExpenseFilter = props => {
  const dropDownChangeHandler = event => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <label className='py-2'>Filter by year</label>
        </div>
        <div className='col-sm-9'>
          <div className='py-2'>
            <select value={props.selected} onChange={dropDownChangeHandler}>
              <option key='select' value='select'>
                -Select-
              </option>
              {props.years.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseFilter
