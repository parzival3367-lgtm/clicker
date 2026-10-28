// Select DOM elements (added quotes to selectors)
const buck = document.querySelector('.sarudi-bucks');
const cursorCost = document.querySelector('.cursor-cost');
const cursorLevel = document.querySelector('.cursor-level');
const cursorIncrease = document.querySelector('.Cursor-increase');

// Parse initial values
let parsedBuck = parseFloat(buck.innerHTML);
let parsedCursorCost = parseFloat(cursorCost.innerHTML);
let parsedCursorIncrease = parseFloat(cursorIncrease.innerHTML);
let sbc = 1;

function incrementBuck() {
  parsedBuck += sbc;
  buck.innerHTML = Math.round(parsedBuck);
}

function buyCursor() {
  parsedBuck = parseFloat(buck.innerHTML);
  parsedCursorCost = parseFloat(cursorCost.innerHTML);

  if (parsedBuck >= parsedCursorCost) {
    parsedBuck -= parsedCursorCost;
    buck.innerHTML = parsedBuck;

    let currentLevel = parseInt(cursorLevel.innerHTML) || 0;
    cursorLevel.innerHTML = currentLevel + 1;

    parsedCursorIncrease = parseFloat((parsedCursorIncrease * 1.03).toFixed(2));
    cursorIncrease.innerHTML = parsedCursorIncrease;


    sbc += parsedCursorIncrease;
  }
}
