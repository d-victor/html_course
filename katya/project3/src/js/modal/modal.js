import defaultOptions from "./lib/defaultOptions";
import render from "./lib/render";
import setEvents from "./lib/setEvents";
//import setContent from "./lib/setContent";
import stringToHtml from "./lib/stringToHtml";
import isMode from "./lib/isMode";
import getErrorModeMessadge from "./lib/getErrorModeMessadge";

class Modal {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options,
        };
        if(!isMode(this.options.mode)) {
            try {
                throw new Error(getErrorModeMessadge(this.options.errorModeMessadge,this.options.mode));
            } catch (e) {
                console.error(e.name + ': ' + e.message);
            }
            return;
        }
        this.modal = render.apply(this);
        this.modalContent = this.modal.querySelector('.modal-content');
        this.modalTitle = this.modal.querySelector('.modal-header h3');
        this.modalBackground = this.modal.querySelector('.modal-bg');
        console.log(this.modalContent)
        setEvents.apply(this);

        document.body.append(this.modal);
    }

    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }

    setContent(content) {

        if (!content) return;
        this.options.content = content;
        this.modalContent.innerHTML = '';
        if (typeof content === "string") {
            this.modalContent.textContent = content;
        } else {
            this.modalContent.append(this.options.content);
        }

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
