var btn = document.querySelector('.subHeader_btn-mobile');
console.log(btn);
btn.addEventListener('click', function (e) {
    console.log('click');
    btn.classList.add('open');
});