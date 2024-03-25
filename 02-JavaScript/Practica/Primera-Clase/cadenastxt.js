//Metos para Cadesnas

var frase = "Hola, Mundo";

//charAt()
console.log(frase.charAt(0));

//indexOF()
console.log(frase.indexOf("M"));

//replace()
console.log(frase.replace("Mundo","Amigo"))

//tolowercase()
console.log(frase.toLowerCase());

//toupperCase()
console.log(frase.toLocaleUpperCase());

//Split()
console.log(frase.split(","));

//Slice
console.log(frase.slice(0,7));

//Practica 

var nombre = prompt("Cual es su Nombre");
var apellidoPaterno = prompt("Cual es tu Apellido Paterno");
var apellidoMaterno = prompt("Cual es tu Apellido Materno");
var  fechaNac = ("cual es su Fecha de Nacimiento");

var paterno = apellidoPaterno.substring(0 , 2);
var materno = apellidoMaterno.substring(0 , 1);
var nomSoli = nombre.substring(0 , 1);
console.log(paterno.toLocaleUpperCase() + materno.toLocaleUpperCase() + nomSoli);

