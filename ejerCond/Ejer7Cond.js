//Escriba un programa que reciba cuatro calificaciones de un estudiante y devuelva el promedio y la máxima y la mínima calificación.

let nota1 = +prompt("ingrese la primera calificación");
let nota2 = +prompt("ingrese la segunda calificación");
let nota3 = +prompt("ingrese la tercera calificación");
let nota4 = +prompt("ingrese la cuarta calificación");

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){ 
    throw new Error("calificación incorrecta");
}
let promedio = (nota1 + nota2 + nota3 + nota4)/4;
let max = Math.max(nota1, nota2, nota3, nota4);
let min =Math. min(nota1, nota2, nota3, nota4);

    console.log("La minima es: ",min);
    console.log("La maxima es: ", max);
    console.log("el promedio es: ",promedio);
  




