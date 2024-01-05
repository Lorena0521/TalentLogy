//Realizar un algoritmo para determinar cuánto ahorrará una persona en 
//un año, si al final de cada mes deposita cantidades variables de dinero;
//además, se quiere saber cuánto lleva ahorrado cada mes.


let ahorro_anual =0


 for (let i = 1; i <=12; i++){
let dinero = +prompt(`cantidad de ${i} mes a ahorrar`); 
    ahorro_anual += dinero;
    console.log(`el ahorro del ${i} mes es:` ,dinero);
}
let ahorro_mensual = ahorro_anual/12;

 console.log(`el ahorro anual es:` ,ahorro_anual);

 