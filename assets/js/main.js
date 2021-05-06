// const access = $.cookie('access');
// if (!access) {
//   flag = true;
//   $.cookie('access', false);
// } else {
//   flag = false;
// }

// $('.modal').modaal({
//   start_open: flag,
//   overlay_close: true,
//   before_open: function() {
//     $('html').css('overflow-y', 'hidden');
//   },
//   after_open: function() {
//     $('html').css('overflow-y', 'scroll');
//   }
// });

var access = $.cookie("access");
if (!access) {
  flag = true;
  $.cookie("access", false);
} else {
  flag = false;
}

//モーダル表示
$(".modal").modaal({
  start_open: flag, // ページロード時に表示するか
  overlay_close: true, //モーダル背景クリック時に閉じるか
  background: "#000", // 背景色
  before_open: function () {
    // モーダルが開く前に行う動作
    $("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
  },
  after_close: function () {
    // モーダルが閉じた後に行う動作
    $("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
  },
});

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
  $('.fadeUpTrigger').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
  $('.fadeLeftTrigger').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });
  $('.fadeRightTrigger').each(function() {
    const elTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();
    if (scroll >= elTop - winH) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
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

function pageTop() {
  const elTop = $('.about').offset().top;
  const scroll = $(window).scrollTop();
  const pageTop = $('.global__top');
  if (scroll >= elTop) {
    pageTop.fadeIn();
  } else {
    pageTop.fadeOut();
  }
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

$('.global__top').click(function() {
  $('html, body').animate({
    scrollTop: 0,
  }, 600);
  return false;
});

$(window).resize(function() {
  mediaQuery();
  pageTop();
});

$(window).scroll(function() {
  fixedAnime();
  fadeAnime();
  pageTop();
});

$(window).on('load', function() {
  fadeAnime();
  pageTop();
})