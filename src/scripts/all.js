//librerias requridas
var $ = require('jquery');
var Hammer = require('hammerjs');

//varriables de jquery object (creacion de variables para la creacion de un solo jquery object por variable )
var	$Menu = $(".Menu"),
	$HeaderbuttonAbrir = $("#Header-buttonAbrir"),
	$HeaderbuttonCerrar = $("#Header-buttonCerrar"),
	$Proyectosmas = $("#Proyectos-mas"),
	$ProyectosmasDespliege = $(".Proyectos-masDespliege"),
	$ProyectosbuttonAbrir = $("#Proyectos-buttonAbrir"),
	$ProyectosbuttonCerrar = $("#Proyectos-buttonCerrar"),
	$Tecnologiasmas = $("#Tecnologias-mas"),
	$TecnologiasmasDespliege = $(".Tecnologias-masDespliege"),
	$TecnologiasbuttonAbrir = $("#Tecnologias-buttonAbrir"),
	$TecnologiasbuttonCerrar = $("#Tecnologias-buttonCerrar");

$(function(){
	//cagrga perezosa de fuentes
	var loadCSS = require('./lib/loadCSS'); 
	loadCSS('https://fonts.googleapis.com/css?family=Exo:400,100italic');

	var loadHeadImg =require('./lib/loadHeadImg');
	loadHeadImg('./dist/img/juan300.jpg');

	//modulo de efecto de ondulacio en el click
	var ondulacion = require('./lib/ondulacion');
	ondulacion();

	//gestos touch para dispositivos
	var $body = document.querySelector("body");
	var body = new Hammer($body);

	body.on("panright", menuAbrir);
	body.on("panleft", menuCerrar);

    //nav
	$HeaderbuttonAbrir.on("click", menuAbrir);
	$HeaderbuttonCerrar.on("click", menuCerrar);

	function menuAbrir(){
		$Menu.addClass("Menu-isActive");
		$HeaderbuttonAbrir.addClass("U-scaleCeroAbrir");
		$HeaderbuttonCerrar.delay(2000).addClass("U-scaleUno");
	}
	function menuCerrar(){
		$Menu.removeClass("Menu-isActive");
		$HeaderbuttonCerrar.removeClass("U-scaleUno");
		$HeaderbuttonAbrir.delay(2000).removeClass("U-scaleCeroAbrir");
	}
	// </nav

	//proyectos
	$ProyectosbuttonAbrir.on("click", proyectosAbrir);
	$ProyectosbuttonCerrar.on("click", proyectosCerrar);

	function proyectosAbrir(){
		$ProyectosbuttonCerrar.addClass("U-mostrar");
		$Proyectosmas.slideDown("slow");
		$ProyectosmasDespliege.animate({
			"top": 0,
			"opacity": 1
			});
		return false;
	}
	function proyectosCerrar(){
		$ProyectosbuttonCerrar.removeClass("U-mostrar");
		$Proyectosmas.delay(220).slideUp("slow");
		$ProyectosmasDespliege.animate({
			"top": -1000,
			"opacity": 0
			});
		return false;
	}
	// </Proyectos

	// Tecnologias
	$TecnologiasbuttonAbrir.on("click", tecnologiasAbrir);
	$TecnologiasbuttonCerrar.on("click", tecnologiasCerrar);

	function tecnologiasAbrir(){
		$TecnologiasbuttonCerrar.addClass("U-mostrar");
		$Tecnologiasmas.slideDown("slow");
		$TecnologiasmasDespliege.animate({
			"top": 0,
			"opacity": 1
			});
	}
	function tecnologiasCerrar(){
		$TecnologiasbuttonCerrar.removeClass("U-mostrar");
		$Tecnologiasmas.delay(270).slideUp("slow");
		$TecnologiasmasDespliege.animate({
			"opacity": 0,
			"top": -1000
		});
		return false;

	}
});