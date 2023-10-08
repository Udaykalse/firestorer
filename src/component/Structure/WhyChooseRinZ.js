// src/components/WhyChooseRinZ.js

import React from "react";
import {
  BsPeople,
  BsCheck,
  BsPeopleFill,
  BsClock,
  BsBriefcaseFill,
} from "react-icons/bs"; // Import Bootstrap Icons
import "../Style/WhyChooseRinZ.css"; // Import your CSS file for styling
import CourseComponent from "./CourseComponent";

const WhyChooseRinZ = () => {
  return (
    <div className="why-choose-rinz">
      <h1 id="Heading">Why Choose RinZ</h1>
      <div className="content">
        <div className="left">
          {/* Add the background image through CSS */}
        </div>
        <div className="right">
          <div className="feature">
            <BsPeople className="icon" />
            <div className="feature-content">
              <h2 id="headingone">Vast Professional Network</h2>
              <p id="one">
                Connect with a vast network of top professionals in various
                industries.
              </p>
            </div>
          </div>
          <div className="feature">
            <BsCheck className="icon" />
            <div className="feature-content">
              <h2 id="headingtwo">Quality You Can Trust</h2>
              <p id="paratwo">Expect high-quality services from our trusted professionals.</p>
            </div>
          </div>
          <div className="feature">
            <BsPeopleFill className="icon" />
            <div className="feature-content">
              <h2 id="headingone">Effortless Collaboration</h2>
              <p>Collaborate seamlessly with professionals for your projects.</p>
            </div>
          </div>
          <div className="feature">
            <BsClock className="icon" />
            <div className="feature-content">
              <h2 id="headingthree">Save Time and Effort</h2>
              <p>Efficiently find the right professionals and save valuable time.</p>
            </div>
          </div>
          <div className="feature">
            <BsBriefcaseFill className="icon" />
            <div className="feature-content">
              <h2 id="headingFour">Another Benefit</h2>
              <p id="fourpara">Another description for a benefit you offer.</p>
            </div>
          </div>
        </div>
      </div>
      <CourseComponent/>
    </div>
  );
};

export default WhyChooseRinZ;
