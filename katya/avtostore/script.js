
(function () {
    var btn = document.querySelector('.subHeader_btn-mobile');
    var parent = document.querySelector('.header_row');

    btn.addEventListener('click', function (event) {
            parent.classList.add('open');
        console.log('cl')
    });
     /*btn.addEventListener('click', closeInput);

    function closeInput(event) {
        if (event.target === !event.currentTarget) return;
        setTimeout(function (event) {
            console.log('close');
            parent.classList.remove('open');
        }, 2000);

    }
*/

})();
