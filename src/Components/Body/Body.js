import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; //Import for pencil icon
import './Body.css';

const Body = () => {
  return (
    <div className="body-container">
      <video autoPlay loop muted className="background-video">
        <source src="deadlockGameplay.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <div className="text-container">
          <h1>Deadplant</h1>
          <p>The only <span className="highlight">Deadlock strategy tool</span> designed from
            <br /> the ground up for the competitive scene. Make teams,
            <br /> outsmart your opponents, and become a playmaker.
          </p>
          <Link to="/playbook">
            <button className="styled-button">
              <i className="fas fa-pencil-alt"></i> Start Creating
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Body;