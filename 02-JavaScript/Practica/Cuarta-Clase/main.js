class Persona{
    constructor(nombre, edad, sexo, ubicacion){ //Atributos
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.ubicacion = ubicacion;
    }

        // Metodo
    caminar(){
        console.log(this.nombre  + " esta caminando.")
    }

    correr(){
        console.log(this.nombre + " esta corriendo.")
    }
}

//Instancia Objetos 

const persona1 = new Persona("Ana", 22, "Femenino", "México");

console.log(persona1);

persona1.caminar();
persona1.correr();

//Herencia - Mecanismo de reutilización de codigo

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, ubicacion, grado, promedio){
        super(nombre, edad, sexo, ubicacion); // Indicamos con la Palabra super
                                            // aquellos que ocupamos de la clase padre
        this.grado= grado;
        this.promedio=promedio;
    }
    estudiar(){
        console.log(this.nombre + " esta estudiando " + this.grado);
    }

}

const estudiante1 = new Estudiante("Esteban", 15, "Masculino", "Paraguay", 
"Preparatoria", 9.8 );

estudiante1.estudiar();
estudiante1.caminar();
estudiante1.correr();

class Profesor extends Persona { 
    constructor (nombre, edad, sexo, ubicacion, materia, experiencia){
    super(nombre, edad, sexo, ubicacion);
    this.materia=materia;
    this.experiencia = experiencia;
    }

    enseñar(){
        console.log(this.nombre + " esta eseñando " + this.materia)
    }
}

const maestro1 = new Profesor("Laura",33, "Femenino", "UNAM" , "matematicas", 3);

maestro1.enseñar();


//-------------------------


//Polimorfismo
class ProfesorMusica extends Profesor {
    constructor(nombre, edad, sexo, materia, experiencia, instrumento){
        super(nombre, edad, sexo, materia, experiencia)
        this.instrumento = instrumento;
    }
    // Sobre escribir Codigo
    enseñar (){
        console.log(this.nombre + " Esta enseñando el instrumento:" + 
        this.instrumento);
    }
}

const maestro2 = new ProfesorMusica ("Diego", 43, "Masculino"                                     , "Musica"
, 1, "Piano");

maestro2.enseñar();

