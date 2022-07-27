import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   enteredTitle: event.target.value,
    //   ...userInput
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   enteredAmount: event.target.value,
    //   ...userInput
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
  }

  const submitHandler = event => {
    event.preventDefault()
    let finalExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(finalExpenseData, false)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const cancalHandler = () => {
    props.onCancelEvent(false)
  }

  return (
    <form className='d-flex justify-content-center' onSubmit={submitHandler}>
      <div className='card w-50'>
        <div className='form-group card-body'>
          <div className='row'>
            <div className='col-sm-6'>
              <label>Title</label>
              <input
                type='text'
                value={enteredTitle}
                className='form-control'
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className='col-sm-6'>
              <label>Amount</label>
              <input
                type='number'
                className='form-control'
                min='0.01'
                step='0.01'
                value={enteredAmount}
                onChange={amountChangeHandler}
              ></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <label>Date</label>
              <input
                type='date'
                className='form-control'
                min='2019-01-01'
                step='2022-12-31'
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-9'>
              <div className='float-end'>
                <button
                  type='button'
                  className='form-control btn btn-sm btn-primary float-right'
                  onClick={cancalHandler}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='float-end pl-2'>
                <button
                  type='submit'
                  className='form-control btn btn-sm btn-primary float-right'
                >
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
