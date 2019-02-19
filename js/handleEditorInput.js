/** 
 * Update text (or style) 
 */

export default function handleEditorInput(event){
    const textEl = 
        event.currentTarget.parentNode.querySelector
        ('.text-element');
    if(event.target.type === 'text' ||
        event.target.tagName === 'TEXTAREA'){
            const text = event.target.value;
            textEl.innerText = text;
    }
    else{
        // handle styles
        const {value, name: styleName} = event.target;
        const unit = event.target.dataset.unit || '';
        textEl.style[styleName] = `${value}${unit}`;
    }
}
