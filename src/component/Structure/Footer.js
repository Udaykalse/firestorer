import React from 'react';
import '../Style/Footer.custom.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-1">
        <div className="logo">RicoZ</div>
        <div className="connecting">Connecting Adounce</div>
      </div>
      <div className="col-2">
        <h2>Company</h2>
        <ul>
          <li>Service</li>
          <li>About Us</li>
          <li>Course</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="col-3">
        <h2>Service</h2>
        <ul>
          <li>Web Development</li>
          <li>Performance Marketing</li>
          <li>Social Media Marketing</li>
          <li>App Development</li>
          <li>Graphic Design</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div className="col-4" id='col4'>
        <h2 id='col4heading'>Email Us</h2>
        <p>Rico123@gmail.com</p>
        <h2 id='col4heading'>Contact Us</h2>
        <p>+91-9876543210</p>
        {/* Social media icons can be added here */}
      </div>
      <div className="col-5">
        <h2 id='col5'>SUBSCRIBE TO NEWSLETTER</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
        
        <div className="icons-container">
          <div className="icon">&#x1F4DE;</div> 
          <div className="icon">&#x2709;</div>
          <div className="icon">&#x1F3F3;</div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
