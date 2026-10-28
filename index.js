let buck = document.querySelector(".sarudi-buck");
let parsedBuck = parseFloat(buck.innerHTML);


let cursorCost = document.querySelector(".cursor-cost");
let parsedCursorCost = parseFloat(cursorCost.innerHTML);
let cursorLevel = document.querySelector(".cursor-level");
let cursorIncrease = document.querySelector(".cursor-increase");
let parsedCursorIncrease = parseFloat(cursorIncrease.innerHTML);


let sbc = 1;


function incrementBuck() {
    buck.innerHTML = Math.round(parsedBuck += sbc);
}


function buyCursor() {
    if (parsedBuck >= parsedCursorCost) {
        parsedBuck -= parsedCursorCost;
        buck.innerHTML = parsedBuck;


        cursorLevel.innerHTML++;


        parsedCursorIncrease = (parsedCursorIncrease * 1.03).toFixed(2);
        cursorIncrease.innerHTML = parsedCursorIncrease;
        sbc += parsedCursorIncrease;
    }
}
