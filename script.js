// change first background on scroll

$(window).scroll(function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// when you scroll down
  if (scrollTop > 100) {
//mask the macbook image
    $('div.wall').css('opacity', 0);
// and show the octopus
    $('div.bg-1').addClass('bis');
  } else {
//reverse if you scroll up
    $('div.wall').css('opacity', 1 - scrollTop / 100);
    $('div.bg-1').removeClass('bis');
  }
});
