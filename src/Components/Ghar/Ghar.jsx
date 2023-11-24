import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Ghar.css';

const Ghar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewSedan = () => {
    navigate('/sedan');
  };

  const handleViewSuv = () => {
    navigate('/suv');
  };

  const handleViewLux = () => {
    navigate('/lux');
  };



  return (
    <div className="homepage">
      <h1 className="welcome-message">
        Hello, {location.state.id}! Welcome to our Dealership
      </h1>
      <p className="thanks-message">Thanks for logging in.</p>
      <div className="additional-info">
        <p>Explore the latest car models</p>
        <button onClick={handleViewSedan}>View Sedan</button>
        <button onClick={handleViewSuv}>View SUV</button>
        <button onClick={handleViewLux}>View Luxury Cars</button>
        
      </div>
    </div>
  );
};

export default Ghar;

