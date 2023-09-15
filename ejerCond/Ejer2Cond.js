//Determinar la naturaleza par o impar de un número.

let número = +prompt("ingresa un número");

if (número%2 == 0){
    console.log("El número ",número, "es par");
}else{
    console.log("El número ",número, "es impar");
}