let sarudiBucks = 0

let cursorCost = document.querySelector('.cursor-cost')

function incrementSarudiBuck(){
  sarudiBucks += 1
  document.querySelector('.sarudi-bucks').textContent = sarudiBucks
}

function buyCursor (){
  if (sarudiBucks >= cursorCost.innerHTML){sarudiBucks - cursorCost.innerHTML}
}