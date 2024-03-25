// Tipo de datos

//Numeros
var num = 10;
console.log (typeof(num)); //Number

//Cadenas ed texto

var str = 'Hola DEV.f';
console.log(typeof(str)); // String
//BooLeanos
var bool = true;
console.log(typeof(bool)); //Boolean

//Valores nulos
var nulo = null;
console.log(typeof(nulo));

//Valores no definidos
var indefinido = undefined;
console.log(typeof(indefinido));

// Operadores Matematicos
var numero1 = 5;
var numero2 = 8;

var suma = numero1 + numero2;
console.log("Suma:", + suma);

var resta = numero2 - numero1;
console.log("Resta: " + resta);

var multiplicacion = numero1 * numero2;
console.log("Multiplicacion: " + multiplicacion);

var division = numero2 / numero1;
console.log("Division: " + division);

var modulo = numero2 % numero1;
console.log("Modulo:" + modulo);

var exponencial = numero1 ** numero2;
console.log("Exponencial:" + exponencial);

// -----------------Ejercicio 1 
// Vamos a pedir Informacion al usuario y mostarrlo en la pantalla


// Nombre
//Cauntos perros Tiene 
//Cuantos gatos

//Mostrar: Nombre + tiene -- Perror + Tiene -- Gatos y en total 
// Tiene tal numero de mascotas

// ------------------Ejercicio 2 
// Vamos a pedir 
//Cafes
//Cuantos Postres
//Cuantos Snaks

// cafe vale $15 , Postres $20, Snack $30
// Cuanto Total

//Extra , cuanto va ha pagar
//Decirle su cambio $100 Cuesta: $90  : Cambio: $10 pesos 

/*

//Ejercicio 1
var nombre = prompt("Ingrese su nombre");
var perros = prompt("Cuantos Perros Tiene");
var gatos = prompt("Cuantos Gatos Tiene");

console.log("usted Se llama: " + nombre + " Tienen un total de Perros de: " + perros
+ " Tiene un Total de Gatos de: " + gatos);

console.log("Usted Tiene una cantidad de Mascotas de: " + (parseInt(perros) + parseInt(gatos)));

//Ejersicio 2

var cafe = 15;
var postre = 20;
var snack = 30;

var cafe1 = prompt("Cuatos Cafes desea");
var postre1 = prompt("Cuantos Postres desea");
var snak1 = prompt("Cuatos Snack va ha llevar");
var Pago = prompt("Con cuanto va ha Pagar");

var totalCafe = parseInt(cafe1) * cafe;
var totalpostre = parseInt(postre1) * postre;
var totalsnack = parseInt(snak1) * snack;
var total = parseInt(totalCafe) + parseInt(totalpostre) + parseInt(totalsnack)
var cambio = parseInt(Pago) - total;

console.log("Total a pagar es de" + total)


console.log("su cambio sera de: " + cambio )


*/

// Ejercicio de la Profesora

/*

var nombre = prompt("Ingrese su nombre");

var numPerros = Number(prompt("Ingrese el numero de perros"));
var numGatos = Number(prompt("Ingrese el numero de Gatos"));

var tostalMascotas = numPerros + numGatos;

console.log( nombre + " Tiene " + numPerros + "Perros y Tiene" + numGatos + "En Total Tiene" + tostalMascotas + "Mascotas");



*/

//Practica 

// -----------------Ejercicio 1 
// Vamos a pedir Informacion al usuario y mostarrlo en la pantalla


// Nombre
//Cauntos perros Tiene 
//Cuantos gatos

//Mostrar: Nombre + tiene -- Perror + Tiene -- Gatos y en total 
// Tiene tal numero de mascotas

/*

var nombre = prompt("Cual es nu Nombre");

var perro = Number(prompt("Cuatos Perros Tiene"));
var gatos = Number(prompt("Cuantos gatos Tiene"));

var total = perro + gatos;

document.write("Usted Tiene un Total de Perros" + perro + "Tiene un total de gatos" + gatos + "un total de mascotas de: " + total)


*/

// ------------------Ejercicio 2 
// Vamos a pedir 
//Cafes
//Cuantos Postres
//Cuantos Snaks

// cafe vale $15 , Postres $20, Snack $30
// Cuanto Total

//Extra , cuanto va ha pagar
//Decirle su cambio $100 Cuesta: $90  : Cambio: $10 pesos 

var costoCaffe = 15;
var costoPostre = 20;
var costoSnacke = 30;

var caffe = Number(prompt("Cuantos caffes desea comprar"));
var postres = Number(prompt("Cuantos Postres desea comprar"));
var snacke = Number(prompt("Cuantos Snacke desea comprar"));
var pago = Number(prompt("Con cuanto va ha Pagar"));

var totalCaffe = costoCaffe * caffe;
var totalPostres = costoPostre * postres;
var totalSnacke = costoSnacke * snacke;

var totalCompra = totalCaffe + totalPostres + totalSnacke;
var cambio = pago - totalCompra;

console.log(" Costo Total de Caffees: " + totalCaffe + "; Costo Total de Postre: " + totalPostres + " ; Costo Total de Snacke: " + totalSnacke + "; Su Cambio es de:" + cambio);



























