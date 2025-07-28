function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText == '') {
        alert('please enter the task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;
    
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}