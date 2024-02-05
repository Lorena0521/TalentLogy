   //obtener la palabra ingresada en el input
   const handleClick = () => {

    const target = document.getElementById("searchInput").value;
/*           console.log(target.value)
*/        const pElement = document.getElementById("text");
    const pText = pElement.textContent;
    const search = new RegExp(target,'gi'); //expresion para buscar y resaltar la palabra ingresada en el imput
//'gi' indicador de busqueda
    if (pText.includes(target)) {
        //remplazar todas las ocurrencias palabra de búsqueda vs versión resaltada.
        const Resaltado = pText.replace(search,match => `<span class="highlight">${match}</span>`);
        pElement.innerHTML = Resaltado;
        console.log("fue encontrada la palabra:", target);
    }
    else {
        console.log("no fue encontrada la palabra:", target);
    }
}