$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });

    $(".slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });


    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y < 700) {
            $('.scroll__top').removeClass('d-flex');
            $('.scroll__top').addClass('d-none');
        } else {
            $('.scroll__top').removeClass('d-none');
            $('.scroll__top').addClass('d-flex');
            $('.scroll__top').addClass('d-flex');
        }
    });
    var menuResponsive = {
        init: function() {
            this.menuToggle()
        },
        menuToggle: function() {
            var button = document.querySelector('.header__main-infor-button');
            var overlay = document.querySelector('.header__overlay');
            var overlay_button = document.querySelector('header__overlay-button');
            var menu = document.querySelector('.header__mobile');
            button.addEventListener('click', function() {
                menu.classList.add('show');
                menu.classList.remove('off');
            });
            overlay.addEventListener('click', function() {
                menu.classList.add('off');
                menu.classList.remove('show');
            });
            overlay_button.addEventListener('click', function() {
                menu.classList.add('off');
                menu.classList.remove('show');
            })
        }
    }
    menuResponsive.init()
});