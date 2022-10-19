import CartItem from './CartItem'

const Cart = (props) => {
  const clearCart = () => {
    props.setCart([])
  }

  return (
    <div className="cart">
      <h3>Cart</h3>

      {props.cart.map((item, idx) => 
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      )}

      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={()=> clearCart()}>CLEAR CART</button>
    </div>
  )
}

export default Cart