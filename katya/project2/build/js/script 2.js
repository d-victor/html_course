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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQgMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViSGVhZGVyX2J0bi1tb2JpbGUgaW5wdXQnKTtcbiAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9yb3cnKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2wnKVxuICAgIH0pO1xuXG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBidG5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1ncmlkJyk7XG4gICAgdmFyIGJ0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxpc3QnKTtcbiAgICB2YXIgcGFyZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3dfaXRlbV9wcm9kdWN0Jyk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hHcmlkTGlzdChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxpc3QpIHtcbiAgICAgICAgICAgIHBhcmVudEdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgICAgICAgICAgaWYgKGJ0bkdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgYnRuR3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5ncmlkKSB7XG4gICAgICAgICAgICBwYXJlbnRHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQnKTtcbiAgICAgICAgICAgIGlmIChidG5MaXN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIGJ0bkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnRuR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEdyaWRMaXN0KTtcbiAgICBidG5MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoR3JpZExpc3QpO1xuXG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YWJMYW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJMYW5nX2xpc3QnKTtcbiAgICB2YXIgdGFiTGFuZ0xpc3RMaSA9IHRhYkxhbmdMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgdmFyIHRhYkxhbmdUaXR0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiTGFuZ190aXR0bGUnKTtcblxuICAgIHRhYkxhbmdMaXN0TGkuZm9yRWFjaChmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xhbmcpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tMYW5nKGUpIHtcbiAgICAgICAgdGFiTGFuZ1RpdHRsZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIH1cblxufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVuY3lMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbmN5X2xpc3QnKTtcbiAgICB2YXIgY3VycmVuY3lMaXN0TGkgPSBjdXJyZW5jeUxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB2YXIgY3VycmVuY3lUaXR0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVuY3lfdGl0dGxlJyk7XG5cbiAgICBjdXJyZW5jeUxpc3RMaS5mb3JFYWNoKGZ1bmN0aW9uIChsaSkge1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ3VycmVuY3kpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0N1cnJlbmN5KGUpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRDdXJyZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIHZhciBjb250ZW50Q3VycmVudExpc3QgPSBjb250ZW50Q3VycmVudC5zcGxpdCgnLScpO1xuICAgICAgICBjdXJyZW5jeVRpdHRsZS50ZXh0Q29udGVudCA9IGNvbnRlbnRDdXJyZW50TGlzdFswXTtcbiAgICB9XG5cbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaWNlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2UnKTtcbiAgICB2YXIgaW5wdXRNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLWlucHV0Jyk7XG4gICAgdmFyIGlucHV0TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC1pbnB1dCcpO1xuICAgIHZhciBtaW5SYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4tcmFuZ2UnKTtcbiAgICB2YXIgbWF4UmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXJhbmdlJyk7XG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlJyk7XG4gICAgdmFyIG1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUVsZW1lbnRzWzBdLnRleHRDb250ZW50LnN1YnN0cmluZygxKSk7XG4gICAgdmFyIG1heFByaWNlID0gbWluUHJpY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHByaWNlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByaWNlID0gcGFyc2VGbG9hdChwcmljZUVsZW1lbnRzW2ldLnRleHRDb250ZW50LnN1YnN0cmluZygxKSk7XG4gICAgICAgIGlmIChwcmljZSA8IG1pblByaWNlKSB7XG4gICAgICAgICAgICBtaW5QcmljZSA9IHByaWNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmljZSA+IG1heFByaWNlKSB7XG4gICAgICAgICAgICBtYXhQcmljZSA9IHByaWNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByYW5nZVByaWNlID0gbWF4UHJpY2UgLSBtaW5QcmljZTtcbiAgICBpbnB1dE1pbi52YWx1ZSA9IG1pblByaWNlO1xuICAgIGlucHV0TWF4LnZhbHVlID0gbWF4UHJpY2U7XG5cbiAgICB2YXIgc2xpZGVyQ29vcmRzID0gZ2V0Q29vcmRpbmF0ZXMocmFuZ2UpO1xuICAgIHZhciByYW5nZUVuZCA9IHJhbmdlLm9mZnNldFdpZHRoIC0gbWluUmFuZ2Uub2Zmc2V0V2lkdGg7XG5cbiAgICBtaW5SYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZHJhZ1JhbmdlKGV2ZW50LCBtaW5SYW5nZSwgbWluUHJpY2UsIGlucHV0TWluKTtcbiAgICB9KTtcblxuICAgIG1heFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkcmFnUmFuZ2UoZXZlbnQsIG1heFJhbmdlLCBtYXhQcmljZSwgaW5wdXRNYXgpO1xuICAgIH0pO1xuXG4gICAgaW5wdXRNaW4uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja0lucHV0KTtcbiAgICBpbnB1dE1heC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrSW5wdXQpO1xuXG4gICAgZnVuY3Rpb24gZHJhZ1JhbmdlKGV2ZW50LCBtaW5NYXhSYW5nZSwgbWluTWF4UHJpY2UsIGlucHV0TWluTWF4LCBtYXgpIHtcblxuICAgICAgICB2YXIgc3RhcnRDb3JkcyA9IGdldENvb3JkaW5hdGVzKG1pbk1heFJhbmdlKTtcbiAgICAgICAgdmFyIHNoaWZ0WCA9IGV2ZW50LnBhZ2VYIC0gc3RhcnRDb3Jkcy5sZWZ0O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBjb29yZGluYXRlcyA9IGV2ZW50LnBhZ2VYIC0gc2hpZnRYIC0gc2xpZGVyQ29vcmRzLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlcyA8IDApIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPiByYW5nZUVuZCkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gcmFuZ2VFbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaW5NYXhSYW5nZS5zdHlsZS5sZWZ0ID0gY29vcmRpbmF0ZXMgKyAncHgnO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtaW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKGNvb3JkaW5hdGVzICogMTAwKSAvIHJhbmdlRW5kO1xuICAgICAgICAgICAgICAgIHZhciBpbmNyZW1lbnQgPSBNYXRoLnJvdW5kKChyYW5nZVByaWNlICogcGVyY2VudCkgLyAxMDApO1xuICAgICAgICAgICAgICAgIGlucHV0TWluTWF4LnZhbHVlID0gbWluTWF4UHJpY2UgKyBpbmNyZW1lbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gbWF4UmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IHJhbmdlRW5kIC0gY29vcmRpbmF0ZXM7XG4gICAgICAgICAgICAgICAgc3RlcCA9IChzdGVwICogMTAwKSAvIHJhbmdlRW5kO1xuICAgICAgICAgICAgICAgIHZhciBpbmNyZW1lbnRTdW0gPSBNYXRoLnJvdW5kKChyYW5nZVByaWNlICogc3RlcCkgLyAxMDApO1xuICAgICAgICAgICAgICAgIGlucHV0TWF4LnZhbHVlID0gbWF4UHJpY2UgLSBpbmNyZW1lbnRTdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IG1pblByaWNlIHx8IGUudGFyZ2V0LnZhbHVlID4gbWF4UHJpY2UpIHJldHVybjtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBpbnB1dE1pbikge1xuICAgICAgICAgICAgdmFyIHN0ZXBNaW4gPSBlLnRhcmdldC52YWx1ZSAtIG1pblByaWNlO1xuICAgICAgICAgICAgbWluUmFuZ2Uuc3R5bGUubGVmdCA9IGNvdW50U3RlcElucHV0KHN0ZXBNaW4pICsgJ3B4J1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBpbnB1dE1heCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBNYXggPSBtYXhQcmljZSAtIGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbWF4UmFuZ2Uuc3R5bGUubGVmdCA9ICgocmFuZ2VFbmQgLSBjb3VudFN0ZXBJbnB1dChzdGVwTWF4KSkgKyAncHgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50U3RlcElucHV0KHN0ZXApIHtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IE1hdGgucm91bmQoKDEwMCAqIHN0ZXApIC8gcmFuZ2VQcmljZSk7XG4gICAgICAgIHZhciBzdGVwTmV3ID0gKHJhbmdlRW5kICogaW5jcmVtZW50KSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIHN0ZXBOZXc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoZWxlbSkge1xuICAgICAgICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBwYWdlWE9mZnNldCxcbiAgICAgICAgfTtcbiAgICB9XG5cbn0pKCk7Il0sImZpbGUiOiJzY3JpcHQgMi5qcyJ9
