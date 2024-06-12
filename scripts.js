document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Reload page on heading click
    const heading = document.querySelector('.about');
    heading.addEventListener('click', () => {
        location.reload();
    });

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            taskList.innerHTML += `
                <li>
                    <span class="checkbox"></span>
                    <span>${taskText}</span>
                    <button class="remove">X</button>
                </li>`;
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('remove')) {
            target.parentElement.remove();
        } else if (target.classList.contains('checkbox')) {
            target.classList.toggle('checked');
            target.parentElement.classList.toggle('complete');
        }
    });
});
