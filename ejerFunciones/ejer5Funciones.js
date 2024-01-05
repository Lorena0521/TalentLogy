//Hacer un programa que pida por pantalla una temperatura en grados Celsius, 
//muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
//Celsius a Fahrenheit: F = (9*C)/5 + 32;
//Celsius a Kelvin: K = C + 273.15;


function convertidor(){
    menu = +prompt("Ingrese una opción:\n  /1.Grados Celsius a Fahrenheit\n  2. Grados Celsius a Kelvin\n   3.salir")
let Grados_Celsius = +prompt ("introducir la temperatura en grados Celsius");
 
 
   switch (menu) {
    case 1:  "1. Grados Celsius a Fahrenheit"
    let Fahrenheit = (1.8 * Grados_Celsius + 32);
    console.log ("1. Grados Celsius a Fahrenheit",Fahrenheit);
        break;
        case 2:"2. Grados Celsius a Kelvin"
        let Kelvin = (Grados_Celsius + 273.15);
console.log("2. Grados Celsius a Kelvin ",Kelvin);
    default: "salir"
    console.log("solo puedes ingresar opción 1 o opción 2")
   }
  
}
convertidor();
