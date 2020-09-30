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
        parentGrid.classList.add('grid');
        console.log('click');
    });
})();

(function () {
    var btnGridTh = document.querySelector('.icon_th_grid');
    var parentGrid = document.querySelector('.row_item_product');
    console.log(btnGridTh);
    btnGridTh.addEventListener('click', function (event) {
        parentGrid.classList.remove('grid');
        console.log('click2');
    });
})();