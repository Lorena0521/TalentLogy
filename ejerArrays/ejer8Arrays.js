//Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, 
//N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.


let arrayNumeros = []
const N = 9;

 if (N %2 == 1){  // sacar impares

for (let i = 0; i < N; i++) {
    // generar aleatoriamente los números enteros

    let numeroRandomAux = Math.random() * 10;  //Math.random: devuelve un número de coma flotante pseudo-aleatorio
    let numeroRandom = Math.round(numeroRandomAux);  //Math.round : redondea un numero decimal a entero
    arrayNumeros[i] = numeroRandom;
}
console.log(arrayNumeros);
 }

 let centro =(arrayNumeros.length/2); // crear el centro del array
 console.log(" El valor que ocupa el centro del array es:",
  arrayNumeros[Math.floor(centro)] // math.floor: devuelve el valor entero redondeado más bajo de la variable.
 );

//Math.ceil(): devuelve el entero mayor o igual más próximo a un número dado.