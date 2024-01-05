//Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno. 
//Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´

class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    
    }
    NotaFinal(nota) {
        if (nota >= 3) {  // validar 
            console.log(" el alumno "+ this.nombre+ " fue aprobado con la nota: ", nota)
        } else {
            console.log(" el alumno "+ this.nombre+ " fue desaprobado con la nota: ", nota)
        }
    }

    getNota() {
        return this.nota;
    }
    setNota(nota) {
        this.nota = nota;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}

const alumno1 = new Alumno("marcos"); 

alumno1.NotaFinal(2.5); //


const alumno2 = new Alumno();
alumno2.setNombre()
alumno2.NotaFinal ()