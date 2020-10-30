function setConfirm() {

    const elemFooter = this.modal.querySelector('.modal-footer');
    elemFooter.insertAdjacentHTML("beforeend",'<a class="cansel" href="#cansel">Cansel</a>');
    const btnCansel = this.modal.querySelector('[href="#cansel"]');
    console.log(this.modal)
        this.modalTitle.textContent = 'Confirm';
    this.modalContent.textContent = 'Do you want point the backgroung in red color?';
    console.log(this.modalTitle,this.modalContent);

    elemFooter.firstElementChild.addEventListener('click', (e) => {
        this.setColorConfirm();
    });

    btnCansel.addEventListener('click', closeConfirm.bind(this));
    function closeConfirm() {
        this.close();
    }

    console.log(btnCansel)
}

export default setConfirm;