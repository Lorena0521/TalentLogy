//Desarrollar un programa que calcule el factorial de un número entero positivo. 
//El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.

//factorial = 1*2*3*4*5........=120 

let num = +prompt("introduzca un numero");
let i= 1;
factorial = 1;
while(i<=num){ // num=10
    factorial = factorial * i;
    i++;
}
console.log("el factorial del ",num, "es: ",factorial);