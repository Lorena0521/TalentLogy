//Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. 
//Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …

let N_elementos = + prompt ("ingrese la cantidad de elementos");
let a = 0;
let b = 1;
let c = 1;

while (c <= N_elementos){
    if (c % 2 ==1){
    console.log( a);
    a = a +b;
}else{
 console.log( b);
 b = b + a;
}
c = c + 1;
}



