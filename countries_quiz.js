// Map country aliases to official names
const countryAliases = {
  "Antigua": "Antigua and Barbuda",
  "Bosnia Herzegovina": "Bosnia and Herzegovina",
  "Bosnia": "Bosnia and Herzegovina",
  "CAR": "Central African Republic",
  "Cabo Verde": "Cape Verde",
  "Congo": "Democratic Rep. of the Congo",
  "DRC": "Democratic Rep. of the Congo",
  "Democratic Republic of the Congo": "Democratic Rep. of the Congo",
  "Republic of the Congo": "Rep. of the Congo",
  "Ivory Coast": "Cote d'Ivoire",
  "Cote D Ivoire": "Cote d'Ivoire",
  "Cote Divoire": "Cote d'Ivoire",
  "Cote D'Ivoire": "Cote d'Ivoire",
  "Czechia": "Czech Republic",
  "Swaziland": "Eswatini",
  "Guinea Bissau": "Guinea-Bissau",
  "Burma": "Myanmar",
  "NZ": "New Zealand",
  "Korea North": "North Korea",
  "Macedonia": "North Macedonia",
  //
  "St Kitts": "St. Kitts and Nevis",
  "St Kitts And Nevis": "St. Kitts and Nevis",
  "Saint Kitts": "St. Kitts and Nevis",
  "Saint Kitts and Nevis": "St. Kitts and Nevis",
  //
  "St Lucia": "St. Lucia",
  "Saint Lucia": "St. Lucia",
  //
  "St Vincent": "St. Vincent and the Grenadines",
  "St Vincent and the Grenadines": "St. Vincent and the Grenadines",
  "Saint Vincent": "St. Vincent and the Grenadines",
  "Saint Vincent and the Grenadines": "St. Vincent and the Grenadines",
  //
  "Sao Tome and Principe": "Sao Tome and Principe",
  "Korea South": "South Korea",
  "East Timor": "Timor-Leste",
  "Timor Leste": "Timor-Leste",
  "Trinidad": "Trinidad and Tobago",
  "Turkiye": "Turkey",
  "UAE": "United Arab Emirates",
  "UK": "United Kingdom",
  "USA": "United States",
  "US": "United States",
  "United States of America": "United States",
  "Vatican": "Vatican City"
  // add more as needed
};

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Rep. of the Congo", "Democratic Rep. of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "St. Kitts and Nevis", "St. Lucia", "St. Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const continents = {
  "Americas": [
    "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "St. Kitts and Nevis", "St. Lucia", "St. Vincent and the Grenadines", "Trinidad and Tobago", "United States", "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
  ],
  "Europe": [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"
  ],
  "Asia": [
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Timor-Leste", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
  ],
  "Africa": [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Cote d'Ivoire", "Democratic Rep. of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rep. of the Congo", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
  ],
  "Oceania": [
    "Australia", "Micronesia", "Fiji", "Kiribati", "Marshall Islands", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"
  ]

};


// Create lookup for valid inputs (countries + aliases)
const inputToCountry = {};
countries.forEach(c => inputToCountry[c.toLowerCase()] = c);
for (const alias in countryAliases) {
  inputToCountry[alias.toLowerCase()] = countryAliases[alias];
}

// DOM references
const input = document.getElementById('answer');
const results = document.getElementById('results');
const score = document.getElementById('score');
const svg = document.getElementById('world-map-svg');
const guessed = new Set();
score.textContent = `Countries Named:   0/${countries.length}`;

/* // --- ZOOM + PAN FEATURE (Buffered Scroll + Auto-Center + Bounds Lock) ---

let baseViewBox = svg.getAttribute("viewBox").split(" ").map(Number);
let currentViewBox = [...baseViewBox];

let zoomLevel = 1; // 1 = 100%
const minZoom = 1;
const maxZoom = 8;
let targetZoom = zoomLevel; // For buffered zooming
let zoomBuffer = 0; // Store scroll input

let isAnimating = false;
let isPanning = false;
let startPoint = { x: 0, y: 0 };
let startViewBox = [...baseViewBox];
let dragThreshold = 3;
let dragged = false;

svg.style.cursor = "default";

// --- Helper: Clamp panning so map never goes out of bounds ---
function clampViewBox(vb) {
  const [x, y, w, h] = vb;
  const [bx, by, bw, bh] = baseViewBox;

  // Limit boundaries — prevent showing outside base map
  let clampedX = Math.min(Math.max(x, bx), bx + bw - w);
  let clampedY = Math.min(Math.max(y, by), by + bh - h);

  return [clampedX, clampedY, w, h];
}

// --- PANNING ---
svg.addEventListener("mousedown", (e) => {
  if (zoomLevel === 1 || isAnimating) return;
  isPanning = true;
  dragged = false;
  startPoint = { x: e.clientX, y: e.clientY };
  startViewBox = svg.getAttribute("viewBox").split(" ").map(Number);
  svg.style.cursor = "grabbing";
});

svg.addEventListener("mousemove", (e) => {
  if (!isPanning || zoomLevel === 1 || isAnimating) return;

  const dx = e.clientX - startPoint.x;
  const dy = e.clientY - startPoint.y;

  if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) dragged = true;

  const rect = svg.getBoundingClientRect();
  const scaleX = startViewBox[2] / rect.width;
  const scaleY = startViewBox[3] / rect.height;

  let newX = startViewBox[0] - dx * scaleX;
  let newY = startViewBox[1] - dy * scaleY;

  const clamped = clampViewBox([newX, newY, startViewBox[2], startViewBox[3]]);
  svg.setAttribute("viewBox", clamped.join(" "));
  currentViewBox = clamped;
});

["mouseup", "mouseleave"].forEach(evt => {
  svg.addEventListener(evt, () => {
    isPanning = false;
    svg.style.cursor = zoomLevel > 1 ? "grab" : "default";
  });
});

// --- BUFFERED SCROLL ZOOM ---
let lastWheelTime = 0;

svg.addEventListener("wheel", (e) => {
  e.preventDefault();
  const now = Date.now();

  // Combine rapid scrolls into one smooth animation
  if (now - lastWheelTime < 200) {
    zoomBuffer += e.deltaY;
  } else {
    zoomBuffer = e.deltaY;
  }
  lastWheelTime = now;

  if (!isAnimating) processZoomBuffer(e);
}, { passive: false });

function processZoomBuffer(e) {
  if (zoomBuffer === 0) return;

  const delta = zoomBuffer;
  zoomBuffer = 0;

  const zoomDirection = delta < 0 ? 1 : -1;
  const zoomFactor = zoomDirection > 0 ? 1.5 : 1 / 1.5;

  targetZoom = Math.min(maxZoom, Math.max(minZoom, zoomLevel * zoomFactor));
  if (targetZoom === zoomLevel) return;

  isAnimating = true;

  const rect = svg.getBoundingClientRect();
  // Mouse coords relative to current viewBox, not base
  const [curX, curY, curW, curH] = currentViewBox;
  const mouseX = curX + ((e.clientX - rect.left) / rect.width) * curW;
  const mouseY = curY + ((e.clientY - rect.top) / rect.height) * curH;

  const startViewBox = svg.getAttribute("viewBox").split(" ").map(Number);
  let targetViewBox;

  if (targetZoom === minZoom) {
    // Zooming out fully → reset to centered base view
    targetViewBox = [...baseViewBox];
  } else {
    const targetWidth = baseViewBox[2] / targetZoom;
    const targetHeight = baseViewBox[3] / targetZoom;

    const scale = zoomLevel / targetZoom;
    const targetX = mouseX - (mouseX - startViewBox[0]) * scale;
    const targetY = mouseY - (mouseY - startViewBox[1]) * scale;

    targetViewBox = [targetX, targetY, targetWidth, targetHeight];
  }

  // Clamp before animating
  targetViewBox = clampViewBox(targetViewBox);

  const duration = 400;
  const startTime = performance.now();

  function animateZoom(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const interpolated = startViewBox.map((start, i) =>
      start + (targetViewBox[i] - start) * ease
    );

    const clamped = clampViewBox(interpolated);
    svg.setAttribute("viewBox", clamped.join(" "));
    currentViewBox = clamped;

    if (t < 1) {
      requestAnimationFrame(animateZoom);
    } else {
      zoomLevel = targetZoom;
      currentViewBox = clampViewBox(targetViewBox);
      isAnimating = false;
      svg.style.cursor = zoomLevel > 1 ? "grab" : "default";

      // Continue animating if more scroll buffered mid-animation
      if (zoomBuffer !== 0) processZoomBuffer(e);
    }
  }

  requestAnimationFrame(animateZoom);
}
// --- END ZOOM + PAN FEATURE --- */








// Handle guesses as user types
input.addEventListener('input', () => {
  const rawGuess = input.value.trim().toLowerCase();
  const matchedCountry = inputToCountry[rawGuess];

  if (matchedCountry && !guessed.has(matchedCountry)) {
    guessed.add(matchedCountry);
    updateScoreDisplay(matchedCountry);
    colorCountryOnMap(matchedCountry);
    flashInput(true); // correct guess

    // Clear the input automatically
    input.value = '';

    // Check for win condition
    if (guessed.size === countries.length) {
      triggerWinCondition();
    }
  }
});
// Optional: still allow Enter key to submit guesses if user prefers
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const rawGuess = input.value.trim().toLowerCase();
    const matchedCountry = inputToCountry[rawGuess];

    if (matchedCountry && !guessed.has(matchedCountry)) {
      guessed.add(matchedCountry);
      updateScoreDisplay(matchedCountry);
      colorCountryOnMap(matchedCountry);
      flashInput(true); // correct guess
    } else {
      flashInput(false); // incorrect guess
    }

    input.value = '';
  }
});

// Handle hover tooltips on countries
const tooltip = document.getElementById('tooltip');
let lastHovered = null; // track currently highlighted country

svg.querySelectorAll('path, polygon, g').forEach(path => {
  const titleEl = path.querySelector('title');
  const countryName = path.getAttribute('title') || path.id || (titleEl ? titleEl.textContent : null);
  if (!countryName) return;

  path.addEventListener('mousemove', e => {
    let displayText;
    if (countryName === 'Western Sahara') {
      displayText = 'Western Sahara';
    } else {
      displayText = guessed.has(countryName) ? countryName : '???';
    }
    tooltip.textContent = displayText;
    tooltip.style.left = e.clientX + 10 + 'px';
    tooltip.style.top = e.clientY - 20 + 'px';
    tooltip.style.opacity = 1;

    // Highlight the hovered country
    if (lastHovered && lastHovered !== path) {
      lastHovered.classList.remove('country-hovered');
    }
    path.classList.add('country-hovered');
    lastHovered = path;
  });

  path.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
    path.classList.remove('country-hovered');
    lastHovered = null;
  });
});




// Create tables for each continent
const tablesContainer = document.getElementById('continent-tables');

Object.keys(continents).forEach(continent => {
  const sorted = [...continents[continent]].sort((a, b) => a.localeCompare(b));

  const section = document.createElement('div');
  section.className = 'continent-section';

  const title = document.createElement('h3');
  title.textContent = continent;
  section.appendChild(title);

  const table = document.createElement('table');
  table.id = `table-${continent.toLowerCase().replace(/\s/g, '-')}`;

  const tbody = document.createElement('tbody');
  sorted.forEach(c => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = '';
    cell.dataset.country = c;
    row.appendChild(cell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  section.appendChild(table);
  tablesContainer.appendChild(section);
});

// TIMER
const timerElement = document.getElementById('timer');
let seconds = 0;
let timerInterval = null;

// GIVE UP BUTTON
const giveUpButton = document.getElementById('giveUpButton');
let giveUpConfirm = false;

if (giveUpButton) {
  giveUpButton.addEventListener("click", () => {

    // First click: ask "Are you sure?"
    if (!giveUpConfirm && giveUpButton.textContent === "Give Up") {
      giveUpButton.textContent = "Are you sure?";
      giveUpConfirm = true;

      // Reset to original state after 3 seconds if they don't click again
      setTimeout(() => {
        if (giveUpButton.textContent === "Are you sure?") {
          giveUpButton.textContent = "Give Up";
          giveUpConfirm = false;
        }
      }, 3000);

    }

    // Second click: confirm give up
    else if (giveUpConfirm && giveUpButton.textContent === "Are you sure?") {
      // Reveal all remaining countries
      revealRemainingCountries(); // your existing function

      // Stop the timer and disable input
      pauseTimer();
      input.disabled = true;
      setTimerColor('giveup');

      // Change button to "Play Again"
      giveUpButton.textContent = "Play Again";
      giveUpConfirm = false;
    }

    // Third click: Play Again
    else if (giveUpButton.textContent === "Play Again") {
      resetGame();
      giveUpButton.textContent = 'Give Up';
      giveUpConfirm = false;
    }

  });
} else {
  console.warn('Give Up button not found - please add <button id="giveUpButton">Give Up</button> next to the timer.');
}

// PREGAME POPUP
const pregameOverlay = document.getElementById('pregame-overlay');
const pregameBackBtn = document.getElementById('pregame-back-btn');
const startBtn = document.getElementById('start-game-btn');
const answerInput = document.getElementById('answer');

const pregameTitle = document.getElementById('pregame-title');
const gameTitle = document.getElementById('game-title');

// Get positions and sizes
const preRect = pregameTitle.getBoundingClientRect();
const gameRect = gameTitle.getBoundingClientRect();

// Calculate translation and scaling
console.log("Game Title left");
console.log(gameRect.left);


const translateX = gameRect.left - preRect.left;
const translateY = gameRect.top - preRect.top;
const scale = gameRect.width / preRect.width;

window.addEventListener('DOMContentLoaded', () => {

  pregameOverlay.style.display = 'flex';

  // Add class to trigger fade-in
  setTimeout(() => {
    pregameOverlay.classList.add('show');
    document.body.classList.add('show-back-btn');
  }, 100); // small timeout to ensure CSS transition applies

  // Pause the game until user clicks
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden'; // also lock html
  if (typeof pauseTimer === 'function') pauseTimer();
});

if (startBtn && pregameOverlay) {
  startBtn.addEventListener('click', () => {
    console.log("Game Started");

    if (answerInput) answerInput.focus();

    // Allow scrolling again
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    gameTitle.style.opacity = '1';
    /* // Recalculate bounding boxes *after* layout settles
    const preRect = pregameTitle.getBoundingClientRect();
    const gameRect = gameTitle.getBoundingClientRect();

    const translateX = gameRect.left - preRect.left;
    const translateY = gameRect.top - preRect.top;
    const scale = gameRect.width / preRect.width;

    console.log("Recalculated translation:", translateX, translateY, scale); */

    /* // Start the animation
    pregameTitle.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`; */

    // Fade transition
    

    // Overlay exit animation
    pregameOverlay.classList.add('exit');
    document.body.classList.add('game-started');
    pregameBackBtn.style.display = 'none'; // immediately removes it from layout

    const totalMs = Math.ceil((0.65 + (5 - 1) * 0.12) * 1000 + 80);

    setTimeout(() => {
      pregameOverlay.style.display = 'none';

      if (typeof startTimer === 'function') startTimer();
      if (answerInput) answerInput.focus();
    }, totalMs);
  });
}




// TESTING ONLY: Simulate a win
const winBtn = document.getElementById('win');
if (winBtn) {
  winBtn.addEventListener('click', () => {
    // Mark all countries as guessed
    countries.forEach(country => {
      if (!guessed.has(country)) {
        guessed.add(country);
        updateScoreDisplay(country);
        colorCountryOnMap(country);
      }
    });

    // Stop the timer and disable input
    pauseTimer();
    input.disabled = true;

    // Trigger the win popup or confetti (if you already have that code)
    triggerWinCondition();
  });
}


// WIN POP-UP
document.getElementById('play-again-btn').addEventListener('click', () => {
  resetGame();
});

document.getElementById('close-popup-btn').addEventListener('click', () => {
  const popup = document.getElementById('win-popup');
  popup.classList.add('hidden');
  document.body.style.overflow = ''; // re-enable scrolling
  document.documentElement.style.overflow = ''; // restore html scroll
  giveUpButton.textContent = "Play Again";
});

// ---------------------------------------------------------------------------------------------------
// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS 
// ---------------------------------------------------------------------------------------------------

// UPDATE TABLES
function updateTables(country, revealed = false) {
  for (const continent of Object.keys(continents)) {
    const table = document.getElementById(`table-${continent.toLowerCase().replace(/\s/g, '-')}`);
    if (!table) continue;
    const cell = table.querySelector(`td[data-country="${country}"]`);
    if (cell) {
      cell.textContent = country;
      if (revealed) cell.classList.add("revealed");
    }
  }
}

// Update score and guessed list
function updateScoreDisplay(country) {
  const total = countries.length;
  const guessedCount = guessed.size;

  // Calculate how many digits the total has (for 195 countries, this is 3)
  const maxDigits = total.toString().length;

  // Pad the current guessed count with spaces to match the max width
  const paddedGuessed = guessedCount.toString().padStart(maxDigits, ' ');

  //console.log(paddedGuessed);

  // Construct the text with consistent spacing
  score.textContent = `Countries Named: ${paddedGuessed}/${total}`;

  updateTables(country);
}


// Color the country on the SVG (only if it exists)
function colorCountryOnMap(countryName, isRevealed = false) {
  if (!svg) return;
  let found = false;

  const elements = svg.querySelectorAll('path, polygon, g');
  elements.forEach(el => {
    const title = (el.getAttribute('title') || el.id || '').toLowerCase();
    if (title === countryName.toLowerCase()) {
      // Base colors
      const baseColor = '#4caf50'; // normal correct color
      const flashColor = '#00dd00ff'; // bright green flash
      const revealColor = '#d32f2f'; // red for revealed

      if (isRevealed) {
        // If revealed, just apply red
        setElementColor(el, revealColor);
      } else {
        // Flash bright green, then fade to base color
        setElementColor(el, flashColor);
        setTimeout(() => {
          setElementColor(el, baseColor, true); // apply fade transition
        }, 150);
      }

      found = true;
    }
  });

  if (!found) {
    console.log(`No SVG object found for: ${countryName}`);
  }
}

// Helper to handle single or grouped elements
function setElementColor(el, color, smooth = false) {
  const targets = el.tagName.toLowerCase() === 'g'
    ? el.querySelectorAll('path, polygon')
    : [el];

  targets.forEach(child => {
    if (smooth) {
      child.style.transition = 'fill 0.8s ease';
    } else {
      child.style.transition = '';
    }
    child.style.fill = color;
  });
}

// INPUT BOX FLASH GREEN OR RED
function flashInput(isCorrect) {
  const input = document.getElementById('answer');

  // instantly change background
  input.style.transition = 'none'; // remove transition temporarily
  input.style.backgroundColor = isCorrect ? '#00ff00ff' : '#ff0000ff';

  // small delay before starting fade
  setTimeout(() => {
    input.style.transition = 'background-color 0.5s ease'; // restore transition
    input.style.backgroundColor = 'white'; // start fading back
  }, 100); // 100ms hold before fade
}

// REVEAL COUNTRIES AFTER GIVING UP
function revealRemainingCountries() {
  const guessedSet = (typeof guessed !== 'undefined') ? guessed
    : (typeof guessedCountries !== 'undefined') ? guessedCountries
      : new Set();

  let revealCount = 0;

  for (const continent of Object.keys(continents)) {
    const tableId = `table-${continent.toLowerCase().replace(/\s/g, '-')}`;
    const table = document.getElementById(tableId);
    if (!table) continue;

    for (const country of continents[continent]) {
      if (!guessedSet.has(country)) {
        guessedSet.add(country);
        revealCount++;

        // Fill on map as red instead of green
        colorCountryOnMap(country, true);

        // Fill the table cell and make it red
        const cell = table.querySelector(`td[data-country="${country}"]`);
        if (cell) {
          cell.textContent = country;
          cell.classList.add('revealed'); // revealed class = red text
        }
      }
    }
  }
}


// TRIGGER WIN CONDITION ALERT
function triggerWinCondition() {

  pauseTimer(); // stop the timer
  setTimerColor('win');

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const popup = document.getElementById('win-popup');
  const msg = document.getElementById('win-message');

  // Update popup text
  msg.textContent = `You named all ${countries.length} countries in ${mins}m ${secs}s!`;

  // Make popup visible
  popup.classList.remove('hidden');

  // Confetti effect
  // From left
  confetti({
    particleCount: 150,
    spread: 180,
    scalar: 2,
    angle: 0,
    startVelocity: 30,
    origin: { x: 0, y: 0.2 } // x = center horizontally, y = top
  });
  confetti({
    particleCount: 150,
    spread: 90,
    scalar: 2,
    angle: 0,
    startVelocity: 30,
    origin: { x: -0.1, y: 0.2 } // x = center horizontally, y = top
  });

  // From right
  confetti({
    particleCount: 150,
    spread: 180,
    scalar: 2,
    angle: 180,
    startVelocity: 30,
    origin: { x: 1, y: 0.2 }
  });
  confetti({
    particleCount: 150,
    spread: 90,
    scalar: 2,
    angle: 180,
    startVelocity: 30,
    origin: { x: 1.1, y: 0.2 }
  });

  // From top
  confetti({
    particleCount: 150,
    spread: 180,
    scalar: 2,
    angle: 270,
    origin: { x: 0.5, y: 0 }
  });

  /*   // Enable click-to-confetti mode
    const clickHandler = (e) => {
      confetti({
        particleCount: 40,
        spread: 360,
        startVelocity: 30,
        origin: {
          x: Math.max(0, Math.min(1, originX)),
          y: Math.max(0, Math.min(1, originY))
        }
      });
    };
    document.addEventListener('click', clickHandler); */
}

// TIMER FUNCTIONS
// Format time as MM:SS
function formatTime(sec) {
  const mins = Math.floor(sec / 60).toString().padStart(2, '0');
  const secs = (sec % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

// Update the displayed time
function updateTimerDisplay() {
  timerElement.textContent = formatTime(seconds);
}

// Start or resume the timer
function startTimer() {
  if (timerInterval) return; // already running
  timerInterval = setInterval(() => {
    seconds++;
    updateTimerDisplay();
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Reset the timer
function resetTimer() {
  pauseTimer();
  seconds = 0;
  updateTimerDisplay();
}

// Initialize display
updateTimerDisplay();

// RESET GAME
function resetGame() {
  // 1. Reset all SVG country fills
  svg.querySelectorAll('path, polygon, g').forEach(el => {
    el.style.fill = ''; // remove any fill
    el.classList.remove('country-hovered'); // remove hover highlight if any
  });

  // 2. Reset continent tables (assuming you have some DOM element that tracks scores)
  resetTables()

  // 3. Reset timer
  resetTimer();
  startTimer(); // you can call your existing timer start function
  setTimerColor(null);

  // 4. Reset guessed list
  guessed.clear();
  //score.textContent = `Countries Named: ${guessed.size}/${countries.length}`;
  updateScoreDisplay(null);

  // 5. Reset input field
  input.value = '';
  input.disabled = false;

  // 6. Reset game state flags
  giveUpButton.textContent = "Give Up";
  zoomedIn = false;
  svg.setAttribute("viewBox", originalViewBox);
  isPanning = false;
  svg.style.cursor = 'default';


  // 7. Hide win/give-up popups
  //const popups = document.querySelectorAll('.popup'); // assuming you have popup classes
  //popups.forEach(p => p.style.display = 'none');
  resetWinPopup();

  document.getElementById('answer').focus();
}

// RESET TABLES
function resetTables() {
  for (const continent of Object.keys(continents)) {
    const table = document.getElementById(`table-${continent.toLowerCase().replace(/\s/g, '-')}`);
    if (!table) continue;

    // Reset all table cells for this continent
    const cells = table.querySelectorAll('td[data-country]');
    cells.forEach(cell => {
      cell.textContent = '';         // Clear the country name
      cell.classList.remove('revealed'); // Remove the revealed styling
    });
  }
}

// RESET WIN POPUP
function resetWinPopup() {
  const popup = document.getElementById('win-popup');
  const msg = document.getElementById('win-message');

  // Hide popup and clear text
  popup.classList.add('hidden');
  msg.textContent = '';

  // Restore scrolling
  document.body.style.overflow = '';
  document.documentElement.style.overflow = ''; // restore html scroll

  // Optional: reset any confetti if you have one tied to this popup
}

// Set timer color based on game state
function setTimerColor(state) {
  timerElement.classList.remove('win', 'giveup');
  if (state === 'win') {
    timerElement.classList.add('win');
  } else if (state === 'giveup') {
    timerElement.classList.add('giveup');
  }
}

// --- ZOOM + PAN (Panzoom Integration) ---
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("world-map-svg");

  // Initialize Panzoom on the SVG
  const panzoom = Panzoom(svg, {
    maxScale: 30,          // Maximum 8x zoom
    minScale: 1,          // Default 1x (no zoom)
    contain: 'outside',   // Prevent panning outside bounds
    smoothScroll: false,  // Disable scroll inertia
    step: 0.5,            // Smoothness of wheel zoom increments
  });

  // Enable wheel zoom (scroll zoom)
  svg.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);

  // Optional: change cursor dynamically for better UX
  svg.style.cursor = "grab";
  svg.addEventListener("mousedown", () => (svg.style.cursor = "grabbing"));
  svg.addEventListener("mouseup", () => (svg.style.cursor = "grab"));

  // Optional: reset zoom with double click
  svg.addEventListener("dblclick", () => {
    panzoom.reset({ animate: true });
  });
});
