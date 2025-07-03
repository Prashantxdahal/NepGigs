import React from 'react';
import './ImageCard.css';
import sampleImage from './assets/sample-image.png'; // 👈 Replace with your actual image path

const ImageCard = () => {
  return (
    <div className="image-card-container">
      <div className="image-wrapper">
        <img src={sampleImage} alt="Uploaded Design" className="styled-image" />
      </div>
      <h2 className="image-title">Your Creative Design</h2>
      <p className="image-description">
        This layout displays your uploaded image in a clean, centered card style with styled text.
      </p>
    </div>
  );
};

export default ImageCard;
