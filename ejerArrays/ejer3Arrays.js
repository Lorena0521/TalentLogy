//Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. 
//Si hay más de uno, indicar igualmente la posición. (FindIndex).

              
let idiomas =[1,2,3,4,5,6,7,8,8]
let n= + prompt("ingrese un número del 1 al 9") 
const  num=(numero) => numero ==n
idiomas.findIndex(num);


  let posiciones =[]
for (let numero = 0; numero< idiomas.length;numero++){
  if (idiomas[numero] === n) {
    posiciones.push(numero);
 }
 
};

console.log(`La posición del numero ${n} es: ${posiciones.join(', ')}`);


//FindIndex ==> Devuelve el índice del primer elemento que cumple con la condición especificada, o -1 si ningún elemento cumple con la condición.





