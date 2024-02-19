// Función para alternar entre expandir y contraer una sección
function toggleSection(event) {
    const target = event.target;
    if (target.tagName === 'SPAN') {
      const parent = target.parentElement;
      parent.classList.toggle('expanded');
      target.textContent = parent.classList.contains('expanded') ? '-' : '+';
    }
  }
  
  // Agregar evento de clic a los elementos de alternar
  const toggleElements = document.querySelectorAll('#tree .toggle');
  toggleElements.forEach(element => {
    element.addEventListener('click', toggleSection);
  });
  