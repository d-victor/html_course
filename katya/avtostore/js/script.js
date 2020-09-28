(function () {
    var btn = document.querySelector('.subHeader_btn-mobile input');
    var parent = document.querySelector('.header_row');

    btn.addEventListener('click', function (event) {
        parent.classList.toggle('open');
        console.log('cl')
    });

})();

(function () {
    var btnGrid = document.querySelector('.icon_list_btn');
    var parentGrid = document.querySelector('.row_item_product');
    console.log(btnGrid);
    btnGrid.addEventListener('click', function (event) {
        parentGrid.classList.toggle('grid');
        console.log('click');
    });
})();