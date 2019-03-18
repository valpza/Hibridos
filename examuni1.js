var BaseDat = [];
var BaseCom = [];
var newPer;
var ComenPer;
var contador=0;


function ocultar() {
	document.getElementById('DivSection').style.display = "none"; //esconde el div 
}

//mostrar
//
function mostrar() {
	document.getElementById('DivSection').style.display= "block"; //esconde el div 
}

function limpiar(){
    document.getElementById('name').value = " ";
    document.getElementById('Desc').value = " ";
    document.getElementById('Img').value = " ";
}
function limpCom(){
    document.getElementById('ComInput').value = " ";
}

function Comen(){
	var elemento= document.getElementById("DivSection");
	if (elemento.style.display == "none") {
		mostrar();
	}else {
 		ocultar();
	}
}

function save(){
	//console.log("hola");
	function Persona(nombre, descripcion, img){
		this.nombre = nombre;
		this.descripcion = descripcion;
		this. img=img;
	}
	var nombreCapt = document.getElementById("name").value;
	var desCapt= document.getElementById("Desc").value;
	var imgURL = document.getElementById("Img").value;
	///console.log(nombreCapt + " <br> " +desCapt);
	newPer = new Persona (nombreCapt,desCapt,imgURL);
	console.log(newPer);
	//imagen();
	BaseDatos();
	limpiar();
}
function BaseDatos(){
	f = new Date();
	var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
	BaseDat.push(newPer);
	document.getElementById("Datos").innerHTML += "Usuario: " + newPer.nombre + "<br>"+ "Descripcion:  " + newPer.descripcion + " <br> " 
	+ "Fecha: "+ f.getDate() + " / " + months[f.getMonth()] + " / " + f.getFullYear() + " <br> "+ '<img src="' + newPer.img + '" alt="Smiley face" height="42" width="42">' +
	'<div id="datos"><p id="List"></p>'+ '</div>' ;
}
function ListCom(){
  	BaseCom.push(document.getElementById("ComInput").value);
  	contador++ ;
  	console.log(BaseCom);
  	f = new Date();
	var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

     for (var i = 0; i < BaseCom.length; i++) {
     	document.getElementById("List").innerHTML += "comentario " + (i+1) + "  " + BaseCom[i] + 
     	"  " + "Fecha: " + (document.getElementById('List').innerHTML = f.getDate() + " / " +
     	 months[f.getMonth()] + " / " + f.getFullYear()) + " <br> " ;
 
   		 }
   		 limpCom();
 	 } 
