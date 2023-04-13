import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import "./SignUp.css";


function SignUp() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const register = e => {
        e.preventDefault(); //this stops refresh

        //to do register logic...
        auth
        .createUserWithEmailAndPassword(email, password)

        .then((auth) => {
            //create user and logged in, redirect to homepage
            navigate("/");
        })
        .catch(e => alert(e.message))
    }

  return (
    <div className='sign-up'>
      <Link>
        <img className='Signup_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
    </Link>

    <div className='signup_container'>
            <h1>Sign Up</h1>
            <form>
                <h5>E-mail</h5>
                <input className='input' value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter-EmailId' />

                <h5>Password</h5>
                <input className='input' value={password}  onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Enter-Password' />

                
                <p>
                By enrolling your mobile phone number, 
                you consent to receive automated security notifications via text message from Amazon. 
                Message and data rates may apply
                 </p>
                <Link to="/sign-up">
                <button type='button' onClick={register}  className='signup_registerButton'>Sign-Up</button>
                </Link>
            </form>
            <p>Already have an Account? 
            <Link to="/login"><span className='backto_signin'>Sign In</span></Link>
            </p>
        </div>

    </div>
  )
}

export default SignUp
