import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from "./component/Contact/Contact";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import About from "./component/About";

import "./App.css"; // Import CSS for general styling

function App() {
  return (
      <BrowserRouter > 
      <div className="app-main-container">

      
      <Navbar />
      <Routes>
      < Route path="/" element={<Home />} />
      <Route path ="/about" element ={<About/>} />
      <Route path ="/contact" element ={<Contact/>} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
