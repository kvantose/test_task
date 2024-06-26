document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const completed = document.getElementById('completed-list')

    addButton.addEventListener('click', addTask);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = input.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            const parentList = listItem.parentNode;
            if (parentList) {
                parentList.removeChild(listItem);
            }
        });

        const completedButton = document.createElement('button');
        completedButton.className = 'completed-button';
        completedButton.textContent = 'Completed';
        completedButton.addEventListener('click', () => {
            completed.appendChild(listItem);
            deleteButton.style.display = 'none';
            completedButton.style.display = 'none';
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        listItem.appendChild(completedButton);
        todoList.appendChild(listItem);

    
        input.value = '';
        input.focus();
    }
});