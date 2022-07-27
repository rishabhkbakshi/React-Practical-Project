import { useRef, useState } from 'react'
import ErrorDiv from '../../ErrorDiv/ErrorDiv'
import Wrapper from '../../Helper/Wrapper'
import Button from '../../UI/Button/Button'
import styles from './UserForm.module.css'

// Practice program to understand the 'ref'
const UserForm = props => {
  const userNameRef = useRef()
  const ageRef = useRef()

  const [errorMsg, setErrorMsg] = useState()

  // const [userName, setUserName] = useState('')
  // const [age, setAge] = useState('')

  const submitHandler = event => {
    event.preventDefault()

    const userName = userNameRef.current.value
    const age = ageRef.current.value

    if (userName === '' || age.trim() === '') {
      setErrorMsg(`Fields can't be blank`)
      return
    } else if (age.trim() === '0') {
      setErrorMsg(`Age should be greater then 0`)
      return
    } else if (Number(age.trim()) < 0) {
      setErrorMsg(`Age can't be negetive`)
      return
    }
    props.storeUser({
      id: Math.floor(Math.random() * 1000).toString(),
      userName: userName,
      age: age
    })
    userNameRef.current.value = ''
    ageRef.current.value = ''
    // setUserName('')
    // setAge('')
  }

  // const userNameHandler = event => {
  //   setUserName(event.target.value)
  // }

  // const ageHandler = event => {
  //   setAge(event.target.value)
  // }

  const errorMsgHandler = props => {
    setErrorMsg(null)
  }

  return (
    <Wrapper>
      {errorMsg && (
        <ErrorDiv
          title='An error occured!'
          errorMsg={errorMsg}
          onClickHandler={errorMsgHandler}
        ></ErrorDiv>
      )}
      <div className='container'>
        <form
          className='d-flex justify-content-center'
          onSubmit={submitHandler}
        >
          <div className='card w-50'>
            <div className='form-group card-body'>
              <div className='row'>
                <div className='col-sm'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    // value={userName}
                    // onChange={userNameHandler}
                    ref={userNameRef}
                  ></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <label htmlFor='age'>Age (Years)</label>
                  <input
                    type='number'
                    className='form-control'
                    // value={age}
                    // onChange={ageHandler}
                    ref={ageRef}
                  ></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <div className='float-end pt-2'>
                    <Button
                      type='submit'
                      className='form-control btn btn-sm btn-primary float-left'
                    >
                      Add User
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default UserForm
