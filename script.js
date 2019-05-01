$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function(i) {
      var bottomOfObject = $(this).offset().top + (($(this).height()) * 20 / 100);
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottomOfWindow > bottomOfObject) {
        $(this).animate({
          'opacity': '1'
        }, 1000);
      }
    });
  });
});


$(window).scroll(function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    $('div.bg-1').css('opacity', 0);
  } else {
    $('div.bg-1').css('opacity', 1 - scrollTop / 100);
  }
});
