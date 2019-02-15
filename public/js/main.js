(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});	
	var pathName = window.location.pathname;
	if(pathName === '/') {
		pathName = "/about";
	}
	var selectName = pathName.substr(1,pathName.length) + "_select";
	var menuName = "menu_" + pathName.substr(1,pathName.length);
	$("#" + selectName).css("visibility", 'visible');
	$("#" + menuName).css("color", '#1890FF');
})(jQuery);

