//Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.

function numero (n){
  if (n>0){
console.log(n);
numero (n-1); 
} 
 }
 let num = +prompt("ingresa un numero");
 numero (num)
 //10
