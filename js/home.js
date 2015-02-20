$(document).ready( function() {
	$(".li-inactivate").mouseenter( function (){
		$(this).addClass("active");
	});
	$(".li-inactivate").mouseleave( function() {
		$(this).removeClass("active");
	});

	$(".inactive.dropdown-toogle").click( function() {
		window.location = "produse?id=produseGeneral";
	});
	/*
	$("div ul li").click( function() {
		$("div ul li").removeClass("active");
		$(this).addClass("active");
		$(this).removeClass("li-inactivate");
	});*/
});

