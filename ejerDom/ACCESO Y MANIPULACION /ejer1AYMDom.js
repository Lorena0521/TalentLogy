document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addtaskbtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

function addTask(){
const taskText = taskInput.value.trim();
if (taskText !== ''){
const taskItem = document.getElementById(taskText);
taskList.appendChild(taskItem);
taskInput.value = '';
}  
}
})

function createTaskItem(taskText){
const taskItem = document.createElement('li');
taskItem.className = (taskItem);

const taskLabel = document.createElement('span');
taskLabel.textContent = ('taskText');

const completeBtn = document.createElement('button');
completeBtn.textContent = 'completar';
completeBtn.addEventListener('click', toggleComplete())


const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Eliminar';
deleteBtn.addEventListener('click', deleteTask())

taskText.appendChild(taskItem);
taskText.appendChild(completeBtn);
taskText.appendChild(deleteBtn);
}
return taskText;

function toggleComplete(){
const taskItem = this.closest('.taskItem');
taskItem.classList.toggle('completed')
}
function deleteTask(){
    const taskItem = this.closest('.taskItem');
    taskItem.removeChild(taskItem);
}



