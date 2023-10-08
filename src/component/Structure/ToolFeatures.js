import React from 'react';
import '../Style/ToolFeatures.custom.css'; // Import the CSS file for styling

const ToolFeatures = () => {
  return (
    <div className="tool-features">
      <div className="feature">
        <div className="feature-icon">
          <img src="logo1_url" alt="Messaging Platform" />
        </div>
        <h2>Messaging Platform</h2>
        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <img src="logo2_url" alt="Collaborative Workspace" />
        </div>
        <h2>Collaborative Workspace</h2>
        <p>Experience the power of collaboration in our shared workspace together.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <img src="logo3_url" alt="Calendar Integration" />
        </div>
        <h2>Calendar Integration</h2>
        <p>Simplify your scheduling and time management with our calendar integration.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <img src="logo4_url" alt="CRM System" />
        </div>
        <h2>CRM System</h2>
        <p>Manage client relationships effectively with our user-friendly CRM system.</p>
      </div>

      <button className="explore-button">Explore Tools</button>
    </div>
  );
};

export default ToolFeatures;
