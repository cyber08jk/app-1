import React from 'react';
import { Link } from 'react-router-dom';
import Webcam from '../Webcam';
import '../App.css';
function Cam() {
  return (
    
      <center>
      <h1 class="fc">THIS IS YOUR WEB CAM STATUS</h1>
      <Webcam/>
      <Link to="/Home">
        <button class="button-78">GO TO HOME!!</button>
      </Link>
      </center>
    
  );
}

export default Cam;