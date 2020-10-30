import defaultOptions from "./lib/defaultOptions";
import render from "./lib/render";
import setEvents from "./lib/setEvents";
//import setContent from "./lib/setContent";
import stringToHtml from "./lib/_stringToHtml";
import setConfirm from "./lib/_confirm";

class Modal {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options,
        };

        this.modal = render.apply(this);
        this.modalContent = this.modal.querySelector('.modal-content');
        this.modalTitle = this.modal.querySelector('.modal-header h3');
        this.modalBackground = this.modal.querySelector('.modal-bg');
        console.log(this.modalBackground)
        setEvents.apply(this);

        document.body.append(this.modal);
    }
     mode() {
        setConfirm.apply(this);
     }

    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }

    setContent(content) {

        if (!content) return;
        this.options.content= stringToHtml(content);

        //this.modalContent.innerText = '';
        //this.modalContent.append(this.options.content);

    }
    setTitle(title) {
        if (!title) return;
        this.options.title = title;
        this.modalTitle.textContent = this.options.title;
    }

    setColorConfirm() {
        this.modalBackground.style.backgroundColor = 'red';
    }


}

export default Modal;
