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