
$('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev slick-big-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-big-arrow"><i class="fas fa-angle-right"></i></button>',
});
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    asNavFor: '.big-slider',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
});


$('.product-slider').on('init', function(event, slick){

    const btnZoomList = document.querySelectorAll('.btn-zoom'),
        cardList = document.querySelectorAll('.card-slider');

    btnZoomList.forEach(function (btn) {
        btn.addEventListener('click', zoomCard);
    });

    let activeCard;

    function zoomCard(e) {
        activeCard = document.querySelector('.active');
        console.log(activeCard);
        let id = e.currentTarget.getAttribute('data-btn');
        const card = document.querySelector(`.card-slider[data-card="${id}"]`);
        if(activeCard) {
            activeCard.classList.remove('active');
        }
        card.classList.toggle('active');
    }

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


/*(function (){
    const sliderList = document.querySelectorAll('[data-slide]');
    const sliderBigList = document.querySelectorAll('[data-bigSlide]');
    console.log(sliderList,sliderBigList)

    sliderBigList.forEach(function (elem) {
        elem.addEventListener('click', checkImg);
    });

    function checkImg(e) {
        let currentSlide = $('.big-slider').slick('slickCurrentSlide');
        console.log(currentSlide)

    }
})();*/



(function (){
    const titleList = document.querySelectorAll('.tab-header__item');
    const contentList = document.querySelectorAll('.tab-content');
    let activeTitle;
    let activeContent;

    function toggleContent(id) {
        activeTitle = document.querySelector(`.tab-header__item[data-tab-title="${id}"]`);
        activeTitle.classList.add('activeTab');
        activeContent = document.querySelector(`.tab-content__item[data-tab-content="${id}"]`);
        activeContent.classList.add('activeTab');
    }

    titleList.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
           const id = e.currentTarget.getAttribute('data-tab-title');
           const newActiveTitle = document.querySelector(`.tab-header__item[data-tab-title="${id}"]`);
           const newActiveContent = document.querySelector(`.tab-content__item[data-tab-content="${id}"]`);

            if (newActiveTitle){
                activeTitle.classList.remove('activeTab');
                newActiveTitle.classList.add('activeTab');
                activeTitle= newActiveTitle;
            }
            if (newActiveContent) {
                activeContent.classList.remove('activeTab');
                newActiveContent.classList.add('activeTab');
                activeContent = newActiveContent;
            }
        });
    });


toggleContent(1);
})();
