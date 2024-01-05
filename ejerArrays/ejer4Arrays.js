//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados
//y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.

let Notas = [8,5,6,19,12,7,20,15,16]   
let sumaAprobados =0;
let sumaDesaprobados =0;
let totalNotas = Notas.length
let PromedioAprobados = 0;
let PromedioDesaprobados = 0;

const aprobados =  Notas.filter((nota)=> nota>=10);  //filtrar la nota siempre que sea > 10
console.log("la cantidad de aprobados son: ",aprobados.length);

const desaprobados = Notas.filter((nota)=> nota<10); //filtrar la nota siempre que sea < 10
console.log("la cantidad de desaprobados son: ",desaprobados.length);
 
sumaAprobados = aprobados.reduce((total, aprobado)=> aprobado + total,0);  //reduce cada elemento y me devuelve un único valor ej: 19+12=31+20=51....
sumaDesaprobados = desaprobados.reduce((Nota, total)=> total + Nota,0);   

// sacar el promedio de aprobados y desaprobados

if (aprobados.length >0){
PromedioAprobados = sumaAprobados/aprobados.length; 

}

if  (desaprobados.length > 0){
    PromedioDesaprobados = sumaDesaprobados/desaprobados.length;
    
}

console.log("el promedio de los aprobados es: ",PromedioAprobados);
console.log("el promedio de los desaprobados es: ",PromedioDesaprobados); 
                                  


