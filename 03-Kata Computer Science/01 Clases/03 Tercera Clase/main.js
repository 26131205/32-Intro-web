class Animal {
    constructor (nombre, edad, kroketas){
        this.nombre = nombre;
        this.edad = edad;
        this.kroketas = kroketas;

    }
    //metodo
    dormir(){
    console.log (`${this.nombre} esta durmiendo`);
    }
    comer(){
        console.log( `${this.nombre} esta comiendo ${this.kroketas}`);
    }
}
let perro = new Animal("firulais",4, "prime");

perro.dormir();

perro.comer();



class Nombre {
    constructor(nom,apell){
        this.nom = nom;
        this.apell = apell;
    }

    completo(){
        console.log(`Mi nombre completo es: ${this.nom}  ${this.apell}`);
    }

}


let nombreCompleto = new Nombre ("jaime","Bautista");

nombreCompleto.completo();




class gato{
  
    constructor(gato,perro,oso,delfin,ballena,){
        this.gato = gato;
        this.perro = perro;
        this.oso = oso;
        this.delfin = delfin;
        this.ballena = ballena;
    }

    animales(){
        console.log(`el nombre de mi mejor amigo es el ${this.gato}`)
    }

}

let amigo = new gato ("leli","picu","lali","pete")

amigo.animales();





class Familia {
    constructor (papa,mama,hija,hijoMenor,hijoMayor) {
    this.papa = papa;
    this.mama = mama;
    this.hija = hija;
    this.hijoMenor = hijoMenor;
    this.hijoMayor = hijoMayor;
    
}
    integrantes(){

        console.log(`El nombre del Papa de la familia se llama ${this.papa}`)
        console.log(`El nombre de la Mama de la Familia se llama ${this.mama}`)
        console.log(`El nombre de la hija de la familia se llama ${this.hija}`)
        console.log(`El nombre del hijo manor de la familia se llama ${this.hijoMenor}`)
        console.log(`El nombre del hijo mayo de la familia se llama ${this.hijoMayor}`)
    }
}

let familiaGeneral = new Familia ("Jaime","Wendy","Melany","Matias","Jaimito")

familiaGeneral.integrantes();



class trabajo {
    constructor (jefe,secretario,empleado){
            this.jefe = jefe;
            this.secretario = secretario;
            this.empleado = empleado;
    }

    integrantes(){
        console.log (`El secretario general se llama ${this.jefe}`);
        console.log (`El secretario particular se llama ${this.secretario}`);
        console.log (`El empleado se llama ${this.empleado}`);
    }
}

let empleados = new trabajo ("Manuel", "Jaime","Miriam")

empleados.integrantes();


class Casa {
    constructor(casa1 , casa2 , casa3){

        this.casa1 = casa1;
        this.casa2 = casa2;
        this.casa3 = casa3;

    }

    hogar(){
        console.log(`Esta es la casa donde vivia por Primera vez ${this.casa1}`);
        console.log(`Esta es la casa donde vivia por Segunda vez ${this.casa2}`);
        console.log(`Esta es la casa donde vivia por Tercera vez ${this.casa3}`);
    }

}

let vivienda = new Casa ("Arboledas","Tizayuca","Colosio");

vivienda.hogar();


class escuela {
     
    constructor (materia, trabajo, grupo, profesor){
        this.materia = materia;
        this.trabajo = trabajo;
        this.grupo = grupo;
        this.profesor = profesor;
    }

    Colegio (){
            console.log (`La materia ${this.materia} realizaron el trabajo del ${this.trabajo}, del cual fue en el grupo de ${this.grupo}, con el profesor ${this.profesor}`);
    }

}

let Trabajo = new escuela ("Matesmaticas","Sistema Planetario", "3B", "Jaime Bautista Resendiz")

Trabajo.Colegio();



class Proyector {
    constructor (marca, alcance, material){

        this.marca = marca;
        this.alcance = alcance;
        this.material = material;
    }
  //Metodo
    
    uso (){
        console.log(`El proyector de la marca ${this.marca}, tiene un alcance de proyeccion de ${this.alcance}, tiene propiedades especificas de ${this.material}`)
    }
}

let funcion = new Proyector ("Benq"," 150 metros","Plastico");

funcion.uso();

class Celular {
     constructor ( modelo, año, version) { 
          this.modelo = modelo; this.año = año; this.version = version  
        }    
        caracteristicas (){  
            console.log(`El celular Infinix tiene un modelo ${this.modelo}, y salio en el año ${this.año}, con una version ${this.version}`)  
    }     
 }   
 let principal = new Celular ("x678",2024,"NOTE 30 Pro"); 
 
 principal.caracteristicas();



 class repisa {
    constructor (ancho, largo, alto){
        this.ancho = ancho;
        this.largo = largo;
        this.alto = alto;
    }

    //metodo 
    tamaño(){
        console.log(`La mesa tiene un ancho de: ${this.ancho} cm, y un largo de: ${this.largo} cm, y un alto de ${this.alto} cm`)
    }

 }

 let medidas = new repisa (58,60,73);

 medidas.tamaño();



 
 class Persona {
    #mejorAmigo; //<- atributo privado. Los atributos privados empiezan con un #
    #mascotas
constructor(nombre, nuevaEdad, genero, peso){
    this.nombre = nombre;
    this.edad = nuevaEdad;
    this.genero = genero;
    this.#mejorAmigo = null;
    this.peso = peso;
    this.#mascotas = [];
    }
    saludar (){
        console.log(`Hola mi nombre es ${this.nombre}`); // 
    }
    platicar(interlocutor){
        console.log(`Hola ${interlocutor.nombre}, mi nombre es: ${this.nombre} `);
    }
        // Un metodo get m epermite regresar el valor de un atributo privado.
    get mejorAmigo(){
        return this.#mejorAmigo;
    }
        // Un método set me permite modificar el valor de un atributo privado.
    set mejorAmigo(nuevoMejorAmigo){
        this.#mejorAmigo = nuevoMejorAmigo;
    }

    agregarMascotas(nuevaMascota){
        this.#mascotas.push(nuevaMascota);
    }

    mostrarMascotas(){

        if(this.#mascotas.length == 0){
            console.log(`${this.nombre} no tiene mascotas`)
        } else {
            console.log(`Las mascotas de ${this.nombre} son:`)
        for(let i = 0; i < this.#mascotas.length; i++){
            console.log(`${this.#mascotas[i].nombre} es un ${this.#mascotas[i].especie}`);
              }

        }
        
    }
 }

 class Mascota{
    constructor(nuevoNombre, especieDeMascotas){
        this.nombre = nuevoNombre;
        this.especie = especieDeMascotas;
    }
 }

 let persona1 = new Persona ("Malinali", 25, "Femenino", 50);
 let persona2 = new Persona ("angel", 27, "Masculino","Masculino", 75);
 persona1.saludar();
 persona2.saludar();
 persona1.platicar(persona2);
 persona2.platicar(persona1);
 //Accediendo al atributo privado #mejorAmigo a través de lso métodos get y set.
 console.log(`El mejor amigo de la persona 1 es: ${persona1.mejorAmigo}`)
  persona1.mejorAmigo = persona2;
 console.log(`El nombre de la persona 1 es: ${persona1.mejorAmigo.nombre}`)
 //accediendo al atributo público nombre.
 console.log(`El nombre de la persona 1 es: ${persona1.nombre}`)




 let mascota1 = new Mascota("periquito","perico");
 let mascota2 = new Mascota("Lili","gato");

 persona2.agregarMascotas(mascota1);
 persona2.agregarMascotas(mascota2);

persona2.mostrarMascotas();

persona1.mostrarMascotas();