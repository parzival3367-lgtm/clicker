let sarudiBucks = document.querySelector('.sarudi-bucks');
let parsedBucks = parseFloat(sarudiBucks.innerHTML);

let cursorCost = document.querySelector('.cursor-cost');
let parsedCost = parseFloat(cursorCost.innerHTML);

let cursorLevel = document.querySelector('.cursor-level');
let parsedLevel = parseInt(cursorLevel.innerHTML); // Track level as a number

let cursorIncrease = document.querySelector('.cursor-increase');
let parsedIncrease = parseFloat(cursorIncrease.innerHTML);

let SBC = 1;

function incrementBucks() {
  parsedBucks += SBC;
  sarudiBucks.innerHTML = Math.round(parsedBucks);
}

function buyCursor() {
  if (parsedBucks >= parsedCost) {
    // 1. Deduct currency and update UI
    parsedBucks -= parsedCost;
    sarudiBucks.innerHTML = Math.round(parsedBucks);

    // 2. Increment level and update UI
    parsedLevel++;
    cursorLevel.innerHTML = parsedLevel;

    // 3. Scale up the click value (SBC) and update UI
    SBC += parsedIncrease;
    parsedIncrease = parsedIncrease * 1.03;
    cursorIncrease.innerHTML = parsedIncrease.toFixed(2);

    // 4. FIX: Scale up the item COST so it gets more expensive, then update UI
    parsedCost = Math.round(parsedCost * 1.15); 
    cursorCost.innerHTML = parsedCost;
  }
}
