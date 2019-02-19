import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

// select the edit button 
const editButts = document.querySelectorAll('.edit-button, .save-button');
// add event listener (click) to each button
editButts.forEach(button => button.addEventListener('click',
    toggleActive));

// listen for input events from editor
// when fired, update text or style of sibling text-element
document.querySelectorAll('.editor').forEach(
    editor => editor.addEventListener('input',
    handleEditorInput));

document.getElementById('add-button').addEventListener
    ('click', addParagraph);


// forward slash then star star for JS docs (/** */)
