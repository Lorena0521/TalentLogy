//Hacer un programa que pida por pantalla una temperatura en grados Celsius, 
//muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
//Celsius a Fahrenheit: F = (9*C)/5 + 32;
//Celsius a Kelvin: K = C + 273.15;


function convertidor(){
let Grados_Celsius = +prompt ("introducir la temperatura en grados Celsius");

 menu = "MENU"
 
    menu1 = "1. Grados Celsius a Fahrenheit"
    menu2 = "2. Grados Celsius a Kelvin"   

    if (menu1 == "1. Grados Celsius a Fahrenheit"){
    let Fahrenheit = (1.8 * Grados_Celsius + 32);
    console.log ("1. Grados Celsius a Fahrenheit",Fahrenheit);
    }
    if ( menu2 == "2. Grados Celsius a Kelvin"){
        let Kelvin = (Grados_Celsius + 273.15);
console.log("2. Grados Celsius a Kelvin ",Kelvin);
    }
}
convertidor();
