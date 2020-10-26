function setContent() {

    const inputList = [...document.querySelectorAll('.modal-change')];

    inputList.forEach(function (elem) {
        elem.addEventListener('change', changeContent.bind(this));
    }.bind(this));

    function changeContent(e) {
        const newTitle = this.modal.querySelector('h3');
        const newContent = this.modal.querySelector('.modal-content')

        if (e.currentTarget.hasAttribute(['data-title'])) {
            newTitle.textContent = e.currentTarget.value;

        } else if (e.currentTarget.hasAttribute(['data-content'])) {
            newContent.textContent = e.currentTarget.value;
        }
    }
}

export default setContent;
