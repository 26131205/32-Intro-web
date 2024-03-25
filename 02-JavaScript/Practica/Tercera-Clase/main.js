console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");


console.log(true == 1);


let resultado = 10 / ("Hola");
console.log(resultado);

let resultado2 =  Math.sqrt(-5);
console.log(resultado);

let resultado3 = 5 + NaN;
console.log(resultado3);

console.log(isNaN(resultado)); 

console.log(isNaN(123)); 



// Condicionales if-ele
// < > == === !=
// && and
// || or
// ! not

/*
var edad = Number(prompt("Cuantos años tienes"));

// Evaluación
if (edad >= 18) {
console.log("eres mayor de edad") //bloque verdadero
} else { 
console.log("eres menor de edad"); //bloque falso
}
*/

/*
let ColorS = prompt("Ingrese un color del Semaforo");

if (ColorS == "Verde") {
     console.log ("Avanza");
 } else if  (ColorS == "Amarillo") {
    console.log("Precaucion");
 }
 else if (ColorS == "Rojo") {
    console.log ("Detente");
 }
 else{
    console.log("Sale del rango del semaforo");
 }

 */


let vestimenta = prompt("¿Tienes una Vestimenta casual o formal?");
let membresia = prompt("¿Cuentas con una membresia activa?");
let color = prompt("¿Tu playera es color azul o color blanca?");

if (vestimenta == "formal" && membresia == "activa" && color == "azul") {
    console.log("Tienes una membresia VIP");
}
else if (vestimenta == "casual" || membresia == "no" || color == "blanca") {
    console.log("Tienes una membresia Normal ");
}
else {
    console.log("Sigue participando");
}






