//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra

let precio = +prompt("ingrese el precio");
let cantidad = +prompt("ingrese la cantidad");
let compra = precio * cantidad;
let descuento = compra * 0.15;
let PrecioFinal =compra - descuento;

console.log("el precio final por su compra es: ",PrecioFinal,);