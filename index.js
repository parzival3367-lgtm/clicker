
const buck = document.querySelector('.sarudi-bucks');
const cursorCost = document.querySelector('.cursor-cost');
const cursorLevel = document.querySelector('.cursor-level');
const cursorIncrease = document.querySelector('.Cursor-increase');


let parsedBuck = parseFloat(buck.innerHTML);
let parsedCursorCost = parseFloat(cursorCost.innerHTML);
let parsedCursorIncrease = parseFloat(cursorIncrease.innerHTML);
let sbc = 1;

function incrementBucks() {
  buck.innerHTML = Math.round(parsedBuck += sbc);
}

function buyCursor() {

  if (parsedBuck >= parsedCursorCost) { 
   
    parsedBuck -= parsedCursorCost;
    buck.innerHTML = Math.round(parsedBuck); 
    
    cursorLevel++; 
    
   
    parsedCursorCost = Math.round(parsedCursorCost * 1.5); 
    cursorCost.innerHTML = parsedCursorCost; 
    
  
    parsedCursorIncrease = parseFloat((parsedCursorIncrease * 1.03).toFixed(2)); 
    cursorIncrease.innerHTML = parsedCursorIncrease; 
    
 
    sbc += parsedCursorIncrease; 
}}
