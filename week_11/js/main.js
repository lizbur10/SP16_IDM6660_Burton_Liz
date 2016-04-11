$(document).ready(function() {
	$("footer p").hide();
    $('#showmenu').click(function() {
            $('.menu').slideToggle('fast');
    });

	$('#about-button').click(function() {
		$('html,body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
		$("footer p").fadeIn();
	});
	$('#what-i-do-button').click(function() {
		$('html,body').animate({
			scrollTop: $('#what-i-do').offset().top},
			'slow');
		$("footer p").fadeIn();
	});
	$('#contact-button').click(function() {
		$('html,body').animate({
			scrollTop: $('#contact').offset().top},
			'slow');
		$("footer p").fadeIn();
	});
});
var resizeTimer; //https://css-tricks.com/snippets/jquery/done-resizing-event/

$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

	if ($(window).width() > 479) {
		$("nav").css("display", "block");
	} else {
		$("nav").css("display", "none");
	}
           
  }, 100);

});
function resetMenu() {
}
