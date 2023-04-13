import React from 'react'
import './product.css'
import { useStateValue } from '../../ContextProvider';

function Items({id, product_name, price, currency, thumb, ratings}) {

    const [{ }, dispatch] = useStateValue();

    const handleClick = () => {
        dispatch({
            type : 'Add_to_Cart',
            item : {
                id: id,
                product_name,
                price,
                currency,
                thumb,
                ratings
            }
        });
    };
  return (
    <>
      <div className='card'>
        <div className='product_info'>
            <p className='product_name'>{product_name}</p>
            <div className='productinfo_group'>
            <p className='product__price'>{price} <span>{currency}</span></p>
            <p className='ratings'>{ratings}</p>
            
            <img className='product_img' src={thumb}  alt='img'/>
       
            <button type='button' className='product_button' onClick={handleClick} >Add to Cart</button>
            </div>
        </div>
        </div>
    </>
    
  );
}

export default Items
