const taskbox = document.getElementById('taskbox');
const addtaskbutton = document.getElementById('addtaskbutton');
const tasklist = document.getElementById('tasklist');

function addtask() {
    const enteredTask = taskbox.value.trim();

    if (enteredTask !== "") {
        const taskItem = document.createElement('div');
        taskItem.className = 'taskItem';

        const taskText = document.createElement('span');
        taskText.textContent = enteredTask;
        taskText.className = 'taskText';

        // ✅ Mark Completed Button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✅';
        completeBtn.className = 'completeBtn';
        completeBtn.addEventListener('click', function () {
            taskText.classList.toggle('completed');
        });

        // ✏️ Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'editBtn';
        editBtn.addEventListener('click', function() {
            const newText = prompt("Edit your task", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText.trim();
            }
        });

        // ❌ Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteBtn';
        deleteButton.addEventListener('click', function() {
            tasklist.removeChild(taskItem);
        });

        // Append the task elements to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(completeBtn);  // Use completeBtn here
        taskItem.appendChild(editBtn);      // Use editBtn here
        taskItem.appendChild(deleteButton); // Use deleteButton here

        // Add the task item to the list
        tasklist.appendChild(taskItem);

        // Clear the input field
        taskbox.value = "";
    } else {
        alert("Enter a task.");
    }
}

// Event listeners
addtaskbutton.addEventListener('click', addtask);
taskbox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addtask();
    }
});