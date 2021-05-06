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

function tableFixed() {
  const scroll = $(window).scrollTop();
  const table = $('.hero__table');
  if (scroll >= 526) {
    table.removeClass('tableHover');
    table.addClass('tableFixed');
  } else {
    table.removeClass('tableFixed');
    table.addClass('tableHover');
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

function slideInit() {
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
}

function cookieModal() {
  const access = $.cookie("access");
  if (!access) {
    flag = true;
    $.cookie("access", false);
  } else {
    flag = false;
  }
  
  $(".modal").modaal({
    start_open: flag,
    overlay_close: true,
    background: "#000",
    before_open: function () {
      $("html").css("overflow-y", "hidden");
    },
    after_close: function () {
      $("html").css("overflow-y", "scroll");
    },
  });
}

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

$(window).on('load', function() {
  const bar = new ProgressBar.Line(loader, {
    strokeWidth: 0,
    duration: 1000,
    trailWidth: 0,
    text: {
      style: {
        position:'absolute',
        left:'50%',
        top:'50%',
        padding:'0',
        margin:'0',
        transform:'translate(-50%,-50%)',
        color:'#fff',
      },
      autoStyleContainer: false
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  
  bar.animate(1.0, function () {
    $('.loader').delay(500).fadeOut(500, function() {
      $('body').addClass('appear');
      fadeAnime();
      pageTop();
      sliderSet();
      tableFixed();
      slideInit();
      cookieModal();
    });
    
    $(window).resize(function() {
      mediaQuery();
      pageTop();
      sliderSet();
      tableFixed();
      fixedAnime();
      fadeAnime();
    });
    
    $(window).scroll(function() {
      fixedAnime();
      fadeAnime();
      pageTop();
      tableFixed();
      sliderSet();
    });
  });  
});