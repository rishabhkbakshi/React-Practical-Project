import './ExpenseDate.css'

const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const date = props.date.toLocaleString('en-US', { month: '2-digit' })
  const year = props.date.getFullYear()

  return (
    <span>
      {month} / {date} / {year}
    </span>
  )
}

export default ExpenseDate
