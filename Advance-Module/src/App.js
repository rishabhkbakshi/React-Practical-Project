import React, { useContext } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'

function App () {
  const context = useContext(AuthContext)

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   const storedLoggedInInformation = localStorage.getItem('isLoggedIn')

  //   if (storedLoggedInInformation === '1') {
  //     setIsLoggedIn(true)
  //   }
  // }, [])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   // localStorage.setItem('isLoggedIn', '1')
  //   setIsLoggedIn(true)
  // }

  // const logoutHandler = () => {
  //   // localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false)
  // }

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />} */}
         {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}

export default App
