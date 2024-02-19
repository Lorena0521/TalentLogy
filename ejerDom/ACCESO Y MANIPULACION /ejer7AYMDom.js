document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const comments = document.getElementById('comments');

    // Función para enviar un comentario al servidor
    const sendComment = (comment) => {
    };

    // Función para agregar un nuevo comentario al DOM
    const addCommentToDOM = (comment) => {
        const commentElement = document.createElement('div');
        commentElement.textContent = comment;
        comments.appendChild(commentElement);
    };

    // Evento cuando se envía el formulario de comentario
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newComment = commentInput.value.trim();
        if (newComment !== '') {
            sendComment(newComment);
            addCommentToDOM(newComment);
            commentInput.value = ''; // Limpiar el campo de comentario después de enviarlo
        }
    });

});
