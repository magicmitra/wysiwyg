import toggleActive from './toggleActive.js';

// select the edit button 
const editButts = document.querySelectorAll('.edit-button');
// add event listener (click) to each button
editButts.forEach(button => button.addEventListener('click',
    toggleActive));

// forward slash then star star for JS docs (/** */)
