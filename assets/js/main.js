$('.global__btn').click(function() {
  if ($('body').hasClass('active')) {
    $('body').removeClass('active');
    $('.global__time').fadeIn();
  } else {
    $('body').addClass('active');
    $('.global__time').fadeOut();
  }
});

$('.global__time').click(function() {
  if ($('body').hasClass('activeTime')) {
    $('body').removeClass('activeTime');
    $('.global__btn').fadeIn();
  } else {
    $('body').addClass('activeTime');
    $('.global__btn').fadeOut();
    const clock = $('.fa-clock');
    const times = $('.fa-times');
    if (clock.hasClass('dBlock')) {
      clock.removeClass('dBlock');
      times.addClass('dBlock');
    } else {
      times.removeClass('dBlock');
      clock.addClass('dBlock')
    }
  }
});