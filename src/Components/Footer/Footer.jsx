import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/log.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' />
        <p>sSs Car Dealers</p>
      </div>
      <ul className='footer-links'>
        <li><a href="https://www.google.co.in/maps/place/PES+University/@12.9349808,77.4750634,13z/data=!4m10!1m2!2m1!1spes+university!3m6!1s0x3bae3e468d8d36d3:0x694d74f6ac640acf!8m2!3d12.9350817!4d77.5360407!15sCg5wZXMgdW5pdmVyc2l0eZIBCnVuaXZlcnNpdHngAQA!16zL20vMDYwcjB3?entry=ttu" target="_blank" rel="noopener noreferrer">Office</a></li>
        <li><Link to='/About'>About</Link></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://instagram.com/ssscardealership?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://in.pinterest.com/sujay0620/?invite_code=395fe500cbb948e18eec591e02fa937d&sender=955255908370403631" target="_blank" rel="noopener noreferrer">
            <img src={pintester_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://chat.whatsapp.com/JGFpP0J942WBdwscdDDVic" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - sSs</p>
      </div>
    </div>
  );
};

export default Footer;
