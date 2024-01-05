//Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. 
//Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor se jubilara si tiene más de 54 años.

let edad = +prompt("ingrese la edad");
let genero = prompt("ingrese su genero");

if (genero.toUpperCase("MASCULINO") && edad >= 60){
console.log("ya puede jubilarse");
}else 
if (genero.toUpperCase("FEMENINO") && edad > 54){
    console.log("ya puede jubilarse");
    }else{
    console.log("todavía no puede jubilarse");
}

