function mediaQuery() {
  const winW = $(window).width();
  if (winW < 1024) {
    if ($('html').hasClass('fontChangeLarge')) {
      $('html').removeClass('fontChangeLarge');
    }
    if ($('.navbar').hasClass('navbarFixed')) {
      $('.navbar').removeClass('navbarFixed');
    }
  }
}

function fixedAnime() {
  const winW = $(window).width();
  if (winW >= 1024) {
    const scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $('.navbar').addClass('navbarFixed');
    } else {
      $('.navbar').removeClass('navbarFixed');
    }
  }
}

function fadeAnime() {
  $('.appear').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('inView');
    } else {
      $(this).removeClass('inView');
    }
  });
  $('.coverSlide').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('inView');
    } else {
      $(this).removeClass('inView');
    }
  });
  $('.imgZoom').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('inView');
    } else {
      $(this).removeClass('inView');
    }
  });
}

$('.hero__slider').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$('.hero__slider').on('touchmove', function(event, slick, currentSlide, nextSlide) {
  $('.hero__slider').slick('slickPlay');
});

let slider;

function sliderSet() {
  slider = $('.hero__bxSlider').bxSlider({
    touchEnabled: false,
    mode: 'vertical',
    controls: false,
    auto: 'true',
    pager: true,
  });
}

$(window).on('load resize', function() {
  sliderSet();
});

$('.global__btn, .global__li a').click(function() {
  if ($('body').hasClass('active')) {
    $('body').removeClass('active');
    $('.global__time').fadeIn();
  } else {
    $('body').addClass('active');
    $('.global__time').fadeOut();
  }
});

$('.global__time').click(function() {
  const clock = $('.fa-clock');
  const times = $('.fa-times');
  if ($('body').hasClass('activeTime')) {
    $('body').removeClass('activeTime');
    $('.global__btn').fadeIn();
    times.removeClass('dBlock');
    clock.addClass('dBlock');
  } else {
    $('body').addClass('activeTime');
    $('.global__btn').fadeOut();
    clock.removeClass('dBlock');
    times.addClass('dBlock');
  }
});

$('.medium').click(function() {
  if ($('html').hasClass('fontChangeLarge')) {
    $('html').removeClass('fontChangeLarge');
    $('html').addClass('fontChangeMedium')
  }
  return false;
});
$('.large').click(function() {
  if ($('html').hasClass('fontChangeMedium')) {
    $('html').removeClass('fontChangeMedium');
  }
  $('html').addClass('fontChangeLarge')
  return false;
});

$(window).resize(function() {
  mediaQuery();
});

$(window).scroll(function() {
  fixedAnime();
  fadeAnime();
});

$(window).on('load', function() {
  fadeAnime();
})