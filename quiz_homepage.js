document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('fade-container');

  // Force browser to register the initial state first
  requestAnimationFrame(() => {
    container.classList.add('visible');
  });
});
