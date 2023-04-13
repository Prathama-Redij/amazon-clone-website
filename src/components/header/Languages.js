import React from 'react'
// import 'flag-icon-css/css/flag-icon.min.css';
import { Link } from 'react-router-dom';
import './Languages.css'



function Languages() {
  return (
    <div>
    
        <Link to="/login" className="header__Link">
                <div className="header__option">
                <span classname="flag-icon flag-icon-in"></span>
                
                {/* <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            /> */}
                {/* <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            /> */}
                    {/* <img className="country__Icon" src={CountryIcon} alt="contryIcon"></img> */}
                    <span className="header__optionLineone">En</span>
                    {/* <span className="header__optionLinetwo">Sign In</span> */}
                </div>
            </Link>
            
    </div>
  )
}

export default Languages
