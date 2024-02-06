// obtener el id y su valor
function agregarTarea() {

    let inputList = document.getElementById("inputList");
    let ListValue = inputList.value;

    //validar si esta vacio emitir alerta 
    if (ListValue === '') {
        alert("ingresar tarea");
        return;
    }
    //obtener ul y crear nueva tarea 'li' 
    var taksList = document.getElementById("taksList");
    var newTask = document.createElement("li");
    newTask.textContent = ListValue;


    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newTask.appendChild(checkbox); //agregar checkbox a la nueva tarea
    taksList.appendChild(newTask); //agregar a la lista la nueva tarea

    inputList.value = '';
}