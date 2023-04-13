// import React from 'react'
// import './product.css'
// import { useStateValue } from '../../StateProvider';

// function Product({id, title, image, price, ratings}) {

//   const [{cart}, dispatch ] = useStateValue();

// const addToCart = () => {
// add items to basket
// dispatch({
//   type: 'ADD_TO_CART',
//   item: {
//     id: id,
//     title: title,
//     image: image,
//     price: price,
//     ratings: ratings,


//   },
// }); 
// };

//   return (
//     <div className='product'>
//     <div className='product_info'>
//     <p>{title}</p>

//     <p className='product__price'>
//       <small>₹</small>
//       <strong>{price}</strong>
//     </p>
//       <div  className='product__ratings'>
//         {
//           Array(ratings)
//           .fill()
//           .map((_) => (
//             <>

//             <p>⭐</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            
//             </>
//           ))
//         }
//       </div>
//     </div>
    
//         <img  className="product_img" src= {image} alt="hammer_img" />
//         <button className='product_button' onClick={addToCart} >Add to Cart</button>
//     </div>
//   )
// }

// export default Product
