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

	//genera el el efecto de ondulacion en el sistema de navegagion
	var pariente, Menulink, diametro, x, y;

	$(".Menu-link").click(function(e){
		pariente = $(this).parent();
	//si el elemento span no exsiste agregelo con la clase .Menu-animac
	if(pariente.find(".Menu-animac").length == 0){
		pariente.prepend("<span class='Menu-animac'></span>");
	}
	//buca en padre del elemento .Menulink
	Menulink = pariente.find(".Menu-animac");
	//en caso de otro clicks detener la anterior animacion
	Menulink.removeClass("Menu-animate");
	
	
	if(!Menulink.height() && !Menulink.width()){
		//utilizar el ancho y altura que sea mayor al diametro para hecer un circulo que pueda cubrir todo el elemento
		diametro = Math.max(pariente.outerWidth(), pariente.outerHeight());
		Menulink.css({height: diametro, width: diametro});
	}
	
	//se obtiene las cordenadas del los clicks  
	//click coordina relativa a la página de los padres en posición relativa a la página, un medio de auto altura y anchura para que sea controlable desde el centro
	x = e.pageX - pariente.offset().left - Menulink.width()/2;
	y = e.pageY - pariente.offset().top - Menulink.height()/2;
	
	//pasa la posicion en (y,x) y anñade la clase Menuanimate (se la pasa al Menu link por eso es necesario poner el position absolute en el)
	Menulink.css({top: y+'px', left: x+'px'}).addClass("Menu-animate");
	});
});