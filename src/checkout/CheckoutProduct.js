import React, {useState} from 'react'
import { useStateValue } from '../ContextProvider';

const quantities = [
  'Qty 1',
  ' 2',
  ' 3',
  ' 4',
  ' 5',
  ' 6',
  ' 7',
  ' 8',
  ' 9',
  ' 10',
]

function CheckoutProduct({id, product_name, price, currency, thumb, ratings}) {
  const [quantity, setQuantity] = useState(0);

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
            //remove item from cart
            dispatch ({
                type: "REMOVE FROM CART",
                id: id,
            });


    };
  return (

   <>
    <div className='checkout_product'>
    <img className='CheckoutProduct_img' src={thumb} alt=""/>


    <div className='CheckoutProduct_info'>
    <p className='ChecoutProduct_name'>{product_name}</p>

    <p className='CheckoutProduct_price'>
        <small>{currency}</small>
        <strong>{price}</strong>
        <strong>{ratings}</strong>
    </p>

    <select
        className="qty__select"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      >
        {quantities.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))}
      </select>

    <button onClick={removeFromCart} >Remove From Cart</button>
    </div>

    
      
    </div>
    <hr/>
    </>
  )
}

export default CheckoutProduct


