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