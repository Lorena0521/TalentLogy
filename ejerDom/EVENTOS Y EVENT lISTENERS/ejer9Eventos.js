function cambiarColor(event) {
    var tecla = event.key; // contendra el codigo de la tecla presionada

    switch (tecla) {
        case 'c':
            document.body.style.backgroundColor = 'green';
            break;
        case 'd':
            document.body.style.backgroundColor = 'red';
            break;
            case 'b':
            document.body.style.backgroundColor = 'yellow';
            break;
    }
}

function soltarTecla() {
    document.body.style.backgroundColor = 'white'; // al soltar tecla vuele al color original
}

document.addEventListener('keydown', cambiarColor);     
document.addEventListener('keyup', soltarTecla);
