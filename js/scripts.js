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

  //Work section
  for (i = 0; i < works.length; ++i) {
    $("#projects").append("\
      <div class='col-md-3 col-xs-6'>\
        <div>\
          <a href='" + works[i].url + "' class='work-img' target='_blank'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='project-title'>Title: </p>" + works[i].title + "</span>\
          </a>\
        </div>\
        <div class='project-background'>\
          <h3>" + works[i].title + "</h3>\
          <h4>" + works[i].technology + "</h4>\
          <p>" + works[i].description + "</p>\
        </div>\
      </div>\
      ");
    $(".work-img").mouseenter(function () {
      $(".info", this).show();
    }).mouseleave(function () {
      $(".info", this).hide();
    });
  };
});
