import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Card className={classes.cart}>
      <h2>
        Your Shopping Cart <span>Total Amount :- {totalAmount}</span>
      </h2>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map(item => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price
              }}
            />
          ))}
        {cartItems.length === 0 && <div>Cart is empty</div>}
      </ul>
    </Card>
  )
}

export default Cart
