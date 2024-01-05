
const preguntas = document.querySelectorAll('.pregunta_encabezado');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        const respuesta = pregunta.nextElementSibling; // Selecciona la respuesta siguiente a la pregunta
        respuesta.classList.toggle('activo'); // Toggle la clase 'activo' para mostrar u ocultar la respuesta
    });
});
