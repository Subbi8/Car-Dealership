import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

const LoginSignup = () => {
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:3000/",{
              email,password
          })
          .then(res=>{
              if(res.data==="exist"){
                  history("/Ghar",{state:{id:email}})
              }
              else if(res.data==="notexist"){
                  alert("User have not sign up")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>LOG IN</h1>
        <form action="POST">
          <div className="loginsignup-fields">
            <input className='einput' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
            <input className='pinput' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
          </div>
          <button type="submit" onClick={submit} className='continue'>LOG IN</button>
          <p className='loginsignup-login'>Dont have an account?
            <span>
              <Link to='/altlogin'><button>SIGN UP</button></Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

