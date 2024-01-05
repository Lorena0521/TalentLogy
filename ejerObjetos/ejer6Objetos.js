//Desarrollar un programa que cargue los datos de un triángulo. 
//Implementar una clase con los métodos para inicializar los atributos, 
//imprimir el valor del lado con un tamaño mayor y  el tipo de triángulo que es (equilátero, isósceles o escaleno).

class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    tipoDeTriángulo() { // validación del tipo de triangulo.
        if (this.ladoA == this.ladoB && this.ladoC == this.ladoA) {
            console.log("triangulo equilátero");
            console.log(" el valor de los lados son iguales")
        } else if (this.ladoA != this.ladoC && this.ladoA != this.ladoB && this.ladoC != this.ladoB) {
            console.log("triangulo escaleno");
        } else console.log("triangulo isósceles");
    }

    
    tamañoMayor() { // validación de numero mayor.
        if (this.ladoA >= this.ladoB && this.ladoB >= this.ladoC|| this.ladoA >= this.ladoB && this.ladoA >= this.ladoC) {
            console.log("el valor del lado con un tamaño mayor es: ", this.ladoA);
        } else if (this.ladoB >= this.ladoA && this.ladoA >= this.ladoC || this.ladoB >= this.ladoA && this.ladoB >= this.ladoC) {
            console.log("el valor del lado con un tamaño mayor es: ", this.ladoB);
        } else if (this.ladoC >= this.ladoA && this.ladoC >= this.ladoB) {
            console.log("el valor del lado con un tamaño mayor es", this.ladoC);
        }
    }

}
const triangulo = new Triangulo(5,5,5);
triangulo.tipoDeTriángulo();
triangulo.tamañoMayor();

