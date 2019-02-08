jQuery(function() {

	function slick_counter(that, thatSlide, thatSlick) {
		var	i = (thatSlide ? thatSlide : 0) + 1;
				container = $(that).parent().find('.ui-counter');
				containerCurrent = container.find('.ui-counter-item:not(.ui-counter-item--grey)');
				containerTotal = container.find('.ui-counter-item.ui-counter-item--grey span');
		
		if(Number(i) < 10) {
			jQuery(containerCurrent).text('0' + i);
		} else {
			jQuery(containerCurrent).text(i);
		}

		if(Number(thatSlick.slideCount) < 10) {
			jQuery(containerTotal).text('0' + thatSlick.slideCount);
		} else {
			jQuery(containerTotal).text(thatSlick.slideCount);
		}
	}

	jQuery('.catalog-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button id="prev" type="button" class="arrow arrow--left" title="Назад"><span class="arrow__box arrow__box--left"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		nextArrow: '<button id="next" type="button" class="arrow" title="Вперед"><span class="arrow__box"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		infinite: true,
		appendArrows: jQuery('#catalog-slider-arrows'),
		variableWidth: true,
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
	$('.hero-carousel__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		slick_counter(this, currentSlide, slick);
	});

	jQuery('.hero-carousel__slider').slick({
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		appendDots: jQuery('#hero-text-pagination'),
		dots: true,
		dotsClass: 'ui-dots',
		touch: false,
		autoplay: true,
		autoplaySpeed: 10000,
	});

	$('.reviews-slider__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		slick_counter(this, currentSlide, slick);
	});

	jQuery('.reviews-slider__slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		appendDots: jQuery('#reviews-slider-pagination'),
		dots: true,
		prevArrow: '<button id="prev" type="button" class="arrow arrow--left" title="Назад"><span class="arrow__box arrow__box--left"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		nextArrow: '<button id="next" type="button" class="arrow" title="Вперед"><span class="arrow__box"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		appendArrows: jQuery('#reviews-slider-arrows'),
		dotsClass: 'ui-dots',
		touch: false,
		autoplay: true,
		autoplaySpeed: 7000,
	});

	jQuery('.ui-dots button').each(function() {
		var index = jQuery(this).parent().index() + 1;
		if(Number(index) < 10) {
			jQuery(this).text('0' + index);
		} else {
			jQuery(this).text(index);
		}
	});

	var scene = $('.page-leafs').get(0);
	var parallaxInstance = new Parallax(scene, {
	  selector: '.page-leafs__leaf',
	  relativeInput: true,
	  calibrateY: true,
	  originY: 0
	});


	

	

	

});
