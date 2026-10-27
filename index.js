let sarudiBucks = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');

function incrementSarudiBuck() {
  // Convert HTML text to a number, add 1, and update the display
  sarudiBucks.innerHTML = Number(sarudiBucks.innerHTML) + 1;
}

function buyCursor() {
  let currentBucks = Number(sarudiBucks.innerHTML);
  let currentCost = Number(cursorCost.innerHTML);

  // Check if the player has enough money
  if (currentBucks >= currentCost) {
    // Deduct the cost and update the display
    sarudiBucks.innerHTML = currentBucks - currentCost;
    cursorCost.innerHTML = Math.floor(currentCost * 1.15);
  }
}