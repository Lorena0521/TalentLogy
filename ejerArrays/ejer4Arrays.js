//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados
//y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.

let Notas = [8,5,6,19,12,7,20,15,16]   //(8,5,6,19,12,7,20,15,16)/9
let sumaAprobados =0;
let sumaDesaprobados =0;
let totalNotas = Notas.length
let PromedioAprobados = 0;
let PromedioDesaprobados = 0;

const aprobados =  Notas.filter((totalNotas)=> totalNotas>=10);
console.log("la cantidad de aprobados son: ",aprobados.length);

const desaprobados =  Notas.filter((totalNotas)=> totalNotas<10);
console.log("la cantidad de desaprobados son: ",desaprobados.length);
 
const suma = Notas.reduce((totalNotas, index)=> index +=totalNotas); //5
if (totalNotas >=10){
PromedioAprobados = suma/totalNotas;

}else
if  (totalNotas <10){
    PromedioDesaprobados = suma/totalNotas;

}

console.log("el promedio de los aprobados es: ",PromedioAprobados);
console.log("el promedio de los desaprobados es: ",PromedioDesaprobados); 
                                  


