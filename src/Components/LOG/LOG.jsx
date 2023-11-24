import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import './LOG.css'

const LOG = () => {
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:3000/altlogin",{
              email,password
          })
          .then(res=>{
              if(res.data==="exist"){
                  alert("User already exists")
              }
              else if(res.data==="notexist"){
                  history("/Ghar",{state:{id:email}})
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
        <h1>Sign Up</h1>
        <form action="POST">
          <div className="loginsignup-fields">
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
          </div>
          <button type="submit" onClick={submit} className='continue'>SIGN UP</button>
          
        </form>
        

      </div>
    </div>
  )
}

export default LOG
