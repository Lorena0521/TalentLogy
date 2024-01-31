document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      var targetId = this.getAttribute('href').substring(1); //substring(1) elimina el carácter "#"
      var targetElement = document.getElementById(targetId);// busca elemento
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); //se verifica si se encuentra el elemento
      }
    }
  });
  