import React from 'react';
import '../style/home.css';
import '../style/font.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="background">
      <div className="content">
        <h1 class='f1'>Welcome to WEBCAM CHECKER !!</h1>
        <p>Webcam Checker is your go-to resource for ensuring that your webcam is functioning optimally. In an age where video communication is vital, we provide a simple and effective tool to test your webcam’s performance with just a few clicks. Our mission is to help users avoid technical glitches and enhance their online experience, whether for work, education, or personal connections.</p>  

        <p>We prioritize your privacy and convenience, ensuring that no data is collected during your tests. Our user-friendly interface makes it easy for everyone, regardless of technical expertise, to assess their webcam's quality quickly. Join us in making video communication seamless and reliable—test your webcam today!</p>
      </div>
      <center>
      <Link to="/Cam">
        <button class="button-78">CHECK CAMERA</button>
      </Link>
      </center>
    </div>
  );
}

export default Home;