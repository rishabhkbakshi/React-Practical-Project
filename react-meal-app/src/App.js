import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

function App () {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = (Message = '', error = false) => {
    if (Message && !error) {
      toast.success(Message, {
        autoClose: 1500
      })
    } else {
      toast.error(Message, {
        autoClose: 1500
      })
    }
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  )
}

export default App
