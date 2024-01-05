//Realizar un programa que tenga una clase Persona con las siguientes características. 
//La clase tendrá como atributos el nombre y la edad de una persona. 
//Implementar los métodos necesarios para inicializar los atributos,
// mostrar los datos e indicar si la persona es mayor de edad o no.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    PersonaMayor(edad) {
        if (edad >= 18) {
            this.edad += edad;
            console.log("" + this.nombre + " tiene " + edad + " años. y es mayor de edad");
        } else {
            console.log("" + this.nombre + " tiene " + edad + " años. y no es mayor de edad");
        }
    }

    getPersona() {
        return this.nombre;
    }
    setPersona(nombre) {
        this.nombre = nombre;
    }

}

const persona1 = new Persona("james");
persona1.PersonaMayor(20);

const persona2 = new Persona();
persona2.setPersona()
persona2.PersonaMayor();