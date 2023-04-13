import React from 'react'
import { Link } from 'react-router-dom'

import './utils.css';
function Orders() {

  return (
    <div>
   
       <Link to="/" className="header__Link">
                <div className="header__option">
                    <span className="header__optionLineone">Returns</span>
                    <span className="header__optionLinetwo">& Orders</span>
                </div>
            </Link>
            
    </div>
  )
}

export default Orders

