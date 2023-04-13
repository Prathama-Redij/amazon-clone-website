import React from 'react'
import Logo from './Logo'
import DeliveryLocation from './DeliveryLocation'
import Search from './Search';
import Cart from './Cart';
import { useStateValue } from '../../ContextProvider';

import './index.css'





function Header() {

  const [{ cart, user }] = useStateValue();

  console.log(cart);

  console.log(user);
  // console.log(cart);

  return (
    <div className='header'>
      <Logo />
      <DeliveryLocation />
      <Search />
      <Cart />
      
    </div>
  )
}

export default Header
