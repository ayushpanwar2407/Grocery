import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
    </Routes>
   
    </>
  );
}

export default App;
