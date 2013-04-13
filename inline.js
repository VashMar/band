$(document).ready(function() {
	$('#photos').hide();
	$('#store').hide();
	$('#bio').hide();
	$('#nav_photos').click(function(){
		clear();
		$(this).addClass("active");
		$('#photos').fadeIn();
	});
	$('.close').click(function(){
		$(this).parent().fadeOut();
	});
	$('#nav_home').click(function(){
		clear();
		$(this).addClass("active");
		$('#home').fadeIn();	
	});
	$('#nav_store').click(function(){
		clear();
		$(this).addClass("active");
		$('#store').fadeIn();	

	});
	$('#nav_bio').click(function(){
		clear();
		$(this).addClass("active");
		$('#bio').fadeIn();	

	});
});

function clear(){

	$('.content').hide();
	$('.active').removeClass('active');
}
