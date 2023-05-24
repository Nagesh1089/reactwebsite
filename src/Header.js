import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Records from './Records';
import { Height, Padding } from '@mui/icons-material';
import logoto from '../src/logoto.avif'
const Header = () => {
  return (
<div className='NavBar'>
 
  <nav>
  {/* <p><img src={logoto} style={{width:'10%' ,height:'10%'}} /></p> */}
    <ul className='List'>
        
        <li className='ListOne'><Link to="/home">Home</Link></li>
        <li className='ListOne'><Link to="/about">About</Link></li>
        <li className='ListOne'><Link to="/contact">Contact</Link></li>
        <li className='ListOne'><Link to="/message">Message</Link></li>
    </ul>
    {/* <button style={{textAlign: "right"}}><Link to="login">Login</Link></button> */}
    <Button variant="contained" color="success" type="submit" style={{textAlign: "right",paddingRight:"25px"}}><Link to="login">Login</Link></Button>

    <Button variant="contained" color="success"  style={{textAlign: "right",paddingLeft:"25px"}}><Link to="/home/records">Show Records</Link></Button>
    </nav>

    
</div>
  )
}

export default Header