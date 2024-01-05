
//Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. 
//La clase contendrá un constructor por defecto y los métodos getters y setters.

class cuenta {
  constructor(nombre) {

    this.numCuenta = 215 + Math.floor("ingreso") + 264;  //defino los atributos o características de la cuenta
    this.saldo = 0;
    this.nombre = nombre;
  }

  ingreso(cantidad) {
    if (cantidad > 0) {  //método de ingreso donde si cantidad es mayor a cero 
      this.saldo += cantidad; //sumar esa cantidad a la variable this.saldo
      console.log("ingreso exitoso. saldo actual: ", this.saldo);
    } else {
      console.log("la cantidad ingresada debe ser mayor a 0");
    }
  }
  reintegro(cantidad) {
    if (this.saldo >= cantidad) { // verificación de el saldo sea mayor o igual a la cantidad a retirar 
      this.saldo -= cantidad;    //si es asi hacer la operación
      console.log("reintegro exitoso. cantidad reintegrada: ", cantidad);
    } else {
      console.log("su saldo es insuficiente");
    }
  }

  transferencia(cantidad, otraCuenta) {
    if (this.saldo >= cantidad) { //hacer la verificación del saldo
      this.saldo -= cantidad; // si cumple la condición sale el saldo a transferir
      otraCuenta += cantidad; // pasar la cantidad a la cuenta que se va a transferir

      console.log("transferencia exitosa. cantidad transferida: ", cantidad);
    } else {
      console.log("su saldo es insuficiente");
    }

  }

  getSaldo() {
    return this.saldo;  // acceder a el  saldo actual de la cuenta 
  }

  setSaldo(saldo) {
    this.saldo = saldo; // Establecer el saldo de la cuenta con el valor proporcionado
  }
}
const nombre = new cuenta("mi nombre"); //crear una cuenta

nombre.ingreso(900);
nombre.reintegro(200);

const otraCuenta = new cuenta("otro nombre"); // crear otra cuenta para transferir
nombre.transferencia(200, otraCuenta);


