import React, { useState } from 'react';
import axios from 'axios';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    try {
      await axios.post('http://localhost:3001/subscribe', { email });
      alert('Thank you for signing up for our newsletter!');
    } catch (error) {
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={subscribe}>Subscribe here</button>
      </div>
    </div>
  );
};

export default NewsLetter;
