//Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. 
//Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%.


let tipo_moto = prompt("ingrese el tipo de moto");
let precio = +prompt("ingrese el precio del producto");
let tipoValidado = tipo_moto.toLowerCase()


switch (tipo_moto) {
    case "honda":
        descuento = precio *0.05; //
    break;

    case "yamaha":
    descuento =(precio * (8/100));
    break;

    case "suzuki":
    descuento = precio *0.10;
    break;

    default:
    descuento = precio *0.02;
    }
    
console.log("El precio a pagar es:",precio-descuento);
console.log("El descuento aplicado es:",descuento);









