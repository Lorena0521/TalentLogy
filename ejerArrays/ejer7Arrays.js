//Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos (Utilizar métodos de array). 

let numero = [5,6,4,2,3,1,8,9,7];

let multiplicación = numero.map((numero)=> numero * 2);   

console.log(multiplicación);

//map: método le permite iterar sobre una matriz y modificar sus elementos utilizando una función de devolución de llamada. 