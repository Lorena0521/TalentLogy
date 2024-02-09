document.addEventListener('click', function () {
    var change = document.querySelector(".container");
    change.classList.remove('change');
    change.classList.add('nuevaClase');

    change.style.backgroundColor = 'yellow';
    change.style.color = 'blue';
})