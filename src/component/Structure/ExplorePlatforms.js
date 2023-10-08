// src/components/ExplorePlatforms.js

import React from "react";
import WhyChooseRinZ from "./WhyChooseRinZ"
import { BsLaptop, BsSearch, BsBriefcase } from "react-icons/bs"; // Import Bootstrap Icons
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "../Style/ExplorePlatforms.css";

const ExplorePlatforms = () => {
  return (
    <div className="explore-platforms">
      <h1 id="heading">Explore Our Platforms unique features</h1>
      <div className="card-container">
        <div className="card">
          <div className="icon-container">
            <BsLaptop className="icon" size={200} />
          </div>
          <h2>Wide Range of Services</h2>
          <p>
            Find everything from web development to Marketing
            under one roof. Our platform offers a diverse
            array of tech services.
          </p>
        </div>
        <div className="card">
          <div className="icon-container">
            <BsSearch className="icon" />
          </div>
          <h2>Instant Search</h2>
          <p>
            Get connected to top tech professionals within 
            moments. Our intuitive search function ensures 
            quick access.
          </p>
        </div>
        <div className="card">
          <div className="icon-container">
            <BsBriefcase className="icon" />
          </div>
          <h2>Quality Scoring</h2>
          <p>
            We maintain high service standards. Our unique 
            scoring system ensures you receive top-notch quality from professionals.
          </p>
        </div>
      </div>
      <WhyChooseRinZ/>
    </div>
    
  );
};

export default ExplorePlatforms;
