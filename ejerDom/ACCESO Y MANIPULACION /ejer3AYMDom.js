document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Formulario');
    const addButton = document.getElementById('boton');
    let Counter = 1;

    addButton.addEventListener('click', function () {
      Counter++; //aumenta el contador
      const newField = document.createElement('div');
      newField.classList.add('form-field');
      newField.innerHTML = `
              <label for="campo${Counter}">Campo ${Counter}:</label>
              <input type="text" id="campo${Counter}" name="campo${Counter}">
              <button type="button" class="remove-field">Eliminar</button>
          `;
      form.insertBefore(newField, addButton);
      
    });
    //eliminar el campo
    form.addEventListener('click', function(event) {
          if (event.target.classList.contains('remove-field')) {
              event.preventDefault();
              const fieldToRemove = event.target.parentElement;
              form.removeChild(fieldToRemove);
          }
      });
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const formData = new FormData(form);
          for (const [key, value] of formData.entries()) {
              console.log(`${key}: ${value}`);
          }
      });
  });