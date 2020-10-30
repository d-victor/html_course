import defaultOptions from "./lib/defaultOptions";
import render from "./lib/render";
import setEvents from "./lib/setEvents";
//import setContent from "./lib/setContent";
import stringToHtml from "./lib/_stringToHtml";

class Modal {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options,
        };

        this.modal = render.apply(this);
        this.modalContent = this.modal.querySelector('.modal-content');
        this.modalTitle = this.modal.querySelector('.modal-header h3');
        setEvents.apply(this);
        console.log(this.modalContent)
        document.body.append(this.modal);
    }

    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }

    setContent(content) {
        console.log(this.modalContent)
        if (!content) return;
        this.options.content= stringToHtml(content);
        console.log(this.options.content)
        //this.modalContent.innerText = '';
        //this.modalContent.append(this.options.content);

    }
    setTitle(title) {
        if (!title) return;
        this.options.title = title;
        this.modalTitle.textContent = this.options.title;
        console.log(this.modalTitle)
    }
}

export default Modal;
