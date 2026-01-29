(function ($) {

	"use strict";





	/* Preloader */

	var win = $(window);

	win.on('load', function () {

		$('.page-loader').delay(350).fadeOut('slow');

	});



	/* menu last class added */

	$('ul.basic-menu>li').slice(-2).addClass('menu-p-right');





	/* TOP Menu Stick  */

	win.on('scroll', function () {

		if ($(this).scrollTop() > 1) {

			$('#sticky-header').addClass("sticky");

		}

		else {

			$('#sticky-header').removeClass("sticky");

		}

	});



	/* meanmenu */
	$('#mobile-nav').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767",
		meanExpand: ['<i class="fa fa-plus"></i>'],
	});

	// 03. Sidebar Js
	$(".nav-bar").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	// ////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	/* hamburgers menu option  */

	$('.hamburger').on('click', function () {

		$(this).toggleClass('is-active');

		$(this).next().toggleClass('nav-menu-show')

	});







	/* imagesLoaded active */

	$('#portfolio-grid,.blog-masonry').imagesLoaded(function () {



		/* Filter menu */

		$('.filter-menu').on('click', 'button', function () {

			var filterValue = $(this).attr('data-filter');

			$grid.isotope({ filter: filterValue });

		});



		/* filter menu active class  */

		$('.filter-menu button').on('click', function (event) {

			$(this).siblings('.active').removeClass('active');

			$(this).addClass('active');

			event.preventDefault();

		});



		/* Filter active */

		var $grid = $('#portfolio-grid').isotope({

			itemSelector: '.portfolio-item',

			percentPosition: true,

			masonry: {

				columnWidth: '.portfolio-item',

			}

		});



		/* Filter active */

		$('.blog-masonry').isotope({

			itemSelector: '.blog-item',

			percentPosition: true,

			masonry: {

				columnWidth: '.blog-item',

			}

		});



	});







	/* magnificPopup img view */

	$('.popup-link').magnificPopup({

		type: 'image',

		gallery: {

			enabled: true

		}

	});



	/* magnificPopup video view */

	$('.popup-video').magnificPopup({

		type: 'iframe'

	});



	/* counterUp */

	$('.counter-number').counterUp();



	/* main-slider */

	$('.slider-active').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: true,

		animateOut: 'fadeOut',

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

	})



	/* portfolio-slider */

	$('.portfolio-slider').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: true,

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

	})



	/* portfolio-slider */

	$('#related-active').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: true,

		responsive: {

			0: {

				items: 1

			},

			450: {

				items: 2

			},

			768: {

				items: 3

			},

			900: {

				items: 4

			},

			1100: {

				items: 5

			}

		}

	})



	/* portfolio-slider */

	$('.blog-slider').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: true,

		autoplay: true,

		animateOut: 'fadeOut',

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



	/* portfolio-slider */

	$('.clients-active').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: true,

		autoplay: true,

		animateOut: 'fadeOut',

		responsive: {

			0: {

				items: 2

			},

			450: {

				items: 3

			},

			768: {

				items: 1

			},

			1000: {

				items: 6

			}

		}

	})



	/* portfolio-slider */

	$('.testimonial-active').owlCarousel({

		loop: true,

		navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],

		nav: false,

		autoplay: true,

		responsive: {

			0: {

				items: 1

			},

			450: {

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



    // back-to-top
    var btn = $('#back-to-top');
    win.scroll(function() {
      if (win.scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function() {
      $('html, body').animate({scrollTop:0}, '300');
    });





	/*  youtube video */

	$('.youtube-bg').YTPlayer({

		videoURL: "r4dD-WYzrMs",

		containment: '.youtube-bg',

		autoPlay: true,

		loop: true,

		mute: true

	});









})(jQuery);	