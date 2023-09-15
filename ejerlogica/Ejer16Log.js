
//Ingresar por teclado el nombre y el signo de cualquier persona e imprima, el nombre sólo si la persona es signo Aries, caso contrario imprima no es signo Aries.

let nombre = prompt("introducir el nombre");
let signo = prompt("ingrese el signo").toUpperCase();

if (signo == "ARIES"){
    console.log("su nombre es: ",nombre);
    console.log("su signo es: Aries");
}else{
    console.log("no es signo aries");
}