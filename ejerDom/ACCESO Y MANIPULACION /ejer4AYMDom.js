document.getElementById('agregar').addEventListener('click', function (event) {
    event.preventDefault();
    var inputProducto = document.getElementById("producto");
    var inputPrecio = document.getElementById("precio");
    var inputCantidad = document.getElementById("cantidad");

    var producto = inputProducto.value;
    var precio = inputPrecio.value;
    var cantidad = inputCantidad.value;

    if (!producto || !precio || !cantidad) {
        alert("Por favor llenar todos los campos");
        return;
    }

    var table = document.querySelector('#table tbody');
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${producto}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td><button class="btn btn-danger delete-row-btn">Eliminar</button></td>
`;
    table.appendChild(newRow);

    inputProducto.value = '';
    inputPrecio.value = '';
    inputCantidad.value = '';

    var deleteBtn = newRow.querySelector('.delete-row-btn');
    deleteBtn.addEventListener('click', function () {
        newRow.remove();
    });

});