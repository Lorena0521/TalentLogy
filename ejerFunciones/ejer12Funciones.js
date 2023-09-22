//Invertir un número entero con Recursividad.

function invertir(numero){
    let resultado = 0;
     while (numero > 0){
        let residuo = numero%10; //3,2 1
        numero = Math.floor (numero/10); //12,1, 0
        resultado = (resultado*10)+residuo; //0*10+3 =3   3*10+2 = 32*10+1 =321
     }

return resultado;
    }

  let numero= +prompt ("ingrese un numero")

 console.log(invertir(numero));

 // 123/10 =12  3
 //12/10 =1    2
 // 1/10 = 0    1