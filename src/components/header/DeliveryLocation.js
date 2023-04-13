import React from 'react'
import { Link } from 'react-router-dom'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './DeliveryLocation.css'
import './utils.css';

function DeliveryLocation() {
  return (
   
      <Link to="/" className="header__Link">
                <div className=".header__option">
                {/* <div className='div_address'> */}
                    {/* <span className="header__optionLineone">Hello</span> */}
                   
                    <span className="header__optionLinetwo ">
                    <PlaceOutlinedIcon className='location__size' sx={{fontSize: 18}} />
                    {/* <FmdGoodIcon sx={{fontSize: 16}}/> */}
                   </span>
                
                    <span className='header__optionLinetwo'> Select your Address</span>
                    {/* <div> */}
                   
                   {/* </div> */}
                   </div>
                {/* </div> */}
            </Link>


  )
}

export default DeliveryLocation
