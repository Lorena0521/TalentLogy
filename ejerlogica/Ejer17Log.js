//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, 
//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.

 let nombre = prompt("ingrese un nombre");
 let edad = +prompt("ingrese la edad");
 let sexo = prompt("ingrese el sexo")

if  (edad >=18 && sexo.toUpperCase() == "MASCULINO"){  //to.UpperCase = hace referencia a mayúscula
    console.log("El nombre es: "+nombre);
 console.log("La edad es: ",edad);
  console.log("El sexo es: ",sexo);
}else{
    console.log("no cumples las condiciones")
}


