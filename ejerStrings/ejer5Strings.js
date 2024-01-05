//Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal,
//y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.

let frase = prompt("introduzca una frase y una vocal");

let vocal =frase.charAt(frase.length-1);   // obtener la ultima letra

 let mayuscula = frase.slice(0,-1) + vocal.toUpperCase();  //convertirla a mayuscula

console.log("la frase y la vocal en mayúscula: ",mayuscula); 

 