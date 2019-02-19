/** 
 * Update text (or style) 
 */

export default function handleEditorInput(event){
    if(event.target.type === 'text' ||
        event.target.tagName === 'TEXTAREA'){
            const textEl = 
                event.target.parentNode.querySelector
                ('.text-element');
            const text = event.target.value;
            textEl.innerText = text;
        }
}
