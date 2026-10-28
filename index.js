// --- GAME STATE ---
let sarudiBucks = 0;
let SBC = 1; // Sarudi Bucks per Click

// Cursor Upgrade State
let cursorCost = 10; // Set your starting cost here
let cursorLevel = 0;
let cursorIncreaseValue = 1; // The base amount a cursor adds

// --- DOM ELEMENTS ---
const sarudiBucksEl = document.querySelector('.sarudi-bucks');
const cursorCostEl = document.querySelector('.cursor-cost');
const cursorLevelEl = document.querySelector('.cursor-level');
const cursorIncreaseEl = document.querySelector('.cursor-SBC-increase');

// --- FUNCTIONS ---

// Call this whenever you need to update the screen
function updateDisplay() {
    sarudiBucksEl.innerHTML = Math.floor(sarudiBucks);
    cursorCostEl.innerHTML = Math.floor(cursorCost);
    cursorLevelEl.innerHTML = cursorLevel;
    cursorIncreaseEl.innerHTML = cursorIncreaseValue.toFixed(1); // Keeps decimals clean
}

function incrementSarudiBuck() {
    sarudiBucks += SBC;
    updateDisplay();
}

function buyCursor() {
    if (sarudiBucks >= cursorCost) {
        // 1. Deduct cost and level up
        sarudiBucks -= cursorCost;
        cursorLevel += 1;

        // 2. Apply the old increase value to SBC before scaling it
        SBC += cursorIncreaseValue;

        // 3. Scale up the cost and the effectiveness of the NEXT cursor
        cursorCost = Math.floor(cursorCost * 1.2);
        cursorIncreaseValue = cursorIncreaseValue * 1.05;

        // 4. Refresh UI
        updateDisplay();
    }
}
