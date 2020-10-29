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

$('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

(function (){
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
})();



(function (){
    const titleList = document.querySelectorAll('.tab-header__item');

    titleList.forEach(function (elem) {
        elem.addEventListener('click', toggleContent);
    });

    function toggleContent(e) {
        let id = e.currentTarget.getAttribute('data-tab'),
            content = document.querySelector(`.tab-content__item[data-tab="${id}"]`),
            activeTitle = document.querySelector('.tab-header__item.active'),
            activeContent = document.querySelector('.tab-content__item.active');

        activeTitle.classList.remove('active');
        e.currentTarget.classList.add('active');
        activeContent.classList.remove('active');
        content.classList.add('active');
    }

    const btnZoomList = document.querySelectorAll('.btn-zoom'),
        cardList = document.querySelectorAll('.card-slider');


        btnZoomList.forEach(function (btn) {
       btn.addEventListener('click', zoomCard);
    });


    function zoomCard(e){
        let id = e.currentTarget.getAttribute('data-btn'),
        card = document.querySelector(`.card-slider[data-card="${id}"]`);
        card.classList.toggle('active');
    }
})();
