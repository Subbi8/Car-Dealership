import React, { useEffect } from 'react';
import './About.css';
import about from '../Assets/about.jpeg';

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>From the Founders</h2>
        <img src={about} alt="Car Inspiration" className="about-image" />
        <p>
          At sSs Car Dealership, we are more than just a car dealership. We are a
          team of passionate founders dedicated to providing you with the
          finest automobiles and an unparalleled automotive experience.
        </p>
        <p>
          Our journey began with a simple yet powerful inspiration — the love
          for cars. We envisioned a space where car enthusiasts could find their
          dream rides, where innovation meets craftsmanship, and where every
          journey becomes an adventure.
        </p>
        <p>
          Behind every car on our platform is a story of dedication and hard
          work. We've collaborated with the best minds in the automotive industry
          to curate a collection that reflects our commitment to quality and
          excellence.
        </p>
        <p>
          Explore our selection and join us on this thrilling ride through the
          world of automobiles. We believe in the joy of driving, and we're
          excited to share that passion with you.
        </p>
        <p>
          Thank you for choosing sSs Car Dealership. Buckle up, and let the
          adventure begin!
        </p>
        
      </div>
    </div>
  );
};

export default About;

