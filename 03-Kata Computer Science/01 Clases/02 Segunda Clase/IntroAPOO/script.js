
//LAS CLASES SE NOMBRAN CON LA PRIMERA LETRA EN MAYUSCULA (PascalCase)
class Persona{

// agregar atribustos
//this nos va ha permitir acceder a un atributo

    constructor(nombre, nuevaEdad, genero, peso){
        this.nombre = nombre;
        this.edad = nuevaEdad;
        this.genero = genero;
        this.mejorAmigo = null;
        this.peso = peso;
        this.mascota = [];
    }


//crear metodo

    saludar(){
        console.log(`Hola, mi nombre es: ${this.nombre}`); // temple string -> utiliza bacticks (alt + 96)

    }

// crear otro metodo

    platicar(interlocutor){
        console.log(`Hola ${interlocutor.nombre}, mi nombre es ${this.nombre}`);

    }

}

let persona1 = new Persona("Malinali", 25 , "Femenino", 50); // Creamos un Objeto de tipo Persona
let Persona2 = new Persona("Angel", 27, "Masculino", 75); // Creamos un Segundo Objeto

persona1.saludar();
Persona2.saludar();

persona1.platicar(Persona2);
Persona2.platicar(persona1);



