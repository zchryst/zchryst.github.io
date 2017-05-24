
$(document).ready(function() {
  var scrollHeight = 0;
  $(document).scroll(function() {
      scrollHeight = $(window).scrollTop();
      if(scrollHeight >= $(window).height() * .25) {
        $('body').css({background: '#ffffff', color: '#000000'})
        $('.front').css({color: '#ffffff'})
        $('header').css({background: 'rgba(255, 255, 255, 0.95)', color: '#000000'})
        $('#name').css({color: '#000000', cursor: 'pointer'})
      } else {
        $('body').css({background: '#1e1e1e', color: '#ffffff'})
        $('.front').css({color: '#ffffff'})
        $('header').css({background: '', color: '#ffffff'})
        $('#name').css({color: '#1e1e1e', cursor: 'default'})
      }
  });
});

var scrollOffset = $(window).height() * .1

$("#about-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($(".about").offset().top - (scrollOffset))
    }, 2000);
});

$("#work-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($(".work").offset().top - (scrollOffset))
    }, 2000);
});

$("#contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($(".contact").offset().top - (scrollOffset))
    }, 2000);
});

$("#name").click(function() {
    $('html, body').animate({
        scrollTop: (0)
    }, 2000);
});
