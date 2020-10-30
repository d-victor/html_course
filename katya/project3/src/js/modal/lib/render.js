import stringToHtml from "./_stringToHtml";
function render() {
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
                <a href="#close">Ok</a>
                <a class="cansel" href="#cansel">Cansel</a>
            </footer>
        </div>
    </section>
    `;
    const element = document.createElement('p');
    this.setContent(element);

    return stringToHtml(template);
}

export default render;