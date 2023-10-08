import React from 'react';
import '../Style/FeedbackComponent.css'; // Import the CSS file for styling

const FeedbackComponent = () => {
  return (
    <div className="feedback-container">
      <h1>Real Stories from Real Professionals</h1>
      <div className="feedback-cards">
        {/* Card 1 */}
        <div className="feedback-card">
        <img
        src={require("../assets/iU.webp")} 
        alt="Contact"
        className="contact-image"
      />
          <h3>Itachi Uchiha </h3>
          <p>student</p>
          <h2>"I recommend this to All"</h2>
          <p id='psecond'>As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs.</p>
        </div>


        <div className="feedback-card">
          <img
        src={require("../assets/eren-yeager.webp")} 
        alt="Contact"
        className="contact-image"
      />
          <h3>eren yeager</h3>
          <p>Developer</p>
          <h2>“The Support is Awesome”</h2>

          <p id='psecond'>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
        </div>


        <div className="feedback-card">
        <img
        src={require("../assets/dazai-osamu.webp")} 
        alt="Contact"
        className="contact-image"
      />
          <h3>dazai osamu</h3>
          <p>Student</p>
          <h2>“A Game Changer For Us”</h2>
          <p id='psecond'>I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
