import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

// action thunk
export const fecthCartData = () => {
  return async dispatch => {
    const fecthData = async () => {
      const response = await fetch(
        'https://react-http-8d5c6-default-rtdb.firebaseio.com/cart.json'
      )

      if (!response.ok) {
        throw new Error('COunld not fetch cart data !')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fecthData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      )
    }
  }
}

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-8d5c6-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    }
  }
}
