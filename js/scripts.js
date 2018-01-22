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
        <a href='" + works[i].url + "' class='work-img' target='_blank'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title: </p>" + works[i].title + "<p class='proj-info'><br>Technology: </p>" + works[i].technology + "</span>\
        </a>\
      </div>\
      ");
    $(".work-img").mouseenter(function () {
      $(".info", this).show();
    }).mouseleave(function () {
      $(".info", this).hide();
    });
  };
});
