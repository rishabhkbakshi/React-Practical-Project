import ExpensesChart from '../ExpenseChart/ExpensesChart'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
  const noRecordsFound = <div className='container py-2'>No records found</div>
  
  const filteredData = props.items.filter(
    item => item.date.getFullYear().toString() === props.filteredYear
  )

  const listToRender = item => {
    return (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    )
  }

  if (props.items.length === 0) {
    return noRecordsFound
  }

  if (props.filteredYear === 'select') {
    return props.items.map(item => listToRender(item))
  }

  return (
    <div className="container">
      <ExpensesChart expenses={filteredData}></ExpensesChart>
      {filteredData.length > 0 && filteredData.map(item => listToRender(item))}
      {filteredData.length === 0 && noRecordsFound}
    </div>
  )
}

export default ExpensesList
