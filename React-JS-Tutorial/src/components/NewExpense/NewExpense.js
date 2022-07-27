import { useState } from 'react'
import ExpenseForm from './ExpenseForm/ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const [showAddExpenseFormFlag, setShowAddExpenseFormFlag] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData, flagVal) => {
    const expenseData = {
      id: (Math.floor(Math.random() * 10) + 1).toString(),
      ...enteredExpenseData
    }
    props.onAddExpenseEvent(expenseData)
    setShowAddExpenseFormFlag(flagVal)
  }

  const showAddExpenseForm = () => {
    setShowAddExpenseFormFlag(true)
  }

  const cancalHandler = flagVal => {
    setShowAddExpenseFormFlag(flagVal)
  }

  return (
    <div className='container text-center'>
      {!showAddExpenseFormFlag && (
        <button
          type='button'
          className='form-control btn btn-sm btn-primary w-25 my-5'
          onClick={showAddExpenseForm}
        >
          Add New Expense
        </button>
      )}
      {showAddExpenseFormFlag && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showAddExpenseFormFlag={showAddExpenseFormFlag}
          onCancelEvent={cancalHandler}
        ></ExpenseForm>
      )}
    </div>
  )
}

export default NewExpense
