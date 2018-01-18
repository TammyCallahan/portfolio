$(document).ready(function () {
  //Navigation background-color with scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $('.navbar').css('background-color', 'transparent');
    } else {
      $('.navbar').css('background-color', 'rgba(235,235,235,.8)');
    }
  });
});
