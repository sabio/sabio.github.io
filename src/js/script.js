<<<<<<< HEAD:src/js/script.js:src/js/script.js
$( document ).ready(function() {
	console.log("HOLA MUNDO");
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
=======
$(document).ready(function(){$("#btn-menu").on("click",function(){var n=$("nav");"none"==n.css("display")?n.addClass("open"):n.removeClass("open")}),$(".ancla").click(function(){var n=$(this),o=n.attr("href");return $("html, body").stop().animate({scrollTop:jQuery(o).offset().top-65},1500),!1})});
>>>>>>> 2c4301b52c8fa5d3e980c2338b8c5068cc66594c:js/script.js:js/script.js
