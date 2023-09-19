//Hacer un programa que muestre 3 números ordenados ascendentemente, utilizando un procedimiento para cada operación. 

function numero(){

let num1 = +prompt("ingresar un numero"); 
let num2 = +prompt("ingresar el segundo numero"); 
let num3 = +prompt("ingresar el tercer numero"); 

let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);
let intermedio = (num1 + num2 + num3) - menor - mayor;

console.log(menor);
console.log (intermedio);
console.log (mayor);

}
numero()
