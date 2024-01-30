var button = document.getElementById("btn-success");
var btnInfo = document.getElementById("btn-info");
var btnDanger = document.getElementById("btn-danger");
var btnWarning = document.getElementById("btn-warning");


button.addEventListener('click', function () {
    ColorFondo();
})

function ColorFondo() {
    document.body.style.backgroundColor = "red";
}

btnInfo.addEventListener('click', function () {
    Fondo();
})

function Fondo() {
    document.body.style.backgroundColor = "blue";
}

btnDanger.addEventListener('click', function () {
    Color();
})

function Color() {
    document.body.style.backgroundColor = "yellow";
}

btnWarning.addEventListener('click', function () {
    boton();
})

function boton() {
    document.body.style.backgroundColor = "green";
}

