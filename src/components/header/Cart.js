import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Orders from './Orders';
import Languages from './Languages'
import './Cart.css'
import './utils.css';
import Account from './Account';
import { useStateValue } from '../../ContextProvider';


function Cart() {

const [{ cart }] = useStateValue();
// console.log(cart);
  return (
    <div className='header__nav'>
  
     {/* <Languages /> */}
      <Account />
      <Orders />

       <Link to="/checkout" className="header__Link">
                <div className="header__cart">
                    <ShoppingCartIcon className="header__optionLineone" sx={{fontSize: 34}} />
                    <span className=" cart__count">{cart?.length}</span>
                </div>
                
            </Link>

      
            
    </div>
  )
}

export default Cart
