//Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  menor de 1.000Kwxh la tarifa es 1.2,
//entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.
 
let tarifa1= 1.2;
let tarifa2 = 1.0;
let tarifa3 = 0.9;
let gasto = +prompt("ingrese el total del gasto de la luz" );

if (gasto < 1000){
    console.log("La tarifa de la luz es:",tarifa1);
    }
    if (gasto > 1000 & gasto < 1850){
        console.log("La tarifa de la luz es: ",tarifa2.toFixed(1)); // para que salga 1.0; agrego toFixed(1).
    }
    if(gasto > 1850){
        console.log("La tarifa de la luz es:  ",tarifa3);
    }

