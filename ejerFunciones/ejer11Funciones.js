//Pasar de número entero a número binario con Recursividad.

function convertToBinary(numero){
        if (numero == 0){
            return '0';
        }else if (numero == 1){
            return '1';

        }else if (numero > 0) {
            let residuo = numero %2; 
         let num = Math.floor(numero/2); 
         return convertToBinary(num)+residuo;

}else if (numero < 0) {
   
let N_negative = convertToBinary(-numero); // para los numero que son negativos
    return '-' + N_negative;
}
}
let numero = +prompt("ingresa un numero"); 

console.log(convertToBinary(numero)); 

//Math.floor => redondea un número hacia el entero más cercano.





