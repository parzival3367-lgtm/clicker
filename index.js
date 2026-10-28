// Select DOM elements (added quotes to selectors)
const buck = document.querySelector('.sarudi-buck');
const cursorCost = document.querySelector('.cursor-cost');
const cursorLevel = document.querySelector('.cursor-level');
const cursorIncrease = document.querySelector('.cursor-increase');

// Parse initial values
let parsedBuck = parseFloat(buck.innerHTML) || 0;
let parsedCursorCost = parseFloat(cursorCost.innerHTML) || 0;
let parsedCursorIncrease = parseFloat(cursorIncrease.innerHTML) || 0;
let sbc = 1;

function incrementBuck() {
  parsedBuck += sbc;
  buck.innerHTML = Math.round(parsedBuck);
}

function buyCursor() {
  // Re-read current cost/buck in case they change dynamically
  parsedBuck = parseFloat(buck.innerHTML);
  parsedCursorCost = parseFloat(cursorCost.innerHTML);

  if (parsedBuck >= parsedCursorCost) {
    // Subtract cost and update display
    parsedBuck -= parsedCursorCost;
    buck.innerHTML = parsedBuck;

    // Increment cursor level
    let currentLevel = parseInt(cursorLevel.innerHTML) || 0;
    cursorLevel.innerHTML = currentLevel + 1;

    // Increase cursor power and format to 2 decimals as a number
    parsedCursorIncrease = parseFloat((parsedCursorIncrease * 1.03).toFixed(2));
    cursorIncrease.innerHTML = parsedCursorIncrease;

    // Add increase to sbc
    sbc += parsedCursorIncrease;
  }
}
