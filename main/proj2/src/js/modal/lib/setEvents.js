function setEvents() {
    const {modal, options} = this;
    const modalBg = modal.querySelector('.modal-bg');
    const close = modal.querySelectorAll('[href="#close"]');
    
    modalBg.addEventListener('click', this.close.bind(this));
    close.forEach(item => {
        item.addEventListener('click', modalClose.bind(this));
    });
}

function modalClose(e) {
    e.preventDefault();
    
    this.close();
}

export default setEvents;
