
const accessForm = document.querySelector('#access-form');
const accessKey = document.querySelector('#access-key');
const accessStatus = document.querySelector('#access-status');
const accessGate = document.querySelector('#access-gate');
const gameContent = document.querySelector('#game-content');
const accessTier = document.querySelector('#access-tier');

accessForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  accessStatus.textContent = 'Checking access key...';

  const submitButton = accessForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const response = await fetch('/api/verify-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: accessKey.value })
    });
    const result = await response.json();

    if (!response.ok) {
      accessStatus.textContent = result.error || 'Unable to verify access key.';
      return;
    }

    accessTier.textContent = `Access tier: ${result.tier}`;
    gameContent.dataset.accessTier = result.tier;
    accessGate.hidden = true;
    gameContent.hidden = false;
  } catch {
    accessStatus.textContent = 'Could not reach the access service. Try again.';
  } finally {
    submitButton.disabled = false;
  }
});

let buck = document.querySelector('.sarudi-bucks');
let cursorCost = document.querySelector('.cursor-cost');
let cursorLevel = document.querySelector('.cursor-level');
let cursorIncrease = document.querySelector('.Cursor-increase');


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
    
    cursorLevel.innerHTML++; 
    
   
    parsedCursorCost = Math.round(parsedCursorCost * 1.5); 
    cursorCost.innerHTML = parsedCursorCost; 
    
  
    parsedCursorIncrease = parseFloat((parsedCursorIncrease * 1.03).toFixed(2)); 
    cursorIncrease.innerHTML = parsedCursorIncrease; 
    
 
    sbc += parsedCursorIncrease; 
}}
