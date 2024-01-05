//Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. 
//El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
//Todos los alumnos mayores de edad.
//Encontrar la edad mayor y obtener los alumnos que posean dicha edad.

let nombres = [];
let edades = []


while (true) {    
let nombre = prompt("ingresa el nombre del estudiante");  
if (nombre ==="*"){ 
    break;
}else{
edad= +prompt("ingrese la edad del estudiante");

if (!isNaN(edad)) {  
    nombres.push(nombre);   //push: añade uno o más elementos al final de un array y devuelve la nueva longitud
    edades.push(edad);
  } else {
    alert("Edad no válida. Por favor, ingresa un número.");
  }
}
}
let mayoresEdad = edades.filter((edad) => edad >=18);   // crea un nuevo array con todos los elementos que cumplen la condición


let mayor = Math.max(...mayoresEdad);  // sacar el mayor de todos 
for (let i = 0; i < mayoresEdad.length; i++) { 
 
  console.log(`${nombres[i]} tiene ${edades[i]} años`);
    }

console.log(`La edad mayor es ${mayor} años.`);


