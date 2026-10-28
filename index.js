let sarudiBucks = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');
let cursorLevel = document.querySelector('.cursor-level');
let cursorIncrease = document.querySelector('.cursor-SBC-increase')
let SBC = 1;
function incrementSarudiBuck() {
  
  sarudiBucks.innerHTML = Number(sarudiBucks.innerHTML) + SBC;
}

function buyCursor() {
  let currentBucks = Number(sarudiBucks.innerHTML);
  let currentCost = Number(cursorCost.innerHTML);
  let currentLevel = Number(cursorLevel.innerHTML);
  let currentIncrease = Number (cursorIncrease.innerHTML)
  if (currentBucks >= currentCost) {
    cursorLevel.innerHTML = currentLevel + 1;
    sarudiBucks.innerHTML = currentBucks - currentCost;
    cursorCost.innerHTML = Math.floor(currentCost * 1.2);
    currentIncrease = currentIncrease * 1.05;
    cursorIncrease.innerHTML = currentIncrease;
    SBC += currentIncrease;
  }
}