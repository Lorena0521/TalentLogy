//Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. 
//Además deberá mostrar un menú con las siguientes opciones.
//Añadir contacto   
//Lista de contactos  
//Buscar contacto   
//Editar contacto
//Cerrar agenda

class Contact {
    constructor(nombre, telefono, email) { //atributos
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}


class Diary {
    constructor() {
        this.contactos = []; //persona1
    }

    addContact(nuevoContacto) {  //añadir el contacto
        this.contactos.push(nuevoContacto);  // 
        console.log("contacto añadido correctamente\n", this.contactos);
    }

    contactList() {
        return this.contactos;  //lista de contactos
    }

    searchContact(nombre) {
        let contactoEncontrado = this.contactos.find((item) => item.nombre === nombre);
        if (!contactoEncontrado) return "Contacto no encontrado";
        return contactoEncontrado;

    }

    editContact(nombre, nuevoTelefono, nuevoEmail) {
        let contactoEncontrado = this.contactos.find(contactos => contactos.nombre === nombre);
        if (contactoEncontrado) {
            contactoEncontrado.telefono = nuevoTelefono;
            contactoEncontrado.email = nuevoEmail;
            return ("contacto editado correctamente", nombre);
        } else
            return ("No se encontró ningún contacto con el nombre");
    }


}


const contactos = new Diary()

let option = prompt("ingresa una opción:\n 1. Añadir contacto\n 2. Lista de contactos\n 3. Buscar contacto\n 4. Editar contacto\n 5. Cerrar agenda\n");

switch (option) {
    case "1":
        let nombre = prompt("ingresa el nombre");
        let telefono = prompt("ingresa el teléfono");
        let email = prompt("ingresa el email");
        let nuevoContacto = new Contact(nombre, telefono, email)
        contactos.addContact(nuevoContacto);
        break;

    case "2":
        console.log("Lista de contactos")
        console.log(contactos.contactList());
        break

    case "3":
        let ContactoAEncontrar = prompt("ingrese el nombre a buscar");
        let contactoEncontrado = contactos.searchContact(ContactoAEncontrar);
        console.log(contactoEncontrado);
        break;

    case "4":
        let nombreEditar = prompt("ingresa el nombre a editar");
        let nuevoTelefono = prompt("ingresa el nuevo teléfono");
        let nuevoEmail = prompt("ingresa el nuevo email");
        let mensaje = contactos.editContact(nombreEditar, nuevoTelefono, nuevoEmail);
        console.log(mensaje)
        break;
    case "5":
        console.log("Cerrar agenda");
        break;
    default:
        console.log("opción invalida")
        break;


}


