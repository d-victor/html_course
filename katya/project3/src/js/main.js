/*
import alerts from "./lid/alert";
alerts('asad');
*/


import Modal from "./modal/modal";

const modal = new Modal({
    content: "Hello world",
    title: "title modal",
    cc: {
        aa: 'ss'
    }
});
//console.log(modal)
const openBtnList = [...document.querySelectorAll('.modal-action')];

openBtnList.map(btn => {
    btn.addEventListener('click', actionModal)
});

function actionModal() {
    if (this.dataset.rel === 'open') {
        modal.open();
    } else {
        modal.close();
    }
}