import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart} =useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img  className= 'productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-description">
              SPECIAL FESTIVAL OFFER
            </div>
          <div className="productdisplay-right-price-new">₹{product.new_price}
            </div>
            </div> 
            <div className="productdisplay-right-size">
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
              <div className="productdisplay-right-sizes">
              "Introducing our latest model, the [Car Model]. We are so confident in the quality and performance of this vehicle that we offer a 100% money-back guarantee. This means that if you're not completely satisfied with your purchase, we will refund your money, no questions asked.

Our commitment to excellence extends beyond just words – it's reflected in the genuine craftsmanship, cutting-edge technology, and superior engineering of every [Car Brand] vehicle. With [Car Model], you can expect an unparalleled driving experience, backed by our assurance of authenticity.
              </div>
            </div>
            
            <p className='productdisplay-right-category'>
              <span>Category:</span>Cars,Budget Cars,Family Cars
            </p>
          
        
      </div>
    </div>
  )
}

export default ProductDisplay
