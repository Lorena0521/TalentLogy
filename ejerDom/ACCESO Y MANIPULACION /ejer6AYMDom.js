//obtener el valor actual del campo de texto y agregar el parametro
function add(value) {
    document.getElementById("display").value += value;

}
//borrar contenido que se muestra en el campo de texto
function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    var expresion = document.getElementById("display").value;
    var resultado = eval(expresion); // evaluar la expresion matematicas
    document.getElementById('display').value = resultado;
}