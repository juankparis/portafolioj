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

});