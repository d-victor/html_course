$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    });
});


const sliderList = document.querySelectorAll('.slide');
const mainImg = document.querySelector('.main-img');

sliderList.forEach(function (elem) {
    elem.addEventListener('click', checkImg);
});

function checkImg(e) {
    const checkElem = e.currentTarget;
    mainImg.src = checkElem.src;
    mainImg.classList.add('change');
}



const tittleList = document.querySelectorAll('.tittle-text');
const content = document.querySelectorAll('.content');
console.log(tittleList,content);

tittleList.forEach(function (elem) {
    elem.addEventListener('click', toggleContent);
});

function toggleContent(e) {
    console.log(e.target);
}