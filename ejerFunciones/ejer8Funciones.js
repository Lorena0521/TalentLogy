//Hacer un programa que muestre 3 números ordenados descendentemente, 
//utilizar un procedimiento para cada operación.

function numero(){

    let num1 = +prompt("ingresar un numero"); 
    let num2 = +prompt("ingresar otro numero"); 
    let num3 = +prompt("ingresar otro numero"); 
    
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let intermedio = (num1 + num2 + num3) - menor - mayor;
    
    console.log (mayor+"\n"+intermedio+"\n"+menor+"\n");
    
    
    }
    numero()
    