$(document).ready(function() {
    $(".slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //=============== Seller Slider =========================//

    $(".seller__slider").owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    var selector = $('.seller__slider');

    $('.my-next-button').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function() {
        selector.trigger('prev.owl.carousel');
    });

    //=============== Popular Slider =========================//

    $(".popular__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    var selector1 = $('.popular__slider');

    $('.my-next-button-popular').click(function() {
        selector1.trigger('next.owl.carousel');
    });

    $('.my-prev-button-popular').click(function() {
        selector1.trigger('prev.owl.carousel');
    });
    //=============== Product Slider =========================//
    $(".product__slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var selector2 = $('.product__slider');

    $('.my-next-button-product').click(function() {
        selector2.trigger('next.owl.carousel');
    });

    $('.my-prev-button-product').click(function() {
        selector2.trigger('prev.owl.carousel');
    });
    $(".probottom__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    var selector3 = $('.probottom__slider');

    $('.my-next-button-probottom').click(function() {
        selector3.trigger('next.owl.carousel');
    });

    $('.my-prev-button-probottom').click(function() {
        selector3.trigger('prev.owl.carousel');
    });
    $(".feature__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            1100: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    var selector4 = $('.feature__slider');

    $('.my-next-button-feature').click(function() {
        selector4.trigger('next.owl.carousel');
    });

    $('.my-prev-button-feature').click(function() {
        selector4.trigger('prev.owl.carousel');
    });
    $(".logo__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            700: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    var selector5 = $('.seller__slider');

    $('.my-next-button-recently').click(function() {
        selector5.trigger('next.owl.carousel');
    });

    $('.my-prev-button-recently').click(function() {
        selector5.trigger('prev.owl.carousel');
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.header__end').addClass('fixed');
            $('.col-sm-10').addClass('position-static');
            $('.header__end').removeClass('position-relative');
        } else {
            $('.header__end').removeClass('fixed');
            $('.header__end').addClass('position-relative');
        }
    });
});

//=================== Menu Responsive ==================//

var menuResponsive = {
    init: function() {
        this.menuToggle()
    },
    menuToggle: function() {
        var button = document.querySelector('.header__button');
        var menu = document.querySelector('.header__end-menu-left');
        console.log(button);
        button.addEventListener('click', function() {
            menu.classList.toggle('show');
        })
    }
}
menuResponsive.init()