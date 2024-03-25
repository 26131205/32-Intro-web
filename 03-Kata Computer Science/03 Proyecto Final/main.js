class Alumno{
    constructor(id,nombre, apellido,edad,materiaInscrita,calificaciones){
     this.id = id;   
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
     this.materiaInscrita = materiaInscrita;
     this.calificaciones = calificaciones;
    }
}
class nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
        }
    }

class ListaEnlazada {
    constructor(){
        this.cabeza = null;
    }

    insertar(valor){
        let nuevoNodo = new nodo(valor);
        if(this.cabeza == null){
            this.cabeza = nuevoNodo;
        }else{
            let nodoAux = this.cabeza;
        
        while(nodoAux.siguiente != null){
            nodoAux = nodoAux.siguiente;
        }
        nodoAux.siguiente = nuevoNodo;
        }
    }

    monstrarTodo(){
        let nodoAux = this.cabeza;
        while(nodoAux != null){
            console.log(nodoAux.valor);
            nodoAux = nodoAux.siguiente;
        }
    }

    buscar(idABuscar){
        let nodoAux = this.cabeza;
        while(nodoAux != null){

            if(nodoAux.valor.id == idABuscar){
            return nodoAux;
        }
        
        nodoAux = nodoAux.siguiente;
    }
    return null;
    }

         eliminar(idAlumno){

            if(this.cabeza.valor.id == idAlumno){
                this.cabeza = this.cabeza.siguiente;
            }

            let nodoAux = this.cabeza;

            while(nodoAux.siguiente != null){
                if(nodoAux.siguiente.valor.id == idAlumno){
                    nodoAux.siguiente = nodoAux.siguiente.siguiente;
                   return;
            }
            
            nodoAux = nodoAux.siguiente;
         }   
    }

}

let alumno1 = new Alumno(1,'Jaime','Bautista',33,'Matematicas',10);
let alumno2 = new Alumno(2,'Wendy','Salazar',27,'Historia',8);
let alumno3 = new Alumno(3,'Melani','Resendiz',14,'Lectura',8);
let alumno4 = new Alumno(4,'Matias','Huergo',12,'Juega y Aprende',10);

let listaAlumnos = new ListaEnlazada();
listaAlumnos.insertar(alumno1);
listaAlumnos.insertar(alumno2);
listaAlumnos.insertar(alumno3);
listaAlumnos.insertar(alumno4);

listaAlumnos.monstrarTodo();

let idABuscar = 4;
let valorEncontrado = listaAlumnos.buscar(idABuscar);
if (valorEncontrado != null){
    console.log(`El nombre del alumno con el id: ${idABuscar} Nombre Completo: ${valorEncontrado.valor.nombre} ${valorEncontrado.valor.apellido} tiene una edad de: ${valorEncontrado.valor.edad} y se Inscribio en la materia: ${valorEncontrado.valor.materiaInscrita} Obteniendo una Calificacion de: ${valorEncontrado.valor.calificaciones}` );
} else {
    console.log(`NO existe un alumno con el id ${idABuscar}`);
}

idABuscar =1;
valorEncontrado = listaAlumnos.buscar(idABuscar);
if (valorEncontrado != null){
    console.log(`El nombre del alumno con el id: ${idABuscar} Nombre Completo: ${valorEncontrado.valor.nombre} ${valorEncontrado.valor.apellido} tiene una edad de: ${valorEncontrado.valor.edad} y se Inscribio en la materia: ${valorEncontrado.valor.materiaInscrita} Obteniendo una Calificacion de: ${valorEncontrado.valor.calificaciones}` );
} else {
    console.log(`NO existe un alumno con el id ${idABuscar}`);
}

idABuscar =20;
valorEncontrado = listaAlumnos.buscar(idABuscar);
if (valorEncontrado != null){
    console.log(`El nombre del alumno con el id: ${idABuscar} Nombre Completo: ${valorEncontrado.valor.nombre} ${valorEncontrado.valor.apellido} tiene una edad de: ${valorEncontrado.valor.edad} y se Inscribio en la materia: ${valorEncontrado.valor.materiaInscrita} Obteniendo una Calificacion de: ${valorEncontrado.valor.calificaciones}` );
} else {
    console.log(`NO existe un alumno con el id ${idABuscar}`);
}


console.log(`Lista Personas`)
listaAlumnos.monstrarTodo();
listaAlumnos.eliminar(3);
console.log(`Lista Personas`)
listaAlumnos.monstrarTodo();
listaAlumnos.eliminar(1);
console.log(`Lista Personas`)
listaAlumnos.monstrarTodo();
listaAlumnos.eliminar(32);
console.log(`Lista Personas`)
listaAlumnos.monstrarTodo();




