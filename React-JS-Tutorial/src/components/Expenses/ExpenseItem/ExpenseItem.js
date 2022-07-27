import Card from '../../UI/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = props => {
  // const [updatedProps, setTitle] = useState(props)

  // const clickHandler = () => {
  //   const title = props.title + props.id
  //   const amount = Number(updatedProps.amount) + 1
  //   setTitle({
  //     title: title,
  //     amount: amount
  //   })
  // }

  return (
    <Card className='test-css align-card-items px-2'>
      <div className='container py-2'>
        <div className='row th'>
          <div className='col-sm-4'>Title</div>
          <div className='col-sm-3'>Date</div>
          <div className='col-sm-2'>Amount</div>
          {/* <div className='col-sm-3'>Change</div> */}
        </div>
        <div className='row'>
          <div className='col-sm-4 d-flex align-self-center'>
            <h2>{props.title}</h2>
          </div>
          <div className='col-sm-3 d-flex align-self-center'>
            <ExpenseDate date={props.date}></ExpenseDate>
          </div>
          <div className='col-sm-2 d-flex align-self-center'>
            ₹{props.amount}
          </div>
          {/* <div className='col-sm-3 d-flex align-self-center'>
            <button
              type='button'
              className='btn btn-sm btn-primary'
              onClick={clickHandler}
            >
              Change
            </button>
          </div> */}
        </div>
      </div>
    </Card>
  )
}

export default ExpenseItem
