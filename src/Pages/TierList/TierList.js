import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./TierList.css";

const ItemType = "ITEM";

// Component for draggable items (images)
const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`draggable-item ${isDragging ? "dragging" : ""}`}
    >
      <img src={item.image} alt={`Item ${item.id}`} />
    </div>
  );
};

// Drop target for tier levels
const TierRow = ({ label, items, onDropItem }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (draggedItem) => onDropItem(draggedItem.id, label),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`tier-row ${label} ${isOver ? "over" : ""}`}>
      <h3>{label}</h3>
      <div className="tier-items">
        {items.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const TierList = () => {
  // Initial items array
  const initialItems = [
    { id: 1, image: "/tier-images/image1.png" },
    { id: 2, image: "/tier-images/image2.png" },
    { id: 3, image: "/tier-images/image3.png" },
    { id: 4, image: "/tier-images/image4.png" },
    { id: 5, image: "/tier-images/image5.png" },
    { id: 6, image: "/tier-images/image6.png" },
    { id: 7, image: "/tier-images/image7.png" },
    { id: 8, image: "/tier-images/image8.png" },
    { id: 9, image: "/tier-images/image9.png" },
    { id: 10, image: "/tier-images/image10.png" },
    { id: 11, image: "/tier-images/image11.png" },
    { id: 12, image: "/tier-images/image12.png" },
    { id: 13, image: "/tier-images/image13.png" },
    { id: 14, image: "/tier-images/image14.png" },
    { id: 15, image: "/tier-images/image15.png" },
    { id: 16, image: "/tier-images/image16.png" },
    { id: 17, image: "/tier-images/image17.png" },
    { id: 18, image: "/tier-images/image18.png" },
    { id: 19, image: "/tier-images/image19.png" },
    { id: 20, image: "/tier-images/image20.png" },
    { id: 21, image: "/tier-images/image21.png" },
  ];

  const [items, setItems] = useState(initialItems);

  const [tiers, setTiers] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
  });

  const handleDropItem = (itemId, tierLabel) => {
    const draggedItem = items.find((item) => item.id === itemId);

    setTiers((prevTiers) => ({
      ...prevTiers,
      [tierLabel]: [...prevTiers[tierLabel], draggedItem],
    }));

    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleReset = () => {
    setTiers({
      S: [],
      A: [],
      B: [],
      C: [],
    });

    setItems(initialItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="tier-list-container">
        {/* Left side for tier levels */}
        <div className="tier-columns">
          {["S", "A", "B", "C"].map((tier) => (
            <TierRow
              key={tier}
              label={tier}
              items={tiers[tier]}
              onDropItem={handleDropItem}
            />
          ))}
        </div>

        {/* Right side for draggable items in a 3x7 grid */}
        <div className="grid-items-column">
          <h2>Heroes</h2>
          <div className="grid-item-list">
            {items.map((item) => (
              <DraggableItem key={item.id} item={item} />
            ))}
          </div>

          <div className="reset-button-container">
            <button onClick={handleReset} className="reset-button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TierList;
