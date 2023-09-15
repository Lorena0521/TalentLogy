//Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, y cuál es el menor.
//(Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)

let persona1 = +prompt("ingrese el primer número");
let persona2 = +prompt("ingrese el segundo número");
let persona3 = +prompt("ingrese el tercer número");

if (persona1 > persona2 && persona1 > persona3 && persona2 > persona3){ //p1>p2
console.log("mayor: ",persona1);
console.log("segundo mayor: ",persona2);
console.log("menor: ",persona3); 
}else 
if (persona1 > persona2 && persona1 > persona3 && persona2 < persona3){ //p1<p2
console.log("mayor: ",persona1);
console.log("segundo mayor: ",persona3);
console.log("menor: ",persona2);
}else
if (persona2 > persona1 && persona2 > persona3 && persona1 > persona3){ //p2>
  console.log("mayor: ",persona2);
console.log("segundo mayor: ",persona1);
console.log("menor: ",persona3); 
}else 
if (persona2 > persona1 && persona2 > persona3 && persona1 < persona3){ //p2<
console.log("mayor: ",persona2); 
console.log("segundo mayor: ",persona3);
console.log("menor: ",persona1);
}else
if (persona3 > persona1 && persona3 > persona2 && persona1 > persona2){ //p3>
console.log("mayor: ",persona3);
console.log("segundo mayor: ",persona1);
console.log("menor: ",persona2); 
}else
if (persona3 > persona1 && persona3 > persona2 && persona1 < persona2){ //p3<
console.log("mayor: ",persona3);
console.log("segundo mayor: ",persona2);
console.log("menor: ",persona1); 
}




