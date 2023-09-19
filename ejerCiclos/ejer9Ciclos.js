//Escribir un programa que imprima todos los números pares entre 
//dos números que se le pida al usuario.

let num1 = +prompt("Introduzca un número"); // 1
let num2 = +prompt("Introduzca otro número"); // 30

let limM = Math.max(num1, num2);
let limMe = Math.min(num1, num2);

for (let i = limMe; i <= limM; i++) {
      if (i % 2 == 0) {
    console.log("El número: ", i, "es par");
  } 
}