/**
 * 
 * @param {event} event 
 */
export default function addParagraph(){
    // create an element (section of class editable text)
    const editableText = document.createElement
        ('wysiwyg-editable-text');
        
    // append to main (before button)
    document.querySelector('main').insertBefore 
        (editableText, event.target);
}

