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
        if (event.currentTarget.dataset.list) {
            parentGrid.classList.add('grid');
            if (btnGrid.classList.contains('active')) btnGrid.classList.remove('active');
            event.currentTarget.classList.add('active')

        } else if (event.currentTarget.dataset.grid) {
            parentGrid.classList.remove('grid');
            if (btnList.classList.contains('active')) btnList.classList.remove('active');
            event.currentTarget.classList.add('active');
        }
    }

    btnGrid.addEventListener('click', switchGridList);
    btnList.addEventListener('click', switchGridList);

})();

(function () {
    var tabLangList = document.querySelector('.tabLang_list');
    var tabLangListLi = tabLangList.querySelectorAll('li');
    var tabLangTittle = document.querySelector('.tabLang_tittle');

    tabLangListLi.forEach(function (li) {
        li.addEventListener('click', checkLang);
    });

    function checkLang(e) {
        tabLangTittle.textContent = e.target.textContent;
    }

})();

(function () {
    var currencyList = document.querySelector('.currency_list');
    var currencyListLi = currencyList.querySelectorAll('li');
    var currencyTittle = document.querySelector('.currency_tittle');

    currencyListLi.forEach(function (li) {
        li.addEventListener('click', checkCurrency)
    });

    function checkCurrency(e) {
        var contentCurrent = e.target.textContent;
        var contentCurrentList = contentCurrent.split('-');
        currencyTittle.textContent = contentCurrentList[0];
    }

})();

(function () {
    var priceElements = document.querySelectorAll('.price');
    var inputMin = document.querySelector('.min-input');
    var inputMax = document.querySelector('.max-input');
    var minRange = document.querySelector('.min-range');
    var maxRange = document.querySelector('.max-range');
    var range = document.querySelector('.range');
    var priceList = [];
    for (var i = 0; i < priceElements.length; i++) {
        var price = priceElements[i].textContent.substring(1);
        price = parseFloat(price);
        priceList.push(price);
    }
    priceList.sort();
    var minPrice = priceList[0];
    var maxPrice = priceList[priceList.length - 1];
    var rangePrice = maxPrice - minPrice;
    inputMin.value = minPrice;
    inputMax.value = maxPrice;

    var sliderCoords = getCoordinates(range);
    var rangeEnd = range.offsetWidth - minRange.offsetWidth;

    var min = parseInt(getComputedStyle(minRange).left);
    var max = parseInt(getComputedStyle(maxRange).left);


    minRange.addEventListener('mousedown', function (e) {
        e.preventDefault();
        var startCords = getCoordinates(minRange);
        var shiftX = e.pageX - startCords.left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {
            var newLeftMin = e.pageX - shiftX - sliderCoords.left;

            if (newLeftMin < 0) {
                newLeftMin = 0;
            }

            if (newLeftMin > max - minRange.offsetWidth / 2) {
                newLeftMin = max - minRange.offsetWidth / 2;
            }
            min = newLeftMin;

            minRange.style.left = newLeftMin + 'px';
            var percent = (min * 100) / rangeEnd;
            var incrementSum = Math.round((rangePrice * percent) / 100);
            incrementSum = (incrementSum);
            inputMin.value = minPrice + incrementSum;

        }

        function onMouseUp(e) {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);

        }

    });

    maxRange.addEventListener('mousedown', function (e) {
        var maxCoords = getCoordinates(maxRange);
        var shiftMax = e.pageX - maxCoords.left;
        console.log(maxCoords,e.pageX)
        document.addEventListener('mousemove', onMouseMoveMax);
        document.addEventListener('mousemove', onMouseUpMax);

        function onMouseMoveMax(e) {

            var newLeft = e.pageX - shiftMax - sliderCoords.left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            if (newLeft < max - maxRange.offsetWidth / 2) {
                newLeft = max - maxRange.offsetWidth / 2;
            }

            if (newLeft > rangeEnd) {
                newLeft = rangeEnd;
            }
            max = newLeft;
            maxRange.style.left = newLeft + 'px';

            var step = rangeEnd - max;
            var percentMax =(step * 100) / rangeEnd;
            var incrementSumMax = Math.round((rangePrice * percentMax) / 100);
            inputMin.value = maxPrice - incrementSumMax;

        }

        function onMouseUpMax(e) {
            document.removeEventListener('mouseup', onMouseUpMax);
            document.removeEventListener('mousemove', onMouseMoveMax);
        }

    });

    minRange.ondragstart = function () {
        return false;
    }


    function getCoordinates(elem) {
        var box = elem.getBoundingClientRect();

        return {
            left: box.left + pageXOffset,
        };
    }

})();
