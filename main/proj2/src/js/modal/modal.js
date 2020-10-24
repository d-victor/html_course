import defaultOptions from "./lib/defaultOptions";
import render from "./lib/render";
import setEvents from "./lib/setEvents";

class Modal {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options,
        };
        
        this.modal = render.apply(this);
        setEvents.apply(this);
        
        document.body.append(this.modal);
    }
    
    open() {
        this.modal.classList.add('open');
    }
    
    close() {
        this.modal.classList.remove('open');
    }
}

export default Modal;
