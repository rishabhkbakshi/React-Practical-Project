import { useState } from 'react'
import './App.css'
import Card from './components/UI/Card'
import UserForm from './components/Users/UserForm/UserForm'
import Users from './components/Users/Users'

function App () {
  const [userList, setUserList] = useState([])
  const storeUserHandler = user => {
    setUserList(prevVal => {
      return [...prevVal, user]
    })
  }

  return (
    <Card>
      <div>
        <UserForm storeUser={storeUserHandler}></UserForm>
        <Users users={userList}></Users>
      </div>
    </Card>
  )
}

export default App
