let draggedElement = null; // Variable to store the element being dragged

// Function to handle dragging start
function onDragStart(event) {
  draggedElement = event.target; // Save the element being dragged
  event.dataTransfer.setData('text/plain', event.target.id); // Save its ID
  event.dataTransfer.dropEffect = 'move'; // Visual indication that it's moving
}

// Function to handle the drop event on the map
function onDrop(event) {
  event.preventDefault();
  const mapRect = document.querySelector('.map-container').getBoundingClientRect();

  // Get the coordinates of the drop relative to the map
  const x = event.clientX - mapRect.left;
  const y = event.clientY - mapRect.top;

  // If this is the first time the element is being dropped, append it to the map
  if (!draggedElement.classList.contains('dropped')) {
    draggedElement.classList.add('dropped'); // Add a class to prevent multiple appends
    document.querySelector('.map-container').appendChild(draggedElement); // Move to the map
  }

  // Move the element to the drop location
  draggedElement.style.position = 'absolute';
  draggedElement.style.left = `${x - draggedElement.offsetWidth / 2}px`;
  draggedElement.style.top = `${y - draggedElement.offsetHeight / 2}px`;

  // Clear the dragged element after drop
  draggedElement = null;
}

// Function to allow dragging over the map
function onDragOver(event) {
  event.preventDefault(); // Necessary to allow the drop
}

// Make hero images draggable
function makeDraggable(item) {
  item.setAttribute('draggable', true); // Enable the draggable attribute
  item.addEventListener('dragstart', onDragStart); // Attach the drag start event
}

// Attach draggable behavior to all character images
const characters = document.querySelectorAll('.character-image');
characters.forEach((character) => {
  makeDraggable(character); // Make each hero image draggable
});

// Attach the drop event to the map container
const mapContainer = document.querySelector('.map-container');
mapContainer.addEventListener('drop', onDrop); // Handle the drop event
mapContainer.addEventListener('dragover', onDragOver); // Handle dragging over the map

// Interact.js for post-drop movement
interact('.dropped').draggable({
  inertia: true, // Smooth dragging
  restrict: {
    restriction: '.map-container', // Restrict dragging within the map
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  onmove: function (event) {
    const target = event.target;

    // Get the updated coordinates based on drag movement
    const dataX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const dataY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // Move the element with transform for smooth dragging
    target.style.transform = `translate(${dataX}px, ${dataY}px)`;

    // Save the new coordinates
    target.setAttribute('data-x', dataX);
    target.setAttribute('data-y', dataY);
  }
});
