import alerts from "./lid/alert";
import options from "./lid/options";
import Modal from "./modal/modal";

//alerts('sdfdsfds sdagfdsf0');
/*
let d = 'd';
const ddd = ['dd'];

console.log(options);*/

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
        modal.setTitle('dsdfsdfsdf');
        modal.setContent('<p>lasghdflskghdlsghlsd fhg;idus</p>');
        modal.open();
    } else {
        modal.close();
    }
}
