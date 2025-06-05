document.addEventListener("DOMContentLoaded", () => {

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    }
  });
}, {
  threshold: 0.2, // 20% of the element must be visible
  rootMargin: "0px 0px -50px 0px" // pushes the trigger point further down
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
});