let sarudiBucks = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');
let cursorLevel = document.querySelector('.cursor-level');
function incrementSarudiBuck() {
  
  sarudiBucks.innerHTML = Number(sarudiBucks.innerHTML) + 1;
}

function buyCursor() {
  let currentBucks = Number(sarudiBucks.innerHTML);
  let currentCost = Number(cursorCost.innerHTML);
  let currentLevel = Number(cursorLevel.innerHTML);
  
  if (currentBucks >= currentCost) {
    cursorLevel.innerHTML = currentLevel + 1;
    sarudiBucks.innerHTML = currentBucks - currentCost;
    cursorCost.innerHTML = Math.floor(currentCost * 1.15);
  }
}