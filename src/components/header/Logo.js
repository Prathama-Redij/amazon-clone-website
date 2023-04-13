import React from 'react'
import './Logo.css';
import BrandLogo from '../../images/amazon-logo.png';
import { Link } from 'react-router-dom';



function Logo() {
  return (
    <div className='logo'>
       <Link to="/" className='amazon_logo'>
        <img className="header__logo" 
        src={BrandLogo}
        alt="logo" />
        {/* {country && <span className="logo__country">.{country}</span>} */}
        </Link>
    </div>
  )
}

export default Logo
