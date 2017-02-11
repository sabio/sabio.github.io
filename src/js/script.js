$( document ).ready(function() {
	$('#btn-menu').on('click', function(){
		var menu = $("nav");
		//alert(menu.html());
		if ( menu.css('display') == 'none' ) {
			//console.log("En el if");
			//menu.css('display','block');
			menu.addClass('open');
		}
		else {
			//console.log("En el else");
			//menu.css('display','none');
			menu.removeClass('open');
		}
	});

	$('.ancla').click(function(){
		var link = $(this);
		var anchor  = link.attr('href');
		$('html, body').stop().animate({
			scrollTop: jQuery(anchor).offset().top - 65
		}, 1500);
		return false;
	});


});