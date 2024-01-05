//Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
//El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
//Crea sus métodos get, set y toString.
//Tendrá dos métodos especiales:
// ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
//retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa,
// la cantidad de la cuenta pasa a ser 0.

class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.cantidad = 0; //600
  }
  ingreso(cantidad) {
    if (cantidad > 0) {
      this.cantidad += cantidad;
      console.log("ingreso exitoso. cantidad actual: ", this.cantidad);
    } else {
      console.log("la cantidad ingresada debe ser mayor a 0");
    }
  }

  retiro(cantidad) {
    if (cantidad > 0 && this.cantidad >= cantidad) { // verificación de el saldo sea mayor o igual a la cantidad a retirar 
      this.cantidad -= cantidad;    //si es asi hacer la operación
      console.log("reintegro exitoso. cantidad reintegrada: ", cantidad);
    } else {
      console.log("su saldo es insuficiente o ingresaste un valor invalido");
    }
  }

  getCantidad() {
    return this.cantidad; //obtener la cantidad
  }
  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
  getTitular() {
    return this.titular;  
  }
  setTitular(titular) {
    this.titular = titular;
  }
}
const MiCuenta = new Cuenta("Maria");
MiCuenta.ingreso(500);
MiCuenta.retiro(200);

console.log("el titular " + MiCuenta.getTitular() + " tiene en su cuenta: " + MiCuenta.getCantidad().toFixed(2));


const Cuenta2 = new Cuenta();
Cuenta2.setTitular("Lorena");  
Cuenta2.ingreso(700);
Cuenta2.retiro(100);


console.log("el titular " + Cuenta2.getTitular() + " tiene en su cuenta: " + Cuenta2.getCantidad().toFixed(2));
