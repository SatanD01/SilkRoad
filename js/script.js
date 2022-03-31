$(function () {
    const swiper = new Swiper('.index', {
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

    const swiper2 = new Swiper('.tour-img', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.c-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show(500);
        }
        else {
            $('.itemBox').not('.'+value).hide(500);
            $('.itemBox').filter('.'+value).show(500);
        }
    });
    $('.c-list').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });

    $('.c-photo').lightGallery();

    $('.menu-btn').on('click', function () {
        $('.menu').slideDown();
        $('body').addClass('active');
    });

    $('.menu-exit').on('click', function () {
        $('.menu').slideUp();
        $('body').removeClass('active');
    });
})