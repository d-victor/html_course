$(document).ready(function(){
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
console.log(sliderList);
    sliderList.forEach(function (elem) {
        let selectedElem = false;
        elem.addEventListener('click', function (e){
            if (selectedElem === false) {
                e.currentTarget.classList.add('active');
                selectedElem = true;
            } else {

            }

        });
    });
