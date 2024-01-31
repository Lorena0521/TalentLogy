const ColorElemento = document.querySelectorAll('.ChangeColor #ingresar, #registro, #otro, #salir');

ColorElemento.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        elemento.style.color = 'red';
        elemento.style.backgroundColor = 'white';

    });
    elemento.addEventListener('mouseout', () => {
        elemento.style.color = 'white';
        elemento.style.backgroundColor = 'rgba(38, 90, 250, 0.972)';

    })
})