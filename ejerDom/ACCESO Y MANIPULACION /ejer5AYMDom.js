var counter = document.getElementById("counter");
    var increase = document.getElementById("increase");
    var decrease = document.getElementById("decrease");
    var reset = document.getElementById("reset");

    var counterValue = 0;
    function updateCounter() {
      counter.textContent = counterValue; // accede al elemento html y asigna su propiedad al valor counterValue
    }

    //al hacer click en el boton el contador aumenta
    increase.addEventListener('click', function () {
      counterValue++;
      updateCounter();
    });

    // al hacer click en el boton decrease el contador disminuye
    decrease.addEventListener('click', function () {
      if (counterValue > 0) {
        counterValue--;
        updateCounter();
      }
    });

    // restablecer el contador
    reset.addEventListener('click', function () {
      counterValue = 0;
      updateCounter();
    });

    //  inicializar el contador
    updateCounter();
