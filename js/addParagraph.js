import handleEditorInput from './handleEditorInput.js';
import toggleActive from './toggleActive.js'
/**
 * 
 * @param {event} event 
 */
export default function addParagraph(){
    // create an element (section of class editable text)
    const editableText = document.createElement('section');
    editableText.className = 'editable-text';
    // set its innerHTML
    editableText.innerHTML = shitTonOfText;
    // add event listeners
    editableText.querySelectorAll('.edit-button, .save-button')
        .forEach(button => button.addEventListener('click', 
        toggleActive));
    editableText.querySelector('.editor')
        .addEventListener('input', handleEditorInput);
        
    // append to main (before button)
    document.querySelector('main').insertBefore 
        (editableText, event.target);
}

const shitTonOfText = `
  <button type="button" class="edit-button">Edit</button>
  <p class="text-element">Go ahead, edit me however you want!</p>

  <div class="editor">
    <!-- prettier-ignore -->
    <textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>

    <section class="styles">
      <div class="form-group">
        <label>
          Font color:
          <input type="color" name="color" />
        </label>
      </div>

      <div class="form-group">
        <label>
          Font size:
          <input type="number" 
          name="font-size"
          data-unit="px" value="32"
          />
          px
        </label>
      </div>

      <div class="form-group">
        <label>
          Font family:
          <select>
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
          </select>
        </label>
      </div>
    </section>
  </div>
`;