import {modeAlert,modeConfirm,modePromt} from "./isMode";

function setEvents() {
    const {modal, options} = this;
    const modalBg = modal.querySelector('.modal-bg');
    const close = modal.querySelectorAll('[href="#close"]');
    const cansel = modal.querySelector('[href="#cansel"]');
    let promtSubmit;
    let confirmSubmit;

    if (options.mode === modeConfirm) {
       confirmSubmit = modal.querySelector('[href="#true"]');
    }
    if (options.mode === modePromt) {
      promtSubmit = modal.querySelector('[href="#submit"]');
    }
    console.log(promtSubmit,confirmSubmit);

    modalBg.addEventListener('click', this.close.bind(this));
    close.forEach(item => {
        item.addEventListener('click', modalClose.bind(this));
    });

    cansel.addEventListener('click', modalClose.bind(this));


    if (confirmSubmit) {
        confirmSubmit.addEventListener('click', submitConfirm.bind(this));
    }

    if (promtSubmit) {
        promtSubmit.addEventListener('click', submitPromt.bind(this));
    }
}
function submitPromt(e) {
    const {promtHendler} = this.options;
    if (promtHendler) {
    promtHendler(this.options.content,e);
    }

}

function submitConfirm(e) {
   e.preventDefault();
   const {confirmHandler} = this.options;
   if (confirmHandler) confirmHandler.apply(this);
   this.close();
}

function modalClose(e) {
    e.preventDefault();
    this.close();
}

export default setEvents;
