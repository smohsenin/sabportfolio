$(document).ready(function() {
	$('.hover').mouseover(function() {
 		 $('.text').css("visibility","visible");
});

$('.hover').mouseout(function() {
  $('.text').css("visibility","hidden");
});

$( ".cross" ).hide();
$( ".responsiveMenu" ).hide();

$( ".hamburger" ).click(function() {
	$( ".responsiveMenu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".responsiveMenu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
});

});