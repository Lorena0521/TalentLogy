//Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado 
//y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado.
// Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 15.
// Mostrarlos por pantalla usando otra función distinta.

let array =[];

let tamaño= +prompt("ingresa el tamaño del array");

let múltiplo = +prompt(" ingresa un numero");

for(let i =1; i<=tamaño; i++){
    array.push(i * múltiplo);
}
  
function mArray(array){
    console.log(`contenido del array: ${array.join(',')} `)
}

mArray(array);
