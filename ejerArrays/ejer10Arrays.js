//Diseñar el algoritmo correspondiente a un programa, que:
//Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
//Carga la tabla con valores numéricos enteros.
//Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.

let matriz = [];


    for(let i = 0; i<5; i++){  
   matriz[i]=[]
   for (let j = 0; j < 5; j++) {
    matriz[i][j] = +prompt(`ingrese los datos para la matriz [${i}][${j}]`);
}
}
 console.log("matriz");
                    
  console.table(matriz); // se pasa a llamar directamente la matriz

console.log("suma de la fila de la matriz");
for (let i = 0; i<5; i++){ 
const sumaFila = matriz[i].reduce((acc, total)=> acc += total,0);
console.log(`la suma de la fila  ${i+1} es: ${sumaFila}`);
}

 console.log("suma de la columna de la matriz");
 for(let j = 0; j<5; j++){
 const sumaColumna = matriz.reduce((acc, fila)=> acc += fila[j],0);
 console.log(`la suma de la columna ${j+1} es: ${sumaColumna}`);
 }
 //join: une todos los elementos de una matriz
// my array.reduce: reduce sobre cada elemento del array y devuelve un único valor
 //("\t")tabulador: mueve el cursor o el texto unos espacios hacia la derecha, 