import React from 'react';
import logo from "../src/logo.jpg";
import { Outlet } from 'react-router-dom';
// import ReactWhatsapp from 'react-whatsapp';
import laptopphototwo from '../src/laptopphototwo.jpg';
const Home = () => {
  return (
    <div>
        
           <h1> Home</h1>
           <img src={logo} alt="aks" />

           <Outlet />

           <img src={laptopphototwo} alt="aks" style={{height:"0%"}}/>
            {/* <ReactWhatsapp number="+918830228043" message="Hello World!!!"/> */}
    </div>
  )
}

export default Home