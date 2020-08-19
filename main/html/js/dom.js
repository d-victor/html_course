
console.log(document.getElementById('main'));
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('[href]'));
var linkList = document.querySelectorAll('[href]');

linkList.forEach(function (link) {
    console.log(link);
    link.style.color = 'red';
});

