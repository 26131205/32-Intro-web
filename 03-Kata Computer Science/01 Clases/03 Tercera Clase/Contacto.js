class Contacto{
      constructor(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
      }
}

class ListaContactos{
    constructor(){
        this.contactos = [];
    }

    agregarContacto(nuevoContacto){
            this.contactos.push(nuevoContacto);
    }

    buscarContacto(nuevoContacto){
        for(let i = 0; i < this.contactos.length; i++){
            if(nuevoContacto.nombre === this.contactos[i].nombre){
                console.log(nuevoContacto.nombre + "Si existe");
                return;
            }
        }
        console.log("EL contacto", nuevoContacto.nombre, "No existe");
    }
}

let contacto1 = new  Contacto ("Jaime","Bautista",5538902784);
let contacto2 = new  Contacto ("Wendy","Salazar",5538902458);

let listaContacto = new ListaContactos ();

listaContacto.agregarContacto(contacto1);

listaContacto.buscarContacto(contacto2);

