//Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension 
//donde el prefijo es el código del país +34, y la extensión tiene dos dígitos 
//(por ejemplo +34-913724710-56). Escribir un programa que pregunte por un número de teléfono
// con este formato y muestre por pantalla el número de teléfono sin el prefijo y la extensión.

let numero = prompt("ingresa un numero de teléfono ej: +34-xxxxxxxxx-xx");
let numero1 = numero.slice(4,-3);  //indicar que indices mostrar
numero1 = numero1.replace(/-/g, ''); // remplazar - con cadena vacía para eliminar los guiones g(cadena global)
console.log("el numero de teléfono sin prefijos y extensión es: ",numero1);




