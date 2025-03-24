// Configuration for the Intersection Observer
const observerOptions = {
  root: null,        
  rootMargin: '0px', 
  threshold: 0.2     
};

// Create an Intersection Observer instance to handle scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.tech-stack, .preview, .about, .creator-preview');
  sections.forEach(section => observer.observe(section));
});