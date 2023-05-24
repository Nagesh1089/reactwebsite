import React from 'react';

import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Messgae from './Messgae';
import Footer from './Footer';
import Login from './Login';
import Records from './Records';
import { BrowserRouter,Routes,Route} from 'react-router-dom';



import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      
      
          <Header />
          
      <Routes>
        <Route path="/home" element={<Home />}>
                 <Route path="records" element={<Records />}/>
        </Route>
         
          <Route path="/about" element={<About />} />
          <Route path="/records" element={<Records />}/>
          <Route path="/contact" element={<Contact />} />

          <Route path="/message" element={<Messgae />} />


          <Route path="/login" element={<Login />} />

         
        
      </Routes>
   
                       

      <Footer />
          
    </div>
    </BrowserRouter>
   
  )
}

export default App