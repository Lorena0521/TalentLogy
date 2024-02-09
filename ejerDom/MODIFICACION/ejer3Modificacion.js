var elemento = document.getElementById("imagen");
        var button = document.getElementById("button");

        button.addEventListener('click', function () {
            elemento.src = '../../captura de pantalla/atributo1.jpeg';
            elemento.alt = 'nueva imagen';
        });