$(document).on('scroll', function(e) {
  var value = $(this).scrollTop();
  if (value < 200) {
    $('header').css({
      'height': '15vh'
    });
    $('header h1').css({
      'font-size': '4em'
    });
    $('header li h3').css({
    	'visibility': 'visible'
    });
  } else {
    $('header').css({
      'height': '10vh'
    });
    $('header h1').css({
      'font-size': '40px'
    });
    $('header li h3').css({
      'visibility': 'hidden'
    });
  }
});
