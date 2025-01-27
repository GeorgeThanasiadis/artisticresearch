// Initialize Panzoom on the image inside the map-container
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const mapImage = document.getElementById('map-image');

    // Initialize Panzoom on the map-container
    const panzoom = Panzoom(mapImage, {
        maxScale: 20,  // Keep the maximum zoom level (scale up to 20x)
        minScale: 1,   // Keep the minimum zoom level (initial scale, no zoom out)
        contain: 'outside', // Make sure the image doesn't pan outside the container
        smoothScroll: false,  // Disable smooth scrolling to reduce lag
        ease: 'linear',  // Use linear easing for faster transitions
        startScale: 1,  // Set initial scale (optional)
    });

    // Enable pan and zoom functionality
    mapContainer.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent page scroll on wheel
        if (e.deltaY < 0) {
            panzoom.zoomIn();  // Zoom in when scrolling up
        } else {
            panzoom.zoomOut(); // Zoom out when scrolling down
        }
    });

    // Handle dragging (pan)
    mapContainer.addEventListener('mousedown', () => {
        mapContainer.style.cursor = 'grabbing'; // Change cursor while dragging
    });

    mapContainer.addEventListener('mouseup', () => {
        mapContainer.style.cursor = 'grab'; // Reset cursor when dragging stops
    });
});
