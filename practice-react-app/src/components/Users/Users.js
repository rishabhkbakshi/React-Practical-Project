import Card from '../UI/Card'
import SingleUser from './SingleUser/SingleUser'
import styles from './Users.module.css'

const Users = props => {
  const renderUser = (user, index) => {
    return (
      <SingleUser
        key={index}
        id={user.id}
        username={user.userName}
        age={user.age}
      ></SingleUser>
    )
  }

  const noRecordFound = 'No records found'

  return (
    <Card>
      <div className={`container card  mt-2 ${styles['font-bold']} `}>
        {props.users.length > 0 && (
          <div className='row border-bottom py-1'>
            <div className='col-sm-4'>Id</div>
            <div className='col-sm-4'>Name</div>
            <div className='col-sm-4'>Age</div>
          </div>
        )}
        {props.users.length > 0 &&
          props.users.map((item, index) => renderUser(item, index))}
        {props.users.length === 0 && noRecordFound}
      </div>
    </Card>
  )
}
export default Users
