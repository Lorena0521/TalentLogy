//Crear Función que determine si un string numérico es capicua EJ: “12321”

const capicua =(numero)=>{

    return numero.toString().split("").reverse().join("")== numero;
}
let string = +prompt("ingrese un string numérico");

if(isNaN(string))
{
    alert("es dato ingresado no es un numero") 
}
else {console.log(capicua(string)); }
