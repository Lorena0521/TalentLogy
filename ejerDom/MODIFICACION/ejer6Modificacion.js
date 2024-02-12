var btn = document.getElementById("button");

        btn.addEventListener('click', function () {
            var inputList = document.getElementById("inputList").value;
            console.log("el valor es: " + inputList);
            var lista = document.getElementById("lista");
            var nuevaLista = document.createElement("li");
            nuevaLista.textContent = (inputList);
            lista.appendChild(nuevaLista)

        });