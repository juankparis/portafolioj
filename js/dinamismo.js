$(function(){

	$("#Header-buttonAbrir").on("click", menuAbrir);
	$("#Header-buttonCerrar").on("click", menuCerrar);

	function menuAbrir(){
		$(".Menu").addClass("Menu-isActive");
		$("#Header-buttonCerrar").addClass("mostrar");
	}
	function menuCerrar(){
		$(".Menu").removeClass("Menu-isActive");
		$("#Header-buttonCerrar").removeClass("mostrar");
	}

	var parent, Menulink, diametro, x, y;
	$(".Menu-link").click(function(e){
		parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".Menu-animac").length == 0){
		parent.prepend("<span class='Menu-animac'></span>");
	}
		
	Menulink = parent.find(".Menu-animac");
	//incase of quick double clicks stop the previous animation
	Menulink.removeClass("Menu-animate");
	
	//set size of .ink
	if(!Menulink.height() && !Menulink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		diametro = Math.max(parent.outerWidth(), parent.outerHeight());
		Menulink.css({height: diametro, width: diametro});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - Menulink.width()/2;
	y = e.pageY - parent.offset().top - Menulink.height()/2;
	
	//set the position and add class .animate
	Menulink.css({top: y+'px', left: x+'px'}).addClass("Menu-animate");
	});
});