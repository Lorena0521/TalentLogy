//Escribir un programa que dado un número entero positivo n, 
//calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n

let N = +prompt( "ingresa el valor de N");
let i = 1;
let suma = 0;


if (N>0){
    while (i<=N){
    suma += 1/i;
    
    i++;
}
console.log("El resultado de la suma es: ",suma);
} else {
console.log("N debe ser mayor a 0")
}

//debugger;
