let sarudiBucks = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');
let cursorLevel = document.querySelector('.cursor-level');
let cursorIncrease = document.querySelector('.cursor-SBC-increase');

// Track the actual game state in JavaScript variables
let SBC = 1;
let currentBucks = Number(sarudiBucks.innerHTML);
let currentCost = Number(cursorCost.innerHTML);
let currentLevel = Number(cursorLevel.innerHTML);
let currentIncrease = Number(cursorIncrease.innerHTML);

function incrementSarudiBuck() {
    // Update the JS variable first, then display it
    currentBucks += SBC;
    sarudiBucks.innerHTML = Math.floor(currentBucks); 
}

function buyCursor() {
    if (currentBucks >= currentCost) {
        // 1. Deduct cost and update level/multipliers in JS variables
        currentBucks -= currentCost;
        currentLevel += 1;
        currentCost = Math.floor(currentCost * 1.2);
        currentIncrease = currentIncrease * 1.05;
        SBC += currentIncrease;

        // 2. Render the freshly updated variables to the DOM
        sarudiBucks.innerHTML = Math.floor(currentBucks);
        cursorLevel.innerHTML = currentLevel;
        cursorCost.innerHTML = currentCost;
        cursorIncrease.innerHTML = currentIncrease.toFixed(1); // Keeps the UI clean
    }
}
