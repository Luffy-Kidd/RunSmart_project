$(document).ready(function(){
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });