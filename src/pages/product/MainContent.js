import React, { useState } from 'react'
import './product.css';
import product_card from './productData'
import Items from './Items';




const MainContent = () => {

  const [item, setItem] = useState(product_card);
    
           
    // console.log(product_card);
    // const listItems = product_card.map((item) => 
    
    // <div className='card' key={item.id}>
      
    //     <div className='product_info'>
    //         <h6>{item.product_name}</h6>
    //         <p className='product__price'>{item.price} <span>{item.currency}</span></p>

    //         <div>
    //         <img className='product_img' src={item.thumb}  alt='img'/>
    //     </div>
    //         <button type='button' className='product_button' >Add to Cart</button>
    //     </div>
    // </div>


    // ) ;
   

  return (
    
        <div className='product'>
        {
          item.map((curItem) => {
              return <Items key={ curItem.id } {...curItem} />
          })
        }
      
    </div>

  
    
  )

  }
export default MainContent
