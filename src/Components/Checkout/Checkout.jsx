import React, { useState } from 'react';
import {  useNavigate} from 'react-router-dom';

import './Checkout.css';

const CheckoutPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      alert("Your order will be shipped shortly. Thank you for purchasing from sSs car dealership");
      
    }, 2000);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        /><br /><br />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
        /><br /><br />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          required
        ></textarea><br /><br />

        <label htmlFor="purchaseDate">Date of Purchase:</label>
        <input
          type="date"
          id="purchaseDate"
          name="purchaseDate"
          required
        /><br /><br />

        <label htmlFor="carName">Car Name:</label>
        <input
          type="text"
          id="carName"
          name="carName"
          required
        /><br /><br />

        <label htmlFor="carType">Car Type:</label>
        <input
          type="text"
          id="carType"
          name="carType"
          required
        /><br /><br />
      
        <div className="aaj">
          <button  type="submit">Submit</button>
          
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
