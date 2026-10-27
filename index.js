let sarudiBucks = document.querySelector('.sarudi-bucks')

let cursorCost = document.querySelector('.cursor-cost')

function incrementSarudiBuck(){
  sarudiBucks.innerHTML = sarudiBucks.innerHTML + 1
}
function buyCursor (){
  if (sarudiBucks.innerHTML >= cursorCost.innerHTML){sarudiBucks.innerHTML - cursorCost.innerHTML}
}