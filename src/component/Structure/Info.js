// src/components/TwoImagesSection.js

import React from "react";
import "../Style/info.css"; // Import your CSS file for styling

const TwoImagesSection = () => {
  return (
    <div className="two-images-section">
      <div className="left-content">
        <h1>Discover top professionals in minutes</h1>
        <h4>
          Streamline your business needs with Ricoz - Your all-in-one tech
          service hub
        </h4>
        <button style={{borderRadius : "22px"}} className="get-started-button">Get Started</button>
      </div>
      <div className="right-images">
        <div className="right-image1"></div>
        <div className="right-image2"></div>
      </div>
    </div>
  );
};

export default TwoImagesSection;
