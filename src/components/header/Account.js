import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../ContextProvider';
import {auth} from '../../firebase';

import './utils.css';

function Account() {
  const [{ cart, user }] = useStateValue();

  console.log(cart);

  console.log(user);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
       <Link to={!user && "/login"} className="header__Link">
                <div onClick={login} className="header__option">
                    <span className="header__optionLineone">Hello, {user && user.email}</span>

                    <span className="header__optionLinetwo"> {user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>
    </div>
  )
}

export default Account
