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
function setClass( elem, className) {

    if (!elem && !className) return;
    className.split(" ").forEach(function (classItemName) {
        elem.classList.add(classItemName);
    });
}

function setAttr (elem, attr) {

    if (!elem && !attr) return;

    for ( var key in attr) {
        elem.setAttribute(key, attr[key]);
    }
}

function setContent( elem, content) {

    if(typeof content === 'string'){
        elem.textContent = content;
    }else if ( "elem" in content){
        elem.append((setHtmlElement(content)))
    }else if (content.nodeType === 1 || content.nodeType === 11){
        elem.append(content);
    }else if ( Array.isArray(content)) {
        content.forEach(function (itemElem) {
            if(typeof itemElem === 'string') elem.textContent = itemElem;
            if('elem' in itemElem) elem.append(setHtmlElement(itemElem));
            if((itemElem.nodeType === 1 || itemElem.nodeType === 11)) elem.append(itemElem);
        });
    }
}

var element3 = setHtmlElement({
    elem: 'nav',
    content: {
        elem: 'ul',
        className: 'list',
        content:[
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2013/12/17/20/10/air-bubbles-230014_1280.jpg',
                            name: 'pic',
                            alt: 'bubbles',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_1280.jpg',
                            name: 'pic',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg',
                            name: 'pic',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2020/08/23/22/00/cologne-cathedral-5512117_1280.jpg',
                            name: 'pic',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg',
                            name: 'pic',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
            {
                elem: 'li',
                content: [
                    {
                        elem: 'img',
                        attr: {
                            src: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014_1280.jpg',
                            name: 'pic',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',

                    },
                ]
            },
        ]
    }
});
document.body.append(element3);
console.log(element3);

var imgs = element3.querySelectorAll('[name="pic"]');
var elem = element3.querySelector('.list');

elem.addEventListener('click', transition);

function transition(event) {

    var firstElem = elem.firstChild;
    var lastElem = elem.lastChild;
    var imgfirst = firstElem.querySelector('img');
    var imglast = lastElem.querySelector('img');

    if (firstElem || lastElem){
        var temp;
        temp = imgfirst.src;
        imgfirst.src = imglast.src;
        imglast.src = temp;
    }
    initial.isChanged = true;
}


var initial = {
    imgList: imgs,
    isChanged: false,
}

var btn = document.createElement('button');
btn.setAttribute('type', 'button');
btn.textContent = 'reset';
btn.addEventListener("click", reset);

function reset(event) {
    if (initial.isChanged) {

    }
}
document.body.append(btn);

