import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../store/ItemContext';
import '../styles/Cart.css'


const Cart = () => {

  const itemCtx = useContext(ItemContext);

  const [isCartEmpty, setIsCartEmpty] = useState(itemCtx.items.length === 0);

  useEffect(() => {
    setIsCartEmpty(itemCtx.items.length === 0)
  }, [itemCtx.items])
  // console.log(itemCtx.items);

  const totalPrice = itemCtx.items.reduce((total, item) => {
    // const price = parseInt(item.price);
    // const quantity = parseInt(item.quantity, 10);
    // console.log(`Item: ${item.pizzaName}, Price: ${price}, Quantity: ${quantity}`)
    return total + (item.price * item.quantity)
  }, 0);


  const clickEvent = () => {
    console.log('button clicked')
  }


  return (
    <div className='cart-body'>
      {itemCtx.items.length === 0 ? (<p className='empty-cart-message'>The Cart is empty !</p>) :
        <ul>
          {itemCtx.items.map((item) => (
            // console.log(item)
            <li key={item.id} className='cart-list-items'>
              <p>{item.pizzaName} - {item.quantity} X ${item.price}</p>
              <p className='cart-item-actions'>
                <span className='remove' onClick={() => itemCtx.removeItem(item.id)}>-</span>
                <span>{item.quantity}</span>
                <span className='add' onClick={() => itemCtx.addItem(item)}>+</span>
              </p>
            </li>
          ))}

        </ul>

      }
      <span className='totalCartPrice'>Total : ${totalPrice.toFixed(2)}</span>
      <button
        className={`checkout-btn ${isCartEmpty ? 'disable' : ''}`}
        disabled={isCartEmpty}
        onClick={clickEvent}
      >
        Checkout
      </button>
    </div>
  )
}

export default Cart
