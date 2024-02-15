document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll(".item");

    items.forEach(function (item) {
        item.addEventListener('click', function () {
//Verifica si el elemento clickeado (representado por this) ya tiene la clase "selected".
            if (this.classList.contains('selected')) {
                this.classList.remove('selected'); //al dar click nuevamente la clase se elimina
            } else {
                items.forEach(function (item) {
                    item.classList.contains('selected');
                })
                this.classList.add('selected');
            }

        })

    })
})
