let sarudiBucks = document.querySelector('.sarudi-bucks');
let parsedBucks = parseFloat(sarudiBucks.innerHTML);

let cursorCost = document.querySelector('.cursor-cost');
let parsedCost = parseFloat(cursorCost.innerHTML);

let cursorLevel = document.querySelector('.cursor-level');

let cursorIncrease = document.querySelector('.cursor-increase');
let parsedIncrease = parseFloat(cursorIncrease.innerHTML);

let SBC = 1;

function incrementBucks() {
    parsedBucks += SBC;
    sarudiBucks.innerHTML = Math.round(parsedBucks);
}

function buyCursor() {
    if (parsedBucks >= parsedCost) {
        parsedBucks -= parsedCost;
        sarudiBucks.innerHTML = Math.round(parsedBucks); // Keeps UI clean
        
        cursorLevel.innerHTML++;
        
        // FIX: Keep parsedIncrease as a number, only use toFixed for the UI
        parsedIncrease = parsedIncrease * 1.03;
        cursorIncrease.innerHTML = parsedIncrease.toFixed(2);
        
        // FIX: Now performing actual math instead of string concatenation
        SBC += parsedIncrease; 
    }
}
