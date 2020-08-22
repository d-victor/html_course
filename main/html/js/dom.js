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

console.log(elem);
document.body.append(elem);
