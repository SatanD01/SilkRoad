$(function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                navigation: false
            },

            768: {
                slidesPerView: 2
            },

            1024: {
                slidesPerView: 3
            }
        }
    });

    $('.menu-btn').on('click', function () {
        $('.menu').slideDown();
        $('body').addClass('active');
    });
    
    $('.menu-exit').on('click', function () {
        $('.menu').slideUp();
        $('body').removeClass('active');
    });
})