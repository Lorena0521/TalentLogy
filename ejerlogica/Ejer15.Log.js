//Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo  imprima el número y un mensaje que diga “tiene raíz imaginaria”.

let número = +prompt("ingrese un numero");
let raíz_cuadrada = Math.sqrt(número);

if (Math.sqrt(número > 0)){
console.log("La raíz cuadrada de ",número,"es ",raíz_cuadrada);
}else{
console.log("el numero",número, "tiene raíz imaginaria");
}

//console.log(Math.sqrt(100));

