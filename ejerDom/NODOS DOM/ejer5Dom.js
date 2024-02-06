// Función para obtener la fecha y hora actual
function obtenerFechaHora() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses empiezan desde 0
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    // Formatear la fecha y hora
    const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
    const horaFormateada = `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  
    return `${fechaFormateada} ${horaFormateada}`;
  }
  
  // Función para agregar el comentario dinámico
  function agregarComentario() {
    const comentario = document.getElementById('inputComment').value; // Obtener el comentario del input
    const fechaHora = obtenerFechaHora();
    const comentarioDinamico = document.getElementById('commentText'); 
    comentarioDinamico.innerText = `${comentario} - ${fechaHora}`;
  }