import Modal from "./modal/modal";
import {modeAlert,modeConfirm,modePromt} from "./modal/lib/isMode"

const modal = new Modal({
    content: '<form><label><input type="text"></label></form>',
    title: "title modal",
    cc: {
        aa: 'ss'
    },
    mode: modePromt,
    confirmHandler: function () {
        document.body.style.backgroundColor = 'red';
    },
    promtHendler: function (form,e) {
        console.log(form,e);
    },

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
            modal.setContent(content);
        }
        modal.open();

    } else {
        modal.close();
    }
}
