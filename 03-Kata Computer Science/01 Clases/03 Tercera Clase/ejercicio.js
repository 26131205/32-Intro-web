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
                console.log(nuevoContacto.nombre + " si existe");
                return;
            }
        }
        console.log("El contacto ", nuevoContacto.nombre, " no existe");
    }
}
let contacto1 = new Contacto("Juan", "López", 12976);
let contacto2 = new Contacto("Beto", "Pérez", 12989);
let contacto3 = new Contacto("Pedro", "Guillén", 12954);
let contacto4 = new Contacto("Rosa", "Guillén", 12678);
let listaContactosMama = new ListaContactos();


listaContactosMama.agregarContacto(contacto1);
listaContactosMama.agregarContacto(contacto2);
listaContactosMama.agregarContacto(contacto3);


listaContactosMama.buscarContacto(contacto4);
listaContactosMama.buscarContacto(contacto2);

