
$('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider',
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

function activeSlide (id) {
    let currentBigImg = document.querySelector(`[data-bigSlide = "${id}"]`);
    currentBigImg.classList.add('active');
}
activeSlide(4);

let currentImg;
let currentBigImg = document.querySelector('.big-slide.active');
console.log(currentBigImg);

$('.big-slider').on('beforeChange', setActiveImg);

function setActiveImg (event, slick, currentSlide, nextSlide){
    let currentImgActive = document.querySelector(`[data-slide = "${currentSlide}"]`);
    currentBigImg = document.querySelector(`[data-bigSlide = "${currentSlide}"]`);

    if (currentImg) {
        currentImg.classList.remove('activeSlide');
    }
    if (currentImgActive) {
        currentImg = currentImgActive;
        currentImg.classList.add('activeSlide');
    }
}

magnify(currentBigImg,2);

                 /*Zoom*/
function magnify(img,zoom) {
    let glass, w, h, bw;
    console.log(img);
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    function moveMagnifier(e) {
        let pos, x, y;
        e.preventDefault();

        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;

        if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
        if (x < w / zoom) {x = w / zoom;}
        if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
        if (y < h / zoom) {y = h / zoom;}

        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";

        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();

        x = e.pageX - a.left;
        y = e.pageY - a.top;

        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}



                 /*Product-slider*/

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
