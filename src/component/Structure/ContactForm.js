import React from "react";
import "../Style/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <img
        src={require("../assets/sss5.webp")} 
        alt="Contact"
        className="contact-image"
      />

      <div className="form-container">
        <h1>Get in Touch</h1>
        <div className="input-container">
          <input type="text" placeholder="Name" />
          <div className="icon"></div> {/* Name icon */}
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <div className="icon"></div> {/* Email icon */}
        </div>
        <div className="input-container">
          <input type="tel" placeholder="Phone" />
          <div className="icon"></div> {/* Phone icon */}
        </div>
        <div className="input-container">
          <textarea placeholder="Message"></textarea>
        </div>
        <button className="submit-button">Submit Now</button>
        <div className="line"></div>
        <div className="icons-container">
          <div className="icon">&#x1F4DE;</div> {/* Phone icon */}
          <div className="icon">&#x2709;</div> {/* Email icon */}
          <div className="icon">&#x1F3F3;</div> {/* Instagram icon */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
