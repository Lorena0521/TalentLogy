//Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.

let oración = prompt("ingresa una oración");

let separador = oración.split(" ");

let longitud = separador.length;

console.log("cantidad de palabras que tiene la oración:",longitud);

