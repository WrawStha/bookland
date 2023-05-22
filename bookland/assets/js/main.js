(function($) {
    "use strict";
    
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    /*--
    One Page Nav
    -----------------------------------*/
    var top_offset = $('.header-area').height() - -60;
    $('.hamburger-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    
    /*--- clickable menu active ----*/
    const slinky = $('#menu').slinky()
    /*====== sidebarmenu ======*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();
    
    
    $('.slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<img src="assets/img/icon-img/57.png"> next', 'prev <img src="assets/img/icon-img/58.png">'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* book list active */
    $('.book-list-active').owlCarousel({
        loop: true,
        nav: true,
        item: 2,
        margin: 40,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    
    
    /* testimonials active */
    $('.testimonials-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    
    

    
    
   
    
    /* popular-product-active-2 active */
    $('.popular-product-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 4,
        margin: 22,
        navText: ['<img src="assets/img/icon-img/left.png">', '<img src="assets/img/icon-img/right.png">'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    
  
    
    /*--
    menu-toggle
    ------------------------*/
    $('.menu-toggle').on('click', function() {
        if ($('.menu-toggle').hasClass('is-active')) {
            $('.hamburger-menu nav').removeClass('menu-open');
        } else {
            $('.hamburger-menu nav').addClass('menu-open');
        }
    });
    
    
    /*--
    	Hamburger js
    -----------------------------------*/
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    
    

    
    /*----------------------------
        text-animation
    ------------------------------ */
    $('.tlt1').textillate({
        loop: true,
        in: {
            effect: 'fadeInDown',
        },
        out: {
            effect: 'flip',
        },
    });
    
    /*--
    Menu Stick
    -----------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.sticker').removeClass('stick');
        } else {
            $('.sticker').addClass('stick');
        }
    });
    
    /* hover 3d init for tilt */
    if ($('.tilter').length > 0) {
        $('.tilter').tilt({
            maxTilt: 40,
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 800,
            transition: true,
        });
    }
    
    /* hover 3d init for tilt */
    if ($('.tilter-2').length > 0) {
        $('.tilter-2').tilt({
            maxTilt: 20,
            perspective: 700,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 500,
            transition: true,
        });
    }
    
    /* hover 3d init for tilt */
    if ($('.tilter-3').length > 0) {
        $('.tilter-3').tilt({
            maxTilt: 20,
            perspective: 800,
            easing: "cubic-bezier(.03,.2,.5,.4)",
            scale: 1,
            speed: 500,
            transition: true,
        });
    }
    
    

    
  
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    
    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ti-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    

    /*------ Wow Active ----*/
    new WOW().init();
    
    /*--
	Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(){
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.handicraft-content').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.handicraft-content').addClass('open');
        }
    })
    
    



})(jQuery);