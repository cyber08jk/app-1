
import React from 'react'
import './App.css';
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webcam from './Webcam';
import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage"
import Cam from "./pages/Cam";
function App() {
  return (
   
    <div >
       <nav>
        
       <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Cam" element={<Cam />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </nav>
    </div>
    
  );
}

export default App;
