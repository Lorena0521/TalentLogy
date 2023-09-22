//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

let numero = [9,8,7,6,50,4,3,2,10]

function MaxMin(array){
let mayor = numero [0];
 let menor= numero[0];

for(let i=0; i<numero.length; i++){
if (mayor < array[i]){
    mayor = array[i]
}
if(menor > array[i]){
    menor = array[i]
}
}
console.log("el numero mayor es:",mayor, "el numero menor es:",menor)
}

MaxMin(numero);
 

let suma = numero.reduce((numero, index) => index +=numero,0); 

let media= suma/numero.length;


console.log("la media es: ",media);
