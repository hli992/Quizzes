document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('pregame-overlay');

  // Force browser to register the initial state first
  requestAnimationFrame(() => {
    container.classList.add('visible');
  });
});

// Select the hypnosis button image
const hypnosisImg = document.querySelector('#hypnosis-button img');

let rotation = 0;     // current rotation in degrees
let rotateInterval;   // interval ID

// function to update transform (center + rotation)
function updateTransform() {
    hypnosisImg.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}

// start rotation on hover
document.querySelector('#hypnosis-button').addEventListener('mouseenter', () => {
    rotateInterval = setInterval(() => {
        rotation += 2; 
        updateTransform();
    }, 10);
});

// stop rotation on mouse leave
document.querySelector('#hypnosis-button').addEventListener('mouseleave', () => {
    clearInterval(rotateInterval); // stop incrementing rotation
});
