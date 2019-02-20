export default class EditableText extends HTMLElement{
    // constructor(){
    //     super();
    //     this.toggleActive = this.toggleActive.bind(this);
    // }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
            <button type="button" class="edit-button">Edit</button>
            <button type="button" class="save-button">Save</button>
            <p class="text-element">Go ahead, edit me however you want!</p>

            <wysiwyg-editor></wysiwyg-editor>
        `;

        // add event listeners
        this.querySelectorAll('.edit-button, .save-button')
            .forEach(button => button.addEventListener('click', 
            this.toggleActive));

        // actions bubble up
        this.querySelector('wysiwyg-editor').addEventListener
            ('input', this.handleInput);
    }

    toggleActive = () =>{
        // toggle the class active (on some element)
        this.classList.toggle('active');
    }

    handleInput = event => {
        const textEl = this.querySelector('.text-element');
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
}
