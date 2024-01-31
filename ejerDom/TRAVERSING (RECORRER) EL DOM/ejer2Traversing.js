const addBtn = document.querySelector(".btn-primary");
const ul = document.getElementById("miLista");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const ProductoInput = document.getElementById("Producto");
    const MarcaInput = document.getElementById("Marca");
    const cantidadInput = document.getElementById("cantidad");

    const producto = ProductoInput.value;
    const marca = MarcaInput.value;
    const cantidad = cantidadInput.value;

    if (producto !== "" && marca !== "" && cantidad !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = `Producto: ${producto}- Marca: ${marca} - Cantidad: ${cantidad}`;
        
        li.appendChild(p);
        ul.appendChild(li);

        ProductoInput.value = "";
        MarcaInput.value = "";
        cantidadInput.value = "";
    }
});
