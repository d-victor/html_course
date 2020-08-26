/*
console.log(document.getElementById('main'));
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('[href]'));
var linkList = document.querySelectorAll('[href]');

linkList.forEach(function (link) {
    console.log(link);
    link.style.color = 'red';
});*/

var elem = document.createElement('div');
elem.setAttribute('type', 'text');
elem.setAttribute('value', 'text');
elem.classList.add('text', 'sdfds', 'dsfg', 'sdf');
elem.classList.remove('text', 'sdf');
elem.classList.contains('text');
elem.classList.toggle('text');

elem.textContent = 'aaaaaaaaaaaaaaaaaaaaaa dsfgfde';

/*console.log(elem);
document.body.append(elem);*/

function setHtmlElement(options) {
    if (!options || !options.elem) return;
    
    var elem = document.createElement(options.elem);
    
    if (options.className) {
       setClass(elem, options.className);
    }
    
    if (options.attr) {
        setAttr(elem, options.attr);
    }
    
    if (options.content) {
        setContent(elem, options.content);
    }
    
    return elem;
}

function setContent(elem, content) {
    if (!elem && !content) return;
    
    if (typeof content === 'string') {
        elem.textContent = content;
    } else if ('elem' in content) {
        elem.append(setHtmlElement(content));
    } else if (content.nodeType === 1 || content.nodeType === 11) {
        elem.append(content);
    } else if (Array.isArray(content)) {
        content.forEach(function (itemElem) {
            if (typeof itemElem === 'string') elem.textContent = itemElem;
            if ('elem' in itemElem) elem.append(setHtmlElement(itemElem));
            if (itemElem.nodeType === 1 || itemElem.nodeType === 11) elem.append(itemElem);
        });
    }
}

function setClass(elem, className) {
    if (!elem && !className) return;
    
    className.split(' ').forEach(function (classItemName) {
        elem.classList.add(classItemName);
    });
}

function setAttr(elem, attr) {
    if (!elem && !attr) return;
    
    for (var key in attr) {
        elem.setAttribute(key, attr[key]);
    }
}

var f = document.createDocumentFragment();
f.append(setHtmlElement({
    elem: 'div',
    className: 'dasf dstgfdr srfg',
    attr: {
        id: 'dsefsd',
        'data-df': 'sdf'
    },
    content: [{
        elem: 'img',
        className: 'img',
        attr: {
            src: 'images/img_car.jpg',
            alt: ''
        }
    }, {
        elem: 'img',
        className: 'img',
        attr: {
            src: 'images/img_food.jpg',
            alt: ''
        }
    }]
}));
f.append(setHtmlElement({
    elem: 'div',
    className: 'dasf dstgfdr srfg',
    attr: {
        id: 'dsd',
        'data-df': 'sdf'
    },
    content: [{
        elem: 'img',
        className: 'img',
        attr: {
            src: 'images/img_car.jpg',
            alt: ''
        }
    }, {
        elem: 'img',
        className: 'img',
        attr: {
            src: 'images/img_food.jpg',
            alt: ''
        }
    }]
}));
console.log(f);
document.body.append(f);
