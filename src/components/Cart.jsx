import React, { useContext } from 'react';
import { ProductsContext } from '../App';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductsContext);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className='cart_cont'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>No Product added to the cart</p> : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className='products'>
              <div>{item.name}</div> 
              <div>{item.quantity} x {item.price} </div>
              <div><button onClick={() => removeFromCart(item.id)}>-</button></div>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <p>Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;