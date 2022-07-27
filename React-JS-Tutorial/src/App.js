import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSEDATA = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 1283901,
    date: new Date(2022, 6, 23)
  },
  {
    id: '2',
    title: 'Bike Insurance',
    amount: 283901,
    date: new Date(2021, 5, 22)
  },
  {
    id: '3',
    title: 'Scooter Insurance',
    amount: 293901,
    date: new Date(2020, 4, 21)
  },
  {
    id: '4',
    title: 'Bicycle Insurance',
    amount: 83901,
    date: new Date(2022, 3, 20)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSEDATA)

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
  }

  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);
  return (
    <div>
      <NewExpense onAddExpenseEvent={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App
