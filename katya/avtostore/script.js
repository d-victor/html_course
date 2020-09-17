
(function () {
    var btn = document.querySelector('.subHeader_btn-mobile');
    var parent = document.querySelector('.header_row');

    parent.addEventListener('click', function (event) {
            parent.classList.add('open');
        console.log('cl',parent)
    });
    btn.addEventListener('click', closeInput);

    function closeInput(event) {
        parent.classList.remove('open');
    }


})();
