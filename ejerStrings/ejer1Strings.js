//Escribir un programa que pregunte el nombre completo del usuario en la consola
// y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, 
//otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. 
//El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.

let nombre = prompt("ingrese su nombre completo");

//mostrar el nombre en minúscula
const minúscula = nombre.toLowerCase(); 
console.log(minúscula);

//mostrar el nombre en mayúscula
const mayúscula = nombre.toUpperCase();
console.log(mayúscula);

let sep_palabras= nombre.split(' ');   //divide un string en dos o mas 

let combinado = ' ';   //cadena vacía para guardar el nombre completo con la primera letra de cada palabra en mayúscula.

//charAt. podemos acceder a cualquier posición individual de un string.
for(let i = 0; i < sep_palabras.length; i++){

let palabra = sep_palabras[i].charAt(0).toUpperCase() + sep_palabras[i].slice(1).toLowerCase(); 
           //1 letra                                        //resto de la palabra

        combinado +=palabra + ' ';
}
combinado = combinado.trim(); // trim: elimina los espacios en blanco de ambos extremos
console.log('Nombre completo con la primera letra en mayúscula:', combinado);




//.slice : para que empiece desde el indice x hasta el final
