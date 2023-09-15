
//Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que pida al usuario un número de dólares y calcule el cambio en euros. 


const t_cambio = 1.33250; 
var dólar = +(prompt ("ingresa la cantidad de dólares"));
var euro = dólar/t_cambio;
console.log ("el cambio en euros es: ",euro);
