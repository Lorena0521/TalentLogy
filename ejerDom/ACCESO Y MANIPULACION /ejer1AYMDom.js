let tasks = [];

function addTaskBtn() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        TaskList();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    TaskList();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    TaskList();
}

function TaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = task.completed ? 'completed' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const taskText = document.createTextNode(task.text);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteTask(index));

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}
