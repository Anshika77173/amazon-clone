import React,{useState} from 'react'
import './login.css';
import {Link} from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn= e =>{
        e.preventDefault();
        // some fancy firebase login shitttttt.....
    }
    const register=e=>{
        e.preventDefault();
        // do some fancy register shitttttttt.....
    }
     
  return (

    <div className='login'>
    <Link to='/'>
      <img className='login__logo' src="amazon1.jpg" />
      </Link> 
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password ' value={password} onChange={e=>setPassword(e.target.value)} />
            
            <button  type ='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE conditions of Use $Sale.Please see our privacy notice,our Cookies Notice and our Interest-Based Ads Notice. </p>
        <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
