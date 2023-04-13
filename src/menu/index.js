import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Menubar() {
  return (
    <div className='menu'>
      <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <MenuIcon />
               
                    <span className="menu_name">All</span>
                    
                </div>
            </Link>

            <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Set</span>
                  
                </div>
            </Link>

             <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Amazon mini TV</span>
                    
                </div>
            </Link>


             <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Best Sellers</span>
                    
                </div>
            </Link>

             <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Mobiles</span>
                 
                </div>
            </Link>

             <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Customer Service</span>
                    
                </div>
            </Link>

              <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Today's Deal</span>
                  
                </div>
            </Link> 

              <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Electronics</span>
                    
                </div>
            </Link> 
            
            <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Prime & Orders</span>
                  
                </div>
            </Link>

            <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <span className="menu_name">Amazon Pay</span>
           
                </div>
            </Link> 

      <div className='Sticker'>
      <Link to="/" className="menu__Link">
                <div className="menu__item">
                    <img className='amazon_img' src='https://cdn.vox-cdn.com/uploads/chorus_asset/file/22337486/new_icon.png' alt='pay_logo' />
                    <span className="menu_name">Shopping made easy |</span>
                    <span className="menu_name">Download the app Now</span>
                </div>
            </Link>
      </div>      
    </div>
  )
}

export default Menubar
