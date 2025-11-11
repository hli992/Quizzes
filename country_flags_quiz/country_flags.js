// Map country name aliases to official names
const countryAliases = {
    "Antigua": "Antigua and Barbuda",
    "Bosnia Herzegovina": "Bosnia and Herzegovina",
    "Bosnia": "Bosnia and Herzegovina",
    "CAR": "Central African Republic",
    "Cabo Verde": "Cape Verde",
    "Congo": "Democratic Rep. of the Congo",
    "DRC": "Democratic Rep. of the Congo",
    "Democratic Republic of the Congo": "Democratic Rep. of the Congo",
    "ROC": "Rep. of the Congo",
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
    "St Kitts": "Saint Kitts and Nevis",
    "St Kitts And Nevis": "Saint Kitts and Nevis",
    "Saint Kitts": "Saint Kitts and Nevis",
    "St. Kitts and Nevis": "Saint Kitts and Nevis",
    //
    "St Lucia": "Saint Lucia",
    "St. Lucia": "Saint Lucia",
    //
    "St Vincent": "Saint Vincent and the Grenadines",
    "St. Vincent": "Saint Vincent and the Grenadines",
    "St Vincent and the Grenadines": "Saint Vincent and the Grenadines",
    "Saint Vincent": "Saint Vincent and the Grenadines",
    "St. Vincent and the Grenadines": "Saint Vincent and the Grenadines",
    //
    "Sao Tome": "Sao Tome and Principe",
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
};

// Flat data structure for all countries and their flags (alphabetical order)
const flagsData = [
    { country: "Afghanistan", flag: "flags/Afghanistan.png" },
    { country: "Albania", flag: "flags/Albania.png" },
    { country: "Algeria", flag: "flags/Algeria.png" },
    { country: "Andorra", flag: "flags/Andorra.png" },
    { country: "Angola", flag: "flags/Angola.png" },
    { country: "Antigua and Barbuda", flag: "flags/Antigua_and_Barbuda.png" },
    { country: "Argentina", flag: "flags/Argentina.png" },
    { country: "Armenia", flag: "flags/Armenia.png" },
    { country: "Australia", flag: "flags/Australia.png" },
    { country: "Austria", flag: "flags/Austria.png" },
    { country: "Azerbaijan", flag: "flags/Azerbaijan.png" },
    { country: "Bahamas", flag: "flags/Bahamas.png" },
    { country: "Bahrain", flag: "flags/Bahrain.png" },
    { country: "Bangladesh", flag: "flags/Bangladesh.png" },
    { country: "Barbados", flag: "flags/Barbados.png" },
    { country: "Belarus", flag: "flags/Belarus.png" },
    { country: "Belgium", flag: "flags/Belgium.png" },
    { country: "Belize", flag: "flags/Belize.png" },
    { country: "Benin", flag: "flags/Benin.png" },
    { country: "Bhutan", flag: "flags/Bhutan.png" },
    { country: "Bolivia", flag: "flags/Bolivia.png" },
    { country: "Bosnia and Herzegovina", flag: "flags/Bosnia_and_Herzegovina.png" },
    { country: "Botswana", flag: "flags/Botswana.png" },
    { country: "Brazil", flag: "flags/Brazil.png" },
    { country: "Brunei", flag: "flags/Brunei.png" },
    { country: "Bulgaria", flag: "flags/Bulgaria.png" },
    { country: "Burkina Faso", flag: "flags/Burkina_Faso.png" },
    { country: "Burundi", flag: "flags/Burundi.png" },
    { country: "Cambodia", flag: "flags/Cambodia.png" },
    { country: "Cameroon", flag: "flags/Cameroon.png" },
    { country: "Canada", flag: "flags/Canada.png" },
    { country: "Cape Verde", flag: "flags/Cape_Verde.png" },
    { country: "Central African Republic", flag: "flags/Central_African_Republic.png" },
    { country: "Chad", flag: "flags/Chad.png" },
    { country: "Chile", flag: "flags/Chile.png" },
    { country: "China", flag: "flags/China.png" },
    { country: "Colombia", flag: "flags/Colombia.png" },
    { country: "Comoros", flag: "flags/Comoros.png" },
    { country: "Costa Rica", flag: "flags/Costa_Rica.png" },
    { country: "Cote d'Ivoire", flag: "flags/Cote_dIvoire.png" },
    { country: "Croatia", flag: "flags/Croatia.png" },
    { country: "Cuba", flag: "flags/Cuba.png" },
    { country: "Cyprus", flag: "flags/Cyprus.png" },
    { country: "Czech Republic", flag: "flags/Czech_Republic.png" },
    { country: "Democratic Rep. of the Congo", flag: "flags/Democratic_Republic_of_the_Congo.png" },
    { country: "Denmark", flag: "flags/Denmark.png" },
    { country: "Djibouti", flag: "flags/Djibouti.png" },
    { country: "Dominica", flag: "flags/Dominica.png" },
    { country: "Dominican Republic", flag: "flags/Dominican_Republic.png" },
    { country: "Ecuador", flag: "flags/Ecuador.png" },
    { country: "Egypt", flag: "flags/Egypt.png" },
    { country: "El Salvador", flag: "flags/El_Salvador.png" },
    { country: "Equatorial Guinea", flag: "flags/Equatorial_Guinea.png" },
    { country: "Eritrea", flag: "flags/Eritrea.png" },
    { country: "Estonia", flag: "flags/Estonia.png" },
    { country: "Eswatini", flag: "flags/Eswatini.png" },
    { country: "Ethiopia", flag: "flags/Ethiopia.png" },
    { country: "Fiji", flag: "flags/Fiji.png" },
    { country: "Finland", flag: "flags/Finland.png" },
    { country: "France", flag: "flags/France.png" },
    { country: "Gabon", flag: "flags/Gabon.png" },
    { country: "Gambia", flag: "flags/Gambia.png" },
    { country: "Georgia", flag: "flags/Georgia.png" },
    { country: "Germany", flag: "flags/Germany.png" },
    { country: "Ghana", flag: "flags/Ghana.png" },
    { country: "Greece", flag: "flags/Greece.png" },
    { country: "Grenada", flag: "flags/Grenada.png" },
    { country: "Guatemala", flag: "flags/Guatemala.png" },
    { country: "Guinea", flag: "flags/Guinea.png" },
    { country: "Guinea-Bissau", flag: "flags/Guinea-Bissau.png" },
    { country: "Guyana", flag: "flags/Guyana.png" },
    { country: "Haiti", flag: "flags/Haiti.png" },
    { country: "Honduras", flag: "flags/Honduras.png" },
    { country: "Hungary", flag: "flags/Hungary.png" },
    { country: "Iceland", flag: "flags/Iceland.png" },
    { country: "India", flag: "flags/India.png" },
    { country: "Indonesia", flag: "flags/Indonesia.png" },
    { country: "Iran", flag: "flags/Iran.png" },
    { country: "Iraq", flag: "flags/Iraq.png" },
    { country: "Ireland", flag: "flags/Ireland.png" },
    { country: "Israel", flag: "flags/Israel.png" },
    { country: "Italy", flag: "flags/Italy.png" },
    { country: "Jamaica", flag: "flags/Jamaica.png" },
    { country: "Japan", flag: "flags/Japan.png" },
    { country: "Jordan", flag: "flags/Jordan.png" },
    { country: "Kazakhstan", flag: "flags/Kazakhstan.png" },
    { country: "Kenya", flag: "flags/Kenya.png" },
    { country: "Kiribati", flag: "flags/Kiribati.png" },
    { country: "Kosovo", flag: "flags/Kosovo.png" },
    { country: "Kuwait", flag: "flags/Kuwait.png" },
    { country: "Kyrgyzstan", flag: "flags/Kyrgyzstan.png" },
    { country: "Laos", flag: "flags/Laos.png" },
    { country: "Latvia", flag: "flags/Latvia.png" },
    { country: "Lebanon", flag: "flags/Lebanon.png" },
    { country: "Lesotho", flag: "flags/Lesotho.png" },
    { country: "Liberia", flag: "flags/Liberia.png" },
    { country: "Libya", flag: "flags/Libya.png" },
    { country: "Liechtenstein", flag: "flags/Liechtenstein.png" },
    { country: "Lithuania", flag: "flags/Lithuania.png" },
    { country: "Luxembourg", flag: "flags/Luxembourg.png" },
    { country: "Madagascar", flag: "flags/Madagascar.png" },
    { country: "Malawi", flag: "flags/Malawi.png" },
    { country: "Malaysia", flag: "flags/Malaysia.png" },
    { country: "Maldives", flag: "flags/Maldives.png" },
    { country: "Mali", flag: "flags/Mali.png" },
    { country: "Malta", flag: "flags/Malta.png" },
    { country: "Marshall Islands", flag: "flags/Marshall_Islands.png" },
    { country: "Mauritania", flag: "flags/Mauritania.png" },
    { country: "Mauritius", flag: "flags/Mauritius.png" },
    { country: "Mexico", flag: "flags/Mexico.png" },
    { country: "Micronesia", flag: "flags/Micronesia.png" },
    { country: "Moldova", flag: "flags/Moldova.png" },
    { country: "Monaco", flag: "flags/Monaco.png" },
    { country: "Mongolia", flag: "flags/Mongolia.png" },
    { country: "Montenegro", flag: "flags/Montenegro.png" },
    { country: "Morocco", flag: "flags/Morocco.png" },
    { country: "Mozambique", flag: "flags/Mozambique.png" },
    { country: "Myanmar", flag: "flags/Myanmar.png" },
    { country: "Namibia", flag: "flags/Namibia.png" },
    { country: "Nauru", flag: "flags/Nauru.png" },
    { country: "Nepal", flag: "flags/Nepal.png" },
    { country: "Netherlands", flag: "flags/Netherlands.png" },
    { country: "New Zealand", flag: "flags/New_Zealand.png" },
    { country: "Nicaragua", flag: "flags/Nicaragua.png" },
    { country: "Niger", flag: "flags/Niger.png" },
    { country: "Nigeria", flag: "flags/Nigeria.png" },
    { country: "North Korea", flag: "flags/North_Korea.png" },
    { country: "North Macedonia", flag: "flags/North_Macedonia.png" },
    { country: "Norway", flag: "flags/Norway.png" },
    { country: "Oman", flag: "flags/Oman.png" },
    { country: "Pakistan", flag: "flags/Pakistan.png" },
    { country: "Palau", flag: "flags/Palau.png" },
    { country: "Panama", flag: "flags/Panama.png" },
    { country: "Papua New Guinea", flag: "flags/Papua_New_Guinea.png" },
    { country: "Paraguay", flag: "flags/Paraguay.png" },
    { country: "Peru", flag: "flags/Peru.png" },
    { country: "Philippines", flag: "flags/Philippines.png" },
    { country: "Poland", flag: "flags/Poland.png" },
    { country: "Portugal", flag: "flags/Portugal.png" },
    { country: "Qatar", flag: "flags/Qatar.png" },
    { country: "Rep. of the Congo", flag: "flags/Republic_of_the_Congo.png" },
    { country: "Romania", flag: "flags/Romania.png" },
    { country: "Russia", flag: "flags/Russia.png" },
    { country: "Rwanda", flag: "flags/Rwanda.png" },
    { country: "Saint Kitts and Nevis", flag: "flags/Saint_Kitts_and_Nevis.png" },
    { country: "Saint Lucia", flag: "flags/Saint_Lucia.png" },
    { country: "Saint Vincent and the Grenadines", flag: "flags/Saint_Vincent_and_the_Grenadines.png" },
    { country: "Samoa", flag: "flags/Samoa.png" },
    { country: "San Marino", flag: "flags/San_Marino.png" },
    { country: "Sao Tome and Principe", flag: "flags/Sao_Tome_and_Principe.png" },
    { country: "Saudi Arabia", flag: "flags/Saudi_Arabia.png" },
    { country: "Senegal", flag: "flags/Senegal.png" },
    { country: "Serbia", flag: "flags/Serbia.png" },
    { country: "Seychelles", flag: "flags/Seychelles.png" },
    { country: "Sierra Leone", flag: "flags/Sierra_Leone.png" },
    { country: "Singapore", flag: "flags/Singapore.png" },
    { country: "Slovakia", flag: "flags/Slovakia.png" },
    { country: "Slovenia", flag: "flags/Slovenia.png" },
    { country: "Solomon Islands", flag: "flags/Solomon_Islands.png" },
    { country: "Somalia", flag: "flags/Somalia.png" },
    { country: "South Africa", flag: "flags/South_Africa.png" },
    { country: "South Korea", flag: "flags/South_Korea.png" },
    { country: "South Sudan", flag: "flags/South_Sudan.png" },
    { country: "Spain", flag: "flags/Spain.png" },
    { country: "Sri Lanka", flag: "flags/Sri_Lanka.png" },
    { country: "Sudan", flag: "flags/Sudan.png" },
    { country: "Suriname", flag: "flags/Suriname.png" },
    { country: "Sweden", flag: "flags/Sweden.png" },
    { country: "Switzerland", flag: "flags/Switzerland.png" },
    { country: "Syria", flag: "flags/Syria.png" },
    { country: "Tajikistan", flag: "flags/Tajikistan.png" },
    { country: "Tanzania", flag: "flags/Tanzania.png" },
    { country: "Thailand", flag: "flags/Thailand.png" },
    { country: "Timor-Leste", flag: "flags/Timor-Leste.png" },
    { country: "Togo", flag: "flags/Togo.png" },
    { country: "Tonga", flag: "flags/Tonga.png" },
    { country: "Trinidad and Tobago", flag: "flags/Trinidad_and_Tobago.png" },
    { country: "Tunisia", flag: "flags/Tunisia.png" },
    { country: "Turkey", flag: "flags/Turkey.png" },
    { country: "Turkmenistan", flag: "flags/Turkmenistan.png" },
    { country: "Tuvalu", flag: "flags/Tuvalu.png" },
    { country: "Uganda", flag: "flags/Uganda.png" },
    { country: "Ukraine", flag: "flags/Ukraine.png" },
    { country: "United Arab Emirates", flag: "flags/United_Arab_Emirates.png" },
    { country: "United Kingdom", flag: "flags/United_Kingdom.png" },
    { country: "United States", flag: "flags/United_States.png" },
    { country: "Uruguay", flag: "flags/Uruguay.png" },
    { country: "Uzbekistan", flag: "flags/Uzbekistan.png" },
    { country: "Vanuatu", flag: "flags/Vanuatu.png" },
    { country: "Vatican City", flag: "flags/Vatican_City.png" },
    { country: "Venezuela", flag: "flags/Venezuela.png" },
    { country: "Vietnam", flag: "flags/Vietnam.png" },
    { country: "Yemen", flag: "flags/Yemen.png" },
    { country: "Zambia", flag: "flags/Zambia.png" },
    { country: "Zimbabwe", flag: "flags/Zimbabwe.png" }
];


// Flat data structure (already defined above)

// Add guessed property
let allCountries = flagsData.map(c => ({
    ...c,
    guessed: false
}));

// Store randomized order for the table
let randomizedCountries = [];
let currentCountry = null;

// ==== GLOBAL GAME STATE ====
window.guessed = new Set();
window.totalCountries = 0;
let input;
let giveUpButton;

// ==== CREATE LOOKUP FOR INPUT TO COUNTRY ====
const inputToCountry = {};

// Add all official names
for (const { country } of flagsData) {
    inputToCountry[normalize(country)] = country;
}

// Add aliases mapped to official names
for (const alias in countryAliases) {
    const official = countryAliases[alias];
    // Only include valid official names that exist in flagsData
    const exists = flagsData.some(c => c.country === official);
    if (exists) inputToCountry[normalize(alias)] = official;
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
let isGameOver = false;
let isGiveUp = false;

// ==== DOMCONTENTLOADED ====
let seconds = 0;
let timerInterval = null;
let timerElement = null;

const skipTooltip = document.getElementById('skip-tooltip');
const currentFlagEl = document.getElementById('current-flag');
const skipButton = document.getElementById('skip-button');

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

document.addEventListener('DOMContentLoaded', () => {
    timerElement = document.getElementById('timer');
    giveUpButton = document.getElementById('giveUpButton');

    startTimer();
    updateTimerDisplay();

    const tablesContainer = document.getElementById('continent-tables');
    input = document.getElementById('answer');

    // Create randomized order and populate table
    randomizedCountries = shuffleArray(allCountries);
    populateFlagTable(tablesContainer);
    window.totalCountries = allCountries.length;

    updateScore();

    // Input box setup
    input.value = '';
    input.placeholder = 'Type the country name';
    input.autocomplete = 'off';

    // ==== INPUT HANDLING ====
    input.addEventListener('input', () => {
        const rawGuess = input.value.trim();
        const normalizedGuess = rawGuess.toLowerCase();
        const officialCountry = inputToCountry[normalizedGuess];

        // Check if this matches the current country and hasn't been guessed
        if (
            currentCountry &&
            officialCountry === currentCountry.country &&
            !guessed.has(officialCountry)
        ) {
            const shouldClear = handleCountryGuess(rawGuess);
            if (shouldClear) input.value = '';
        }
    });

    // ==== ENTER KEY (fallback submission) ====
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const rawGuess = input.value.trim();
            handleCountryGuess(rawGuess);
            input.value = '';
            flashInput(false);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            if (skipButton && !skipButton.disabled) {
                skipButton.click();
            }
        }
    });

    // Show tooltip on hover
    if (skipButton) {
        skipButton.addEventListener('mouseenter', showSkipTooltip);
        skipButton.addEventListener('mousemove', showSkipTooltip);
        skipButton.addEventListener('mouseleave', hideSkipTooltip);

        // Handle skip button click
        skipButton.addEventListener('click', () => {
            updateCurrentCountry();
            input.value = '';
            input.focus();
        });
    }

    // Initial display
    updateCurrentCountry();

    if (input) {
        // Attach the blur listener to the input box
        input.addEventListener('blur', keepInputFocused);
    }
});

function populateFlagTable(container) {
    container.innerHTML = '';

    const section = document.createElement('div');
    section.className = 'continent-section';

    

    // Create grid container instead of a table
    const grid = document.createElement('div');
    grid.id = 'flags-table';

    // Loop through all countries and create flag–country pairs
    randomizedCountries.forEach(({ country, flag }) => {
        const pair = document.createElement('div');
        pair.className = 'flag-pair';

        pair.dataset.countryName = country;
        const flagImg = document.createElement('img');
        flagImg.src = flag;
        flagImg.alt = `${country} flag`;
        pair.appendChild(flagImg);

        const label = document.createElement('div');
        label.className = 'country-label';
        label.dataset.country = country;
        label.dataset.filled = 'false';
        label.textContent = ''; // initially empty
        pair.appendChild(label);

        grid.appendChild(pair);
    });

    section.appendChild(grid);
    container.appendChild(section);
}

// Re-render grid when window is resized
window.addEventListener('resize', () => {
    const container = document.getElementById('continent-tables');
    if (container) populateFlagTable(container);
});




// ==== GIVE UP BUTTON ====
let giveUpConfirm = false;

document.addEventListener('DOMContentLoaded', () => {
    const giveUpBtn = document.getElementById('giveUpButton');

    if (giveUpBtn) {
        giveUpBtn.addEventListener("click", () => {
            if (!giveUpConfirm && giveUpBtn.textContent === "Give Up") {
                giveUpBtn.textContent = "Are you sure?";
                giveUpConfirm = true;

                setTimeout(() => {
                    if (giveUpBtn.textContent === "Are you sure?") {
                        giveUpBtn.textContent = "Give Up";
                        giveUpConfirm = false;
                    }
                }, 3000);
            }
            else if (giveUpConfirm && giveUpBtn.textContent === "Are you sure?") {
                isGiveUp = true;

                // 1. Stop the game
                pauseTimer();
                input.disabled = true;
                disableSkipButton();

                // 2. NEW: 

                console.log("GIVEN UP");

                // 3. Reveal remaining countries (and show the end-game popup).
                // The reveal function is what incorrectly increments the count to 195 if run before updateScore.
                revealRemainingCountries();

                // 4. Display the sadge image
                updateFlagDisplay(null, 'pepe_sadge.jpg');
                setTimerColor('giveup');
                giveUpBtn.textContent = "Play Again";
                giveUpConfirm = false;

                // NOTE: If your game's final 'win-popup' is opened by
                // revealRemainingCountries(), you may need to ensure it's customized
                // for the "Give Up" state inside that function.
            }
            else if (giveUpBtn.textContent === "Play Again") {
                resetGame();
                giveUpBtn.textContent = 'Give Up';
                giveUpConfirm = false;
            }
        });
    }
});

// PREGAME POPUP
const pregameOverlay = document.getElementById('pregame-overlay');
const startBtn = document.getElementById('start-game-btn');
const answerInput = document.getElementById('answer');
const pregameBackBtn = document.getElementById('pregame-back-btn');
const pregameTitle = document.getElementById('pregame-title');
const gameTitle = document.getElementById('game-title');

window.addEventListener('DOMContentLoaded', () => {
    if (pregameOverlay) {
        pregameOverlay.style.display = 'flex';

        setTimeout(() => {
            pregameOverlay.classList.add('show');
            document.body.classList.add('show-back-btn');
        }, 100);

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        if (typeof pauseTimer === 'function') pauseTimer();
    }

    // Attach the listener to the main flag container using event delegation
    const container = document.getElementById('continent-tables'); // The container is #continent-tables
    if (container) {
        container.addEventListener('click', handleFlagClick);
    }
});

if (startBtn && pregameOverlay) {
    startBtn.addEventListener('click', () => {
        if (answerInput) answerInput.focus();

        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (gameTitle) gameTitle.style.opacity = '1';

        pregameOverlay.classList.add('exit');
        document.body.classList.add('game-started');
        if (pregameBackBtn) pregameBackBtn.style.display = 'none';

        const totalMs = Math.ceil((0.65 + (5 - 1) * 0.12) * 1000 + 80);

        setTimeout(() => {
            pregameOverlay.style.display = 'none';
            if (typeof startTimer === 'function') startTimer();
            if (answerInput) answerInput.focus();
        }, totalMs);
    });
}

// Get the elements
const currentFlag = document.getElementById('current-flag');
const zoomTooltip = document.getElementById('flag-zoom-tooltip');
const zoomImage = document.getElementById('flag-zoom-img');

// 1. Show the tooltip and set the image source on hover
currentFlag.addEventListener('mouseover', () => {
    // Copy the image source from the small flag to the large one
    zoomImage.src = currentFlag.src;
    zoomTooltip.classList.add('visible');
});

// 2. Position the tooltip next to the mouse
currentFlag.addEventListener('mousemove', (e) => {
    // Offset the tooltip to appear slightly below and right of the cursor
    const offsetX = 20;
    const offsetY = 20;

    let top = e.clientY + offsetY;
    let left = e.clientX + offsetX;

    // Basic check to prevent the tooltip from going off the right edge
    // (Adjust '200' if you change the tooltip's width in CSS)
    if (left + 200 > window.innerWidth) {
        left = e.clientX - zoomTooltip.offsetWidth - offsetX;
    }

    zoomTooltip.style.top = `${top}px`;
    zoomTooltip.style.left = `${left}px`;
});

// 3. Hide the tooltip when the mouse leaves
currentFlag.addEventListener('mouseout', () => {
    zoomTooltip.classList.remove('visible');
});

// WIN POP-UP
const playAgainBtn = document.getElementById('play-again-btn');
const closePopupBtn = document.getElementById('close-popup-btn');

if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        resetGame();
    });
}

if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
        const popup = document.getElementById('win-popup');
        if (popup) popup.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (giveUpButton) giveUpButton.textContent = "Play Again";
    });
}

// --- NEW WIN BUTTON FOR TESTING ---
const winButton = document.getElementById('win');
if (winButton) {
    winButton.addEventListener("click", () => {
        // Prevent action if the game has already ended
        if (isGameOver) return;

        // 1. Mark all remaining unguessed countries as correctly guessed
        allCountries.forEach(country => {
            if (!country.guessed) {
                // Mark country as guessed in the data structure
                country.guessed = true;

                // CRITICAL FIX: Add the country name to the 'guessed' Set
                // to ensure updateScore() counts it.
                guessed.add(country.country);

                // Update the UI cell. Pass 'false' for isGivenUp to use the correct color.
                markCountryAsCompleted(country.country, false);
            }
        });
        updateScore();
        triggerWinCondition();
    });
}

// ---------------------------------------------------------------------------------------------------
// FUNCTIONS
// ---------------------------------------------------------------------------------------------------

function updateScore() {
    const total = allCountries.length;
    const guessedCount = guessed.size;
    const maxDigits = total.toString().length;
    const paddedGuessed = guessedCount.toString().padStart(maxDigits, ' ');

    const score = document.getElementById('score');
    if (score) {
        score.textContent = `Flags Identified: ${paddedGuessed}/${total}`;
    }
}

function flashInput(isCorrect) {
    if (!input) return;
    input.style.transition = 'none';
    input.style.backgroundColor = isCorrect ? '#00ff00ff' : '#ff0000ff';

    setTimeout(() => {
        input.style.transition = 'background-color 0.5s ease';
        input.style.backgroundColor = 'white';
    }, 100);
}

function revealRemainingCountries() {
    // Target all country-label elements in the grid
    const labels = document.querySelectorAll('#flags-table .country-label');

    labels.forEach(label => {
        // Check if the label is NOT filled
        if (label.dataset.filled === 'false') {
            const countryName = label.dataset.country;

            // Find the parent flag-pair element
            const flagPair = label.closest('.flag-pair');

            if (flagPair) {
                // Add 'answered' to disable interaction in the click handler (best practice)
                flagPair.classList.add('answered');
                // Add 'revealed' class for specific styling/hover changes
                flagPair.classList.add('revealed');
            }

            label.textContent = countryName;
            label.dataset.filled = 'true';
            label.classList.add('revealed');

            // CRITICAL FIX: The line 'guessed.add(countryName);' has been removed
            // to prevent the score from jumping to 195/195.
        }
    });
}

function triggerWinCondition() {

    isGameOver = true;
    updateFlagDisplay(null, 'pepe_hooray.jpg');
    
    input.disabled = true;
    
    pauseTimer();
    setTimerColor('win');
    disableSkipButton();

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const popup = document.getElementById('win-popup');
    const msg = document.getElementById('win-message');

    const totalCountries = allCountries.length;
    const totalMinutes = seconds / 60 || 1;
    const rate = Math.round(totalCountries / totalMinutes);

    if (msg) {
        msg.innerHTML = `
      You identified all ${totalCountries} flags in ${mins}m ${secs}s!<br>
      That's ${rate} flags per minute!
    `;
    }

    if (popup) popup.classList.remove('hidden');

    // Confetti effect
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 150,
            spread: 180,
            scalar: 2,
            angle: 0,
            startVelocity: 30,
            origin: { x: 0, y: 0.2 }
        });
        confetti({
            particleCount: 150,
            spread: 90,
            scalar: 2,
            angle: 0,
            startVelocity: 30,
            origin: { x: -0.1, y: 0.2 }
        });
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
        confetti({
            particleCount: 150,
            spread: 180,
            scalar: 2,
            angle: 270,
            origin: { x: 0.5, y: 0 }
        });
    }
}

// TIMER FUNCTIONS
function formatTime(sec) {
    const mins = Math.floor(sec / 60).toString().padStart(2, '0');
    const secs = (sec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateTimerDisplay() {
    if (timerElement) {
        timerElement.textContent = formatTime(seconds);
    }
}

// This function starts the timer
function startTimer() {
    // Only start a timer if one isn't already running
    if (timerInterval !== null) return;

    // Assuming seconds and updateTimerDisplay exist globally
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay(seconds);
    }, 1000);
}

function pauseTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    updateTimerDisplay();
}

// RESET GAME
function resetGame() {
    guessed.clear();

    // Reset all country guessed flags
    allCountries.forEach(c => c.guessed = false);

    // Create NEW random order for the table
    randomizedCountries = shuffleArray(allCountries);
    const tablesContainer = document.getElementById('continent-tables');
    populateFlagTable(tablesContainer);

    // Reset input box
    if (input) {
        input.value = '';
        input.disabled = false;
        input.focus();
    }

    // Reset Give Up button
    if (giveUpButton) giveUpButton.textContent = "Give Up";

    // Reset timer
    resetTimer();
    startTimer();
    setTimerColor(null);

    // Reset score display
    updateScore();

    // Reset win popup
    const popup = document.getElementById('win-popup');
    if (popup) popup.classList.add('hidden');

    isGameOver = false;
    isGiveUp = false;

    // Pick new current country
    updateCurrentCountry();
    enableSkipButton();
}

function setTimerColor(state) {
    if (!timerElement) return;
    timerElement.classList.remove('win', 'giveup');
    if (state === 'win') {
        timerElement.classList.add('win');
    } else if (state === 'giveup') {
        timerElement.classList.add('giveup');
    }
}

// ==== HANDLE GUESS FUNCTION ====
function handleCountryGuess(rawInput) {
    const guess = normalize(rawInput);
    const officialCountry = inputToCountry[guess];

    // If it doesn't match current country's name, ignore
    if (!currentCountry || officialCountry !== currentCountry.country) {
        // Flash red for incorrect/unmatched guess
        flashInput(false);
        return false;
    }

    // Already guessed?
    if (guessed.has(officialCountry)) {
        // Flash yellow/green to show it was correct but already filled
        flashInput(true);
        return false;
    }

    // CORRECT! Mark as guessed
    guessed.add(officialCountry);
    currentCountry.guessed = true;
    markCountryAsCompleted(currentCountry.country, false);

    // Reveal country name in table/grid
    // TARGET: the .country-label div using the data-country attribute
    const labels = document.querySelectorAll(`.country-label[data-country='${officialCountry}']`);
    labels.forEach(label => {
        label.textContent = officialCountry;
        label.dataset.filled = 'true';
        label.classList.remove('revealed'); // Not strictly needed for the new structure, but safe to keep
    });

    // Update score
    updateScore();

    // Flash green for correct
    flashInput(true);

    // Advance to next country
    updateCurrentCountry();

    // Check win condition
    if (guessed.size === totalCountries) {
        triggerWinCondition();
    }

    return true;
}

function normalize(str) {
    return str.toLowerCase().trim();
}

// Update to a new current country
function updateCurrentCountry() {
    if (isGameOver || isGiveUp) {
        currentCountry = null;
        updateFlagDisplay(null);
        return;
    }

    currentCountry = pickRandomUnguessedCountry();
    updateFlagDisplay(currentCountry);
}

// Pick a random unguessed country
function pickRandomUnguessedCountry() {
    const unguessedCountries = allCountries.filter(c => !c.guessed);
    if (unguessedCountries.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * unguessedCountries.length);
    return unguessedCountries[randomIndex];
}

// Assumes 'currentFlagEl' is defined globally: const currentFlagEl = document.getElementById('current-flag');

// Update displayed flag with fade-out/fade-in transition, or display an end-game image
function updateFlagDisplay(country, endGameImage = null) {
    if (!currentFlag) return;

    // 1. Start the fade-out: Add the class to set opacity to 0
    currentFlag.classList.add('flag-fading-out');

    // Set up the final image's source and alt text after the fade-out is complete (100ms)
    setTimeout(() => {
        let newFlagSrc = ''; // Use local variables to hold the determined source/alt
        let newFlagAlt = '';

        if (endGameImage) {
            // END GAME STATE: Display the specified image
            newFlagSrc = endGameImage;
            newFlagAlt = 'Game End Status';
            currentFlag.style.transition = 'none';
        } else if (!country) {
            // REGULAR BLANK STATE (e.g., when the game is reset)
            newFlagSrc = '';
            newFlagAlt = '';
            currentFlag.style.transition = 'opacity 0.1s ease-in-out'; // Restore transition
        } else {
            // REGULAR FLAG STATE
            newFlagSrc = country.flag;
            newFlagAlt = `${country.country} flag`;
            currentFlag.style.transition = 'opacity 0.1s ease-in-out'; // Restore transition
        }

        // Apply the new source/alt to the main flag
        currentFlag.src = newFlagSrc;
        currentFlag.alt = newFlagAlt;
        currentFlag.style.display = newFlagSrc ? 'inline-block' : 'none';

        // --- FIX: SYNCHRONIZE ZOOM TOOLTIP IMAGE (UNCONDITIONAL UPDATE) ---
        // Always update the image source to ensure its content is correct.
        // Visibility is controlled separately by mouse events on 'currentFlag'.
        if (zoomImage) {
            zoomImage.src = newFlagSrc;
            zoomImage.alt = newFlagAlt;
        }
        // ----------------------------------------------

        // 3. Start the fade-in: Remove the class to set opacity back to 1
        currentFlag.classList.remove('flag-fading-out');

    }, 100); // 100ms matches the 0.1s transition duration
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

// ==== DISABLE SKIP BUTTON ====
function disableSkipButton() {
    if (!skipButton) return;
    skipButton.disabled = true;
    skipButton.style.opacity = '0.5';
    skipButton.style.cursor = 'not-allowed';
}

// ==== ENABLE SKIP BUTTON ====
function enableSkipButton() {
    if (!skipButton) return;
    skipButton.disabled = false;
    skipButton.style.opacity = '1';
    skipButton.style.cursor = 'pointer';
}

// --- NEW FUNCTIONS TO ADD (Outside DOMContentLoaded) ---

// Find country object from the global allCountries array
function getCountryDataByName(countryName) {
    return allCountries.find(c => c.country === countryName); // 'allCountries' is already a global variable
}

// Function to explicitly load a country as the current challenge
function loadChallengeFlag(countryName) {
    const countryData = getCountryDataByName(countryName);

    // Safety check: ensure country exists and hasn't been guessed
    if (!countryData || countryData.guessed) {
        // If it's already guessed, clear input and return
        const input = document.getElementById('answer');
        if (input) input.value = '';
        return;
    }

    // Set the global current country state (currentCountry is global)
    currentCountry = countryData;

    // Update the flag image (updateFlagDisplay is an existing function)
    updateFlagDisplay(currentCountry);

    // Clear and focus the input for immediate answering
    const input = document.getElementById('answer');
    if (input) {
        input.value = '';
        input.focus();
    }
}

// Function to handle click on a flag cell
function handleFlagClick(event) {
    // Find the closest parent element with the class 'flag-pair'
    const flagPair = event.target.closest('.flag-pair');

    if (!flagPair) return; // Not a flag cell click

    // Optional: Only allow selection if the flag hasn't been guessed
    if (flagPair.classList.contains('answered')) {
        return;
    }

    const countryName = flagPair.dataset.countryName;

    if (countryName) {
        // Call the new function to set the current challenge flag
        loadChallengeFlag(countryName);
    }
}

// This function applies the '.answered' class to the flag cell
function markCountryAsCompleted(countryName, isGivenUp) {
    // 1. Find the flag-pair element in the grid
    const flagPair = document.querySelector(`.flag-pair[data-country-name="${countryName}"]`);
    if (!flagPair) return;

    // 2. CRITICAL FIX: Add the .answered class to disable hover and click
    flagPair.classList.add('answered');

    // 3. Find the country-label element
    const label = flagPair.querySelector('.country-label');

    if (label) {
        // Set the text to the country name
        label.textContent = countryName;

        // Apply the appropriate color class
        if (isGivenUp) {
            label.classList.add('given-up-label');
            label.classList.remove('correctly-guessed-label');
        } else {
            label.classList.add('correctly-guessed-label');
            label.classList.remove('given-up-label');
        }
    }

    // 4. Update the game data state (THIS IS THE KEY FIX)
    const countryData = allCountries.find(c => c.country === countryName);
    if (countryData) {
        // ONLY set 'guessed = true' if it was correctly guessed (i.e., NOT a give up)
        if (!isGivenUp) {
            countryData.guessed = true;
        }
    }
}

// Ensure markCountryAsRevealed uses the helper correctly (no change needed here)
function markCountryAsRevealed(countryName) {
    // Calls the unified function, passing 'true' for isGivenUp
    markCountryAsCompleted(countryName, true);
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