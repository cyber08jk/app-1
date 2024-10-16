// src/Webcam.js
import React, { useEffect, useRef } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let mediaStream = null;

    const getUserMedia = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    getUserMedia();

    return () => {
      if (mediaStream) {
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="video-container">
      <h2>Webcam=></h2>
      <div>
      <video ref={videoRef} autoPlay />
      </div>
    </div>
  );
};

export default Webcam;
