var inputNombre = document.getElementById("nombre");
var resultado = document.getElementById("result");

inputNombre.addEventListener("change", (event) => {
    resultado.textContent = ` Tu nombre es ${event.target.value}`;
})