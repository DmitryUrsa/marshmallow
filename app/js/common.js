jQuery(function() {

	svg4everybody();
		
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

	$('.catalog-carousel__inner').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		slick_counter(this, currentSlide, slick);
	});
	
	jQuery('.catalog-carousel__inner').slick({
		appendArrows: jQuery('.catalog-carousel__arrows'),
		infinite: true,
		prevArrow: '<button id="prev" type="button" class="arrow arrow--left" title="Назад"><span class="arrow__box arrow__box--left"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		nextArrow: '<button id="next" type="button" class="arrow" title="Вперед"><span class="arrow__box"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1921,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	jQuery('.assortiment-carousel').slick({
		infinite: true,
		prevArrow: '<button id="prev" type="button" class="arrow arrow--default arrow--default-left arrow--left" title="Назад"><span class="arrow__box arrow__box--left"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		nextArrow: '<button id="next" type="button" class="arrow arrow--default arrow--default-right" title="Вперед"><span class="arrow__box"><svg role="img" class="svg-icon svg-icon--arrow"><use xlink:href="img/icons/svg-symbols.svg#arrow"></use></svg></span></button>',
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: "unslick"
			}
		]
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
	if (scene) {
		var parallaxInstance = new Parallax(scene, {
			selector: '.page-leafs__leaf',
			relativeInput: true,
			calibrateY: true,
			originY: 0
		});
	}

	jQuery('#mega-menu-close').click(function() {
		jQuery('.mega-menu-wrap').fadeOut();
		jQuery('.app-body').removeClass('no-scroll');
	});

	jQuery('#open-megamenu').click(function() {
		jQuery('.mega-menu-wrap').fadeIn();
		jQuery('.app-body').addClass('no-scroll');
	});

	num = $('.main-header-wrap').height();

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('.app').css('border-top', num + 'px solid #fbe6e7');
			if (! $('.main-header').hasClass('main-header--fixed')) {
				$('.main-header-wrap').hide();
				$('.main-header-wrap').fadeIn();
			}
			$('.main-header-wrap').addClass('main-header-wrap--fixed');
			$('.main-header').addClass('main-header--fixed');
			if (!$('.main-header').hasClass('main-header--default')) {
				$('.main-header').addClass('container');
			}
		} else if ($(window).scrollTop() < num)  {
			num = $('.main-header-wrap').height();
			$('.app').css('border-top', '0px');
			if ($('.main-header').hasClass('main-header--fixed') && !$('.main-header').hasClass('main-header--default')) {
				$('.main-header-wrap').hide();
				$('.main-header-wrap').fadeIn();
			}
			$('.main-header-wrap').removeClass('main-header-wrap--fixed');
			$('.main-header').removeClass('main-header--fixed');
			if (! $('.main-header').hasClass('main-header--default')) {
				$('.main-header').removeClass('container');
			}
		}
	});
	$(window).trigger('scroll')

	function readURL(input) {
		var url = input.value;		
    var ext = url.substr(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (
      ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif"
      )) {
      var path = $(input).val();
      var filename = path.replace(/^.*\\/, "");
      return "Выбранный файл: "+filename;
    } else {
      $(input).val("");
      return "ОШИБКА: разрешены только изображения!";
    }
	}
	
	$(".ui-upload__input").change(function() {
    var filename = readURL(this);
    $(this).parent().find('.ui-upload__label-text').text(filename);
	});
	
	// Tabs system

	$(".tabs-block").each(function() {
		
		var clickedTab = $(this).find(".tabs > .active");
		var tabWrapper = $(this).find(".tab__content");
		var activeTab = tabWrapper.find(".active");
		var activeTabHeight = activeTab.outerHeight();
		
		// Show tab on page load
		activeTab.show();
		
		// Set height of wrapper on page load
		tabWrapper.height(activeTabHeight);
		
		$(this).find(".tabs > li").on("click", function() {
			
			// Remove class from active tab
			$(this).parent().find("li").removeClass("active");
			
			// Add class active to clicked tab
			$(this).addClass("active");
			
			// Update clickedTab variable
			clickedTab = $(this).parent().find(".active");
			
			// fade out active tab
			activeTab.fadeOut(250, function() {

				var tabContentLi = $(this).parent().parent().find('.tab__content > li');
				
				// Remove active class all tabs
				tabContentLi.removeClass("active");
				
				// Get index of clicked tab
				var clickedTabIndex = clickedTab.index();

				// Add class active to corresponding tab
				var tabContentReady = tabContentLi.eq(clickedTabIndex);
				
				// To prevent crash when there is no content, but tab exist				
				if( tabContentReady.length === 0 ) {
					console.log('%cError! Tab with index #' + clickedTabIndex + ' not found!', 'font-weight: bold;color: #f05f5f;');
				} else {
					tabContentReady.addClass("active");
				
					// update new active tab
					activeTab = $(this).parent().parent().find('.tab__content > .active');
					
					// Update variable
					activeTabHeight = activeTab.outerHeight();
					
					// Animate height of wrapper to new tab height
					tabWrapper.stop().delay(50).animate({
						height: activeTabHeight
					}, 500, function() {
						
					// Fade in active tab
					activeTab.delay(50).fadeIn(250);
						
					});
				}
			});
		});
	});
	// END Tabs system

	// Fancybox settings
	$('.fancybox-inline').fancybox({
		defaultType: "inline",
		touch: false,
		hash: null,
		clickOutside: "close",
		smallBtn : true,
	});
	
	$('[data-fancybox-trigger="size-chart"]').fancybox({
		defaultType: "inline",
		touch: false,
		hash: null,
		clickOutside: "close",
		smallBtn : true,
		afterShow: function() {
			var tabWrapper = $('#size-chart-popup').find(".tab__content");
			var activeTab = tabWrapper.find(".active");
			var activeTabHeight = activeTab.outerHeight();
			
			// Set height of wrapper on page load
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
			// Fade in active tab
			activeTab.delay(50).fadeIn(250);
				
			});
		}
	});

	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').click(function(j) {
		var dropDown = $(this).closest('li').find('.accordion__content');

		$(this).closest('.accordion').find('.accordion__content').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
				$(this).removeClass('active');
		} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

	$('select.custom-select').customSelect();


});
