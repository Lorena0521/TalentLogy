var titulo = document.getElementById("titulo");
var text = document.getElementById("text");
var boton = document.getElementById("boton");

titulo.addEventListener('mouseover', function () {
    titulo.style.backgroundColor = 'yellow'
});
titulo.addEventListener('mouseout', function () {
    titulo.style.backgroundColor = '#ffff'
});

text.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'red'
});
text.addEventListener('mouseout', function () {
    text.style.backgroundColor = '#ffff'
});

boton.addEventListener('mouseover', function () {
    boton.style.backgroundColor = 'green'
});
boton.addEventListener('mouseout', function () {
    boton.style.backgroundColor = '#ffff'
});