(function () {
    var btn = document.querySelector('.subHeader_btn-mobile input');
    var parent = document.querySelector('.header_row');

    btn.addEventListener('click', function (event) {
        parent.classList.toggle('open');
        console.log('cl')
    });

})();

(function () {
    var parent = document.querySelector('.product-list');
    var parentGrid = document.querySelector('.row_item_product');

    function switchGridList(event) {
        if (event.target.dataset.list){
            parentGrid.classList.add('grid');
        }else if(event.target.dataset.grid) {
            parentGrid.classList.remove('grid');
        }
    }
    parent.addEventListener('click', switchGridList);

})();
