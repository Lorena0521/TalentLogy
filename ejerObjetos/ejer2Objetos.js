//Crea una clase Contador con los métodos para incrementar y decrementar el contador.
//La clase contendrá un constructor por defecto y los métodos getters y setters.


class Contador{
constructor( valor = 0){  //inicializar valor inicial
    this.valor = valor;
}
incremento(){
this.valor ++; //Incrementar el contador en 1 unidad.

}

decremento(){
    this.valor --; //Decrementar el contador en 1 unidad.
    }

getValor(){  // obtener el valor
    return this.valor;
}
setValor(otroValor){ 
    this.valor =otroValor;  // establecer el valor del contador
}
}

const miContador = new Contador();

miContador.incremento();  //llamar al método incremento
console.log("el incremento es:",miContador.getValor()); //obtener el valor actual del contador y se mostrarlo

miContador.decremento(); // //llamar al método decremento
console.log("el decremento es:",miContador.getValor());
