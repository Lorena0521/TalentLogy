//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente

let calificación = +prompt("ingrese la calificación");

if (calificación >=7.5 && 10){
    console.log("EXCELENTE");
}else 
if (calificación >=5 && 7.5){
    console.log("BIEN");
}else
if (calificación >=2.5 && 5){
    console.log("SUFICIENTE");
}else
if (calificación >= 0 && 2.5){
    console.log("INSUFICIENTE")
}

