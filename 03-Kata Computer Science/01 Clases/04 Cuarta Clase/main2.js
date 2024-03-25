class Animal {
    constructor(nombre, especie, edad){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }
  
    saludar(){
        console.log(`BRRRRRR, ${this.nombre}`);
    }
}

class Loro extends Animal {
    constructor(nombre, especie, edad, colorDePluma){
        super(nombre, especie, edad);
        this.colorDePluma = colorDePluma;
    }
    saludar(){
        console.log(`SKWEAK, ${this.nombre}`);
    }
}

class Vaca extends Animal{
    constructor(nombre, especie, edad, cuernos){
        super(nombre, especie, edad);
        this.cuernos = cuernos;
    }
    saludar(){
        console.log(`MUUUUU, ${this.nombre}`)
    }
}

class Oveja extends Animal {
  constructor(nombre, especie,edad, lana){
    super(nombre, especie, edad);
    this.lana = lana;
  }
  saludar(){
    console.log(`BEEE, ${this.nombre}`)
  }
}

class Rancho {
    constructor(animal1, animal2, animal3, animal4){
        this.animal1 = animal1;
        this.animal2 = animal2;
        this.animal3 = animal3;
        this.animal4 = animal4;
    }

    saludarTodos(){
        this.animal1.saludar();
        this.animal2.saludar();
        this.animal3.saludar();
        this.animal4.saludar();
    }
}


let loro1 = new Loro("Mike", "Ave", 2, "Azul");
let vaca1 = new Vaca("Clara BElla", "Mamifero", 12, 2);
let oveja1 = new Oveja ("Clarita", "Mamifero", 3, "Negro");
let animalA = new Animal ("Chester", "Felino", 4);

let ranchoA = new Rancho (loro1, vaca1, oveja1, animalA);

ranchoA.saludarTodos();


var numero = 20;
 if (numero -= 30){
    console.log("el numero es mayor a 20")
 } else {
    console.log("el numero es monor a 20")
 }

let arr = [3,2,1];
arr.sort();
console.log(arr);

console.log(`________________________________`)
const fruta = ['Naranja', 'Pera', 'Manzana'];
console.log(fruta);

fruta.push('Fresa', 'Aguacate');
console.log(fruta);

let frutaEliminada = fruta.pop();
console.log(`la fruta eliminada del arreglo de la ultima posición fue: ${frutaEliminada}`);
console.log(fruta);

frutaEliminada = fruta.shift(); // Elimina el primer elemento de un arreglo y regresa el valor
console.log(`la fruta eliminada del arreglo en la primera posicion fue: ${frutaEliminada}`);
console.log(fruta);

const verduras = ['Zanahoria', 'Calabaza', 'Jitomate', 'Cebolla'];

let comida = fruta.concat(verduras);
console.log(comida);

comida = [...fruta, ...verduras];
console.log (comida);

let comidaReferenciada = [fruta, verduras];
console.log(comidaReferenciada);

console.log(`________________________________`)

let comidaCopia = [[...fruta], [...verduras]];
console.log (comidaCopia);

console.log(`arreglos despues de modificaciones`);
fruta.push(`mandarina`);
verduras.push(`madarina`);

console.log(comidaReferenciada);
console.log(comidaCopia);


// Pilas 

class Pilas{
    constructor(){
        this.datos = [];
    }

    agregar(nuevoDatos){

        this.datos.push(nuevoDatos);

    }

    //metodo pop
    eliminar(){
        if (this.datos.length == 0){
            return null;
        }
        return this.datos.pop();
    }

    //metodo peek
    mostrarUltimoElemento(){
        if (this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length - 1];
    }
}

let pilaNavegacionWeb = new Pilas ();{


    pilaNavegacionWeb.agregar('www.google.com');
    pilaNavegacionWeb.agregar('www.youtube.com');
    pilaNavegacionWeb.agregar('www.youtube/TaylorSwift');
    pilaNavegacionWeb.agregar('www.youtube/TaylorSwift/karma');

    console.log('Navegacion WEB');

console.log(`estoy en la pagina: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);
console.log(`Me regreso a la pagina anterior: ....}`)
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la Pagina: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);

console.log(`Me regreso a la pagina anterior: ....}`)
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la Pagina: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);

console.log(`Me regreso a la pagina anterior: ....}`)
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la Pagina: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);

console.log(`Me regreso a la pagina anterior: ....}`)
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la Pagina: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); // Mi pila esta vacía
pilaNavegacionWeb.eliminar();
}


function funcionA(){
    console.log('Funcion A');
}

function funcionB(){
    funcionA();
    console.log('funcion B');
}

function FuncionC(){
    funcionB();
    console.log>('Funcion C');
}

function FuncionD(){
    FuncionC();
    console.log('Funcion D');
}

FuncionD();

console.log('______________');

class cola{
    constructor(){
        this.elemento = [];
    }
    // Enqueue
    agregarElemento(nuevoElemento){
        this.elemento.unshift(nuevoElemento);
    }

    //deqeue
    eliminarElemento(){
        if(this.elemento.length == 0){
            return null;
        }
        this.elemento.pop();
    }

    //back
    mostrarUltimoElemento(){
        if(this.elemento.length == 0){
            return null;
        }
        return this.elemento[0];

    }
    // front  <- Mostrar el primer elemento que llego a la cola
    mostrarPrimerElemento(){
        if(this.elemento.length == 0){
            return null;
        }
        return this.elemento[this.elemento.length -1];
    }

}

console.log('Fila de Tortollas')
let colaDETortillas = new cola();
colaDETortillas.agregarElemento('Juliana');
colaDETortillas.agregarElemento('Hector');
colaDETortillas.agregarElemento('Roberto');
colaDETortillas.agregarElemento('Arturo');

console.log(`La primer persona que llego a la fila fue: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona que llego a la fila fue: ${colaDETortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la primera persona...')
colaDETortillas.eliminarElemento();


console.log(`La siguiente persona en ser atendida es: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona en ser atendida sera: ${colaDETortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...')
colaDETortillas.eliminarElemento();


console.log(`La siguiente persona en ser atendida es: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona en ser atendida sera: ${colaDETortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...')
colaDETortillas.eliminarElemento();


console.log(`La siguiente persona en ser atendida es: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona en ser atendida sera: ${colaDETortillas.mostrarUltimoElemento()}`);

console.log(`Se agrega Galilea a la fila de las tortillas`);
colaDETortillas.agregarElemento('Galilea');


console.log(`La siguiente persona en ser atendida es: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona en ser atendida sera: ${colaDETortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...')
colaDETortillas.eliminarElemento();


console.log(`La siguiente persona en ser atendida es: ${colaDETortillas.mostrarPrimerElemento()}`);
console.log(`La ultima persona en ser atendida sera: ${colaDETortillas.mostrarUltimoElemento()}`);

//let respuesta = prompt(`escribe el valor del ciclo`)

//for(i=0;i<= respuesta ;i++){
  //  console.log(i);
//}



x = 1;
while (x <= 10){
    console.log(x);
    x= x+1;
}
