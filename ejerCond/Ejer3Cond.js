//Pedir dos números y decir si non múltiplos o no

let num1 = +prompt("ingrese un número");
let num2 = +prompt("ingrese un número");


if (num1 % num2== 0 || num2 % num1==0){ 
    console.log("si, son múltiplos");
}else{
    console.log("no son múltiplos");
}
//por completar
