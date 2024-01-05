//Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida.

let fraseOriginal = prompt("introduzca una frase");

function invertir(frase){
//devolver un nuevo arreglo

    let nuevaCadena = frase.split(""); 

//invertir el nuevo arreglo creado
    let invertirArreglo = nuevaCadena.reverse(); 

//unir todos los elementos del arreglo en una cadena 
    let unirArreglo = invertirArreglo.join("");

    return unirArreglo;
}
fraseInvertida = invertir(fraseOriginal); // llamar la función 
console.log("la frase invertida es: ",fraseInvertida);

//reverse:invierte un arreglo; el primer carácter y se convierte en el último, el segundo en el penúltimo, y así sucesivamente.
