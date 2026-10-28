let sarudiBucks = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');
let cursorLevel = document.querySelector('.cursor-level');
let cursorIncrease = document.querySelector('.cursor-SBC-increase');


let currentBucks = Number(sarudiBucks.innerHTML);
let currentCost = Number(cursorCost.innerHTML);
let currentLevel = Number(cursorLevel.innerHTML);
let currentIncrease = Number(cursorIncrease.innerHTML);

function incrementSarudiBuck() {
   
    currentBucks += SBC;
    sarudiBucks.innerHTML = Math.round(currentBucks); 
}

function buyCursor() {
    if (currentBucks >= currentCost) {
       
        currentBucks -= currentCost;
        currentLevel += 1;
        currentCost = currentCost * 1.2;
        currentIncrease = currentIncrease * 1.03;
        SBC += currentIncrease;

      
        sarudiBucks.innerHTML = currentBucks;
        cursorLevel.innerHTML = currentLevel;
        cursorCost.innerHTML = currentCost;
        cursorIncrease.innerHTML = currentIncrease;
    }
}
