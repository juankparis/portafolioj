$(function(){

	//gestos touch
	var $body = document.querySelector("body");
	var body = new Hammer($body);

	body.on("panright", menuAbrir);
	body.on("panleft", menuCerrar);
    //nav
	$("#Header-buttonAbrir").on("click", menuAbrir);
	$("#Header-buttonCerrar").on("click", menuCerrar);

	function menuAbrir(){
		$(".Menu").addClass("Menu-isActive");
		$("#Header-buttonAbrir").addClass("U-scaleCeroAbrir");
		$("#Header-buttonCerrar").delay(2000).addClass("U-scaleUno");
	}
	function menuCerrar(){
		$(".Menu").removeClass("Menu-isActive");
		$("#Header-buttonCerrar").removeClass("U-scaleUno");
		$("#Header-buttonAbrir").delay(2000).removeClass("U-scaleCeroAbrir");
	}
	// </nav
	//proyectos
	$("#Proyectos-buttonAbrir").on("click", proyectosAbrir);
	$("#Proyectos-buttonCerrar").on("click", proyectosCerrar);

	function proyectosAbrir(){
		$("#Proyectos-buttonCerrar").addClass("U-mostrar");
		$("#Proyectos-mas").slideDown("slow");
		$(".Proyectos-masDespliege").animate({
			"top": 0,
			"opacity": 1
			});
		$("#Proyectos-mas").css({display:"flex"});
		return false;
	}
	function proyectosCerrar(){
		$("#Proyectos-buttonCerrar").removeClass("U-mostrar");
		$("#Proyectos-mas").delay(220).slideUp("slow");
		$(".Proyectos-masDespliege").animate({
			"top": -1000,
			"opacity": 0
			});
		return false;
	}
	// </Proyectos
	// Tecnologias
	$("#Tecnologias-buttonAbrir").on("click", tecnologiasAbrir);
	$("#Tecnologias-buttonCerrar").on("click", tecnologiasCerrar);

	function tecnologiasAbrir(){
		$("#Tecnologias-buttonCerrar").addClass("U-mostrar");
		$("#Tecnologias-mas").slideDown("slow");
		$(".Tecnologias-masDespliege").animate({
			"top": 0,
			"opacity": 1
			});
	}
	function tecnologiasCerrar(){
		$("#Tecnologias-buttonCerrar").removeClass("U-mostrar");
		$("#Tecnologias-mas").delay(270).slideUp("slow");
		$(".Tecnologias-masDespliege").animate({
			"opacity": 0,
			"top": -1000
		});
		return false;

	}
	// </Tecnologias

	//genera el el efecto de ondulacion en el sistema de navegagion
	var pariente, Menulink, diametro, x, y;

	$(".ondulacion").click(function(e){
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
		//Reciben un objeto jQuery y devuelven las dimensiones externas del primer elemento de dicho objeto jQuery recibido por parámetro, esto es, la anchura y altura respectivamente del elemento contando el padding del elemento y su borde.
		diametro = Math.max(pariente.outerWidth(), pariente.outerHeight());
		Menulink.css({height: diametro, width: diametro});
	}

	//se obtiene las cordenadas del los clicks  
	//devuelven la posición de un elemento en la página. Reciben un objeto jQuery y devuelven la localización del primer elemento que haya en ese objeto jQuery. La posición siempre se indica como valor de retorno del método por medio de un objeto que tiene dos atributos, "top" y "left", indicando los píxeles que está separado de la esquina superior izquerda del documento. 
	//offset() indica la posición del elemento real, teniendo en cuenta los márgenes del elemento,
	x = e.pageX - pariente.offset().left - Menulink.width()/2;
	y = e.pageY - pariente.offset().top - Menulink.height()/2;
	
	//pasa la posicion en (y,x) y anñade la clase Menuanimate (se la pasa al Menu link por eso es necesario poner el position absolute en el)
	Menulink.css({top: y+'px', left: x+'px'}).addClass("Menu-animate");
	});

});