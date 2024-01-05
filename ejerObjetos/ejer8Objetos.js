/*Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. 
Calcular después la suma, resta, multiplicación y división. 
Utilizar un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.*/

class Calculator{
 constructor(num1, num2){
    this.number1 = num1;
    this.number2 = num2;
 }
 
addition(){
   return this.number1 + this.number2; 
}
subtraction(){
   return this.number1 - this.number2;   
}
multiplication(){
   return this.number1 * this.number2;   
}

division(){
   if(this.number2 != 0){
      return this.number1 / this.number2;
   }else{
      console.log("no se puede dividir por 0")
   }
}

 }
const num1 = parseInt(prompt("ingresa un numero entero"));
const num2 = parseInt(prompt("ingresa otro numero entero"));

const Calculadora = new Calculator(num1, num2);

console.log("La suma es: ",Calculadora.addition()); 
console.log("La resta es:",Calculadora.subtraction());
console.log("La multiplicación es:",Calculadora. multiplication());
console.log("La division es",Calculadora.division());
