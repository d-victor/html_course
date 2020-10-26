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
            </footer>
        </div>
    </section>
    `;
    const el = document.createElement('div');
    el.innerHTML = template;
    return el.firstElementChild;
}

export default render;