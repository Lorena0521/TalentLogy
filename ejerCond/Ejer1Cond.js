//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

//En caso afirmativo el usuario responderá si
//En caso contrario responderá no.
//Si el usuario responde si se escribirá el documento «irás a la cárcel».

let usuario = prompt("ingrese su nombre");
let respuesta =  prompt("¿te consideras culpable de lo que se te acusa?");



if (respuesta.toUpperCase() ==="NO"){
  console.log("No iras a la cárcel");
  } else
   if (respuesta.toUpperCase()=== "SI") {
    console.log("Iras a la cárcel"); 
} else {
    console.log("respuesta invalida, ingresa: SI o NO");
  }
  