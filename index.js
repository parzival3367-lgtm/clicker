let sarudiBucks = document.querySelector('.sarudi-bucks')

let cursorCost = document.querySelector('.cursor-cost')

function incrementSarudiBuck(){
  sarudiBucks.innerHTML = sarudiBucks.innerHTML + 1
}
function buyCursor (){
  if (sarudiBucks >= cursorCost.innerHTML){sarudiBucks - cursorCost.innerHTML}
}