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
        if (price < minPrice) {
            minPrice = price;
        }
        if (price > maxPrice) {
            maxPrice = price;
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

    function dragRange(event, minMaxRange, minMaxPrice, inputMinMax, max) {

        var startCords = getCoordinates(minMaxRange);
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
            minMaxRange.style.left = coordinates + 'px';

            if (event.target === minRange) {
                var percent = (coordinates * 100) / rangeEnd;
                var increment = Math.round((rangePrice * percent) / 100);
                inputMinMax.value = minMaxPrice + increment;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkhlYWRlcl9idG4tbW9iaWxlIGlucHV0Jyk7XG4gICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfcm93Jyk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsJylcbiAgICB9KTtcblxufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnRuR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZ3JpZCcpO1xuICAgIHZhciBidG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1saXN0Jyk7XG4gICAgdmFyIHBhcmVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93X2l0ZW1fcHJvZHVjdCcpO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoR3JpZExpc3QoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5saXN0KSB7XG4gICAgICAgICAgICBwYXJlbnRHcmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgIGlmIChidG5HcmlkLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIGJ0bkdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZ3JpZCkge1xuICAgICAgICAgICAgcGFyZW50R3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkJyk7XG4gICAgICAgICAgICBpZiAoYnRuTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBidG5MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ0bkdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hHcmlkTGlzdCk7XG4gICAgYnRuTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEdyaWRMaXN0KTtcblxufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFiTGFuZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiTGFuZ19saXN0Jyk7XG4gICAgdmFyIHRhYkxhbmdMaXN0TGkgPSB0YWJMYW5nTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIHZhciB0YWJMYW5nVGl0dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYkxhbmdfdGl0dGxlJyk7XG5cbiAgICB0YWJMYW5nTGlzdExpLmZvckVhY2goZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMYW5nKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrTGFuZyhlKSB7XG4gICAgICAgIHRhYkxhbmdUaXR0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICB9XG5cbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbmN5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW5jeV9saXN0Jyk7XG4gICAgdmFyIGN1cnJlbmN5TGlzdExpID0gY3VycmVuY3lMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgdmFyIGN1cnJlbmN5VGl0dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbmN5X3RpdHRsZScpO1xuXG4gICAgY3VycmVuY3lMaXN0TGkuZm9yRWFjaChmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0N1cnJlbmN5KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tDdXJyZW5jeShlKSB7XG4gICAgICAgIHZhciBjb250ZW50Q3VycmVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICB2YXIgY29udGVudEN1cnJlbnRMaXN0ID0gY29udGVudEN1cnJlbnQuc3BsaXQoJy0nKTtcbiAgICAgICAgY3VycmVuY3lUaXR0bGUudGV4dENvbnRlbnQgPSBjb250ZW50Q3VycmVudExpc3RbMF07XG4gICAgfVxuXG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmljZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlJyk7XG4gICAgdmFyIGlucHV0TWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1pbnB1dCcpO1xuICAgIHZhciBpbnB1dE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtaW5wdXQnKTtcbiAgICB2YXIgbWluUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXJhbmdlJyk7XG4gICAgdmFyIG1heFJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC1yYW5nZScpO1xuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZScpO1xuICAgIHZhciBtaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50c1swXS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMSkpO1xuICAgIHZhciBtYXhQcmljZSA9IG1pblByaWNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwcmljZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcmljZSA9IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50c1tpXS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBpZiAocHJpY2UgPCBtaW5QcmljZSkge1xuICAgICAgICAgICAgbWluUHJpY2UgPSBwcmljZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpY2UgPiBtYXhQcmljZSkge1xuICAgICAgICAgICAgbWF4UHJpY2UgPSBwcmljZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmFuZ2VQcmljZSA9IG1heFByaWNlIC0gbWluUHJpY2U7XG4gICAgaW5wdXRNaW4udmFsdWUgPSBtaW5QcmljZTtcbiAgICBpbnB1dE1heC52YWx1ZSA9IG1heFByaWNlO1xuXG4gICAgdmFyIHNsaWRlckNvb3JkcyA9IGdldENvb3JkaW5hdGVzKHJhbmdlKTtcbiAgICB2YXIgcmFuZ2VFbmQgPSByYW5nZS5vZmZzZXRXaWR0aCAtIG1pblJhbmdlLm9mZnNldFdpZHRoO1xuXG4gICAgbWluUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRyYWdSYW5nZShldmVudCwgbWluUmFuZ2UsIG1pblByaWNlLCBpbnB1dE1pbik7XG4gICAgfSk7XG5cbiAgICBtYXhSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZHJhZ1JhbmdlKGV2ZW50LCBtYXhSYW5nZSwgbWF4UHJpY2UsIGlucHV0TWF4KTtcbiAgICB9KTtcblxuICAgIGlucHV0TWluLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tJbnB1dCk7XG4gICAgaW5wdXRNYXguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIGRyYWdSYW5nZShldmVudCwgbWluTWF4UmFuZ2UsIG1pbk1heFByaWNlLCBpbnB1dE1pbk1heCwgbWF4KSB7XG5cbiAgICAgICAgdmFyIHN0YXJ0Q29yZHMgPSBnZXRDb29yZGluYXRlcyhtaW5NYXhSYW5nZSk7XG4gICAgICAgIHZhciBzaGlmdFggPSBldmVudC5wYWdlWCAtIHN0YXJ0Q29yZHMubGVmdDtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY29vcmRpbmF0ZXMgPSBldmVudC5wYWdlWCAtIHNoaWZ0WCAtIHNsaWRlckNvb3Jkcy5sZWZ0O1xuXG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzID4gcmFuZ2VFbmQpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IHJhbmdlRW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWluTWF4UmFuZ2Uuc3R5bGUubGVmdCA9IGNvb3JkaW5hdGVzICsgJ3B4JztcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbWluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IChjb29yZGluYXRlcyAqIDEwMCkgLyByYW5nZUVuZDtcbiAgICAgICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gTWF0aC5yb3VuZCgocmFuZ2VQcmljZSAqIHBlcmNlbnQpIC8gMTAwKTtcbiAgICAgICAgICAgICAgICBpbnB1dE1pbk1heC52YWx1ZSA9IG1pbk1heFByaWNlICsgaW5jcmVtZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IG1heFJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSByYW5nZUVuZCAtIGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoc3RlcCAqIDEwMCkgLyByYW5nZUVuZDtcbiAgICAgICAgICAgICAgICB2YXIgaW5jcmVtZW50U3VtID0gTWF0aC5yb3VuZCgocmFuZ2VQcmljZSAqIHN0ZXApIC8gMTAwKTtcbiAgICAgICAgICAgICAgICBpbnB1dE1heC52YWx1ZSA9IG1heFByaWNlIC0gaW5jcmVtZW50U3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXQoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPCBtaW5QcmljZSB8fCBlLnRhcmdldC52YWx1ZSA+IG1heFByaWNlKSByZXR1cm47XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gaW5wdXRNaW4pIHtcbiAgICAgICAgICAgIHZhciBzdGVwTWluID0gZS50YXJnZXQudmFsdWUgLSBtaW5QcmljZTtcbiAgICAgICAgICAgIG1pblJhbmdlLnN0eWxlLmxlZnQgPSBjb3VudFN0ZXBJbnB1dChzdGVwTWluKSArICdweCdcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gaW5wdXRNYXgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwTWF4ID0gbWF4UHJpY2UgLSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIG1heFJhbmdlLnN0eWxlLmxlZnQgPSAoKHJhbmdlRW5kIC0gY291bnRTdGVwSW5wdXQoc3RlcE1heCkpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudFN0ZXBJbnB1dChzdGVwKSB7XG4gICAgICAgIHZhciBpbmNyZW1lbnQgPSBNYXRoLnJvdW5kKCgxMDAgKiBzdGVwKSAvIHJhbmdlUHJpY2UpO1xuICAgICAgICB2YXIgc3RlcE5ldyA9IChyYW5nZUVuZCAqIGluY3JlbWVudCkgLyAxMDA7XG4gICAgICAgIHJldHVybiBzdGVwTmV3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGVsZW0pIHtcbiAgICAgICAgdmFyIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgcGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuXG59KSgpOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
