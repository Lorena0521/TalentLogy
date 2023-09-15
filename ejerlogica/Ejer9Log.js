//Calcular el nuevo salario de un obrero, si obtuvo un incremento del 25% sobre su salario anterior.

let salario_Anterior = +prompt("ingrese el salario anterior");
let incremento = 25/100;
let salario_nuevo = salario_Anterior + (salario_Anterior * 0.25);

console.log("El nuevo salario es: ",salario_nuevo,);
