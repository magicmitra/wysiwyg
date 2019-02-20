import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';
import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

// listen for input events from editor
// when fired, update text or style of sibling text-element
document.querySelectorAll('.editor').forEach(
    editor => editor.addEventListener('input',
    handleEditorInput));

document.getElementById('add-button').addEventListener
    ('click', addParagraph);


// forward slash then star star for JS docs (/** */)
