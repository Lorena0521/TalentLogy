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
//producto
    if (producto !== "" ) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = `Producto: ${producto}`;
        
        li.appendChild(p);
        ul.appendChild(li);

        ProductoInput.value = ""; 
    }
//marca
    if (marca !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = `Marca: ${marca}`;
        
        li.appendChild(p);
        ul.appendChild(li);

        MarcaInput.value = "";
    }
    //cantidad
    if (cantidad !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = `cantidad: ${cantidad}`;
        
        li.appendChild(p);
        ul.appendChild(li);
        
        cantidad.value = "";
       
    }
});
