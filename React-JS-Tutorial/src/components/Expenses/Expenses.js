import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import ExpensesList from './ExpensesList/ExpensesList'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('select')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const listOfOnlyYear = [
    ...new Set(props.items.map(data => data.date.getFullYear()))
  ]

  return (
    <div>
      <Card>
        <ExpenseFilter
          years={listOfOnlyYear}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesList
          items={props.items}
          filteredYear={filteredYear}
        ></ExpensesList>
      </Card>
    </div>
  )
}

export default Expenses
