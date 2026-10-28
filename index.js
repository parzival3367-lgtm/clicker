// 1. Select the DOM elements
const sarudiBucks = document.querySelector('.sarudi-bucks');
const cursorCost = document.querySelector('.cursor-cost');
const cursorLevel = document.querySelector('.cursor-level');
const cursorIncrease = document.querySelector('.cursor-SBC-increase');

// 2. Initialize your game state variables (Make sure SBC is declared)
let currentBucks = Number(sarudiBucks.innerHTML) || 0;
let currentCost = Number(cursorCost.innerHTML) || 10; // Default fallback if HTML is empty
let currentLevel = Number(cursorLevel.innerHTML) || 0;
let currentIncrease = Number(cursorIncrease.innerHTML) || 1;
let SBC = 1; // Sarudi Bucks per Click base value

// 3. Increment currency on click
function incrementSarudiBuck() {
    currentBucks += SBC;
    sarudiBucks.innerHTML = Math.round(currentBucks);
}

// 4. Handle buying an upgrade
function buyCursor() {
    if (currentBucks >= currentCost) {
        // Deduct cost and level up
        currentBucks -= currentCost;
        currentLevel += 1;
        
        // Scale game balance metrics
        currentCost = Math.round(currentCost * 1.2); 
        currentIncrease = Number((currentIncrease * 1.03).toFixed(2)); // Prevents long decimal formatting issues
        SBC += currentIncrease;
        
        // Update all UI elements immediately
        sarudiBucks.innerHTML = Math.round(currentBucks);
        cursorLevel.innerHTML = currentLevel;
        cursorCost.innerHTML = currentCost;
        cursorIncrease.innerHTML = currentIncrease;
    } 
}
