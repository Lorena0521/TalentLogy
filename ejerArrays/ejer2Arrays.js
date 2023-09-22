//Crea un array o arreglo unidimensional con un tamaño de 10, 
//inserta los valores numéricos que desees de la manera que quieras 
//y muestra por pantalla la media de valores del array.

let numero =[1,5,6,2,4,8,9,3,7,8]


let suma = numero.reduce((prev, item)=>item +=prev);//
numero.length// datos o longitud
/* console.log(media) */

let media = suma/numero.length;
 
console.log(media); 
