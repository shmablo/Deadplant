import React, { useState } from "react";
import "./Playbook.css"; // Import the CSS file

const Playbook = () => {
  // State to track dropped characters
  const [droppedCharacters, setDroppedCharacters] = useState([]);

  // Handle drag start for character images from the right panel
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("characterIndex", index);
    e.dataTransfer.setData("isNew", true); // Flag to identify new character drops
  };

  // Handle drop on the map, adding the character to the state
  const handleDrop = (e) => {
    e.preventDefault();
    const isNew = e.dataTransfer.getData("isNew");
    const characterIndex = e.dataTransfer.getData("characterIndex");

    // Get drop position relative to the map container
    const mapRect = e.target.getBoundingClientRect();
    const xPos = e.clientX - mapRect.left;
    const yPos = e.clientY - mapRect.top;

    // Limit position to ensure characters stay within the map
    const maxWidth = mapRect.width - 50; // Adjust for character width
    const maxHeight = mapRect.height - 50; // Adjust for character height

    // Ensure x and y positions are within the bounds of the map
    const limitedX = Math.min(Math.max(xPos, 0), maxWidth);
    const limitedY = Math.min(Math.max(yPos, 0), maxHeight);

    if (isNew) {
      // Add new character to the map
      setDroppedCharacters([
        ...droppedCharacters,
        { index: characterIndex, x: limitedX, y: limitedY }
      ]);
    } else {
      // Update position of an existing character
      const droppedIndex = e.dataTransfer.getData("droppedIndex");
      setDroppedCharacters((prev) =>
        prev.map((char, idx) =>
          idx === parseInt(droppedIndex)
            ? { ...char, x: limitedX, y: limitedY }
            : char
        )
      );
    }
  };

  // Allow dropping on the map
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Handle drag-and-drop into the garbage bin to remove characters
  const handleDeleteDrop = (e) => {
    e.preventDefault();
    const droppedIndex = e.dataTransfer.getData("droppedIndex");

    // Filter out the character from droppedCharacters
    setDroppedCharacters((prev) =>
      prev.filter((_, idx) => idx !== parseInt(droppedIndex))
    );
  };

  // Handle drag start for dropped characters
  const handleDroppedCharacterDragStart = (e, index) => {
    e.dataTransfer.setData("droppedIndex", index);
    e.dataTransfer.setData("isNew", false); // Flag to indicate it's an existing character
  };

  return (
    <div className="playbook-container">
      {/* Legend section */}
      <div className="legend-container">
        <div className="legend-header">
          <span className="legend-icon-header">ICON</span>
          <span className="legend-description-header">DESCRIPTION</span>
        </div>
        <div className="legend-item">
          <img src="shop.png" alt="Shop" className="legend-image" />
          <span className="legend-description">SHOP</span>
        </div>
        <div className="legend-item">
          <img src="easyCamp.png" alt="Easy Camp" className="legend-image" />
          <span className="legend-description">Easy Camp</span>
        </div>
        <div className="legend-item">
          <img src="medCamp.png" alt="Medium Camp" className="legend-image" />
          <span className="legend-description">Medium Camp</span>
        </div>
        <div className="legend-item">
          <img src="hardCamp.png" alt="Hard Camp" className="legend-image" />
          <span className="legend-description">Hard Camp</span>
        </div>
        <div className="legend-item">
          <img src="midBoss.png" alt="Mid Boss" className="legend-image" />
          <span className="legend-description">Mid Boss</span>
        </div>
        <div className="legend-item">
          <img src="soulUrn.png" alt="Soul Urn" className="legend-image" />
          <span className="legend-description">Soul Urn</span>
        </div>
        <div className="legend-item">
          <img src="TP.png" alt="Teleporter" className="legend-image" />
          <span className="legend-description">Teleporter</span>
        </div>
      </div>

      {/* Map section */}
      <div className="map-container" onDrop={handleDrop} onDragOver={allowDrop}>
        <img src="DLMAP.png" alt="Game Map" className="map-image" />
        {droppedCharacters.map((char, i) => (
          <img
            key={i}
            src={`/tier-images/image${parseInt(char.index) + 1}.png`}
            alt={`Character ${parseInt(char.index) + 1}`}
            className="character-image dropped-character"
            draggable
            onDragStart={(e) => handleDroppedCharacterDragStart(e, i)}
            style={{
              position: "absolute",
              left: `${char.x}px`,
              top: `${char.y}px`,
              width: "50px", // Resize when dropped on the map
              pointerEvents: "auto" // Allow mouse events on dropped characters
            }}
          />
        ))}
      </div>

      {/* Character selection section */}
      <div className="character-container">
        {Array.from({ length: 21 }).map((_, index) => (
          <img
            key={index}
            src={`/tier-images/image${index + 1}.png`}
            alt={`Character ${index + 1}`}
            className="character-image"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, index)}
          />
        ))}
      </div>

{/* Garbage bin for deleting characters */}
<div
  className="garbage-bin"
  onDrop={handleDeleteDrop}
  onDragOver={allowDrop}
>
  🗑️
</div>
    </div>
  );
};

export default Playbook;
