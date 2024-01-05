//Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.

let contador = 0;
for(let i = 0; i<5; i++){

let notas = +prompt(" ingrese una nota");

if (notas >=3.0) 
    contador++;
}
console.log("la cantidad de notas mayores a 3.0 son: ",contador)


//4.5
//3.5
//3.0
//2.5
//1.5
