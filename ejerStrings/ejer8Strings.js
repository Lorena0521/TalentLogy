//Escribir un programa que pregunte por consola por los productos de una cesta de la compra, 
//separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.

let productos = prompt("ingrese los productos de una cesta separados por una coma");

let SeProductos = productos.split(",");

console.log("lista de productos:");
let resultado = SeProductos.forEach(producto =>{
    console.log(producto);
})

//pasta, arroz, aceite, huevos, queso...