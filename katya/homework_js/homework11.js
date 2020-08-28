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

var element = setHtmlElement({
    elem: 'nav',
    content: {
        elem: 'ul',
        className: 'list',
        content: [
            {
                elem: 'li',
                content:[
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                ]
            },
            {
                elem: 'li',
                content:[
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                ]
            },
            {
                elem: 'li',
                content:[
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },{
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                    {
                        elem: 'span',
                        content: 'Tittle',
                    },
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/rock.jpg',
                            alt: 'rock',
                            width: '300px',
                        }
                    },
                ]
            },
        ]
    },
});
document.body.append(element);
console.log(element);

var element2 = setHtmlElement({
    elem: 'nav',
    content: {
        elem: 'ul',
        className: 'list',
        content: [
            {
                elem: 'li',
                content:[
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/light.jpg',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                ]
            },
            {
                elem: 'li',
                content:[
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/light.jpg',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                ]
            },
            {
                elem: 'li',
                content:[
                    {
                        elem: 'img',
                        attr:{
                            src: 'img/light.jpg',
                            alt: 'light',
                            width: '300px',
                        }
                    },
                ]
            },
        ]
    },
});
document.body.append(element2);
console.log(element2);

var elements = element2.querySelectorAll('li');

for (var elem of elements){

    elem.append(setHtmlElement({
        elem: 'span',
        content: 'Tittle',
    }));
}
