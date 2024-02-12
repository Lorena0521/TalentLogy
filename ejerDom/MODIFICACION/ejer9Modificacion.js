var button = document.getElementById("button");

button.addEventListener('click', function(){
    var elemento = document.getElementById("element");
    elemento.style.width = '300px'
    elemento.style.height = '300px'
    elemento.style.backgroundColor = 'red';
    elemento.style.color = 'yellow';
    elemento.style.fontSize = 'larger';
    elemento.style.transition = '0.5s ease';
    elemento.style.border = 'solid 5px black'; 
})