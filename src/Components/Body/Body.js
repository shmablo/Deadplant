import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body-container">
      <h1>BODY</h1>
      <div className="image-container">
        <div className="haze-container">
          <img alt="agent1" src="haze.png" />
        </div>
        <div className="paradox-container">
          <img alt="agent2" src="paradox.png" />
          </div>
        </div>
        <div className="bottomText">
            <p>bottom text</p>
          </div>
      </div>
    
  );
};

export default Body;