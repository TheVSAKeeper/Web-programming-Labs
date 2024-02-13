function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Введите текст дела.");
    return;
  }

  let taskList = document.createElement("ul");
  taskList.innerHTML = `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button class="delete-task-btn" onclick="deleteTask(this)">Удалить</button>
            </li>
        `;

  document.getElementById("lists").appendChild(taskList);
  taskInput.value = "";
}

let listId = 0;

function addList() {
  let taskInput = document.getElementById("task-list-input");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Введите название списка дела.");
    return;
  }

  let list = document.createElement("option");
  listId++;
  list.value = listId;
  list.id = `task-list-${listId}`;
  list.textContent = `[${listId}] ${task}`;

  document.getElementById("tasks-lists").appendChild(list);
}

function deleteTask(button) {
  let taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}

function deleteList(button) {
  let list = button.parentNode.parentNode;
  list.parentNode.removeChild(list);
}
