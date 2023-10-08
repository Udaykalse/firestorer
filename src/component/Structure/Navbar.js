// src/components/Navbar.js

import React from 'react';
import '../Style/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar" style={{padding : "1em 2em"}} >
      <div className="logo">
        <h3>rico <span>Z</span></h3>
        <h6>Connecting Advicence</h6>
      </div>
      <ul className="nav-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Courses</a></li>
      </ul>
      <button style={{borderRadius : "22px"}} className="sign-up-button">Sign Up</button>
    </nav>
  );
};

export default Navbar;
