/**
 * function that adds a class to editable-text
 * Toggles active class on editable text
 * @param {event} event 
 */
export default function toggleActive(event){
    // get the parent element
    const editableText = event.target.parentElement;
    // toggle the class active (on some element)
    editableText.classList.toggle('active');
}