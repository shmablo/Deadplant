import React from "react";
import "./Playbook.css"; // Import the CSS file

const Playbook = () => {
  return (
    <div className="playbook-container">
      <div className="legend-container">
        <div className="legend-header">
          <span className="legend-icon-header">ICON</span>
          <span className="legend-description-header">DESCRIPTION</span>
        </div>
        <div className="legend-item">
          <img src="shop.png" alt="Legend 1" className="legend-image" />
          <span className="legend-description">SHOP</span>
        </div>
        <div className="legend-item">
          <img src="easyCamp.png" alt="Legend 2" className="legend-image" />
          <span className="legend-description">Easy Camp</span>
        </div>
        <div className="legend-item">
          <img src="medCamp.png" alt="Legend 3" className="legend-image" />
          <span className="legend-description">Medium Camp</span>
        </div>
        <div className="legend-item">
          <img src="hardCamp.png" alt="Legend 4" className="legend-image" />
          <span className="legend-description">Hard Camp</span>
        </div>
        <div className="legend-item">
          <img src="midBoss.png" alt="Legend 5" className="legend-image" />
          <span className="legend-description">Mid Boss</span>
        </div>
        <div className="legend-item">
          <img src="soulUrn.png" alt="Legend 6" className="legend-image" />
          <span className="legend-description">Soul Urn</span>
        </div>
        <div className="legend-item">
          <img src="TP.png" alt="Legend 7" className="legend-image" />
          <span className="legend-description">Teleporter</span>
        </div>
      </div>
      <div className="map-container">
        <img src="DLMAP.png" alt="Game Map" className="map-image" />
      </div>
      <div className="character-container">
        {/* Add 21 character images */}
        {Array.from({ length: 21 }).map((_, index) => (
          <img
            key={index}
            src={`/tier-images/image${index + 1}.png`} // Updated to .png
            alt={`Character ${index + 1}`}
            className="character-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Playbook;