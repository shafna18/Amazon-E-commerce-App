import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css'

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <h1 className='title'>Cart</h1>
      <div>
        {cart.length === 0 ? (
          <div className='empty-cart'>Your cart is empty</div>
        ) : (
          cart.map((item, index) => (
            <div className='cart-item' key={index}>
              <img src={item.image} alt={item.title} className='cart-item-img' height={100} style={{ marginRight: '10px' }} />
              <div className='cart-item-title'>{item.title}</div>
              <div className='cart-item-price'>${item.price}</div>
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button className='save-cart'>Save Item</button>
      </div>
    </div>
  );
};

export default Cart;
