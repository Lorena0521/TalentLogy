//En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. 
//Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. 

let película1 = +prompt("valor de la primera película");
let película2 = +prompt("valor de segunda película");
let película3 = +prompt("valor de la tercera película");
let promo
                              //silogismo p <- q
                                        //q <- r
                                        //p <- r

if (película1 > película2 && película2 > película3){ 
promo =película2+película3;
console.log(promo);
}else
if (película2 > película1 && película2 > película3){
    promo =película1+película3;
    console.log(promo);
}else
if (película3 > película1 && película3 > película2){
    promo =película1+película2;
    console.log(promo);
}
