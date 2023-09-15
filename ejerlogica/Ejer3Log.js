//Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos. 

// c^² = a^2 + b^2

let cateto1 = +prompt("ingrese el número del cateto1");
let cateto2 = +prompt("ingrese el número del cateto2");
let hipotenusa = Math.sqrt(cateto1**2) + (cateto2**2);   

// math.pow  = math.pow(cateto1,2) o (cateto**2) = elevar un numero
//Math.sqrt  = sacar raíz

console.log("El valor de la hipotenusa es: ",hipotenusa);
