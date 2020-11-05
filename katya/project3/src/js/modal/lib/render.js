import isMode from "./isMode";
import {modeAlert,modeConfirm,modePromt} from "./isMode";
import stringToHtml from "./stringToHtml";
function render() {
    const btnModal = this.options.mode === modeAlert ?
        '<a href="#close">Ok</a>' :
        this.options.mode === modeConfirm ?
            '<a href="#true">Ok</a> <a href="#cansel">Cansel</a>' :
            '<a href="#submit">Ok</a> <a href="#cansel">Cansel</a>';

    console.log(modeAlert);
    const template = `
    <section class="modal-wp">
        <div class="modal-bg"></div>
        <div class="modal">
            <header class="modal-header">
                <h3>${this.options.tittle}</h3>
                <a href="#close">Close</a>
            </header>
            <div class="modal-content">
                ${this.options.content}
            </div>
            <footer class="modal-footer">
             ${btnModal}
            </footer>
        </div>
    </section>
    `;

    return stringToHtml(template);
}

export default render;