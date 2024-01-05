//Escribir un programa que pregunte el correo electrónico del usuario en la consola 
//y muestre por pantalla otro correo electrónico con el mismo nombre 
//(la parte delantera de la arroba @) pero con dominio ceu.es.

let correo = prompt("ingrese su correo electrónico");

let otroCorreo = correo.replace(/gmail.com/g, "ceu.es.");

console.log(otroCorreo);


