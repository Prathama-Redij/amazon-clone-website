import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import './CheckoutProduct.css'
import Subtotal from './Subtotal';
import { useStateValue } from '../ContextProvider';


function Checkout() {
    const [{ cart }] = useStateValue();
  return (
    <div className='checkout_page'>
    <div className='checout'>
    <h1>Shopping Cart</h1>
      <hr/>
      {cart?.length === 0? (
        <div className='shopping_cart'>
          <h2>Shopping Cart is Empty</h2>
          

          <p>You have no items in your cart to buy one or more items. click "Add to cart" next to the item.</p>
        </div>
      ) : (

        
        <div>
          {/* <h2 className='checkout_title'>Your Shopping Cart</h2> */}
        

      
          {/* //List out all of the Checkout Products */}
          {cart?.map((item) => (
              <CheckoutProduct key={ item.id }
                id={item.id}
                product_name={item.product_name}
                thumb={item.thumb}
                price={item.price}
                currency={item.currency}
                ratings={item.ratings}
              />
            ))}
            
            </div>
      )}
      
    </div>
    {cart.length > 0 && (
      <div className='checkout_right'>
      <Subtotal />

      </div>
    )}

    </div>
  );
}

export default Checkout