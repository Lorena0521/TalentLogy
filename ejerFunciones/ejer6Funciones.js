//Hacer un programa que muestre una tabla de multiplicar hasta el 
//20 de un número cualquiera por pantalla, el número se pedirá en el programa principal. Usar procedimiento.



function tabla(){
    const numero = +prompt("ingresa un numero");

  for (let i = 1; i<=20; i++){
 resultado = (numero * i);
    console.log(resultado) 
}
}

tabla();