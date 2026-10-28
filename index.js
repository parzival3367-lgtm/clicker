let sarudiBucks = document.querySelector('.sarudi-bucks');
let parsedBucks = parseFloat(sarudiBucks.innerHTML);
let cursorCost = document.querySelector('.cursor-cost');
let parsedCost = parseFloat(cursorCost.innerHTML);
let cursorLevel = document.querySelector('.cursor-level');
let cursorIncrease = document.querySelector('.cursor-increase');
let parsedIncrease = parseFloat(cursorIncrease.innerHTML);
let SBC = 1;

function incrementBucks(){
  sarudiBucks.innerHTML = Math.round(parsedBucks += SBC) 
}

function buyCursor (){
  if (parsedBucks >= parsedCost){
    parsedBucks -= parsedCost;
    sarudiBucks.innerHTML = parsedBucks;
    cursorLevel.innerHTML ++;
    parsedIncrease = (parsedIncrease * 1.03).toFixed(2);
    cursorIncrease.innerHTML = parsedIncrease;
    SBC += parsedIncrease;
  }
}