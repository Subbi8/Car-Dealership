import React,{ useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/log.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'




const Navbar = () => {

    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>car dealership</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link style={{ textDecoration:'none'}} to ='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('sedan')}}><Link style={{ textDecoration:'none'}} to ='/sedan'>SEDAN</Link>{menu==="sedan"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('suv')}}><Link style={{ textDecoration:'none'}} to ='/suv'>SUV</Link>{menu==="suv"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('lux')}}><Link style={{ textDecoration:'none'}} to ='/lux'>HATCHBACK</Link>{menu==="lux"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
