import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
  const [isCheckingout, setIsCheckingout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const cartCtx = useContext(CartContext)

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckingout(true)
  }

  const submitOrderHandler = async userData => {
    setIsSubmitting(true)
    await fetch(
      'https://react-http-8d5c6-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        })
      }
    ).then(
      () => {
        props.onClose('Congratulation! Your order is placed.')
      },
      () => {
        props.onClose('Error in placed order. Please check again', true)
      }
    )
    // cartCtx.items.length = 0
    setIsSubmitting(false)
    cartCtx.clearCart();
  }

  const isSubmittingModalContent = <p>Sending order data...</p>

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  )

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {cartCtx.items.length > 0 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.items.length === 0 ? '₹0.0' : totalAmount} </span>
      </div>
      {isCheckingout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onClose}
        ></Checkout>
      )}
      {!isCheckingout && modalActions}
    </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
    </Modal>
  )
}

export default Cart
