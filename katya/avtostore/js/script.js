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
    var minPrice = parseFloat(priceElements[0].textContent.substring(1));
    var maxPrice = minPrice;

    for (var i = 1; i < priceElements.length; i++) {
        var price = parseFloat(priceElements[i].textContent.substring(1));
        if (price > maxPrice) {
            maxPrice = price;
            continue;
        }
        if (price < minPrice) {
            minPrice = price;
        }
    }
    var rangePrice = maxPrice - minPrice;
    inputMin.value = minPrice;
    inputMax.value = maxPrice;

    var sliderCoords = getCoordinates(range);
    var rangeEnd = range.offsetWidth - minRange.offsetWidth;

    minRange.addEventListener('mousedown', function (event) {
        dragRange(event, minRange, minPrice, inputMin);
    });

    maxRange.addEventListener('mousedown', function (event) {
        dragRange(event, maxRange, maxPrice, inputMax);
    });

    inputMin.addEventListener('input', checkInput);
    inputMax.addEventListener('input', checkInput);

    function dragRange(event, range, price, inputMin) {

        var startCords = getCoordinates(range);
        var shiftX = event.pageX - startCords.left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            var coordinates = event.pageX - shiftX - sliderCoords.left;

            if (coordinates < 0) {
                coordinates = 0;
            }
            if (coordinates > rangeEnd) {
                coordinates = rangeEnd;
            }
            range.style.left = coordinates + 'px';

            if (event.target === minRange) {
                var percent = (coordinates * 100) / rangeEnd;
                var increment = Math.round((rangePrice * percent) / 100);
                inputMin.value = price + increment;
            } else if (event.target === maxRange) {
                var step = rangeEnd - coordinates;
                step = (step * 100) / rangeEnd;
                var incrementSum = Math.round((rangePrice * step) / 100);
                inputMax.value = maxPrice - incrementSum;
            }
        }

        function onMouseUp(event) {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

    function checkInput(e) {
        if (e.target.value < minPrice || e.target.value > maxPrice) return;
        if (e.target === inputMin) {
            var stepMin = e.target.value - minPrice;
            minRange.style.left = countStepInput(stepMin) + 'px'
        } else if (e.target === inputMax) {
            var stepMax = maxPrice - e.target.value;
            maxRange.style.left = ((rangeEnd - countStepInput(stepMax)) + 'px');
        }
    }

    function countStepInput(step) {
        var increment = Math.round((100 * step) / rangePrice);
        var stepNew = (rangeEnd * increment) / 100;
        return stepNew;
    }

    function getCoordinates(elem) {
        var box = elem.getBoundingClientRect();

        return {
            left: box.left + pageXOffset,
        };
    }

})();
