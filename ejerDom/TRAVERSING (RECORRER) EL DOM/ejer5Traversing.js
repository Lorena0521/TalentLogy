const formulario = document.getElementById("formulario");
const inputs = document.getElementById("#formulario input");

const validacion = {
    nombre1: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre2: /^[a-zA-ZÁ-y\s]{4,40}$/,
    password: /^.{4,1}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}s/
}

formulario.addEventListener('submit', (e) =>{
e.preventDefault();
})

inputs.forEach((input) => {
    input.addEventListener('keyup',)
});
