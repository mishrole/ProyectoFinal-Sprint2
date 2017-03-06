var puntos = 0;

function botones(clicked_id) {

	var b1 = document.getElementById("botonSprint1");
	var b2 = document.getElementById("botonSprint2");
	var b3 = document.getElementById("botonSprint3");
	var titSprint = document.getElementById("tituloSprint");
	var texSprint = document.getElementById("textoSprint");
	var li = document.getElementsByTagName("li");
	var lista = document.getElementById("lista");
	var quiz = document.getElementById("quiz");
	var quiz1 = document.getElementById("quiz1");
	var quiz2 = document.getElementById("quiz2");
	var quiz3 = document.getElementById("quiz3");
	var p1 = document.getElementById("pregunta1");
	var p2 = document.getElementById("pregunta2");
	var p3 = document.getElementById("pregunta3");
	var p4 = document.getElementById("pregunta4");
	var p5 = document.getElementById("pregunta5");
	var p6 = document.getElementById("pregunta6");
	var p7 = document.getElementById("pregunta7");
	var p8 = document.getElementById("pregunta8");
	var p9 = document.getElementById("pregunta9");

	if(clicked_id == "botonSprint1"){
		titSprint.innerHTML = "Sprint 1: Introducción a Javascript"
		texSprint.innerHTML = "<ol><li>Fundamentos de Programación</li><li>Funciones</li><li>Arreglos</li><li>Objetos</li>"
		quiz1.innerHTML = "Existen dos tipos de funciones"
		quiz2.innerHTML = "Elije una propiedad de los arreglos"
		quiz3.innerHTML = "Un objeto tiene ________ y ________"
		p1.innerHTML = "Explícitas y declaradas"
		p2.innerHTML = "Expresadas y declaradas"
		p3.innerHTML = "Expresadas y derivadas"
		p4.innerHTML = "pop"
		p5.innerHTML = "clear"
		p6.innerHTML = "add"
		p7.innerHTML = "números y letras"
		p8.innerHTML = "propiedades y valores"
		p9.innerHTML = "partes y validaciones"
	}else if(clicked_id == "botonSprint2"){
		titSprint.innerHTML = "Sprint 2: Introducción al desarrollo web y construcción de páginas web"
		texSprint.innerHTML = "<ol><li>Ciclo de vida del desarrollo web y arquitectura básica cliente/servidor/ Configuración del ambiente de trabajo e introducción a git</li><li>HTML y Javascript en el navegador.</li>" +
		"<li>Manejo de comandos básicos de git en la terminal.</li><li>Pruebas unitarias</li><li>Git / Resolución de conflictos / Branching model</li><li>DOM</li>"
		quiz1.innerHTML = "¿Cuál es el comando para iniciar un repositorio desde la consola?"
		quiz2.innerHTML = "¿Cuál es la finalidad de hacer una prueba unitaria?"
		quiz3.innerHTML = "¿Qué significa DOM?"
		p1.innerHTML = "git init ."
		p2.innerHTML = "git init"
		p3.innerHTML = "git init add"
		p4.innerHTML = "Comprobar que el código funciona correctamente"
		p5.innerHTML = "Darle valores a los parámetros de dichas funciones"
		p6.innerHTML = "No tiene ningún fin"
		p7.innerHTML = "Dual Object Model"
		p8.innerHTML = "Document Object Model"
		p9.innerHTML = "Document Obsolet Model"
	}else if(clicked_id == "botonSprint3"){
		titSprint.innerHTML = "Todavía no hay contenido disponible."
		texSprint.innerHTML = ""
		quiz1.innerHTML = "-"
		quiz2.innerHTML = "-"
		quiz3.innerHTML = "-"		
	}

}

function puntosQuiz() {

	if(document.formulario.preg1[1].checked && document.formulario.preg2[0].checked && document.formulario.preg3[1].checked){
		puntos = 3
	}else{
		puntos = 2
	}

	if((document.formulario.preg1[1].checked && document.formulario.preg2[1].checked && document.formulario.preg3[0].checked) ||
			(document.formulario.preg1[1].checked && document.formulario.preg2[2].checked && document.formulario.preg3[0].checked) ||
			(document.formulario.preg1[1].checked && document.formulario.preg2[1].checked && document.formulario.preg3[2].checked) ||
			(document.formulario.preg1[1].checked && document.formulario.preg2[2].checked && document.formulario.preg3[2].checked) ||
			(document.formulario.preg1[0].checked && document.formulario.preg2[0].checked && document.formulario.preg3[0].checked) ||
			(document.formulario.preg1[0].checked && document.formulario.preg2[0].checked && document.formulario.preg3[2].checked) ||
			(document.formulario.preg1[2].checked && document.formulario.preg2[0].checked && document.formulario.preg3[0].checked) ||
			(document.formulario.preg1[2].checked && document.formulario.preg2[0].checked && document.formulario.preg3[2].checked) ||
			(document.formulario.preg1[0].checked && document.formulario.preg2[1].checked && document.formulario.preg3[1].checked) ||
			(document.formulario.preg1[2].checked && document.formulario.preg2[1].checked && document.formulario.preg3[1].checked) ||
			(document.formulario.preg1[0].checked && document.formulario.preg2[2].checked && document.formulario.preg3[1].checked) ||
			(document.formulario.preg1[2].checked && document.formulario.preg2[2].checked && document.formulario.preg3[1].checked)){
		puntos = 1
	}


/*	if( ((document.formulario.preg1[1].checked && document.formulario.preg2[0].checked && document.formulario.preg2[0].checked) ||
		(document.formulario.preg2[0].checked && document.formulario.preg2[0].checked && document.formulario.preg3[1].checked)) || 
		((document.formulario.preg3[1].checked && document.formulario.preg1[1].checked && document.formulario.preg2[1].checked) ||
		(document.formulario.preg3[1].checked && document.formulario.preg1[0].checked && document.formulario.preg2[2].checked)) ||
		((document.formulario.preg3[2].checked && document.formulario.preg1[0].checked && document.formulario.preg2[1].checked) ||
		(document.formulario.preg3[1].checked && document.formulario.preg1[2].checked && document.formulario.preg2[1].checked))) {
		puntos = 2
	}

*/
}

function enviar() {

	quiz.innerHTML = "<h4>Quiz</h4> <br> " + "Tienes " + puntos + " correctas."

}