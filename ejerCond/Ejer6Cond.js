//En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. 
//Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. 

let película1 = +prompt("valor de la primera película");
let película2 = +prompt("valor de segunda película");
let película3 = +prompt("valor de la tercera película");
let precioApagar
                              //silogismo p <- q
                                        //q <- r
                                        //p <- r

if (isNaN(película1) || isNaN(película2) || isNaN(película3)) {
 console.log("Por favor, ingrese valores numéricos válidos.");
}


if (película1 > película2 && película2 > película3){ 
precioApagar =película2+película3;
}else
if (película2 > película1 && película2 > película3){
    precioApagar =película1+película3;
}else
    precioApagar =película1+película2;


console.log("la cantidad a pagar es: ",precioApagar);
