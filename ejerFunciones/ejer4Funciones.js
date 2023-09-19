//Hacer un programa que pida por pantalla un número del 1 al 10 y mediante 
//un procedimiento muestre por pantalla el número escrito en letras.

function número(){
let número = +prompt("introduzca un número del 1 al 10");

switch (número){
    case 1 : "uno"
    console.log("uno");
    break;
    case 2 : "dos"
    console.log("dos");
    break;
    case 3 : "tres"
    console.log("tres");
    break;
    case 4 : "cuatro"
    console.log("cuatro");
    break;
    case 5 : "cinco"
    console.log("cinco");
    break;
    case 6 : "seis"
    console.log("seis");
    break;
    case 7 : "siete"
    console.log("siete");
    break;
    case 8 : "ocho"
    console.log("ocho");
    break;
    case 9 : "nueve"
    console.log("nueve");
    break;
    case 10 : "Diez"
    console.log("Diez");
    break;
   default: 
    console.log("solo números del 1 al 10");
   
}
}
número();
