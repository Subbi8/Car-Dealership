import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/hero_image2.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1> Diwali Offers for you</h1>
            <p>On All Products</p>
            
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>

        </div>
      
    </div>
  )
}

export default Offers
