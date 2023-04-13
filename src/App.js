import React, { useEffect } from 'react';
import HomePage from './pages/home';
import Login from './login/Login';
import Header from './components/header';
import Checkout from './checkout/Checkout';
import Menubar from './menu';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { useStateValue } from './ContextProvider';
import { auth } from './firebase';
import SignUp from './login/SignUp';


function App() {

  const [{ user }, dispatch] = useStateValue();

//this <<<<<<<POWERFULL
//pieace of code which runs on a given condition

useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser) {
      //user loggedin
      dispatch({
        type: "SET_USER",
        user: authUser,
      })
    }
    else
    {
      //user is out
      dispatch({
        type: "SET_USER",
        user: null,
      })
    }
  })

  return () => {
    //any cleanup operations go in here....
    unsubscribe();
  }
}, [])

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if(authUser) {
       //user loggedin
       dispatch({
         type: "CREATE_USER",
         user: authUser,
       })
     }
     else
     {
       //user is out
       dispatch({
         type: "CREATE_USER",
         user: null,
       })
     }
   })
 
   return () => {
     //any cleanup operations go in here....
     unsubscribe();
   }
 }, [])

console.log("USER IS>>>>>", user);
  return (
    
    <Router>
    {/* <Header />
    <Menubar /> */}
 
    <div className="App">

        <Routes>
        <Route path="/checkout" 
        element={<> <Header /> <Menubar /><Checkout/> </>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" 
        element={<> <Header /> <Menubar /> <HomePage/> </> } />
        </Routes>
     
    </div>
    </Router>
    
 );

}

export default App;
