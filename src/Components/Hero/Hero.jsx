import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image5.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW WHIPS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
          <p></p>
            

          </div>
          <p>Cars</p>
          <p>For Everyone</p>
        </div>
      </div>
      <div className="hero-right">
      <img src={hero_image} alt=" "/>

      </div>
    </div>
  )
}

export default Hero
