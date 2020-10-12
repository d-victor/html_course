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
            if (btnGrid.classList.contains('active')) btnGrid.classList.remove('active');
            event.currentTarget.classList.add('active')

        }else if(event.currentTarget.dataset.grid) {
            parentGrid.classList.remove('grid');
            if (btnList.classList.contains('active')) btnList.classList.remove('active');
            event.currentTarget.classList.add('active');
        }
    }
    btnGrid.addEventListener('click', switchGridList);
    btnList.addEventListener('click', switchGridList);

})();

(function (){
    var tabLangList = document.querySelector('.tabLang_list');
    var tabLangListLi = tabLangList.querySelectorAll('li');
    var tabLangTittle = document.querySelector('.tabLang_tittle');

    tabLangListLi.forEach(function (li){
        li.addEventListener('click',checkLang);
    });
    function checkLang (e){
        tabLangTittle.textContent = e.target.textContent;
    }

})();

(function (){
  var currencyList = document.querySelector('.currency_list');
  var currencyListLi = currencyList.querySelectorAll('li');
  var currencyTittle = document.querySelector('.currency_tittle');

  currencyListLi.forEach(function (li){
      li.addEventListener('click', checkCurrency)
  });

    function checkCurrency (e) {
        var contentCurrent = e.target.textContent;
        var contentCurrentList = contentCurrent.split('-');
        currencyTittle.textContent = contentCurrentList[0];
    }

})();

(function (){
    var priceElements = document.querySelectorAll('.price');
    //var priceList = Array.prototype.slice.call(priceElem);
    console.log(priceElements);

   for (var i=0; i < priceElements.length; i++) {
       var price = priceElements[i].textContent.substring(1);
        price = parseFloat(price);

       console.log(price);

    }



})();
