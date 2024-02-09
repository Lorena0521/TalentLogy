var elemento = document.getElementById("elemento");
        var button = document.getElementById("button");

        button.addEventListener('click', function () {
            elemento.parentNode.removeChild(elemento)
        })