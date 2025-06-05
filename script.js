// Create a new IntersectionObserver to watch when elements enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Check if the element is in view (intersecting the viewport)
    if (entry.isIntersecting) {
      // Add the 'show' class to trigger animation or visibility
      entry.target.classList.add("show");

      // Remove the 'hidden' class so the animation doesn't reset
      entry.target.classList.remove("hidden");
    }
  });

}, {
  // When 40% of the element is visible, trigger the observer callback
  threshold: 0.4,

  // Adjusts the bottom trigger point by 50px (delays when the animation starts)
  rootMargin: "0px 0px -50px 0px"
});

// Select all elements with the 'hidden' class (these are the ones we want to animate)
const hiddenElements = document.querySelectorAll(".hidden");

// Start observing each hidden element so we can animate it when it enters the viewport
hiddenElements.forEach(el => observer.observe(el));
