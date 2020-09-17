
(function () {
    var btn = document.querySelector('.subHeader_btn-mobile');
    var parent = document.querySelector('.header_row');
    console.log(btn);
    btn.addEventListener('click', function (event) {
        if (event.target) {
            parent.classList.add('open');
        }
    });
    btn.addEventListener('click', closeInput);

    function closeInput(event) {

    }

})();
