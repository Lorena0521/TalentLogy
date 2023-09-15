//Convertir Grados Celsius a Grados Fahrenheit. 

//(0 °C × 9/5) + 32 = 32 °F   formula
//ºF = ºC x 1.8 + 32. formula

const G_Celsius = +prompt("ingresa el número de grados Celsius, si no rellenas el número será 0")  
//(G_Fahrenheit - 32)* 5 / 9;
console.log(G_Celsius);
if (isNaN(G_Celsius))  {
    throw new Error('No es un número')
}
let G_Fahrenheit =(1.8 * G_Celsius + 32);

console.log ("la cantidad de grados Fahrenheit es : ",G_Fahrenheit,);



