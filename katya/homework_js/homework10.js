function setElement(elem,className,attributes, content) {

    var options = {
        elem: elem,
        className: className.slice(),
        attributes:{
            name: name,
        },
        content: content,
    }

    var body = document.body;
    var element = document.createElement(options.elem);

    className.filter(function (item) {
        element.classList.add(item);
    });

    for (let attribute in attributes){
        element.setAttribute(attribute,attributes[attribute])
    }

    element.innerHTML = options.content;
    body.append(element);

    return element;
}

var element = setElement('a',['btn', 'search'], { href: '#',type: 'ddd' },'<p></p>');
console.log(element);