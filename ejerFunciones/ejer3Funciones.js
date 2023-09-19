//Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir, 
//el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.



function operaciones(){

const menu  = +prompt("Ingrese una opción:  /1. Sumar /   2. Restar /   3. Multiplicar /   4. Dividir /   5. Salir");

    let num1 = +prompt("Ingrese el primer número:");
    let num2 = +prompt("Ingrese el segundo número:");

switch (menu) {

    case 1: "1. Sumar"
    let suma = (num1 + num2);
    console.log("la suma es:",suma);
    break;

    case 2: "2. Restar"
    let resta = (num1 - num2);
    console.log("la resta es: ",resta);
    break;

    case 3: "3. Multiplicar"
    let multiplicación = (num1 * num2);
    console.log("la multiplicación es",multiplicación);
    break;

    case 4: "4. Dividir"
    let Division = (num1 / num2);
    console.log("la division es: ",Division);
    break;

    default: console.log("Salir"); 
    } 
}
 operaciones()

