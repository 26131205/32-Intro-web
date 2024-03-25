function Suma(a,b) {
    let total=a+b;
    console.log(total)
}

function Saludo(nombre) {
  console.log("Bienvenido" + nombre)
}

function Datos(){
    let nombre = prompt("¿Cual es su Nombre?");
    let apellido = prompt ("¿Cual es su Apellido?")
    console.log("Su Nombre es:" + nombre + " " + apellido)
}

Suma(5,4);

Suma(20,60);

//Datos();

//Saludo(" Jaime");

function Resta(a,b){
    let total = a-b;
    return total;
}

Resta(2,3); // No se puede ver en Consola

console.log(Resta(6,4)); // Podemos verlo en Consola

let resta = Resta(10,5);
console.log(resta);     // Con Return podemos asignar valores o variables

// Ejercicio 1
//Crea una funcion que calcule el area de un triangulo
function Area (a,b){
    let triangulo = (a+b) / 2 ;
    return triangulo;
}

let area = Area (3,4);
console.log(area);

// Ejercicio 2
//Crear una funcion que calcule el perimetro de un cuadrado
/*
function Perimetro (a){
 let perime = a ;
 return perime
}

let perimetro =  prompt(Perimetro) * 4;
console.log(perimetro);
*/

//Ejercicio 3
// Crea una funcion que reciba 5 calificaciones y Calcule el Promedio

function Promedio (){
    let a = Number(prompt("Ingrese la primera Calificacion"));
    let b = Number(prompt("Ingrese la segunda Calificacion"));
    let c = Number(prompt("Ingrese la tercera Calificacion"));
    let d = Number(prompt("Ingrese la cuarta Calificacion"));
    let e = Number(prompt("Ingrese la quinta Calificacion"));
    let total = a + b + c + d + e ; 
    let granTotal = total / 5 ;
    console.log(granTotal);
}

//romedio();

//Ejercicio 4
// crea una funcion que reciba los meses que alguien se va ha 
// inscribir al curso  y los multiplique para saber el total 

function curso(){
    var costoTotal = 9600;
    var CostoParcial = 800;
    let nombre = prompt("Como te Llamas?");
    let edad = prompt("Que edad Tienes?");
    let pago = Number(prompt("Cuantos meses vas ha pagar"));
    let meses = pago * CostoParcial;
    let resta = meses - costoTotal;
    console.log("El costo Total de su pago es de $9,600, Gracias por su pago. Resta:" + resta)
}

curso();







