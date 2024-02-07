document.querySelectorAll('a[href^="#"]').forEach(item =>{ // selecciona e itera sobre cada uno de los elementos seleccionados
    item.addEventListener('click', function(e){
        e.preventDefault()//previene el comportamiento predeterminado de los enlaces (navegación)
    console.log(e.type)
    const targetId = item.getAttribute('href');

    const targetElement = document.querySelector(targetId);

if(targetElement){
    //targetElement
    //console.log(targetElement);
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
    }else{
    console.log(`el resultado ${targetId}`);
}
    })

 })