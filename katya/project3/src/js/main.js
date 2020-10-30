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
        const title = document.querySelector('.modal-change[name="title"]').value;
        const content = document.querySelector('.modal-change[name="content"]').value;
        if (title) modal.setTitle(title);
        if (content){
            modal.setContent('<p>' + content + '<p>');
        }
        modal.mode();
        modal.open();

    } else {
        modal.close();
    }
}
