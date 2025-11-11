// Map capital aliases to official names
const capitalAliases = {
  "St. John's": "St Johns",
  "Saint Johns": "St Johns",
  "Saint John's": "St Johns",
  "St. George's": "St Georges",
  "Saint Georges": "St Georges",
  "Saint George's": "St Georges",
  "Port au Prince": "Port-au-Prince",
  "Tegucigalpa": "Tegucigalpa/Comayaguela",
  "Comayaguela": "Tegucigalpa/Comayaguela",
  "Washington DC": "Washington, D.C.",
  "Washington": "Washington, D.C.",
  "La Paz": "La Paz/Sucre",
  "Sucre": "La Paz/Sucre",
  "Amsterdam": "Amsterdam/The Hague",
  "The Hague": "Amsterdam/The Hague",
  "Jakarta": "Jakarta/Nusantara",
  "Nusantara": "Jakarta/Nusantara",
  "Kuala Lumpur": "Kuala Lumpur/Putrajaya",
  "Putrajaya": "Kuala Lumpur/Putrajaya",
  "Colombo": "Colombo/Sri Jayawardenepura Kotte",
  "Sri Jayawardenepura Kotte": "Colombo/Sri Jayawardenepura Kotte",
  "Aden": "Aden/Sanaa",
  "Sanaa": "Aden/Sanaa",
  "Cotonou": "Cotonou/Porto-Novo",
  "Porto-Novo": "Cotonou/Porto-Novo",
  "Porto Novo": "Cotonou/Porto-Novo",
  "Gitega": "Gitega/Bujumbura",
  "Bujumbura": "Gitega/Bujumbura",
  "Yamoussoukro": "Yamoussoukro/Abidjan",
  "Abidjan": "Yamoussoukro/Abidjan",
  "Lobamba": "Lobamba/Mbabane",
  "Mbabane": "Lobamba/Mbabane",
  "Bloemfontein": "Bloemfontein/Cape Town/Pretoria",
  "Cape Town": "Bloemfontein/Cape Town/Pretoria",
  "Pretoria": "Bloemfontein/Cape Town/Pretoria",
  "Nuku alofa": "Nuku alofa",
  "Nukualofa": "Nuku alofa",
  "Guatemala": "Guatemala City",
  "Mexico": "Mexico City",
  "Panama": "Panama City",
  "Kuwait": "Kuwait City",
  "Vatican": "Vatican City",
  "Kiev": "Kyiv",
  "Thimpu": "Thimphu"
  // add more as needed
};

// 1. Data structure for easy mode
const easyModeData = {
  Americas: [
    { country: "Antigua and Barbuda", capital: "St Johns" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Bolivia", capital: "La Paz/Sucre" },
    { country: "Brazil", capital: "Brasilia" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Chile", capital: "Santiago" },
    { country: "Colombia", capital: "Bogota" },
    { country: "Costa Rica", capital: "San Jose" },
    { country: "Cuba", capital: "Havana" },
    { country: "Dominica", capital: "Roseau" },
    { country: "Dominican Republic", capital: "Santo Domingo" },
    { country: "Ecuador", capital: "Quito" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Grenada", capital: "St Georges" },
    { country: "Guatemala", capital: "Guatemala City" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Honduras", capital: "Tegucigalpa/Comayaguela" },
    { country: "Jamaica", capital: "Kingston" },
    { country: "Mexico", capital: "Mexico City" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Panama", capital: "Panama City" },
    { country: "Paraguay", capital: "Asuncion" },
    { country: "Peru", capital: "Lima" },
    { country: "St. Kitts and Nevis", capital: "Basseterre" },
    { country: "St. Lucia", capital: "Castries" },
    { country: "St. Vincent and the Grenadines", capital: "Kingstown" },
    { country: "Suriname", capital: "Paramaribo" },
    { country: "Trinidad and Tobago", capital: "Port of Spain" },
    { country: "United States", capital: "Washington, D.C." },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Venezuela", capital: "Caracas" }
  ],
  Europe: [
    { country: "Albania", capital: "Tirana" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Austria", capital: "Vienna" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "Greece", capital: "Athens" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Italy", capital: "Rome" },
    { country: "Kosovo", capital: "Pristina" },
    { country: "Latvia", capital: "Riga" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Malta", capital: "Valletta" },
    { country: "Moldova", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Netherlands", capital: "Amsterdam/The Hague" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Norway", capital: "Oslo" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Romania", capital: "Bucharest" },
    { country: "Russia", capital: "Moscow" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Spain", capital: "Madrid" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "United Kingdom", capital: "London" },
    { country: "Vatican City", capital: "Vatican City" }
  ],
  Asia: [
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Armenia", capital: "Yerevan" },
    { country: "Azerbaijan", capital: "Baku" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Cambodia", capital: "Phnom Penh" },
    { country: "China", capital: "Beijing" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Timor-Leste", capital: "Dili" },
    { country: "Georgia", capital: "Tbilisi" },
    { country: "India", capital: "New Delhi" },
    { country: "Indonesia", capital: "Jakarta/Nusantara" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Jordan", capital: "Amman" },
    { country: "Kazakhstan", capital: "Astana" },
    { country: "Kuwait", capital: "Kuwait City" },
    { country: "Kyrgyzstan", capital: "Bishkek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Lebanon", capital: "Beirut" },
    { country: "Malaysia", capital: "Kuala Lumpur/Putrajaya" },
    { country: "Maldives", capital: "Male" },
    { country: "Mongolia", capital: "Ulaanbaatar" },
    { country: "Myanmar", capital: "Naypyidaw" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "North Korea", capital: "Pyongyang" },
    { country: "Oman", capital: "Muscat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Philippines", capital: "Manila" },
    { country: "Qatar", capital: "Doha" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Singapore", capital: "Singapore" },
    { country: "South Korea", capital: "Seoul" },
    { country: "Sri Lanka", capital: "Colombo/Sri Jayawardenepura Kotte" },
    { country: "Syria", capital: "Damascus" },
    { country: "Tajikistan", capital: "Dushanbe" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "United Arab Emirates", capital: "Abu Dhabi" },
    { country: "Uzbekistan", capital: "Tashkent" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Yemen", capital: "Aden/Sanaa" }
  ],
  Africa: [
    { country: "Algeria", capital: "Algiers" },
    { country: "Angola", capital: "Luanda" },
    { country: "Benin", capital: "Cotonou/Porto-Novo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Gitega/Bujumbura" },
    { country: "Cameroon", capital: "Yaounde" },
    { country: "Cape Verde", capital: "Praia" },
    { country: "Central African Republic", capital: "Bangui" },
    { country: "Chad", capital: "N'Djamena" },
    { country: "Comoros", capital: "Moroni" },
    { country: "Cote d'Ivoire", capital: "Yamoussoukro/Abidjan" },
    { country: "Democratic Rep. of the Congo", capital: "Kinshasa" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Egypt", capital: "Cairo" },
    { country: "Equatorial Guinea", capital: "Malabo" },
    { country: "Eritrea", capital: "Asmara" },
    { country: "Eswatini", capital: "Lobamba/Mbabane" },
    { country: "Ethiopia", capital: "Addis Ababa" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambia", capital: "Banjul" },
    { country: "Ghana", capital: "Accra" },
    { country: "Guinea", capital: "Conakry" },
    { country: "Guinea-Bissau", capital: "Bissau" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libya", capital: "Tripoli" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Mali", capital: "Bamako" },
    { country: "Mauritania", capital: "Nouakchott" },
    { country: "Mauritius", capital: "Port Louis" },
    { country: "Morocco", capital: "Rabat" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "Rep. of the Congo", capital: "Brazzaville" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "Sao Tome and Principe", capital: "Sao Tome" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Seychelles", capital: "Victoria" },
    { country: "Sierra Leone", capital: "Freetown" },
    { country: "Somalia", capital: "Mogadishu" },
    { country: "South Africa", capital: "Bloemfontein/Cape Town/Pretoria" },
    { country: "South Sudan", capital: "Juba" },
    { country: "Sudan", capital: "Khartoum" },
    { country: "Tanzania", capital: "Dodoma" },
    { country: "Togo", capital: "Lome" },
    { country: "Tunisia", capital: "Tunis" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" }
  ],
  Oceania: [
    { country: "Australia", capital: "Canberra" },
    { country: "Micronesia", capital: "Palikir" },
    { country: "Fiji", capital: "Suva" },
    { country: "Kiribati", capital: "South Tarawa" },
    { country: "Marshall Islands", capital: "Majuro" },
    { country: "Nauru", capital: "Yaren" },
    { country: "New Zealand", capital: "Wellington" },
    { country: "Palau", capital: "Ngerulmud" },
    { country: "Papua New Guinea", capital: "Port Moresby" },
    { country: "Samoa", capital: "Apia" },
    { country: "Solomon Islands", capital: "Honiara" },
    { country: "Tonga", capital: "Nuku alofa" },
    { country: "Tuvalu", capital: "Funafuti" },
    { country: "Vanuatu", capital: "Port Vila" },
  ]
};

// Flatten all regions into a single array
let allCountries = Object.values(easyModeData).flat().map(c => ({
  ...c,
  guessed: false
}));

let currentCountry = null;

// ==== GLOBAL GAME STATE ====
window.guessed = new Set();
window.totalCapitals = 0;
let input;
let giveUpButton = document.getElementById('giveUpButton');;






// Create a lookup for capitals and their aliases
const inputToCapital = {};

// official capitals
Object.keys(easyModeData).forEach(continent => {
  easyModeData[continent].forEach(({ country, capital }) => {
    inputToCapital[normalize(capital)] = capital;
  });
});

// aliases
for (const alias in capitalAliases) {
  inputToCapital[normalize(alias)] = capitalAliases[alias];
}



// Tooltip setup
const tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('[data-tooltip]').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const text = e.target.getAttribute('data-tooltip');
    tooltip.textContent = text;
    tooltip.style.opacity = 1;
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  el.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  el.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});

// ==== GAME STATES ====
let isHardMode = false; // default
let isGameOver = false;       // whether the game has ended (win)
let isGiveUp = false;         // whether the player clicked "Give Up"

// ==== DOMCONTENTLOADED ====

let seconds = 0;
let timerInterval = null;
let timerElement = null; // declare globally



document.addEventListener('DOMContentLoaded', () => {


  const hardModeToggle = document.getElementById('difficulty-toggle');

  const toggle = document.getElementById('difficulty-toggle');
  if (!toggle) return;

  // Make sure global state is correct at start
  syncHardMode();

  // Listen for changes
  toggle.addEventListener('change', () => {
    syncHardMode();
    console.log(isHardMode ? "Hard Mode ON" : "Hard Mode OFF");
  });

  timerElement = document.getElementById('timer');
  startTimer();
  updateTimerDisplay();

  const tablesContainer = document.getElementById('continent-tables');
  input = document.getElementById('answer');


  // Populate tables
  populateCapitalTables(tablesContainer);
  window.totalCapitals = Object.values(easyModeData).flat().length;

  updateScore();

  // Input box setup
  input.value = '';
  input.placeholder = 'Type a capital city';
  input.autocomplete = 'off';

  updateUIForMode();

  // ==== INPUT HANDLING ====
  input.addEventListener('input', () => {
    const rawGuess = input.value.trim();
    const normalizedGuess = rawGuess.toLowerCase();
    const officialCapital = inputToCapital[normalizedGuess];

    // EASY MODE: accept any correct capital
    if (!isHardMode) {
      if (officialCapital && !guessed.has(officialCapital)) {
        const shouldClear = handleCapitalGuess(rawGuess);
        if (shouldClear) input.value = '';
      }
    }
    // HARD MODE: only accept current country's capital
    else {
      if (
        currentCountry &&
        officialCapital === currentCountry.capital &&
        !guessed.has(officialCapital)
      ) {
        const shouldClear = handleCapitalGuess(rawGuess);
        if (shouldClear) input.value = '';
      }
    }
  });

  // ==== ENTER KEY (fallback submission) ====
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const rawGuess = input.value.trim();
      const shouldClear = handleCapitalGuess(rawGuess);
      input.value = '';
      flashInput(false);
    }
  });



  // Show tooltip on hover
  skipButton.addEventListener('mouseenter', showSkipTooltip);
  skipButton.addEventListener('mousemove', showSkipTooltip);
  skipButton.addEventListener('mouseleave', hideSkipTooltip);

  // Pressing TAB triggers skip button if visible and enabled
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault(); // prevent default tab behavior (focus change)
      if (skipButton.style.display !== 'none' && !skipButton.disabled) {
        skipButton.click();
      }
    }
  });

  if (input) {
    // Attach the blur listener to the input box
    input.addEventListener('blur', keepInputFocused);
  }
});

const skipTooltip = document.getElementById('skip-tooltip');
const currentCountryEl = document.getElementById('current-country');
const skipButton = document.getElementById('skip-button');


// Handle skip button click
skipButton.addEventListener('click', () => {
  updateCurrentCountry();

  // Clear input
  input.value = '';
  input.focus();
});



// Initial display
updateCurrentCountry();

// Updated populateCapitalTables function to accept container
function populateCapitalTables(container) {
  container.innerHTML = ''; // clear previous content

  for (const continent in easyModeData) {
    const section = document.createElement('div');
    section.className = 'continent-section';

    const title = document.createElement('h3');
    title.textContent = continent;
    section.appendChild(title);

    const table = document.createElement('table');
    table.id = `table-${continent.toLowerCase().replace(/\s/g, '-')}`;

    const tbody = document.createElement('tbody');
    easyModeData[continent].forEach(({ country, capital }) => {
      const row = document.createElement('tr');

      const countryCell = document.createElement('td');
      countryCell.textContent = country;

      const capitalCell = document.createElement('td');
      capitalCell.dataset.capital = capital;
      capitalCell.dataset.filled = 'false';
      capitalCell.textContent = ''; // empty initially

      row.appendChild(countryCell);
      row.appendChild(capitalCell);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    section.appendChild(table);
    container.appendChild(section);
  }
}



// ==== GIVE UP BUTTON ====
giveUpButton = document.getElementById('giveUpButton');

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

      isGiveUp = true;
      updateCurrentCountry();

      // Reveal all remaining capitals
      revealRemainingCapitals(); // your existing function

      // Stop the timer and disable input
      pauseTimer();
      input.disabled = true;
      setTimerColor('giveup');
      disableSkipButton();


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
const startBtn = document.getElementById('start-game-btn');
const answerInput = document.getElementById('answer');
const pregameBackBtn = document.getElementById('pregame-back-btn');
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
    console.log("Game Started: ", isHardMode ? "Hard Mode" : "Easy Mode");

    if (answerInput) answerInput.focus();

    // Allow scrolling again
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    gameTitle.style.opacity = '1';

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

// TESTING ONLY: Simulate a win — reveal all as correctly guessed
const winBtn = document.getElementById('win');
if (winBtn) {
  winBtn.addEventListener('click', () => {
    // Reveal every remaining capital as correctly guessed
    const remainingCells = document.querySelectorAll('td[data-capital][data-filled="false"]');

    remainingCells.forEach(cell => {
      const capitalName = cell.dataset.capital;
      cell.textContent = capitalName;
      cell.dataset.filled = 'true';
      cell.classList.remove('revealed'); // remove red style if any
      cell.classList.add('correct');     // use your correct styling instead
      if (!window.guessed.has(capitalName)) window.guessed.add(capitalName);
    });

    // Update score, stop timer, and disable input
    updateScore();
    pauseTimer();
    input.disabled = true;

    // Trigger the win popup
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

// Update score and guessed list
function updateScore() {
  // Calculate total number of capitals across all continents
  const total = Object.values(easyModeData).flat().length;
  const guessedCount = guessed.size;

  // Keep width consistent by padding
  const maxDigits = total.toString().length;
  const paddedGuessed = guessedCount.toString().padStart(maxDigits, ' ');

  // Update score text
  const score = document.getElementById('score');
  if (score) {
    score.textContent = `Capitals Named: ${paddedGuessed}/${total}`;
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

// REVEAL CAPITALS AFTER GIVING UP
function revealRemainingCapitals() {
  for (const continent in easyModeData) {
    const tableId = `table-${continent.toLowerCase().replace(/\s/g, '-')}`;
    const table = document.getElementById(tableId);
    if (!table) continue;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const countryCell = row.children[0];
      const capitalCell = row.children[1];

      // If capital hasn't been filled yet
      if (capitalCell.dataset.filled === 'false') {
        capitalCell.textContent = capitalCell.dataset.capital;
        capitalCell.dataset.filled = 'true';
        capitalCell.classList.add('revealed');
        guessed.add(capitalCell.dataset.capital);
      }
    });
  }
}



// TRIGGER WIN CONDITION ALERT
function triggerWinCondition() {

  isGameOver = true;
  updateCurrentCountry();

  pauseTimer(); // stop the timer
  setTimerColor('win');
  disableSkipButton();

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const popup = document.getElementById('win-popup');
  const msg = document.getElementById('win-message');

  // Get total capitals dynamically
  const totalCapitals = Object.values(easyModeData).flat().length;

  // Calculate capitals per minute
  const totalMinutes = seconds / 60 || 1; // avoid divide by zero
  const rate = Math.round(totalCapitals / totalMinutes);

  // Update popup text
  msg.innerHTML = `
    You named all ${totalCapitals} capital cities in ${mins}m ${secs}s!<br>
    That's ${rate} capital cities per minute!
  `;

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
  // 1. Clear guessed capitals
  guessed.clear();
  console.log("Guess reset");

  // 2. Reset all continent tables
  for (const continent in easyModeData) {
    const tableId = `table-${continent.toLowerCase().replace(/\s/g, '-')}`;
    const table = document.getElementById(tableId);
    if (!table) continue;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const capitalCell = row.children[1];
      capitalCell.textContent = '';
      capitalCell.dataset.filled = 'false';
      capitalCell.classList.remove('revealed');
    });
  }
  console.log("Tables reset");

  // 3. Reset input box
  input.value = '';
  input.disabled = false;
  updateUIForMode();
  input.focus();
  console.log("Input box reset");

  // 4. Reset Give Up button
  giveUpButton.textContent = "Give Up";
  console.log("Give up button reset");

  // 5. Reset timer
  if (typeof resetTimer === 'function') resetTimer(); // stops and clears timer
  if (typeof startTimer === 'function') startTimer(); // starts fresh
  if (typeof setTimerColor === 'function') setTimerColor(null); // clear timer color
  console.log("Timer reset");

  // 6. Reset score display
  if (typeof updateScore === 'function') updateScore();

  // 7. Reset any popups
  if (typeof resetWinPopup === 'function') resetWinPopup();

  isGameOver = false;
  isGiveUp = false;

  // 8. Random new current country
  updateCurrentCountry();
  enableSkipButton();
}



// RESET TABLES
function resetTables() {
  for (const continent of Object.keys(continent)) {
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

// ==== HANDLE GUESS FUNCTION ====
function handleCapitalGuess(rawInput) {
  const guess = normalize(rawInput);
  const officialCapital = inputToCapital[guess];

  // HARD MODE: only accept the current country's capital
  if (isHardMode) {
    // If it doesn't match current country's capital, ignore completely
    if (!currentCountry || officialCapital !== currentCountry.capital) {
      return false; // don't clear input, no feedback
    }

    // Already guessed?
    if (guessed.has(officialCapital)) {
      return false; // don't clear input, no feedback
    }

    // CORRECT! Mark as guessed
    guessed.add(officialCapital);
    currentCountry.guessed = true;

    // Reveal capital in table
    const cells = document.querySelectorAll(`td[data-capital='${officialCapital}']`);
    cells.forEach(cell => {
      cell.textContent = officialCapital;
      cell.dataset.filled = 'true';
      cell.classList.remove('revealed');
    });

    // Update score
    updateScore();

    // Flash green for correct
    flashInput(true);

    // Advance to next country
    updateCurrentCountry();

    // Check win condition
    if (guessed.size === totalCapitals) {
      triggerWinCondition();
    }

    return true; // clear input
  } else {
    // EASY MODE
    // No match for guess
    if (!officialCapital) {
      flashInput(false);
      return true; // clear input
    }

    // Already guessed?
    if (guessed.has(officialCapital)) {
      flashInput(false);
      return true; // clear input
    }

    // Mark as guessed
    guessed.add(officialCapital);

    // Mark country as guessed
    if (currentCountry) {
      currentCountry.guessed = true;
    }

    // Reveal capital in table
    const cells = document.querySelectorAll(`td[data-capital='${officialCapital}']`);
    cells.forEach(cell => {
      cell.textContent = officialCapital;
      cell.dataset.filled = 'true';
      cell.classList.remove('revealed');
    });

    // Update score
    updateScore();

    // Flash green for correct
    flashInput(true);

    // Check win condition
    if (guessed.size === totalCapitals) {
      triggerWinCondition();
    }

    return true; // clear input
  }
}


function normalize(str) {
  return str.toLowerCase();
}

// Update to a new current country
function updateCurrentCountry() {
  // Assuming you have some flags like isGameOver or isGiveUp
  if (isGameOver || isGiveUp) {
    currentCountry = null;
    updateCountryDisplay(null); // blank display
    return;
  }

  // Otherwise, pick a new unguessed country
  currentCountry = pickRandomUnguessedCountry();
  updateCountryDisplay(currentCountry);
}

// Pick a random unguessed country
function pickRandomUnguessedCountry() {
  const unguessedCountries = allCountries.filter(c => !c.guessed);
  if (unguessedCountries.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * unguessedCountries.length);
  return unguessedCountries[randomIndex];
}

// Update displayed country name
function updateCountryDisplay(country) {
  if (!country) {
    currentCountryEl.textContent = '';
    return;
  }
  currentCountryEl.textContent = country.country;
}

// ==== UPDATE UI FUNCTION ====
function updateUIForMode() {
  const skipButton = document.getElementById('skip-button');
  const currentCountryEl = document.getElementById('current-country');
  const input = document.getElementById('answer');

  //syncHardMode();

  if (isHardMode) {
    skipButton.style.display = 'inline-block';
    currentCountryEl.style.display = 'inline-block';
    input.placeholder = "Type the capital city";

  } else {
    skipButton.style.display = 'none';
    currentCountryEl.style.display = 'none';
    input.placeholder = "Type a capital city";
  }
}



// ==== TOOLTIP FUNCTIONS (MODIFIED) ====
function showSkipTooltip(e) {
  if (!skipTooltip) return;

  // Use clientX/clientY for position relative to the viewport (which handles scrolling)
  skipTooltip.style.opacity = 1;
  skipTooltip.style.left = `${e.clientX + 15}px`; // position relative to viewport left
  skipTooltip.style.top = `${e.clientY + 15}px`;   // position relative to viewport top
}

function hideSkipTooltip() {
  if (!skipTooltip) return;
  skipTooltip.style.opacity = 0;
}

// Utility function to sync hard mode with toggle position
function syncHardMode() {
  const toggle = document.getElementById('difficulty-toggle');
  if (!toggle) return false; // toggle not found
  isHardMode = toggle.checked;
  updateUIForMode(); // update UI based on current mode
  return isHardMode;
}

// ==== DISABLE SKIP BUTTON ====
function disableSkipButton() {
  const skipButton = document.getElementById('skip-button');
  if (skipButton) {
    skipButton.disabled = true;
    skipButton.style.opacity = '0.5';
    skipButton.style.cursor = 'not-allowed';
  }
}

// ==== ENABLE SKIP BUTTON ====
function enableSkipButton() {
  const skipButton = document.getElementById('skip-button');
  if (skipButton) {
    skipButton.disabled = false;
    skipButton.style.opacity = '1';
    skipButton.style.cursor = 'pointer';
  }
}

// Function to force focus back onto the answer input after a blur event
function keepInputFocused() {
  const input = document.getElementById('answer');
  if (input) {
    // Use a setTimeout with a 0ms delay. This defers the focus call
    // until after the browser has finished processing the original blur event.
    // This is a common and necessary pattern for reliably forcing focus.
    setTimeout(() => {
      // Only try to focus if the element is visible/enabled (a basic check)
      if (input.type !== 'hidden' && !input.disabled) {
        input.focus();
      }
    }, 0);
  }
}