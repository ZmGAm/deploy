import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import View from './components/View';
import Localdevelop from'./components/Localdevelop';
// import Pool_c from './Pool_c';
import Pool_c from './components/Pool_c';
// gamer
function App() {
  return (
    <BrowserRouter>
      <div> 
        
        <Navbar />
        {/* Other components or elements */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      
        <Route path="/View" element={<View />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Pool_c" element={<Pool_c />} />
        <Route path="/Localdevelop" element={<Localdevelop />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;