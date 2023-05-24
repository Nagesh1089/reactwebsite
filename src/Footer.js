import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
      
      <h1>Footer</h1>
      
      <Link to="https://www.linkedin.com/in/nagesh-sontakke-897602230/"><LinkedInIcon /></Link>
      <Link to="https://www.facebook.com/watch/?ref=tab"><FacebookIcon /></Link>

     
{/* WhatsApp icon */}
      <a
        href="https://wa.me/918830228043"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>

      
{/* WhatsApp icon */}


      </div>
  )
}

export default Footer