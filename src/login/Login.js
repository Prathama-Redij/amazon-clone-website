import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import './Login.css'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const login = e => {
        e.preventDefault(); //this stops refresh

        //to do login logic...
         auth.signInWithEmailAndPassword(email, password)
         .then((auth) => {
            //logged in successfully
            navigate("/");
         })
         .catch(e => alert(e.message))
    }

    // const register = e => {
    //     e.preventDefault(); //this stops refresh

    //     //to do register logic...
    //     auth
    //     .createUserWithEmailAndPassword(email, password)

    //     .then((auth) => {
    //         //create user and logged in, redirect to homepage
    //         navigate("/");
    //     })
    //     .catch(e => alert(e.message))
    // }



  return (
    <div className='login'>
    <Link>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
    </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input className='input' value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter-EmailId' />

                <h5>Password</h5>
                <input className='input' value={password}  onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Enter-Password' />

                <button type='submit' onClick={login} className='login_signInButton'>Sign-In</button>
                <p>
                    By Signing-in you agree to my Conditions of Service Agreement. For
                    more info see our privacy Notice, our cookies Notice and gather data.
                 </p>
                <Link to="/sign-up">
                <button type='button'  className='login_registerButton'>Create Your Amazon Account</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Login
