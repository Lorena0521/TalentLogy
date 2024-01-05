//Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa 
//y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también 
//funcione cuando el día o el mes se introduzcan con un solo carácter.

let fecha = prompt("ingrese su fecha de nacimiento en formato dd/mm/aaaa");

let partesFechas = fecha.split("/"); //divido la fecha en dia, mes y año

let dia = parseInt(partesFechas[0]) //obtengo el dia el mes y el año
let mes = parseInt(partesFechas[1]);
let año = parseInt (partesFechas[2]);

console.log("dia",dia); //imprimo
console.log("mes",mes);
console.log("año",año);  
