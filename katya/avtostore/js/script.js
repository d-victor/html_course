(function () {
    var btn = document.querySelector('.subHeader_btn-mobile input');
    var parent = document.querySelector('.header_row');

    btn.addEventListener('click', function (event) {
        parent.classList.toggle('open');
        console.log('cl')
    });

})();

(function () {
    var btnGrid = document.querySelector('.button-grid');
    var btnList = document.querySelector('.button-list');
    var parentGrid = document.querySelector('.row_item_product');

    function switchGridList(event) {
        if (event.currentTarget.dataset.list){
            parentGrid.classList.add('grid');
        }else if(event.currentTarget.dataset.grid) {
            parentGrid.classList.remove('grid');
        }
    }
    btnGrid.addEventListener('click', switchGridList);
    btnList.addEventListener('click', switchGridList);

})();

(function (){
    var tabLangList = document.querySelector('.tabLang_list');
    var tabLangTittle = document.querySelector('.tabLang_tittle');

    tabLangList.addEventListener('click',function (e){
        tabLangTittle.textContent = e.target.textContent;
    });
})();

(function (){
  var currencyList = document.querySelector('.currency_list');
  var currencyTittle = document.querySelector('.currency_tittle');

    currencyList.addEventListener('click',function (e){
        var contentCurrent = e.target.textContent;
        var contentCurrentList = contentCurrent.split('-');
        currencyTittle.textContent = contentCurrentList[0];
    });
})();
