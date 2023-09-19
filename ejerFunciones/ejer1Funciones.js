//Determinar si un número es par o no.

let número = +prompt("ingrese un número"); 

function esPar(número){
if (número % 2 === 0){
console.log("El número",número, " es par");
}else{
console.log("El número",número, " no es par");
}
}
 
esPar(número);

